import React, { useState, useEffect } from "react";
import NavigationBy from "../../components/NavigationBy/NavigationBy";
import Pagination from "../../components/Paginator/Paginator"
import { Container, Objects, HeaderContainer, Content, Item, Header, Body, Title, Author, Description, Data, Type, Separator, HeaderContent, Select, Option  } from "./styled";
import { Link, useParams } from "react-router-dom";
import HeaderGlobal from "../../components/Header/Header";
import { api } from "../../services/api";
import { Formata } from "../../config/default";

function Search() {
    
    const { query } = useParams()
    const [dados, setDados] = useState([])
    const [quantidade, setQuantidade] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 9;

    const [tipo, setTipo] = useState('');

    const handleSelect = (event) => {
        setTipo(event.target.value);
    }
    const handlePageChange = (page) => {
        setCurrentPage(page);
        
    };
    useEffect(() => {
        console.log('iniciando requisição')
        async function getData() {
            const resp = await api.get('arquivos/search/', {
                params: {
                    q: query,
                    tp: tipo,
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
    }, [query, currentPage, tipo])
    let objetos = Object.values(dados)
    return (
        <>
            <HeaderGlobal />
            <Container>
                <HeaderContainer>
                    <HeaderContent>
                        {
                            quantidade > 0 ? (
                                <span>Encontrados {quantidade} resultados para "{query}".</span>
                            ) :
                                (
                                    <span>Não encontramos uma publicação com o termo "{query}".</span>
                                )
                        }
                    </HeaderContent>
                </HeaderContainer>
                <Content>
                <Select value={tipo} onChange={handleSelect}>
                        <Option value="">Filtre por</Option>
                        <Option value="video">Vídeo</Option>
                        <Option value="imagem">Imagem</Option>
                        <Option value="documento">Documento</Option>
                    </Select>

                    <NavigationBy />
                    
                    <Objects className="objetcs">
                        {
                            objetos.map(obj => (
                                <Item key={obj.id}>
                                    <Header>
                                        <Link to={`/detalhes/${obj.id}`}>
                                            <Title>{obj.titulo}</Title>
                                        </Link>

                                        <Author>
                                            {obj.autor}
                                        </Author>


                                    </Header>
                                    <Body>
                                        <Description>
                                            {Formata(obj.descricao, 95)}
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
                {quantidade > 0 && <Pagination
                    totalSize={quantidade}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />}

            </Container>



        </>
    )
}

export default Search;