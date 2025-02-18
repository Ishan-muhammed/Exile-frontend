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
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
      </div>

      {/* Right side: Social icons + email */}
      <div className="footer-right">
        <div className="social-icons">
          <a href="https://www.instagram.com/exileautomate?igsh=MTBpcHByMm1pcnV1NQ==" target="_blank" rel="noreferrer">
            <img src={inst} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/exile-automate-1118a7341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noreferrer">
            <img src={lin} alt="LinkedIn" />
          </a>
          <a href="https://x.com/exileautomate?t=wBuJl28dlv7F_yOAnSRruw&s=09" target="_blank" rel="noreferrer">
            <img src={xx} alt="Twitter" />
          </a>
        </div>
        <p className="footer-email">
          Send us an e-mail: <a href="mailto:exileautomate@gmail.com">exileautomate@gmail.com</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
