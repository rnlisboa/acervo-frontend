import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import img from '../../assets/img/34.jpg'
import HeaderGlobal from "../../components/Header/Header";
import NavigationBy from '../../components/NavigationBy/NavigationBy'
import { api } from '../../services/api'
import { Container, Description, DetailContent, Img, ImgContainer, Main, Title } from "./styled";

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
            console.log(1, dado)
        }

        getData()
    }, [])
    let obj = dado[0]
    return (
        <>
            <HeaderGlobal />
            <Main>
                <NavigationBy />
                <Container>
                    <ImgContainer>
                        <Img src={`http://127.0.0.1:8000${obj.arquivo}`} alt={obj.titulo} />
                    </ImgContainer>


                    <DetailContent>
                        <Title>
                            Nome do produtor
                        </Title>

                        <Description>
                            <Link to={`/related/${obj.slug}`}>{obj.nome_produtor}</Link>

                        </Description>
                    </DetailContent>

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

                    <DetailContent>
                        <Title>
                            Data
                        </Title>

                        <Description>
                            {obj.data}
                        </Description>
                    </DetailContent>

                    <DetailContent>
                        <Title>
                            Autor
                        </Title>

                        <Description>
                            <Link to={'/related/jaecy'}>{obj.autor}</Link>

                        </Description>
                    </DetailContent>

                    <DetailContent>
                        <Title>
                            Dimensão e suporte
                        </Title>

                        <Description>
                            {obj.dimensao_suporte}
                        </Description>
                    </DetailContent>

                    <DetailContent>
                        <Title>
                            Entidade custodiadora
                        </Title>

                        <Description>
                            {obj.entidade_curstodiadora}
                        </Description>
                    </DetailContent>

                    <DetailContent>
                        <Title>
                            Localização física
                        </Title>

                        <Description>
                            {obj.localizacao_fisica}
                        </Description>
                    </DetailContent>

                    <DetailContent>
                        <Title>
                            Descrição do conteúdo
                        </Title>

                        <Description>
                            {obj.descricao}
                        </Description>
                    </DetailContent>

                    <DetailContent>
                        <Title>
                            Nota explicativa
                        </Title>

                        <Description>
                            {obj.nota_explicativa}
                        </Description>
                    </DetailContent>

                    <DetailContent>
                        <Title>
                            Categorias
                        </Title>

                        <Description>
                            <Link to={'/related/oficinas'}>{obj.categorias}</Link>


                        </Description>
                    </DetailContent>


                </Container>
            </Main>

        </>




    )
};



export default Detail;