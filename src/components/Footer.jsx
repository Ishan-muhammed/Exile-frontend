import React from "react";
import "./Footer.css";

// Your social media icons
import lin from "./Images/linkdln.png";
import inst from "./Images/insta.png";
import xx from "./Images/twitter.png";
import log from "./Images/ngreen.png";

function Footer() {
  return (
    <footer className="footer">
      {/* Left side */}
      <div className="footer-left">
        <img src={log} alt="Flogo" className="footer-logo" />
        <p className="footer-copy">
          Exile Automate AI. © 2025, All Rights Reserved
        </p>
      </div>

      {/* Center links */}
      <div className="footer-center">
        <ul className="footer-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#calEmbed">Contact Us</a></li>
        </ul>
      </div>

      {/* Right side (social icons) - optional */}
      <div className="footer-right">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={lin} alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={inst} alt="Instagram" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={xx} alt="Twitter" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
