import styled from "styled-components";
import * as c from "../../config/default"
export const Container = styled.div`
    ${c.TitleFont}
    ${c.DescriptionFont}
    display: flex;
    flex-direction: column;
`;

export const HeaderContainer = styled.div`
    font-family: "Quicksand", sans-serif;
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    
`;


export const Objects = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    gap: 1rem;
    width: 50rem;
    @media (max-width: 1202px){
        width:100%;
    }
`;




