import NavigationBy from "../../components/NavigationBy/NavigationBy";
import ObjetsContainer from "../../components/ObjetsContainer";
import img from '../../assets/img/memorial-thumb.png'
import {Container, HeaderContainer, Content, Objects} from './styled'
import HeaderGlobal from "../../components/Header/Header";
import BasicDoc from "../../components/Paginator/Paginator";

     
function Documentos(){
    
    return (
        <>
        <HeaderGlobal/>
        <Container>
                <HeaderContainer>
                    Exibindo 278 documentos encontrados.
                </HeaderContainer>
                <Content>
                <NavigationBy/>
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
                    </Objects>
                    
                </Content>
                <BasicDoc/>
            </Container>
        </>
    )
}

export default Documentos;