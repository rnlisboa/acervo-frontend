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
    justify-content: center;
    flex-direction: column;
    position: relative;

    a{
        text-decoration: none;
        width: 80%;
    }
`;

export const ItemContainer = styled.div`

`;

export const ItemIcon = styled.div`

`;

export const Item = styled.div`

`;

export const OpenClose = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: #00000050;
    position: absolute;
    top: 50%;
    right: -2.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg{
        color: #fff;
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
    
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 2rem;
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