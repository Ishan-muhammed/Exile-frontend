import React from "react";
import "./VideoSection.css";

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-box">
        <video
          className="video-player"
          controls
          autoPlay
          muted
          playsInline
        >
          <source
            src="https://www.dropbox.com/scl/fi/73iifgs7qepl1tf15tzc2/Launch-video.mp4?rlkey=nmxuf0s12swsw9no080i94ib3&raw=1"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
