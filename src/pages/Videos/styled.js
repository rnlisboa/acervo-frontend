import styled from "styled-components";
import * as c from "../../config/default"
export const Container = styled.div`
    ${c.TitleFont}
    ${c.DescriptionFont}
    display: flex;
    flex-direction: column;
    padding: 3rem;
    align-items: center;
`;

export const HeaderContainer = styled.div`
    font-family: "Quicksand", sans-serif;
    width: 100%;
    text-align: center;
    padding:3rem 0;
    font-size: 2rem;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`;


export const Objects = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 60%;
    border-left: 1px solid #001f3f36;
    border-right: 2px solid #001f3f36;
    @media (max-width: 1202px){
        width:100%;
    }
`;

export const ContainerVideo = styled.div`
  transition: transform 300ms ease-in-out;
  width: 15rem;
  height: 8rem;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 300ms ease-in-out;
  }

  &:hover img {
    transform: scale(1.01);
  }

  .informations {
    width: 95%;
    height: 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: .5rem;
    padding-left: 1rem;
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      radial-gradient(
        ellipse at center,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0) 80%
      );
    color: #fff;

    .title {
      font-family: 'Mulish', sans-serif;
      font-size: 1rem;
      text-shadow: 5px 4px 4px rgba(0, 0, 0, 0.88);
    }
  }

  .duration {
    position: absolute;
    bottom: .5rem;
    right: .5rem;
    color: #fff;
    width: 2.5rem;
    height: 1.5rem;
    font-size: .7rem;
    background-color: #00000090;
    font-weight: bold;
    font-family: sans-serif;
    border-radius: .3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    width: fit-content;
  }
`;


