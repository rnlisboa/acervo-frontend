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


export const ContainerDoc = styled.div`
  transition: transform 300ms ease-in-out;
  width: 12rem;
  height: 12rem;
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
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0 1rem 0;
    position: absolute;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      radial-gradient(
        ellipse at center,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0) 80%
      );
    color: #fff;

    .title {
      font-family: 'Mulish', sans-serif;
      text-shadow: 5px 4px 4px rgba(0, 0, 0, 0.88);
    }

    .data {
      font-family: 'Quicksand', sans-serif;
    }
  }

  button {
    width: fit-content;
  }
`;
