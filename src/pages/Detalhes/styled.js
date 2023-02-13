import styled from "styled-components";
import * as c from "../../config/default"
export const Main = styled.div`
    padding: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Section = styled.section`
    width: 100%;
    display: flex;

`
export const Container = styled.div`
    ${c.DescriptionFont}
    ${c.TitleFont}
    max-width: 820px;
    
    height: fit-content;
    margin: 0 auto;
    border-left: 1px solid rgba(0,0,0,0.2);
    -webkit-box-shadow: 10px -1px 25px -6px rgba(0,0,0,0.32);
    -moz-box-shadow: 10px -1px 25px -6px rgba(0,0,0,0.32);
    box-shadow: 10px -1px 25px -6px rgba(0,0,0,0.32);
    background-color: #fff;
    padding: 1rem;
    a{
        text-decoration: none;
        color: ${c.OutlineButton};
        padding-right: 1rem;
        transition: all 300ms;
    }

    a:hover{
        font-weight: bold;
    }

    @media (max-width: 1083px){
        width:100%
    }
`;

export const ImgContainer = styled.div`
    width: 100%;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
   
    a{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Img = styled.img`
    width:60%;
    @media (max-width: 1083px){
        width:100%
    }
`;

export const Document = styled.img`
    width:60%;
    @media (max-width: 1083px){
        width:100%
    }
`;

export const Detail = styled.div`

`;

export const DetailContent = styled.div`
    display: flex;
    margin-bottom: 1rem;
    @media (max-width: 1083px){
        flex-direction: column;
    }
`;

export const Title = styled.div`
    width: 30%;
    @media (max-width: 1083px){
        width:100%;
        border:none;
    }
    font-family: 'Mulish', sans-serif;
    font-weight: bold;
    margin-right: 1rem;
    margin-bottom: 1rem;
    border-right: 1px solid rgba(0,0,0,0.3);
`;

export const Description = styled.div`
    font-family: 'Quicksand', sans-serif;
    width: 70%;

    
`;

export const TagContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

export const Tag = styled.div`
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    border: 1px solid #001F3F50;
    padding: 0.2rem .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.1rem;
    font-size: .7rem;
    background-color: #fff;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    transition: all 300ms;
    letter-spacing: 1px;
    box-shadow: 2px 2px 2px #001F3F50;
    a{
        text-decoration: none;
        color: #000;
    }
`;