import styled from "styled-components";
import * as c from '../../config/default'
export const Content = styled.div`
    ${c.DescriptionFont}
    ${c.TitleFont}
`;

export const Container = styled.div`
    a{
        text-decoration: none;
        color: #fff;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 15rem;
`;

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    img{
        border-radius: 0.2rem;
    }
    transition: all 0.2s;
    :hover {
        transform: scale(1.01);
    }

`;

export const DetailContainer = styled.div`
    position: absolute;
    cursor: pointer;
    transition: all 3s;
    border-radius: 0.2rem;
    width: 100%;
    height: 6rem;
    bottom: 0;
    .title-time{
        position: absolute;
        bottom: -1rem;
    }
    margin-top: 10px;
    background: linear-gradient(to top, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%),
              radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0) 80%);
`;

export const TitleTimeContainer = styled.div`
    display: flex;
    padding-left: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    @media (max-width: 1083px){
     flex-direction: column;
     
    }
`;

export const Image = styled.img`
    width: 100%;
`;

export const Title = styled.div`
    font-family: 'Mulish', sans-serif;
    color: #fff;
    
`;

export const Data = styled.small`
    font-family: 'Quicksand', sans-serif;
    color: #fff;
`;






