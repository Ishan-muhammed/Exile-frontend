import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import Box1 from "./Images/accent1.mp3";
import Box2 from "./Images/accent2.mp3";
import Box3 from "./Images/accent3.mp3";
import Box4 from "./Images/accent4.mp3";
import Box5 from "./Images/accent5.mp3";
import Box6 from "./Images/accent6.mp3";
import Box7 from "./Images/accent7.mp3";
import Box8 from "./Images/accent8.mp3";
import Box9 from "./Images/accent9.mp3";

import "./VoiceSlider.css";

// Global Audio Manager
const audioManager = {
  currentAudio: null,
  setCurrentAudio(audio) {
    if (this.currentAudio && this.currentAudio !== audio) {
      this.currentAudio.pause();
    }
    this.currentAudio = audio;
  },
  clearCurrentAudio(audio) {
    if (this.currentAudio === audio) {
      this.currentAudio = null;
    }
  }
};

// VoiceBox Component
const VoiceBox = ({ voiceData, onHover }) => {
  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !voiceData?.audio) {
      setIsLoading(false);
      return;
    }

    let isLoaded = false;

    const handleMetadataLoaded = () => {
      if (isLoaded) return;
      const audioDuration = audio.duration;
      if (audioDuration && !isNaN(audioDuration) && audioDuration > 0) {
        setDuration(audioDuration);
        setIsLoading(false);
        isLoaded = true;
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      }
    };

    const handleError = () => {
      console.error("Audio loading error for:", voiceData.name);
      setDuration(15);
      setIsLoading(false);
    };

    const handlePlay = () => {
      setIsPlaying(true);
      onHover?.(true);
      audioManager.setCurrentAudio(audio);
      intervalRef.current = setInterval(() => {
        if (audio && !audio.paused) {
          setCurrentTime(audio.currentTime);
        }
      }, 100);
    };

    const handlePause = () => {
      setIsPlaying(false);
      onHover?.(false);
      audioManager.clearCurrentAudio(audio);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      onHover?.(false);
      audioManager.clearCurrentAudio(audio);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    audio.src = voiceData.audio;
    audio.preload = "metadata";
    audio.addEventListener("loadedmetadata", handleMetadataLoaded);
    audio.addEventListener("canplay", handleMetadataLoaded);
    audio.addEventListener("error", handleError);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    audio.load();

    timeoutRef.current = setTimeout(() => {
      if (!isLoaded) {
        console.warn("Audio load timeout for:", voiceData.name);
        setDuration(15);
        setIsLoading(false);
      }
    }, 3000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);

      audio.removeEventListener("loadedmetadata", handleMetadataLoaded);
      audio.removeEventListener("canplay", handleMetadataLoaded);
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [voiceData?.audio, voiceData?.name]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio || isLoading) return;

    if (isPlaying) {
      audio.pause();
    } else {
      if (audioManager.currentAudio && audioManager.currentAudio !== audio) {
        audioManager.currentAudio.pause();
      }
      audio.currentTime = 0;
      audio.play().catch((error) => {
        console.error("Play error for:", voiceData.name, error);
      });
    }
  };

  const handleSeek = (e) => {
    const bar = progressRef.current;
    const audio = audioRef.current;
    if (!bar || !audio || isLoading || duration === 0) return;

    const rect = bar.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, clickPosition / rect.width));
    const newTime = percent * duration;

    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className="voice-box"
      onMouseEnter={() => {
        onHover?.(true);
      }}
      onMouseLeave={() => {
        const audio = audioRef.current;
        if (!audio || audio.paused) {
          onHover?.(false);
        }
      }}
    >
      <h4 className="voice-name">{voiceData?.name || "Unknown Voice"}</h4>
      <p className="voice-gender">{voiceData?.gender || "Unknown"}</p>
      <p className="voice-accent">{voiceData?.accent || "Unknown Accent"}</p>

      <div className="audio-player">
        <button
          className="voice-play-btn"
          onClick={togglePlay}
          disabled={isLoading}
          style={{ opacity: isLoading ? 0.5 : 1 }}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <span className="voice-timer" style={{ minWidth: "100px" }}>
          {isLoading
            ? "Loading..."
            : `${formatTime(currentTime)} / ${formatTime(duration)}`}
        </span>

        <div
          className="voice-progress-bar"
          onClick={handleSeek}
          ref={progressRef}
          style={{
            opacity: isLoading ? 0.5 : 1,
            cursor: isLoading ? "default" : "pointer"
          }}
        >
          <div
            className="voice-progress"
            style={{
              width: `${Math.min(100, Math.max(0, progressPercent))}%`
            }}
          />
        </div>
      </div>

      <audio ref={audioRef} />
    </div>
  );
};

// ✅ VoiceRow Component (Fixed jump on unhover using time-based delta)
const VoiceRow = ({ voiceData, direction = "left", rowId }) => {
  const containerRef = useRef();
  const stripRef = useRef();
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const fullWidth = strip.offsetWidth / 2;
    const speed = 0.05; // pixels/ms for time-based smooth scroll

    const animate = (timestamp) => {
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (!isPaused) {
        const moveAmount = delta * speed;

        if (direction === "left") {
          positionRef.current -= moveAmount;
          if (Math.abs(positionRef.current) >= fullWidth) {
            positionRef.current = 0;
          }
        } else {
          positionRef.current += moveAmount;
          if (positionRef.current >= 0) {
            positionRef.current = -fullWidth;
          }
        }

        strip.style.transform = `translateX(${positionRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [direction, isPaused]);

  return (
    <div className="voices-outer-wrapper">
      <div className="fade-left" />
      <div className="fade-right" />
      <div className="voices-container" ref={containerRef}>
        <div className="voice-strip" ref={stripRef}>
          {[...voiceData, ...voiceData].map((voice, index) => (
            <div
              key={`${direction}-${rowId}-${index}`}
              className="voice-container"
            >
              <VoiceBox voiceData={voice} onHover={setIsPaused} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ✅ Main Component
const VoiceSlider = () => {
  const firstRowVoiceData = [
    {
      name: "Maya Isabella",
      gender: "Female",
      accent: "Spanish Accent - Spanish",
      audio:  Box2
    },
    { name: "Alex Johnson", gender: "Male", accent: "British", audio: Box1 },
    { name: "Sophie Chen", gender: "Female", accent: "American", audio: Box2 },
    { name: "Marcus Williams", gender: "Male", accent: "Australian", audio: Box3 },
    { name: "Elena Rodriguez", gender: "Female", accent: "Mexican", audio: Box4 }
  ];

  const secondRowVoiceData = [
    { name: "Isabella Cruz", gender: "Female", accent: "Italian", audio: Box5 },
    { name: "James Wilson", gender: "Male", accent: "Irish", audio: Box6 },
    { name: "Priya Sharma", gender: "Female", accent: "Indian", audio: Box7 },
    { name: "Hans Mueller", gender: "Male", accent: "German", audio: Box8 },
    { name: "Sakura Tanaka", gender: "Female", accent: "Japanese", audio: Box9 }
  ];

  return (
    <section className="infinite-voice-section">
      <div className="voice-wrapper">
        <VoiceRow voiceData={firstRowVoiceData} direction="left" rowId="row-1" />
        <VoiceRow voiceData={secondRowVoiceData} direction="right" rowId="row-2" />
      </div>
    </section>
  );
};

export default VoiceSlider;
