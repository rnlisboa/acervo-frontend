import React, { useState } from "react";
import './style.css'
import { HeaderNav, LogoTitle, FormContainer, Form, Input, Button, Navigate, NavigateButton } from "./styled";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function HeaderGlobal() {
    const navigate = useNavigate()
    const [isNavActive, setisNavActive] = useState(false)
    const [query, setQuery] = useState('')

    function handleClick() {
        setisNavActive(!isNavActive)
        console.log(isNavActive)
    }

    function handleSubmit(e) {
        if (query.length === 0) {
            e.preventDefault()
            return
        }

        navigate(`/search/${query}`)
    }
    return (
        <HeaderNav>

            <LogoTitle>
                <Link to={'/'}>
                    <span className="acervo">ACERVO ARQUIVÍSTICO</span>
                </Link>
                <span className="ifrn">Instituto Federal do Rio Grande do Norte</span>
            </LogoTitle>

            <NavigateButton onClick={handleClick} isActive={isNavActive}>
                <div className={`top ${isNavActive ? 'true' : ''}`}></div>
                <div className={`center ${isNavActive ? 'true' : ''}`}></div>
                <div className={`bottom  ${isNavActive ? 'true' : ''}`}></div>
            </NavigateButton>
            <Navigate>
                <FormContainer>
                    <Form onSubmit={handleSubmit}>
                        <Input type={'text'} value={query} onChange={e => setQuery(e.target.value)} placeholder={'O que está procurando?'} />
                        <Button><FaSearch /></Button>
                    </Form>
                </FormContainer>
            </Navigate>
            <Sidebar isSidebarActive={isNavActive} />
        </HeaderNav>
    )
}

export default HeaderGlobal