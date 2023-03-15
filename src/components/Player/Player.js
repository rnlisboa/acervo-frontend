import React, { useState, useRef } from 'react';
import { CiPlay1, CiPause1 } from "react-icons/ci"
import { VideoContainer, Video, PlayButton, ProgressBar, Progress, Time, ControllerContainer } from "./styled.js"



const VideoPlayer = ({ src }) => {
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const videoRef = useRef(null);
    console.log(Math.floor(duration))
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };



    const togglePlay = () => {
        if (playing) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setPlaying(!playing);
    };

    const onTimeUpdate = () => {
        setCurrentTime(videoRef.current.currentTime);
    };

    const onLoadedData = () => {
        setDuration(videoRef.current.duration);
    };

    const onProgressBarClick = (event) => {
        const offsetX = event.nativeEvent.offsetX;
        const newTime = (offsetX / event.target.offsetWidth) * duration;
        videoRef.current.currentTime = newTime;
    };

    return (
        <VideoContainer>
            <Video
                ref={videoRef}
                src={src}
                onTimeUpdate={onTimeUpdate}
                onLoadedData={onLoadedData}
                onClick={togglePlay}
            />
            
            <ProgressBar onClick={onProgressBarClick}>
                    <Progress style={{ width: `${(currentTime / duration) * 100}%` }} />
                </ProgressBar>
            <ControllerContainer>
            <PlayButton className='play' playing={playing} isPlaying={playing} onClick={togglePlay}>
                {
                    playing ? <CiPause1 /> : <CiPlay1 />
                }
            </PlayButton>
                <Time>{formatTime(currentTime)}</Time>
            </ControllerContainer>

        </VideoContainer>
    );
};

export default VideoPlayer;