import React from "react";
import "./VideoSection.css";
// Import your video file here with the correct filename
import Launchvideo from "./Images/Launch2.mp4";

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-box">
        {/* Added 'controls' and removed 'autoplay', 'loop', and 'muted' */}
        <video className="video-player" controls playsInline>
          <source src={Launchvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;