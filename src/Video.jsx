import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./videofooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const HandelClick = () => {
    playing ? videoRef.current.pause() : videoRef.current.play();
    setPlaying(!playing);
  };
  return (
    <div className="video">
      <video
        className="video_player"
        onClick={HandelClick}
        ref={videoRef}
        src={url}
        loop
      ></video>
      <VideoFooter userChanel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
