import NavigationBy from "../../components/NavigationBy/NavigationBy";
import Pagination from "../../components/Paginator/Paginator"
import {
    Container,
    Objects,
    HeaderContainer,
    Content,
    ContainerVideo
} from "./styled";
import { Formata } from "../../config/default";
import HeaderGlobal from "../../components/Header/Header";
import { api } from "../../services/api";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function Videos() {
    const navigate = useNavigate()
    const { page } = useParams()
    const location = useLocation()
    const arrayRoute = location.pathname.split('/')
    const currentRoute = arrayRoute[1]
    console.log(currentRoute)

    const [dados, setDados] = useState([])
    const [quantidade, setQuantidade] = useState(0)
    const [currentPage, setCurrentPage] = useState(Number(page));
    const pageSize = 9;


    const handlePageChange = (page) => {

        setCurrentPage(page);
        navigate(`/${currentRoute}/${page}`);
        window.history.pushState({ page }, '', `/${currentRoute}/${page}`);
    };

    useEffect(() => {
        async function getData() {
            const resp = await api.get('arquivos/show/', {
                params: {
                    q: 'video',
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
    let objetos = dados
    Object.values(objetos)
    return (
        <>
            <HeaderGlobal />
            <Container>
                <HeaderContainer>
                    {
                        objetos.length > 0 ? (
                            <span>{quantidade} vídeo{quantidade !== 1 ? 's' : ''} encontrado{quantidade !== 1 ? 's' : ''}.</span>
                        ) :
                            (
                                <span>Sem vídeos publicados.</span>
                            )
                    }
                </HeaderContainer>
                <Content>
                    <NavigationBy />
                    <Objects>
                        {
                            objetos.map(obj => (

                                <ContainerVideo key={obj.id} className="container">
                                    <Link to={`/video/${obj.id}`}>
                                        <img src={`http://127.0.0.1:8000${obj.thumbnail}`} alt={obj.titulo} />
                                        <div className="informations">
                                            <div className="title">
                                                {Formata(obj.titulo, 20)}
                                            </div>
                                        </div>
                                        <div className="duration">
                                            10:25
                                        </div>
                                    </Link>
                                </ContainerVideo>


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

            <Footer/>

        </>
    )
}

export default Videos;