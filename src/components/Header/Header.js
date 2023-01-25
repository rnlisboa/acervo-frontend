import React, { useState } from "react";
import { HeaderNav, LogoTitle, FormContainer, Form, Input, Button, Navigate, NavigateButton, NavigateItems, Square, Item, NavigateInsideContent } from "./styled";
import { FaAngleDown, FaAngleUp, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
    
    const [isNavActive, setisNavActive] = useState(false)

    function handleClick() {
        
        setisNavActive(!isNavActive)
    }
    return (
        <HeaderNav isActive={isNavActive}>

            <LogoTitle>

                <Link to={'/'}>
                    ACERVO ARQUIVÍSTICO
                </Link>

            </LogoTitle>

            <Navigate>
                <FormContainer>
                    <Form>
                        <Input />
                        <Button><FaSearch /></Button>
                    </Form>
                </FormContainer>

                <NavigateButton >
                    <NavigateInsideContent onClick={handleClick}>
                        <span >Navegar</span>
                        <span className="seta">
                            {
                                isNavActive ? (
                                    <FaAngleUp />
                                ) : (
                                    <FaAngleDown />
                                )
                            }
                        </span>
                    </NavigateInsideContent>
                    {isNavActive && <Square />}
                    {
                        isNavActive &&

                        <NavigateItems>
                            <Item>produtores</Item>
                            <Item>autores</Item>
                            <Item>instituições arquivísticas</Item>
                            <Item>recém publicados</Item>
                            <Item>entidades custodiadoras</Item>


                        </NavigateItems>
                    }

                </NavigateButton>

            </Navigate>

        </HeaderNav>
    )
}

export default Header