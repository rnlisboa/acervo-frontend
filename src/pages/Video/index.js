import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import HeaderGlobal from "../../components/Header/Header";
import NavigationBy from '../../components/NavigationBy/NavigationBy'
import { api } from '../../services/api'
import { Container, Section, Description, DetailContent, Img, ImgContainer, Main, Tag, TagContainer, Title } from "./styled";


function Video() {
    const { id } = useParams()
    const [dado, setDado] = useState([])

    useEffect(() => {
        async function getData() {
            const resp = await api.get('arquivos/show_one/', {
                params: {
                    q: id
                }
            })

            console.log(resp.dado)
            setDado(resp.data)


        }
        getData()
    }, [id])

    let obj = dado[0]
    return (
        <>
            <HeaderGlobal />



            <Main>



                <Section>
                    <NavigationBy />
                    {dado.length > 0 &&
                        <Container>
                            <ImgContainer>
                                <video width="640" height="360" controls>
                                    <source src={`http://127.0.0.1:8000${obj.arquivo}`} type="video/mp4" />
                                    <p>Seu navegador não suporta a tag de vídeo.</p>
                                </video>

                            </ImgContainer>
                            <TagContainer>

                                {
                                    dado.length > 0 &&
                                    obj.tags.map(tag => <Tag key={obj.tags.indexOf(tag)}>  <Link to={`/relacionados/${tag.slug}`}>{tag.name}</Link> </Tag>)
                                }


                            </TagContainer>
                            <DetailContent>
                                <Description>
                                    <h1>{obj.titulo}</h1>
                                </Description>
                            </DetailContent>
                            {
                                obj.nome_produtor && <DetailContent>
                                    <Title>
                                        Produtor
                                    </Title>
                                    <Description>
                                        {obj.nome_produtor.nome_produtor}
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
                                        {obj.autor}
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
                                    <Link to={`/relacionados/${obj.categorias.slug}`}>{obj.categorias.nome_categoria}</Link>
                                </Description>
                            </DetailContent>


                        </Container>}
                </Section>

            </Main>

        </>




    )
};



export default Video;