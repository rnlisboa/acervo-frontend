import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import HeaderGlobal from "../../components/Header/Header";
import NavigationBy from '../../components/NavigationBy/NavigationBy'
import { api } from '../../services/api'
import { GrDocumentText } from "react-icons/gr"
import { Container, Section, Description, DetailContent, Img, ImgContainer, Main, Tag, TagContainer, Title, ContainerDocuments, Table, TableHeader, TableRow, TableHeaderCell } from "./styled";
import { Formata } from '../../config/default';

function Detail() {
    const { id } = useParams()
    const [dado, setDado] = useState([])
    const [documentos, setDocumentos] = useState([])
    const [extensao, setExtensao] = useState('')
    const condicao = 'documento'

    useEffect(() => {
        async function getData() {
            const resp = await api.get('arquivos/show_one/', {
                params: {
                    q: id
                }
            })

            setExtensao(resp.data[0].extensao_arquivo)
            setDado(resp.data)

            const docs = await api.get('arquivos/show/', {
                params: {
                    q: 'documento',
                    page: 1
                }
            })

            setDocumentos(docs.data.results)
        }
        getData()
    }, [id])

    let obj = dado[0]
    return (
        <>
            <HeaderGlobal />



            <Main>
                {
                    extensao === condicao && <ContainerDocuments>


                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderCell>Tipo</TableHeaderCell>
                                    <TableHeaderCell>Título</TableHeaderCell>
                                    <TableHeaderCell>Autor</TableHeaderCell>
                                    <TableHeaderCell>Data</TableHeaderCell>
                                    <TableHeaderCell>Produtor</TableHeaderCell>
                                </TableRow>
                            </TableHeader>
                            {
                                documentos.map(doc => (
                                    <tbody key={documentos.indexOf(doc)}>

                                        <TableRow>

                                            <TableHeaderCell><GrDocumentText /> Documento</TableHeaderCell>



                                            <TableHeaderCell>
                                                <Link to={`/detalhes/${doc.id}`}>
                                                    {Formata(doc.titulo, 25)}
                                                </Link>
                                            </TableHeaderCell>


                                            <TableHeaderCell>{doc.autor !== '' ? Formata(doc.autor, 25) : '-'}</TableHeaderCell>

                                            <TableHeaderCell>{doc.data !== '' ? doc.data : '-'} </TableHeaderCell>
                                            <TableHeaderCell>
                                                {
                                                    doc.nome_produtor ? (
                                                        <Link to={`/relacionados/${doc.nome_produtor.slug}`}>
                                                            {doc.nome_produtor.nome_produtor ? Formata(doc.nome_produtor.nome_produtor, 22) : '-'}
                                                        </Link>
                                                    ) : '-'
                                                }

                                            </TableHeaderCell>

                                        </TableRow>

                                    </tbody>
                                ))
                            }
                        </Table>


                    </ContainerDocuments>
                }


                <Section>
                    <NavigationBy />
                    {dado.length > 0 &&
                        <Container>
                            <ImgContainer isDocument={extensao === condicao}>
                                {
                                    obj.extensao_arquivo === "documento" ? (
                                        <a href={`http://127.0.0.1:8000${obj.arquivo}`} target="_blank" rel="noreferrer">
                                            <Img src={`http://127.0.0.1:8000${obj.thumbnail}`} alt={obj.titulo} />
                                        </a>
                                    ) : (
                                        <Img src={`http://127.0.0.1:8000${obj.arquivo}`} alt={obj.titulo} />
                                    )
                                }

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



export default Detail;