import NavigationBy from "../../components/NavigationBy/NavigationBy";
import {
    Container,
    Objects,
    HeaderContainer,
    Content
} from "./styled";
import HeaderGlobal from "../../components/Header/Header";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import './style.css'
import { Link } from "react-router-dom";

function Documentos() {
    const [dados, setDados] = useState([])
    useEffect(() => {
        async function getData() {
            const resp = await api.get('show/', {
                params: {
                    q: 'documento',
                    page: 1
                }
            })
            setDados(resp.data.results)
        }
        getData()
    }, [])
    let objetos = dados
    Object.values(objetos)
    return (
        <>
            <HeaderGlobal />
            <Container>
                <HeaderContainer>
                    {
                        objetos.length > 0 ? (
                            <span>Exibindo {objetos.length} documentos encontrados.</span>
                        ) :
                            (
                                <span>Sem documentos publicados.</span>
                            )
                    }
                </HeaderContainer>
                <Content>
                    <NavigationBy />
                    <Objects >
                        {
                            objetos.map(obj => (
                                <Link to={`/detalhes/${obj.id}`}>
                                    <div key={obj.id} className="container">
                                        <img src={`http://127.0.0.1:8000${obj.thumbnail}`} alt={obj.titulo} />
                                        <div className="informations">
                                            <div className="title">{obj.titulo.length > 25 ? (obj.titulo.slice(0,22) + '...') : (obj.titulo)}</div>
                                            <small className="data">adicionado em: {obj.created_at.slice(8, 10)}/{obj.created_at.slice(5, 7)}/{obj.created_at.slice(0, 4)}</small>
                                        </div>
                                    </div>
                                </Link>

                            ))
                        }
                    </Objects>
                </Content>

            </Container>



        </>
    )
}

export default Documentos;