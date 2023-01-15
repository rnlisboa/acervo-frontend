import { Link } from 'react-router-dom';
import { Content, Container, Image, Title, Data, ImageContainer, DetailContainer, TitleTimeContainer } from './styled'

function ObjetsContainer({ objeto }) {
    
    return (
        <Content>
            <Container>
                <ImageContainer>
                    <Link to={'/detail/450'}>
                        <Image src={'https://via.placeholder.com/250x150.png/269fe6'} alt="ficticio" />
                    </Link>

                </ImageContainer>

                <DetailContainer>
                    <TitleTimeContainer>
                        <Title>
                            <Link to={'/detail/450'}>Oficina de Marcenaria</Link>

                        </Title>
                        <Data>
                            adicionado em: 25/05/1998
                        </Data>

                    </TitleTimeContainer>

                </DetailContainer>
            </Container>
        </Content>

    )
}

export default ObjetsContainer;