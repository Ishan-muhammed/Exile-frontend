import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaClock, FaGlobe, FaBrain, FaPhone, FaRocket, FaHeadphones, FaComments, FaCog, FaUsers, FaWhatsapp, FaChartLine } from "react-icons/fa";
import "./ProductsSection.css";
import aliyahImage from "./Images/finalaliyah.png";
import accent1 from "./Images/accent1.mp3";
import accent2 from "./Images/accent2.mp3";
import accent3 from "./Images/accent3.mp3";

const CustomAudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });
    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    if (!time) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="audio-player">
      <button className="audio-button" onClick={togglePlay}>
        {isPlaying ? <FaPause className="icon" /> : <FaPlay className="icon" />}
      </button>
      <div className="audio-progress">
        <div className="audio-progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <span className="audio-time">
        {formatTime(audioRef.current?.currentTime)} / {formatTime(duration)}
      </span>
      <audio ref={audioRef} src={src} preload="auto" />
    </div>
  );
};

const FeatureItem = ({ icon: Icon, text, colorClass }) => {
  return (
    <li className="feature-item">
      <div className={`feature-icon ${colorClass}`}>
        <Icon />
      </div>
      <span className="feature-text">{text}</span>
    </li>
  );
};

const ProductsSection = () => {
  return (
    <section className="products-section">
      <h2 className="products-heading">Meet Our AI Receptionists</h2>
      <p className="products-subheading">Choose the perfect voice agent for your hospitality needs.</p>

      <div className="products-grid">

        {/* Box 1 */}
        <div className="product-card">
          <img src={aliyahImage} alt="AI Agent" className="card-static-image" />
          <h3 className="agent-name">Aliyah v1 - Smart Start</h3>
          <p className="audio-prompt">🎧 Listen to Aliyah in action:</p>
          <CustomAudioPlayer src={accent1} />
          <p className="agent-description">Ideal for small hotels, lodges, or budget properties needing reliable bilingual support.</p>
          <ul className="agent-features-list">
            <FeatureItem icon={FaClock} text="15,000 minutes of monthly AI interaction" colorClass="green" />
            <FeatureItem icon={FaGlobe} text="Supports Arabic + English or Hindi + English" colorClass="blue" />
            <FeatureItem icon={FaBrain} text="Handles basic guest queries, FAQs, and room inquiries" colorClass="red" />
            <FeatureItem icon={FaPhone} text="24/7 Call Handling, No more missed calls" colorClass="green" />
            <FeatureItem icon={FaRocket} text="Plug-and-play setup, start within days" colorClass="purple" />
            <FeatureItem icon={FaHeadphones} text="Voice Recognition + Natural Responses" colorClass="gray" />
            <FeatureItem icon={FaComments} text="Real-time SMS fallback for missed questions" colorClass="orange" />
          </ul>
        </div>

        {/* Box 2 */}
        <div className="product-card">
          <img src={aliyahImage} alt="AI Agent" className="card-static-image" />
          <h3 className="agent-name">Aliyah v2 - Advanced Connect</h3>
          <p className="audio-prompt">🎧 Listen to Aliyah in action:</p>
          <CustomAudioPlayer src={accent2} />
          <p className="agent-description">Perfect for growing hotels that need stronger language flexibility and more usage.</p>
          <ul className="agent-features-list">
            <FeatureItem icon={FaClock} text="30,000 minutes of monthly AI interaction" colorClass="green" />
            <FeatureItem icon={FaGlobe} text="Supports any two preferred languages: Arabic, English, Hindi, etc." colorClass="blue" />
            <FeatureItem icon={FaBrain} text="Intelligent guest assistance: Bookings, Transfers, FAQs, Concierge Queries" colorClass="red" />
            <FeatureItem icon={FaPhone} text="24/7 Support + Call Routing to human agent when needed" colorClass="green" />
            <FeatureItem icon={FaComments} text="Multichannel integration (voice + SMS)" colorClass="orange" />
            <FeatureItem icon={FaCog} text="Priority Support + System Monitoring" colorClass="gray" />
          </ul>
        </div>

        {/* Box 3 */}
        <div className="product-card">
          <img src={aliyahImage} alt="AI Agent" className="card-static-image" />
          <h3 className="agent-name">Aliyah v3 - Enterprise Intelligence</h3>
          <p className="audio-prompt">🎧 Listen to Aliyah in action:</p>
          <CustomAudioPlayer src={accent3} />
          <p className="agent-description">Built for hotel chains or premium properties needing total customization.</p>
          <ul className="agent-features-list">
            <FeatureItem icon={FaClock} text="Custom monthly minutes, scalable to your call volume" colorClass="green" />
            <FeatureItem icon={FaUsers} text="Multilingual AI Agent, handle unlimited languages as per your market" colorClass="blue" />
            <FeatureItem icon={FaCog} text="Fully tailored: Custom call flows, booking systems, CRM integrations" colorClass="red" />
            <FeatureItem icon={FaRocket} text="Dedicated onboarding + configuration with your brand tone" colorClass="purple" />
            <FeatureItem icon={FaWhatsapp} text="Optional features: WhatsApp, Web Chat Integration" colorClass="green" />
            <FeatureItem icon={FaUsers} text="Enterprise-ready, serve global guests like a local" colorClass="orange" />
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;