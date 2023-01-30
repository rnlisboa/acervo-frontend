import ObjetsContainer from "../../components/ObjetsContainer";
import NavigationBy from "../../components/NavigationBy/NavigationBy";
import { Container, Objects, HeaderContainer, Content } from "./styled";
import img from '../../assets/img/34.jpg'
import Sidebar from "../../components/Sidebar/Sidebar";

function Image() {
    return (
        <>
            <Sidebar />
            <Container>
                <HeaderContainer>
                    Exibindo 2154 imagens encontradas.
                </HeaderContainer>
                <Content>
                    
                    <Objects className="objetcs">
                        <ObjetsContainer objeto={img} />
                        <ObjetsContainer objeto={img} />
                        <ObjetsContainer objeto={img} />
                        <ObjetsContainer objeto={img} />
                        <ObjetsContainer objeto={img} />
                        <ObjetsContainer objeto={img} />
                        <ObjetsContainer objeto={img} />
                        <ObjetsContainer objeto={img} />
                        <ObjetsContainer objeto={img} />
                        <ObjetsContainer objeto={img} />
                        <ObjetsContainer objeto={img} />
                        <ObjetsContainer objeto={img} />
                    </Objects>
                    <NavigationBy/>
                </Content>

            </Container>



        </>
    )
}

export default Image;