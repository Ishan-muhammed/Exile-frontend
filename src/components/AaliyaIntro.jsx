import React, { useRef, useState } from "react";
import "./AaliyaIntro.css";
import { Play, Pause } from "lucide-react";
import aliyahImage from "./Images/Aliayim.png"; // ✅ Image of Aliyah
import aliyahSpeaking from "./Images/aliay sspeaking.wav"; // ✅ Audio file
import { useNavigate } from "react-router-dom"; // ✅ For navigation

const AaliyaIntro = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate(); // ✅ Hook for navigation

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const goToFeatures = () => {
    navigate("/features"); // ✅ Navigate to Newproduct.jsx route
  };

  return (
    <section className="aaliya-section">
      {/* ✅ Heading with spacing */}
      <h2 className="aaliya-heading">Meet our Aliyah</h2>

      <div className="aaliya-box">
        <div className="aaliya-text">
          <h1>
            I’m <span className="highlight">Aaliya.</span>
          </h1>
          <p>your AI receptionist</p>

          {/* ✅ Audio player */}
          <div className="audio-player">
            <button className="play-button" onClick={toggleAudio}>
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <audio
              ref={audioRef}
              src={aliyahSpeaking}
              onEnded={() => setIsPlaying(false)}
            />
            <div className="audio-bar">
              <div className={`progress ${isPlaying ? "animate" : ""}`}></div>
            </div>
          </div>

          {/* ✅ Navigation Button */}
          <button className="features-btn" onClick={goToFeatures}>
            Features
          </button>
        </div>

        {/* ✅ Aaliya image */}
        <div className="aaliya-image">
          <img src={aliyahImage} alt="Aaliya" />
        </div>
      </div>
    </section>
  );
};

export default AaliyaIntro;
