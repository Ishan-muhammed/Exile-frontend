import React, { useRef, useState } from "react";
import "./AaliyaIntro.css";
import { Play, Pause } from "lucide-react";
import aliyahImage from "./Images/Aliayim.png"; // ✅ Image of Aliyah
import aliyahSpeaking from "./Images/aliay sspeaking.wav"; // ✅ Audio file

const AaliyaIntro = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="aliyah-intro"
      className="aaliya-section"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* ✅ Heading */}
      <h2 className="aaliya-heading">
        Meet Our New <span className="green-text">AI Receptionist Aaliya</span>
      </h2>

      <div className="aaliya-box">
        <div className="aaliya-text">
          <h1>
            I'm Aaliya
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

          {/* ✅ Features scroll button */}
          <button
            className="features-btn"
            onClick={scrollToPricing}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
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
