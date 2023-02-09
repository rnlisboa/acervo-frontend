import styled from "styled-components";
import * as c from "../../config/default"
export const Container = styled.div`
    ${c.TitleFont}
    ${c.DescriptionFont}
    display: flex;
    flex-direction: column;
    padding: 3rem;
`;

export const HeaderContainer = styled.div`
    font-family: "Quicksand", sans-serif;
    width: 100%;
    text-align: center;
    padding:3rem 0;
    font-size: 2rem;
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
    gap: 1rem;
    width: 50rem;
    border-left: 1px solid #001f3f36;
    border-right: 2px solid #001f3f36;
    @media (max-width: 1202px){
        width:100%;
    }
`;




