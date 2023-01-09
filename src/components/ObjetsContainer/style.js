import styled from "styled-components";
import * as c from '../../config/default'
export const Content = styled.div`
    ${c.Quicksand}
    ${c.Mulish}
    width: 960px;
    margin: 0 auto;
    padding: 0 1rem;
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    padding: 0.5rem;
`;

export const ImageContainer = styled.div`
    width: 250px;
    height: 150px;
`;

export const DetailContainer = styled.div`
    padding-left: 10px;
`;

export const TitleTimeContainer = styled.div`
    padding-bottom: 10px;
    display: flex;
`;



export const Image = styled.img`
    width: 100%;
`;

export const Title = styled.div`
    padding-right:10px;
    font-family: 'Mulish', sans-serif;
    font-weight: bold;
    ::after{
        content: ' |';
    }
`;
export const Data = styled.div`
    font-family: 'Mulish', sans-serif;
`;
export const Institution = styled.div`
    font-size: 0.9rem;
    font-family: 'Mulish', sans-serif;
`;

export const DescriptionContainer = styled.div`
    font-family: 'Quicksand', sans-serif;
    width: 100%;
`;

export const Description = styled.p`
    max-width: 70ch; /* limita o tamanho do container a 150 caracteres */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

