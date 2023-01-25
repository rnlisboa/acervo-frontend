import { Link } from 'react-router-dom';
import { Content, Container, Image, Title, Data, ImageContainer, DetailContainer, TitleTimeContainer } from './styled'

function ObjetsContainer({ objeto }) {
    
    return (
        <Content>
            <Container>
                <ImageContainer>
                    <Link to={'/detail/450'}>
                        <Image src={'https://3.bp.blogspot.com/--uwYCgiObKc/U1DieeO4roI/AAAAAAAABHo/VLRunFKu5XQ/s1600/navio.png'} alt="ficticio" />
                    </Link>
                    <DetailContainer className='detail-container'>
                    <TitleTimeContainer className='title-time'>
                        <Title>
                            <Link to={'/detail/450'}>Oficina de Marcenaria</Link>

                        </Title>
                        <Data>
                            adicionado em: 25/05/1998
                        </Data>

                    </TitleTimeContainer>

                </DetailContainer>
                </ImageContainer>

                
            </Container>
        </Content>

    )
}

export default ObjetsContainer;