import React, { useState } from "react";
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
        &#9776; {/* or use an icon library */}
      </div>

      {/* Nav Links */}
      {/* Note the corrected syntax: className={`nav-links ${isOpen ? "open" : ""}`} */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#features">Features</a></li>
        <li><a href="#benefits">Benefits</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#calEmbed">Contact Us</a></li>
      </ul>

      {/* CTA Button */}
      {/* If your Cal.com embed is in the same page section, use #calEmbed;
          if it's an external link, replace with href="https://cal.com/your-embed" */}
      <div className="nav-cta">
        <a href="#calEmbed" className="btn-cta">Get started</a>
      </div>
    </nav>
  );
}

export default Navbar;
