import React, { useState } from "react";
import FavoritesIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

function VideoSidebar({ likes, shares, messages }) {
  const [liked, setliked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar_button">
        {liked ? (
          <FavoritesIcon
            fontSize="large"
            onClick={() => {
              setliked(!liked);
            }}
          />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={() => {
              setliked(!liked);
            }}
          />
        )}

        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar_button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar_button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
