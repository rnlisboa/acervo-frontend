import styled from "styled-components";
import * as c from '../../config/default'
export const HeaderNav = styled.header`
    ${c.RobotoFont}
    ${c.Nastaliq}
    ${c.HeaderLogo}
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: ${c.BackgroundHeader};
    padding: 1rem;

    @media (max-width: 1083px){
     flex-direction: column;
     align-items: center;
    }
`;




export const LogoTitle = styled.div`
    display: flex;
    align-items: center;
    height: 3rem;
    
    font-family: 'PT Serif', serif;
    font-size: 1.5rem;
    text-shadow: inset 0px -3px 2px rgba(10,10,10,0.69);

    a{
        text-decoration: none;
        color: #fff;
    }
    
`;

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;

`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 1.5rem;
    position: relative;
    outline: none;
    background-color: white;
    border-radius: 3px;
`;

export const Input = styled.input`
    width:100%;
    height: 100%;
    border: none;
    background:none;
    outline: none;
`;

export const Button = styled.button`
    background: none;
    border: none;
    position: absolute;
    right: 2px;
`;
