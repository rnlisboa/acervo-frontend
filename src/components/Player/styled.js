import styled from "styled-components";

export const VideoContainer = styled.div`
  position: relative;
  width: 50rem;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
`;

export const PlayButton = styled.button`
  width: 4rem;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
`;

export const ControllerContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
  background-color: #00000010;
  box-shadow: 2px 5px 10px #00000030;
  gap: .5rem;
  padding: .5rem 0;
  width: 100%;
  border-radius: .3rem;
`;

export const ProgressBar = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  height: .7rem;
  background-color: #ffffff;
`;

export const Progress = styled.div`
  height: 100%;
  background-color: red;
`;

export const Time = styled.div`
font-family: sans-serif;
bottom: 0;
left: 0;
width: 4rem;
height: 100%;
border-left: 1px solid #00000050;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
color: #000;
padding: 4px 0;
z-index: 100;
`;

