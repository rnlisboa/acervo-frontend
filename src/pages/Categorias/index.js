import React, { useState, useEffect } from "react";
import NavigationBy from '../../components/NavigationBy/NavigationBy'
import Pagination from "../../components/Paginator/Paginator"
import { Container, Objects, Content, Item, Category, Count } from "./styled";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import HeaderGlobal from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { api } from "../../services/api";

function Categorias() {
    const navigate = useNavigate()
    const { page } = useParams()
    const location = useLocation()
    const arrayRoute = location.pathname.split('/')
    const currentRoute = arrayRoute[1]

    const [dados, setDados] = useState([])
    const [quantidade, setQuantidade] = useState(0)
    const [currentPage, setCurrentPage] = useState(Number(page));
    const pageSize = 9;

    const handlePageChange = (page) => {

        setCurrentPage(page);
        navigate(`/${currentRoute}/${page}`);
        window.history.pushState({ page }, '', `/${currentRoute}/${page}`);
    };

    function ordenarCount(lista) {
        lista.sort(function (a, b) {
            return b.objects_count - a.objects_count;
        });
        return lista;
    }


    useEffect(() => {
        async function getData() {
            const resp = await api.get('categorias/show_all', {
                params: {
                    page: currentPage
                }
            })
            setQuantidade(resp.data.count)
            console.log(resp.data.results)
            setDados(resp.data.results)
        }
        getData()
    }, [currentPage])
    let novoDados = ordenarCount(dados)
    return (
        <>
            <HeaderGlobal />
            <Container>

                <Content>

                    <NavigationBy />

                    <Objects className="objetcs">
                        {
                            novoDados.map(obj => (
                                <Item key={novoDados.indexOf(obj)}>
                                    <Link to={`/relacionados/${obj.slug}`}>
                                        <Category>{obj.nome_categoria}</Category>
                                        <Count>{obj.objects_count > 0 ? obj.objects_count > 1 ? obj.objects_count + ' arquívos.' : obj.objects_count + ' arquívo' : 'Sem arquívos.'} </Count>
                                    </Link>
                                </Item>

                            ))
                        }
                    </Objects>

                </Content>
                {quantidade > 0 && <Pagination
                    totalSize={quantidade}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />}

            </Container>

            <Footer />

        </>
    )
}

export default Categorias;