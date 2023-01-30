import { Link } from 'react-router-dom';

import { Content, Container, Image, Title, Data, ImageContainer, DetailContainer, TitleTimeContainer } from './styled'

function ObjetsContainer({ objeto }) {
    const date = new Date()
    return (
        <Content>
            <Container>
                <Link to={'/detail/450'}>
                    <ImageContainer>

                        <Image src={objeto} alt="ficticio" />

                        <DetailContainer className='detail-container'>
                            <TitleTimeContainer className='title-time'>
                                <Title>
                                    Oficina de Marcenaria
                                </Title>
                                <Data>
                                    <small>
                                    adicionado em: {`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}
                                    </small>
                                    
                                    
                                </Data>

                            </TitleTimeContainer>
                        </DetailContainer>
                    </ImageContainer>
                </Link>

            </Container>
        </Content>

    )
}

export default ObjetsContainer;