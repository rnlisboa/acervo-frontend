import styled from "styled-components";
import * as c from '../../config/default'
export const Content = styled.div`
    ${c.DescriptionFont}
    ${c.TitleFont}
`;

export const Container = styled.div`
    a{
        text-decoration: none;
        color: #000;
    }
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ImageContainer = styled.div`
    width: 90%;
`;

export const DetailContainer = styled.div`
     margin-top: 10px;
`;

export const TitleTimeContainer = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    @media (max-width: 1083px){
     flex-direction: column;
     
    }
`;

export const Image = styled.img`
    width: 100%;
`;

export const Title = styled.div`
    font-family: 'Mulish', sans-serif;
    font-weight: bold;
    
`;

export const Data = styled.small`
    font-family: 'Quicksand', sans-serif;
`;






