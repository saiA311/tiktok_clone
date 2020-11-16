import "./App.css";
import React, { useEffect, useState } from "react";
import Video from "./Video";
import axios from "./axios.js";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("/data");
      setVideos(response.data);
    };
    fetchdata();
  }, []);

  return (
    <div className="app">
      <div className="app_video">
        {videos.map((video) => (
          <Video
            key={video._id}
            url={video.url}
            channel={video.channel}
            description={video.description}
            song={video.song}
            likes={Number(video.likes)}
            shares={video.shares}
            messages={video.messages}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
