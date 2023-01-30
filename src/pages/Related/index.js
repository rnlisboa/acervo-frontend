import NavigationBy from "../../components/NavigationBy/NavigationBy";
import { Container, Objects, HeaderContainer, Content, Item, Header, Body, Title, Author, Description, Data, Type, Separator } from "./styled";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

function Related() {
    const d = new Date()
    const descri = `
        O ensino iniciava-se com o aprendizado das técnicas básicas de trabalho em madeira,
        como o uso de ferramentas manuais, a preparação de
        materiais e a realização de medições e marcações. Em seguida, o aprendiz era
        incentivado a praticar a execução de trabalhos simples, como o corte e encaixe de peças de
        madeira, e a realização de reparos em móveis e outros objetos de madeira. Conforme o aprendizado
        progredia, ele poderia ser encarregado de projetos mais complexos, como a construção de
        móveis e estruturas de madeira. O ofício de carpinteiro e marceneiro exigia muita
        habilidade manual e atenção aos detalhes, e os aprendizes eram ensinados a trabalhar
        de maneira precisa e cuidadosa para produzir trabalhos de qualidade.
    `
    return (
        <>
            <Sidebar />
            <Container>
                <HeaderContainer>
                    Exibindo 2154 objetos encontrados.
                </HeaderContainer>
                <Content>

                    <Objects className="objetcs">
                        <Item>

                            <Header>
                                <Author>
                                    <Link to={'/detail/35'}>Jaecy</Link>
                                </Author>
                                <Separator>|</Separator>
                                <Link to={'/detail/35'}>
                                    <Title>Oficina de Marcenaria</Title>
                                </Link>
                            </Header>
                            <Body>
                                <Description>
                                    {descri.slice(0, 100) + '...'}
                                </Description>
                            </Body>
                            <Data>
                                <span>
                                    publicado em: {`${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`}
                                </span>
                                <Separator>|</Separator>
                                <small>
                                    <Type>Imagem</Type>
                                </small>
                            </Data>
                        </Item>
                        <Item>

                            <Header>
                                <Author>
                                    <Link to={'/detail/35'}>Jaecy</Link>
                                </Author>
                                <Separator>|</Separator>
                                <Link to={'/detail/35'}>
                                    <Title>Oficina de Marcenaria</Title>
                                </Link>
                            </Header>
                            <Body>
                                <Description>
                                    {descri.slice(0, 100) + '...'}
                                </Description>
                            </Body>
                            <Data>
                                <span>
                                    publicado em: {`${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`}
                                </span>
                                <Separator>|</Separator>
                                <small>
                                    <Type>Imagem</Type>
                                </small>
                            </Data>
                        </Item>
                        <Item>

                            <Header>
                                <Author>
                                    <Link to={'/detail/35'}>Jaecy</Link>
                                </Author>
                                <Separator>|</Separator>
                                <Link to={'/detail/35'}>
                                    <Title>Oficina de Marcenaria</Title>
                                </Link>
                            </Header>
                            <Body>
                                <Description>
                                    {descri.slice(0, 100) + '...'}
                                </Description>
                            </Body>
                            <Data>
                                <span>
                                    publicado em: {`${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`}
                                </span>
                                <Separator>|</Separator>
                                <small>
                                    <Type>Imagem</Type>
                                </small>
                            </Data>
                        </Item>
                    </Objects>
                    <NavigationBy />
                </Content>

            </Container>



        </>
    )
}

export default Related;