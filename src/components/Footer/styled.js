import styled from 'styled-components'
import * as c from '../../config/default'

export const Container = styled.div`
    ${c.TitleFont}
    ${c.DescriptionFont}
    background-color: ${c.BackgroundHeader};
    width: 100%;
    height: fit-content;
    padding:3rem 0;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 6rem;
    gap: 1rem;
`;

export const FooterColumn = styled.div`
    color: #fff;
    width: 18rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`;

export const FooterHeader = styled.div`
    text-transform: uppercase;
    font-family: "Mulish";
`;

export const FooterList = styled.div`
    font-family: "Quicksand";
    list-style: none;
    padding: 0;
    cursor: pointer;
    @media (max-width: 1218px){
     margin-bottom: 2rem;
    }
`;

export const FooterItem = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    :hover{
        color: #339933;
    }
    span{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

