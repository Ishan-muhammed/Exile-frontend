import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link might not be strictly necessary if using anchor tag for external link
import log from "./Images/ngreen.png";
import "../index.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <h3 className="Ex">
          <img src={log} alt="wname" />
        </h3>
      </div>

      {/* Hamburger Icon (shown on mobile) */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#features">Features</a></li>
        <li><a href="#benefits">Benefits</a></li>
        <li><a href="#faq">FAQ</a></li>
        {/* The "Contact Us" link already points to CalEmbed, which is good */}
        <li><a href="#calEmbed">Contact Us</a></li>
      </ul>

      {/* CTA Button - Updated */}
      <div className="nav-cta">
        {/* Replaced Link with a standard anchor tag for external link */}
        <a 
          href="https://cal.com/exile-automate-vvgfkw/ai-voice-agent-discovery-call"
          target="_blank"
          rel="noopener noreferrer" 
          className="btn-cta" // Keep existing styling class
        >
          Book A Call
        </a>
      </div>
    </nav>
  );
}

export default Navbar;