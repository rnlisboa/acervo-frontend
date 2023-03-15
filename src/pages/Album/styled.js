import styled from "styled-components";
import * as c from '../../config/default'
export const Container = styled.div`
    ${c.TitleFont}
    ${c.DescriptionFont}
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    @media (max-width: 1280px){
        flex-direction: column;
        height: 100%;
    }
`;
export const InfoAlbum = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    height: fit-content;
    width: 100%;
    color: #fff;
    height: 30vh;
    @media (max-width: 1280px){
        width: 100%;
        height: 50%;
        padding: 3rem 0 ;
    }
`;



export const TextData = styled.div`
    font-family: 'Quicksand', sans-serif;
`;

export const DesciptionAlbum = styled.p`
    padding: 0 1rem;
    text-shadow: 4px 3px 4px rgba(0,0,0,0.48);
    font-family: 'Quicksand', sans-serif;
`

export const DataEvent = styled.small`
padding: 0 1rem;
font-family: 'Quicksand', sans-serif;
`;

export const AlbumLength = styled.div`
padding: 0 1rem;
font-family: 'Quicksand', sans-serif;
`;




export const AlbumWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 70%;
    -webkit-box-shadow: 10px 6px 27px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 6px 27px -4px rgba(0,0,0,0.75);
  box-shadow: 10px 6px 27px -4px rgba(0,0,0,0.75);
    .left{
      left: 2rem;
    }

    .rigth{
      right: 2rem;
    }

    @media (max-width: 1280px){
        height: 100vh;
    }

    
`;

export const Header = styled.div`
position: absolute;
top: 0rem;
width: 100%;
height: fit-content;
display: flex;
padding: 1rem 0;
gap: 1rem;
align-items: center;
justify-content: space-between;
color: #fff;
z-index: 1000;
@media (max-width: 600px){
          flex-direction: column;
      }

`;

export const TitleAlbum = styled.div`
    padding: 0 1rem;
    font-size: 1.5rem;
    text-shadow: 4px 3px 4px rgba(0,0,0,0.48);
    font-family: 'Mulish', sans-serif;
    font-weight: 600;
    
`;

export const DataUploadAlbum = styled.div`
    padding: 0 1rem;
    display: flex;
    gap: 1rem;
    text-shadow: 4px 3px 4px rgba(0,0,0,0.48);
    font-family: 'Quicksand', sans-serif;
`;

export const IconData = styled.div`
    svg{
        color: #fff;
    }
`;

export const ImageList = styled.div`
  position: absolute;
  bottom: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  height: fit-content;
  list-style: none;
`;

export const List = styled.div`
  .principal{
    opacity: 1;
    transform: scale(1.3);
  }
`;

export const Image = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 0 0.625rem;
  box-shadow: 0 0 20px #000;
  /* opacity: ${(props) => (props.selected ? "1" : "0.5")};
  border: ${(props) => (props.selected ? "2px solid white" : "none")};
  border-radius: ${(props) => (props.selected ? "5px" : "0")}; */
  opacity: 0.5;
  cursor: pointer;
  border-radius: 0.3rem;
`;

export const SelectedImageWrapper = styled.div`
  position: absolute;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #000;
  object-fit: cover;
`;

export const SelectedImage = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 100%;
`;

export const Button = styled.div`
    cursor: pointer;
    height: 3rem;
    width:3rem;
    background-color:#00000030;
    -webkit-box-shadow: 10px 6px 27px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 6px 27px -4px rgba(0,0,0,0.75);
    box-shadow: 10px 6px 27px -4px rgba(0,0,0,0.75);
    border-radius: 50%;
    position:absolute;
    top:50%;
    z-index: 10;
    svg{
      color: #fff;
      font-size:2rem;
    }
    display:flex;
    align-items:center;
    justify-content:center;
    transition: all 300ms;
    :hover{
      
    background-color:#000000;
    }
    @media (max-width: 1108px){
          opacity: .5;
      }
`;

export const CurrentItem = styled.div`
    font-family: 'Quicksand', sans-serif;
    color: #fff;
    position: absolute;
    top: 2rem;
    left: 2rem;
    width: 8rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .3rem;
    background-color: #00000040;
`;

export const NoContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1{
    font-size: 400%;
    color: #fff;
    font-family: 'Quicksand', sans-serif;
  }
`;

export const Title = styled.div`
  font-weight: bold;
  margin-bottom: 1rem;
`

export const Desciption = styled.div`

`