import React, { useState, useEffect } from "react";
import NavigationBy from '../../components/NavigationBy/NavigationBy'
import Pagination from "../../components/Paginator/Paginator"
import { Container, Objects, Content, Item, Count, Producer } from "./styled";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import HeaderGlobal from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { api } from "../../services/api";

function Produtores() {
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
            const resp = await api.get('produtores/show_all', {
                params: {
                    page: currentPage
                }
            })
            setQuantidade(resp.data.count)
            setDados(resp.data.results)
        }
        getData()

        const state = window.history.state;
        if (state && state.page) {
            setCurrentPage(state.page);
        }
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
                                        <Producer>{obj.nome_produtor}</Producer>
                                        <Count>{obj.objects_count > 0 ? obj.objects_count > 1 ? obj.objects_count + ' arqu??vos.' : obj.objects_count + ' arqu??vo' : 'Sem arqu??vos.'}</Count>
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

export default Produtores;