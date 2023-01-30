import React, {useState} from "react";
import { Container, OpenClose, SidebarContainer } from "./styled";
import SidebarItem from "../SidebarItem";
import {
    FaHome,
    FaImages,
    FaVideo,
    FaFileAlt,
    FaChevronLeft,
    FaChevronRight
} from 'react-icons/fa'
import { Link } from "react-router-dom";

function Sidebar() {
    const [isSidebarActive, setIsSidebarActive] = useState(false)
    return (
        <SidebarContainer isActive={isSidebarActive}>
            <Container>
                <Link to={'/'}>
                <SidebarItem Icon={FaHome} Text="Home" />
                </Link>
                <Link to={'/imagem'}>
                <SidebarItem Icon={FaImages} Text="Imagens" />
                </Link>
                <Link to={'/video'}>
                <SidebarItem Icon={FaVideo} Text="Vídeos" />
                </Link>
                <Link to={'/documento'}>
                <SidebarItem Icon={FaFileAlt} Text="Documentos" />
                </Link>
                
                
                
                <OpenClose onClick={()=>setIsSidebarActive(!isSidebarActive)} oncli>
                    {
                        isSidebarActive ? (
                            <FaChevronLeft/>
                        ) : (
                            <FaChevronRight/>
                        )
                    }
                </OpenClose>

            </Container>
        </SidebarContainer>

    )
}

export default Sidebar;