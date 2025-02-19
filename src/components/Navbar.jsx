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
      {/* Note the corrected syntax for className */}
      // Navbar.jsx
<ul>
  <li><a href="#features">Features</a></li>
  <li><a href="#benefits">Benefits</a></li>
  <li><a href="#faq">FAQ</a></li>
  <li><a href="#calEmbed">Contact Us</a></li>
</ul>

// In App.jsx or the same page
<section id="features">
  <h2>Features</h2>
</section>

<section id="benefits">
  <h2>Benefits</h2>
</section>

<section id="faq">
  <h2>FAQ</h2>
</section>

<section id="calEmbed">
  <h2>Contact / CalEmbed Section</h2>
</section>


      {/* CTA Button */}
      <div className="nav-cta">
        <a href="#calEmbed" className="btn-cta">Get started</a>
      </div>
    </nav>
  );
}

export default Navbar;
