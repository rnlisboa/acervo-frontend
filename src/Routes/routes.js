import { Routes, Route } from "react-router-dom";
import Documentos from "../pages/Documentos";
import Image from "../pages/Imagens";
import Home from "../pages/Home";
import Videos from "../pages/Videos";
import Page404 from "../pages/Page404";
import Detail from "../pages/DetailObject/DetailObject";
import Related from "../pages/Related";
import Search from "../pages/Search";
function RoutesApp(){
    return(
        
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/imagens" element={<Image/>} />
                <Route path="/documentos" element={<Documentos/>}/>
                <Route path="/videos" element={<Videos/>}/>
                <Route path="/detail/:id" element={<Detail/>}/>
                <Route path="/related/:slug" element={<Related/>}/>
                <Route path="/search/:query" element={<Search/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        
    )
}

export default RoutesApp