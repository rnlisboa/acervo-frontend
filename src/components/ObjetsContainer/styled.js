import styled from "styled-components";
import * as c from '../../config/default'
export const Content = styled.div`
    ${c.DescriptionFont}
    ${c.TitleFont}
    width: 60%;
    margin: 0 auto;
    padding: 0 1rem;

    a{
        text-decoration: none;
        color: #000;
    }
    
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    padding: 0.5rem;
    @media (max-width: 1083px){
     flex-direction: column;
    }
`;

export const ImageContainer = styled.div`
    width: 250px;
    height: 150px;
`;

export const DetailContainer = styled.div`
    padding-left: 10px;
    @media (max-width: 1083px){
        padding-left: 0;
        margin-top: 10px;
    }
`;

export const TitleTimeContainer = styled.div`
    padding-bottom: 10px;
    display: flex;
    @media (max-width: 1083px){
     flex-direction: column;
     
    }
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

    @media (max-width: 1083px){
        ::after{
        content: '';
    }
    
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
    
`

