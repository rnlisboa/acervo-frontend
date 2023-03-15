import { Routes, Route } from "react-router-dom";
import Documentos from "../pages/Documentos";
import Image from "../pages/Imagens";
import Home from "../pages/Home";
import Videos from "../pages/Videos";
import Page404 from "../pages/Page404";
import Detail from "../pages/Detalhes";
import Related from "../pages/Related";
import Search from "../pages/Search";
import Album from "../pages/Album";
import Albums from "../pages/Albuns";
import Categorias from "../pages/Categorias";
import Produtores from "../pages/produtores";
import Video from "../pages/Video";
function RoutesApp(){
    return(
        
            <Routes>
                <Route path="/" element = {<Home/>} />
                <Route path="/imagens/:page" element = {<Image/>} />
                <Route path="/documentos/:page" element = {<Documentos/>}/>
                <Route path="/videos/:page" element = {<Videos/>}/>
                <Route path="/video/:id" element = {<Video/>}/>
                <Route path="/albuns/:page" element={<Albums/>}/>
                <Route path="/album/:slug" element = {<Album/>} />
                <Route path="/detalhes/:id" element={<Detail/>}/>
                <Route path="/relacionados/:slug" element={<Related/>}/>
                <Route path="/categorias/:page" element={<Categorias/>}/>
                <Route path="/produtores/:page" element={<Produtores/>}/>
                <Route path="/search/:query" element={<Search/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        
    )
}

export default RoutesApp