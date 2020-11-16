import React from "react";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter({ userChanel, song, description }) {
  return (
    <div className="VideoFooter">
      <div className="VideoFooter_text">
        <h3>@{userChanel}</h3>
        <p>{description}</p>
        <div className="VideoFooter_ticker">
          <MusicNoteIcon className="VideoFooter_icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        src="http://pngimg.com/uploads/vinyl/vinyl_PNG96.png"
        alt="disk"
        className="VideoFooter_image"
      />
    </div>
  );
}

export default VideoFooter;
