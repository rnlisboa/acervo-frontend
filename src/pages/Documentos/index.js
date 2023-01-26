import Sidebar from "../../components/Sidebar/Sidebar";
import NavigationBy from "../../components/NavigationBy/NavigationBy";
import ObjetsContainer from "../../components/ObjetsContainer";
import {Container, HeaderContainer, Content, Objects} from './styled'
function Documentos(){
    return (
        <>
        <Sidebar/>
        <Container>
                <HeaderContainer>
                    Exibindo 278 documentos encontrados.
                </HeaderContainer>
                <Content>
                    
                    <Objects className="objetcs">
                        <ObjetsContainer objeto={'fotos'} />
                        <ObjetsContainer objeto={'fotos'} />
                        <ObjetsContainer objeto={'fotos'} />
                        <ObjetsContainer objeto={'fotos'} />
                        <ObjetsContainer objeto={'fotos'} />
                        <ObjetsContainer objeto={'fotos'} />
                        <ObjetsContainer objeto={'fotos'} />
                        <ObjetsContainer objeto={'fotos'} />
                        <ObjetsContainer objeto={'fotos'} />
                    </Objects>
                    <NavigationBy/>
                </Content>

            </Container>
        </>
    )
}

export default Documentos;