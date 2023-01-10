import { Content, Container, Image, Institution, Title, Description, DescriptionContainer, Data, ImageContainer, DetailContainer, TitleTimeContainer } from './styled'

function ObjetsContainer({ objeto }) {
    return (
        <Content>
            <Container>
                <ImageContainer>
                    <Image src={'https://via.placeholder.com/250x150.png/269fe6'} alt="ficticio" />
                </ImageContainer>

                <DetailContainer>
                    <TitleTimeContainer>
                        <Title>
                            Oficina de Marcenaria
                        </Title>
                        <Data>
                            adicionado em: 25/05/1998
                        </Data>

                    </TitleTimeContainer>
                    <Institution>
                        Escola Industrial de Natal
                    </Institution>
                    <DescriptionContainer>
                        <Description>
                            O ofício de carpinteiro e marceneiro tinham as mesmas oficinas
                            para o aprendizado do ofício. Tinha como mestre artífice e
                            professor Juvenal José da Reza, responsável pelo ofício. Iniciava-se o ensino...
                        </Description>
                    </DescriptionContainer>


                </DetailContainer>
            </Container>
        </Content>

    )
}

export default ObjetsContainer;