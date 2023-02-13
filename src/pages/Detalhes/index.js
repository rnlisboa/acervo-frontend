import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import img from '../../assets/img/34.jpg'
import HeaderGlobal from "../../components/Header/Header";
import NavigationBy from '../../components/NavigationBy/NavigationBy'
import { api } from '../../services/api'
import { Container, Section, Description, DetailContent, Img, ImgContainer, Main, Tag, TagContainer, Title } from "./styled";

function Detail() {
    const { id } = useParams()
    const [dado, setDado] = useState([])
    useEffect(() => {
        async function getData() {
            const resp = await api.get('show_one/', {
                params: {
                    q: id
                }
            })
            setDado(resp.data)
        }
        getData()
    }, [])
    let obj = dado[0]
    return (
        <>
            <HeaderGlobal />

            <Main>
                <TagContainer>
                    <Tag>
                        {
                            dado.length > 0 && <Link to={`/related/tag`}>{obj.tags[0].name}</Link>
                        }

                    </Tag>
                </TagContainer>
                <Section>
                    <NavigationBy />
                    {dado.length > 0 &&
                        <Container>
                            <ImgContainer>
                                {
                                    obj.extensao_arquivo === "documento" ? (
                                        <a href={`http://127.0.0.1:8000${obj.arquivo}`} target="_blank" without rel="noreferrer">
                                            <Img src={`http://127.0.0.1:8000${obj.thumbnail}`} alt={obj.titulo} />
                                        </a>
                                    ) : (
                                        <Img src={`http://127.0.0.1:8000${obj.arquivo}`} alt={obj.titulo} />
                                    )
                                }

                            </ImgContainer>
                            {
                                obj.nome_produtor !== null && <DetailContent>
                                    <Title>
                                        Nome do produtor
                                    </Title>
                                    <Description>
                                        <Link to={`/related/teste`}>{obj.nome_produtor.nome_produtor}</Link>
                                    </Description>
                                </DetailContent>
                            }
                            <DetailContent>
                                <Title>
                                    Diretor
                                </Title>

                                <Description>
                                    {obj.nome_diretor}
                                </Description>
                            </DetailContent>

                            <DetailContent>
                                <Title>
                                    Título
                                </Title>

                                <Description>
                                    {obj.titulo}
                                </Description>
                            </DetailContent>
                            {
                                obj.data !== "" && <DetailContent>
                                    <Title>
                                        Data
                                    </Title>
                                    <Description>
                                        {obj.data}
                                    </Description>
                                </DetailContent>
                            }

                            {
                                obj.autor !== "" && <DetailContent>
                                    <Title>
                                        Autor
                                    </Title>
                                    <Description>
                                        <Link to={`/related/${obj.autor}`}>{obj.autor}</Link>
                                    </Description>
                                </DetailContent>
                            }

                            {
                                obj.dimensao_suporte !== "" && <DetailContent>
                                    <Title>
                                        Dimensão e suporte
                                    </Title>
                                    <Description>
                                        {obj.dimensao_suporte}
                                    </Description>
                                </DetailContent>
                            }

                            {
                                obj.entidade_custodiadora !== "" && <DetailContent>
                                    <Title>
                                        Entidade custodiadora
                                    </Title>

                                    <Description>
                                        {obj.entidade_custodiadora}
                                    </Description>
                                </DetailContent>
                            }

                            {
                                obj.localizacao_fisica !== "" && <DetailContent>
                                    <Title>
                                        Localização física
                                    </Title>

                                    <Description>
                                        {obj.localizacao_fisica}
                                    </Description>
                                </DetailContent>
                            }


                            {
                                obj.descricao !== "" && <DetailContent>
                                    <Title>
                                        Descrição do conteúdo
                                    </Title>

                                    <Description>
                                        {obj.descricao}
                                    </Description>
                                </DetailContent>
                            }


                            {
                                obj.nota_explicativa !== "" && <DetailContent>
                                    <Title>
                                        Nota explicativa
                                    </Title>

                                    <Description>
                                        {obj.nota_explicativa}
                                    </Description>
                                </DetailContent>
                            }


                            <DetailContent>
                                <Title>
                                    Categorias
                                </Title>

                                <Description>
                                    <Link to={'/related/oficinas'}>{obj.categorias.nome_categoria}</Link>
                                </Description>
                            </DetailContent>


                        </Container>}
                </Section>

            </Main>

        </>




    )
};



export default Detail;