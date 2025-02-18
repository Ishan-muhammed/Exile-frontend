import React from "react";
import log from "./Images/ngreen.png";
function Navbar() {
  // Return statement is required
  return (
    <nav className="navbar"> {/* Match CSS class .navbar */}
      <div className="logo">
        <h3 className="Ex">
          <img src={log} alt="wname"/>
          </h3> 
        
        {/* If you want the brand as a link */}
      </div>
      <ul className="nav-links">
        {/* Typically each link is in its own <li> */}
        <li><a href="#features">Features</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <div className="nav-cta">
        <a href="#demo-call" className="btn-cta">Get started</a>
      </div>
    </nav>
  );
}

export default Navbar;

