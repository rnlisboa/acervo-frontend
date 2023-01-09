import { Routes, Route } from "react-router-dom";
import Documentos from "../pages/Documentos";
import Fotos from "../pages/Fotos";
import Home from "../pages/Home";
import Videos from "../pages/Videos";
import Page404 from "../pages/Page404";
function RoutesApp(){
    return(
        
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/fotos" element={<Fotos/>} />
                <Route path="/documentos" element={<Documentos/>}/>
                <Route path="/videos" element={<Videos/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        
    )
}

export default RoutesApp