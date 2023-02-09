import { FaFacebook, FaInstagram, FaPhone, FaRegEnvelope, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { Container, FooterColumn, FooterHeader, FooterList, FooterItem } from "./styled"

export default function Footer() {
    return (
        <Container>
            <FooterColumn>
                <FooterHeader>
                    sobre o campus
                </FooterHeader>
                <FooterList>
                    <FooterItem>
                    portal.ifrn.edu.br
                    </FooterItem>
                    <FooterItem>
                        <small>Av. salgado filho, 1559</small>
                    </FooterItem>
                    <FooterItem>
                        <small>Tirol, Natal, RN - Brasil</small>
                    </FooterItem>
                    
                </FooterList>
            </FooterColumn>

            <FooterColumn>
                <FooterHeader>
                    administração do acervo
                </FooterHeader>
                <FooterList>
                    <FooterItem>
                        item
                    </FooterItem>
                    <FooterItem>
                        item
                    </FooterItem>
                    <FooterItem>
                        item
                    </FooterItem>
                </FooterList>
            </FooterColumn>
            <FooterColumn>
                <FooterHeader>
                    fale conosco
                </FooterHeader>
                <FooterList>
                    <FooterItem>
                        <span><FaRegEnvelope /></span>
                        <span>acervo.ifrn@gmail.com</span>
                    </FooterItem>
                    <FooterItem>
                        <span><FaPhone /></span>
                        <span>+55 (84) 2555-0155</span>
                    </FooterItem>
                    <FooterItem>
                        <span><FaWhatsapp /></span>
                        <span>+55 (84) 96531-0333</span>

                    </FooterItem>
                    


                </FooterList>
            </FooterColumn>
            <FooterColumn>
                <FooterHeader>
                    nossas redes
                </FooterHeader>
                <FooterList>
                    <FooterItem>
                        <span><FaInstagram /></span>
                        <span>@acervo</span>
                    </FooterItem>
                    <FooterItem>
                        <span><FaFacebook /></span>
                        <span>/acervoifrn</span>
                    </FooterItem>
                    <FooterItem>

                        <span><FaTwitter /></span>
                        <span>@acervo</span>
                    </FooterItem>

                </FooterList>
            </FooterColumn>
        </Container>
    )
}