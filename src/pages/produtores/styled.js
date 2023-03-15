import styled from "styled-components";
import * as c from "../../config/default"
export const Container = styled.div`
    ${c.TitleFont}
    display: flex;
    flex-direction: column;
    padding: 3rem;
`;


export const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    
`;


export const Objects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    width: 50rem;
    @media (max-width: 1202px){
        width:100%;
    }

    a{
        text-decoration: none;
        color: #000;
        transition: all 200ms;
    }

    a:hover{
        color: #00000080;
    }

    
`;


export const Item = styled.div`
width: 100%;
    a{
        display: flex;
        align-items: flex-start;
        gap: .5rem;
        justify-content: space-between;
        padding: 1rem;
        border-bottom: 1px solid #00000030;
        font-size: 1.5rem;
        font-family: 'Mulish';
    }
    
`



export const Producer = styled.span`

`;

export const Count = styled.span`

`;



