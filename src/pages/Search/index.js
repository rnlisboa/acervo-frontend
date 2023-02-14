import React, { useState, useEffect } from "react";
import NavigationBy from "../../components/NavigationBy/NavigationBy";
import { Container, Objects, HeaderContainer, Content, Item, Header, Body, Title, Author, Description, Data, Type, Separator, HeaderContent } from "./styled";
import { Link, useParams } from "react-router-dom";
import HeaderGlobal from "../../components/Header/Header";
import { api } from "../../services/api";

function Search() {
    const { query } = useParams()
    const [dados, setDados] = useState([])
    useEffect(() => {
        console.log('iniciando requisição')
        async function getData() {
            const resp = await api.get('search/', {
                params: {
                    q: query,
                    page: 1
                }
            })
            setDados(resp.data.results)
        }
        getData()
    }, [])
    let objetos = Object.values(dados)
    return (
        <>
            <HeaderGlobal />
            <Container>
                <HeaderContainer>
                    <HeaderContent>
                        {
                            objetos.length > 0 ? (
                                <span>Encontrados {objetos.length} resultados para "{query}".</span>
                            ) :
                                (
                                    <span>Não encontramos uma publicação com o termo "{query}"</span>
                                )
                        }
                    </HeaderContent>
                </HeaderContainer>
                <Content>

                    <NavigationBy />
                    
                    <Objects className="objetcs">
                        {
                            objetos.map(obj => (
                                <Item key={obj.id}>
                                    <Header>
                                        <Author>
                                            <Link to={`/detalhes/${obj.id}`}>
                                                {obj.autor}
                                            </Link>
                                        </Author>
                                        <Separator>|</Separator>
                                        <Link to={`/detalhes/${obj.id}`}>
                                            <Title>{obj.titulo}</Title>
                                        </Link>
                                    </Header>
                                    <Body>
                                        <Description>
                                            {obj.descricao.slice(0, 95) + '...'}
                                        </Description>
                                    </Body>
                                    <Data>
                                        <span>
                                            adicionado em: {obj.created_at.slice(8, 10)}/{obj.created_at.slice(5, 7)}/{obj.created_at.slice(0, 4)}
                                        </span>
                                        <Separator>|</Separator>
                                        <small>
                                            <Type>Tipo: {obj.extensao_arquivo}</Type>
                                        </small>
                                    </Data>
                                </Item>
                            ))
                        }

                    </Objects>

                </Content>

            </Container>



        </>
    )
}

export default Search;