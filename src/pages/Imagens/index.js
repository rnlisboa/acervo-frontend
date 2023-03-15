import NavigationBy from "../../components/NavigationBy/NavigationBy";
import Pagination from "../../components/Paginator/Paginator"
import {
    Container,
    Objects,
    HeaderContainer,
    Content,
    ContainerImage
} from "./styled";
import { Formata } from "../../config/default";
import HeaderGlobal from "../../components/Header/Header";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function Image() {
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
                    q: 'imagem',
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
                            <span>{quantidade} image{quantidade !== 1 ? 'ns' : 'm'} encontrada{quantidade !== 1 ? 's' : ''}.</span>
                        ) :
                            (
                                <span>Sem imagens publicadas.</span>
                            )
                    }
                </HeaderContainer>
                <Content>
                    <NavigationBy />
                    <Objects>
                        {
                            objetos.map(obj => (

                                <ContainerImage key={obj.id} className="container">
                                    <Link to={`/detalhes/${obj.id}`}>
                                        <img src={`http://127.0.0.1:8000${obj.thumbnail}`} alt={obj.titulo} />
                                        <div className="informations">
                                            <div className="title">
                                                {Formata(obj.titulo, 20)}
                                            </div>
                                            <small className="data">
                                                adicionado em:  {obj.created_at.slice(8, 10)}/{obj.created_at.slice(5, 7)}/{obj.created_at.slice(0, 4)}</small>
                                        </div>
                                    </Link>
                                </ContainerImage>


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

export default Image;