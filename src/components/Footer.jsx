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
      {/* Main footer content */}
      <div className="footer-main">
        {/* Left side */}
        <div className="footer-left">
          <img src={log} alt="Inflame Logo" className="footer-logo" />
          
          <div className="social-icons">
            <a href="https://www.instagram.com/exileautomate?igsh=MTBpcHByMm1pcnV1NQ==" target="_blank" rel="noreferrer">
              <img src={inst} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/exile-automate-1118a7341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
              <img src={lin} alt="LinkedIn" />
            </a>
            <a href="https://x.com/exileautomate?t=wBuJl28dlv7F_yOAnSRruw&s=09" target="_blank" rel="noreferrer">
              <img src={xx} alt="Twitter" />
            </a>
          </div>
          
          <p className="footer-email">
            <a href="mailto:exileautomate@gmail.com">exileautomate@gmail.com</a>
          </p>
        </div>

        {/* Right side - Navigation columns */}
        <div className="footer-right">
          <div className="footer-column">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#benefits">Benefits</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#calEmbed">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#cookies">Cookie Policy</a></li>
              <li><a href="#security">Security</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="footer-bottom">
        <p className="footer-copy">
          Copyright © Exile. All rights reserved.
        </p>
        <div className="footer-info">
          <div>ABN: 12386387099</div>
          <div>Office 2666, Ground floor</div>
          <div>470 St Kilda Road</div>
          <div>Melbourne VIC 3004</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;