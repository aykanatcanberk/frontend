import React from "react";
import BackgroundVideo from "./background.mp4"; // Import the video
import "./Background.css"; // Import the corresponding CSS

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src={BackgroundVideo} type="video/mp4" />
        {/* Add additional <source> tags for other video formats */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
