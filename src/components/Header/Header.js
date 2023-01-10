import React from "react";
import { HeaderNav, LogoTitle, FormContainer, Form, Input, Button } from "./styled";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
    return (
        <HeaderNav>

            <LogoTitle>

                <Link to={'/'}>
                    Acervo IFRN
                </Link>

            </LogoTitle>

            <FormContainer>
                <Form>
                    <Input />
                    <Button><FaSearch /></Button>
                </Form>
            </FormContainer>
        </HeaderNav>
    )
}

export default Header