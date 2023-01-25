import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container, Description, DetailContent, Img, ImgContainer, Main, Title } from "./styled";

function Detail() {
    return (
        <>
        <Sidebar/>
        <Main>
            <Container>
                <ImgContainer>
                    <Img src={'https://via.placeholder.com/1008x1331.png/269fe6'} alt="ficticio" />
                </ImgContainer>


                <DetailContent>
                    <Title>
                        Nome do produtor
                    </Title>

                    <Description>
                        <Link to={'/related/escola-industrial-de-natal'}>Escola Industrial de Natal</Link>

                    </Description>
                </DetailContent>

                <DetailContent>
                    <Title>
                        Diretor
                    </Title>

                    <Description>
                        Jeremias Pinheiro
                    </Description>
                </DetailContent>

                <DetailContent>
                    <Title>
                        Título
                    </Title>

                    <Description>
                        Oficina de Marcenaria
                    </Description>
                </DetailContent>

                <DetailContent>
                    <Title>
                        Data
                    </Title>

                    <Description>
                        1942
                    </Description>
                </DetailContent>

                <DetailContent>
                    <Title>
                        Autor
                    </Title>

                    <Description>
                        <Link to={'/related/jaecy'}>Jaecy</Link>

                    </Description>
                </DetailContent>

                <DetailContent>
                    <Title>
                        Dimensão e suporte
                    </Title>

                    <Description>
                        Dimensão e suporte	Papel fotográfico. Estado de conservação: suporte frágil, imagem esmaecida e manchada. Cromia: Monocromático (P&B). Dimensões: 23 x 17 cm (largura x altura). Possui 2 exemplares
                    </Description>
                </DetailContent>

                <DetailContent>
                    <Title>
                        Entidade custodiadora
                    </Title>

                    <Description>
                        Entidade custodiadora	Arquivo do IFRN/Campus Natal-Central
                    </Description>
                </DetailContent>

                <DetailContent>
                    <Title>
                        Localização física
                    </Title>

                    <Description>
                        Localização física	Gaveteiro 01, pasta suspensa OFICINAS, envelope n.º 03
                    </Description>
                </DetailContent>

                <DetailContent>
                    <Title>
                        Descrição do conteúdo
                    </Title>

                    <Description>
                        O ensino iniciava-se com o aprendizado das técnicas básicas de trabalho em madeira,
                        como o uso de ferramentas manuais, a preparação de
                        materiais e a realização de medições e marcações. Em seguida, o aprendiz era
                        incentivado a praticar a execução de trabalhos simples, como o corte e encaixe de peças de
                        madeira, e a realização de reparos em móveis e outros objetos de madeira. Conforme o aprendizado
                        progredia, ele poderia ser encarregado de projetos mais complexos, como a construção de
                        móveis e estruturas de madeira. O ofício de carpinteiro e marceneiro exigia muita
                        habilidade manual e atenção aos detalhes, e os aprendizes eram ensinados a trabalhar
                        de maneira precisa e cuidadosa para produzir trabalhos de qualidade.
                    </Description>
                </DetailContent>

                <DetailContent>
                    <Title>
                        Nota explicativa
                    </Title>

                    <Description>

                    </Description>
                </DetailContent>

                <DetailContent>
                    <Title>
                        Categorias
                    </Title>

                    <Description>
                        <Link to={'/related/oficinas'}>Oficinas</Link>
                        <Link to={'/related/oficios'}>Ofícios</Link>
                        <Link to={'/related/mestres'}>Mestres</Link>
                        <Link to={'/related/contramestres'}>Contramestres</Link>

                    </Description>
                </DetailContent>


            </Container>
        </Main>

        </>
        



    )
};



export default Detail;