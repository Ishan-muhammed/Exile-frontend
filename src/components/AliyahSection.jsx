import React, { useState, useRef, useEffect } from 'react';
import './AliyahSection.css';

const AliyahSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressClick = (e) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget;
      const clickX = e.nativeEvent.offsetX;
      const width = progressBar.offsetWidth;
      const newTime = (clickX / width) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);
      const handleEnded = () => setIsPlaying(false);

      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      audio.addEventListener('ended', handleEnded);

      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  const scrollToFeatures = () => {
    const pricingSection = document.querySelector('.pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <section className="aliyah-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              I'm Aaliya.<br />
              <span className="hero-subtitle">your AI receptionist</span>
            </h1>

            <div className="audio-player">
              <button className="play-button" onClick={togglePlay}>
                {isPlaying ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="6" y="4" width="4" height="16" fill="currentColor" />
                    <rect x="14" y="4" width="4" height="16" fill="currentColor" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                  </svg>
                )}
              </button>

              <div className="progress-container" onClick={handleProgressClick}>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              <audio
                ref={audioRef}
                preload="metadata"
                onError={() => console.warn('Audio file not found or failed to load')}
              >
                <source src="/audio/aaliya-intro.mp3" type="audio/mpeg" />
                <source src="/audio/aaliya-intro.wav" type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>

            <button className="features-button" onClick={scrollToFeatures}>
              Features
            </button>
          </div>

          <div className="hero-image">
            <img
              src="/Images/Aliayim.png"
              alt="Aaliya - AI Receptionist"
              className="aaliya-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AliyahSection;
