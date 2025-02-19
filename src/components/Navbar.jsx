import React, { useState } from "react";
import log from "./Images/ngreen.png";
import "./Navbar.css";

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
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#features">Features</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>

      {/* CTA Button */}
      <div className="nav-cta">
        <a href="#demo-call" className="btn-cta">Get started</a>
      </div>
    </nav>
  );
}

export default Navbar;
