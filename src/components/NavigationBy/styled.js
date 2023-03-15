import styled from "styled-components"
import * as c from '../../config/default'



export const Container = styled.div`
    ${c.TitleFont}
    ${c.DescriptionFont}
    width: 20%;
    min-width: 16.5rem;
    margin-right: 2rem;
    height: fit-content;
    ul{
        list-style: none;
    }
    @media (max-width: 818px){
        display: none;
    }
`;

export const Content = styled.div`

`;

export const ContentHeader = styled.div`
    
`;
export const Header = styled.header`
    
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
    align-items: center;
    padding: .3rem 0.2rem;
    font-size: 1.1rem;
    margin-bottom: .5rem;
`;

export const Elements = styled.div`
   
`

export const SeeMore = styled.div`
    margin-top: .5rem;
    font-family: 'Quicksand';
    font-size: .8rem;
    a{
        text-decoration: none;
        color: #5b5b5b;
        transition: all 300ms;
        font-weight: bold;
    }

    a:hover{
        color: #000;
        text-decoration: underline;
    }

`




