import React, { useState, useEffect } from "react";
import NavigationBy from "../../components/NavigationBy/NavigationBy";
import Footer from '../../components/Footer/Footer'
import { Container, Objects, HeaderContainer, Content, HeaderContent, Album, Title, LengthAlbum, AlbumCover, Info, } from "./styled";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import HeaderGlobal from "../../components/Header/Header";
import { api } from "../../services/api";
import { Formata } from "../../config/default";
import Pagination from "../../components/Paginator/Paginator";





function Albums() {
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

    const trataDados = (albums) => {
        
        return albums
    }

    async function getData() {
        await api.get('fotos/list_album/').then(
            ({ data }) => {
                setDados(trataDados(data.results))
                setQuantidade(data.count)
            },
            (erro) => console.log(erro)
        )
    }

    function getStatePage(){
        const state = window.history.state;
        if (state && state.page) {
          setCurrentPage(state.page);
        }
    }

    useEffect(() => {

        getData()
        getStatePage()
    }, [currentPage])

    return (
        <>
            <HeaderGlobal />
            <Container>
                <HeaderContainer>
                    <HeaderContent>
                        {
                            quantidade > 0 ? (
                                <span>{quantidade} álbu{quantidade > 1 ? 'ns' : 'm'} encontrado{quantidade > 1 ? 's.' : '.'}</span>
                            ) :
                                (
                                    <span>Sem álbum publicado.</span>
                                )
                        }
                    </HeaderContent>
                </HeaderContainer>
                <Content>

                    <NavigationBy />

                    <Objects className="objetcs">
                        {
                            dados.map(obj => (
                                obj.thumbnail !== '' &&
                                <Album key={dados.indexOf(obj)}>
                                    <AlbumCover>
                                        <Link to={`/album/${obj.album.slug}`}>
                                        <img src={`http://127.0.0.1:8000${obj.thumbnail}`} alt="x" />
                                        </Link>
                                        
                                    </AlbumCover>
                                    <Info>
                                        <Title>
                                            {Formata(obj.album.titulo, 25)}
                                        </Title>

                                        <LengthAlbum>
                                            {obj.album.num_fotos > 0 ? (
                                                obj.album.num_fotos > 1 ? obj.album.num_fotos +  ' fotos' : obj.album.num_fotos +  ' foto'
                                            ) : 'Sem fotos' }
                                        </LengthAlbum>
                                    </Info>
                                </Album>
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

export default Albums;