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
    padding: 6rem 0;
    font-size: 3rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderContent = styled.div`
    width: 50%;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    
`;


export const Objects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    display: flex;
    align-items: flex-start;
    gap: .5rem;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    border-bottom: 1px solid #00000030;
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Mulish';
    gap: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    padding: .5rem;
    
`

export const Body = styled.div`
    
`

export const Author = styled.div`

`;

export const Title = styled.div`

`;

export const Data = styled.div`
    display: flex;
    font-family: "Quicksand", sans-serif;
    gap: 1rem;
    align-items: center;
    padding: .5rem;
`;

export const Description = styled.div`
    font-family: "Quicksand", sans-serif;
    padding: .5rem;
`;

export const Type = styled.div`
    font-family: "Quicksand", sans-serif;
    color: #000;
`;
export const Separator = styled.div`
    width: 1px;
    background-color: #00000030;
`



