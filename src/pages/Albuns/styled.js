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
    padding: 3rem 0;
    font-size: 2rem;
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
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    width: 60%;
    border-left: 1px solid #001f3f36;
    border-right: 2px solid #001f3f36;
    @media (max-width: 1202px){
        width:100%;
    }
    
`;

export const Album = styled.div`
    width: 12rem;
    height: fit-content;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    border-radius:.3rem;
    -webkit-box-shadow: 6px 3px 14px -2px rgba(0,0,0,0.3);
    -moz-box-shadow: 6px 3px 14px -2px rgba(0,0,0,0.3);
    box-shadow: 6px 3px 14px -2px rgba(0,0,0,0.3);
    padding: .5rem;
`
export const Info = styled.div`
    height: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;
    font-family: "Quicksand", sans-serif;
`;


export const Title = styled.div` 
    font-size: .9rem;
    bottom: 3rem;
    left: 1rem;
    font-weight: bold;
`;



export const LengthAlbum = styled.small`
    
    bottom: 1rem;
    left: 1rem;

`

export const AlbumCover = styled.div`
    width: 100%;
    height: 10rem;
    border-radius: .1rem;
    margin-bottom: 1rem;
    overflow: hidden;
    transition: transform 300ms ease-in-out;

    img{
        cursor: pointer;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 300ms ease-in-out;
    }

    img:hover{
        transform: scale(1.01);
    }
`;






