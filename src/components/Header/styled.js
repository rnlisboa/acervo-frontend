import styled from "styled-components";
import * as c from '../../config/default'
export const HeaderNav = styled.header`
    ${c.RobotoFont}
    ${c.Nastaliq}
    ${c.HeaderLogo}
    ${c.TitleFont}
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: ${c.BackgroundHeader};
    padding: 1rem 0;

`;




export const LogoTitle = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 3rem;
    
    font-family: 'PT Serif', serif;
    font-size: 1.5rem;
    text-shadow: inset 0px -3px 2px rgba(10,10,10,0.69);
    color: #fff;
    a{
        text-decoration: none;
        color: #fff;
    }

    .ifrn{
        font-size: 50%;
        text-transform: uppercase;
    }
    
`;

export const Navigate = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 818px){
        display: none;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    border: 3px solid #001F3F50;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 2.5rem;
    padding-left: .5rem;
    position: relative;
    outline: none;
    background-color: white;
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

export const NavigateButton = styled.div`
    cursor: pointer;
    position: relative;
    width: 3rem;
    height: 3rem;
    transition: all 300ms;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    z-index: 1000;
    @media (min-width: 818px){
        display: none;
    }

`;
