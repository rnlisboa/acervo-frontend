import styled from "styled-components";

export const SidebarContainer = styled.div`
    @media (min-width: 818px){
            display: none;
        }
    position: fixed;
    top: 0;
    transition: all 300ms;
    right: ${props => props.isActive ? '0' : '-20rem' };
    background-color: #fff;
    -webkit-box-shadow: 5px 2px 18px -3px rgba(0,0,0,0.75);
    -moz-box-shadow: 5px 2px 18px -3px rgba(0,0,0,0.75);
    box-shadow: 5px 2px 18px -3px rgba(0,0,0,0.75);
    height: 100%;
    z-index: 100;
`;

export const Container = styled.div`
    width: ${props => props.isActive ? '100%' : '20rem' };
    height: 100vh;
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    flex-direction: column;
    position: relative;

    a{
        text-decoration: none;
        width: 80%;
    }
`;





export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
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
