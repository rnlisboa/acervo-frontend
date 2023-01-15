import ObjetsContainer from "../../components/ObjetsContainer";
import { Container } from "./styled";
import Sidebar from "../../components/Sidebar/Sidebar";

function Fotos() {
    return (
        <>
            <Sidebar/>
            <Container>
                <ObjetsContainer objeto={'fotos'} />
                <ObjetsContainer objeto={'fotos'} />
                <ObjetsContainer objeto={'fotos'} />
                <ObjetsContainer objeto={'fotos'} />
                <ObjetsContainer objeto={'fotos'} />
                <ObjetsContainer objeto={'fotos'} />
                <ObjetsContainer objeto={'fotos'} />
                <ObjetsContainer objeto={'fotos'} />
                <ObjetsContainer objeto={'fotos'} />
            </Container>
            

        </>
    )
}

export default Fotos;