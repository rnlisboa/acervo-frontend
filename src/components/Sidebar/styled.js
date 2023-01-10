import styled from "styled-components";

export const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    transition: all 300ms;
    left: ${props => props.isActive ? '0' : '-20rem' };
    background-color: #fff;
    -webkit-box-shadow: 5px 2px 18px -3px rgba(0,0,0,0.75);
    -moz-box-shadow: 5px 2px 18px -3px rgba(0,0,0,0.75);
    box-shadow: 5px 2px 18px -3px rgba(0,0,0,0.75);

`;

export const Container = styled.div`
    width: 20rem;
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
    right: -1.1rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg{
        color: #fff;
    }
`;