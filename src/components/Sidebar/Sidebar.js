import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Container, SidebarContainer, FormContainer, Form, Input, Button, } from "./styled";
import SidebarItem from "../SidebarItem";

import { Link, useNavigate } from "react-router-dom";

function Sidebar({ isSidebarActive }) {
    const navigate = useNavigate()
    const [query, setQuery] = useState('')


    function handleSubmit(e) {
        e.preventDefault()
        if (query.length === 0) return

        navigate(`/search/${query}`)
    }

    return (
        <SidebarContainer isActive={isSidebarActive}>
            <Container>
                <FormContainer>
                    <Form onSubmit={handleSubmit}>
                        <Input type={'text'} value={query} onChange={e => setQuery(e.target.value)} placeholder={'O que está procurando?'} />
                        <Button><FaSearch /></Button>
                    </Form>
                </FormContainer>
                <Link to={'/'}>
                    <SidebarItem Text="Home" />
                </Link>
                <Link to={'/imagens/1'}>
                    <SidebarItem Text="Imagens" />
                </Link>
                <Link to={'/videos/1'}>
                    <SidebarItem Text="Vídeos" />
                </Link>
                <Link to={'/documentos/1'}>
                    <SidebarItem Text="Documentos" />
                </Link>
                <Link to={'/albuns/1'}>
                    <SidebarItem Text="Álbuns de Fotografias" />
                </Link>
                <Link to={'/recentes/1'}>
                    <SidebarItem Text={"Recém publicados"} />
                </Link>



            </Container>


        </SidebarContainer>

    )
}

export default Sidebar;