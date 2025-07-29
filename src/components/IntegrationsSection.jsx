import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./IntegrationsSection.css";

// New Logo imports
import cloudbedsLogo from "./Images/cloud beds.png"; // New logo
import salesforceLogo from "./Images/salesforce.png"; // New logo
import openAILogo from "./Images/OpenAI-Logo-PNG.png"; // Updated OpenAI logo path/name
import mastercardLogo from "./Images/mastercard-png-6946.png"; // Updated Mastercard logo path/name
import amadeusLogo from "./Images/Amadeus.png"; // New logo
import mondayLogo from "./Images/monday (2).png"; // Updated Monday logo path/name
import hubspotLogo from "./Images/hibspot.png"; // New logo (using exact filename provided)

// Kept Zapier logo as requested
import zapierLogo from "./Images/Zapier.png";


const IntegrationsSection = () => {
  const containerRef = useRef();

  const logos = [
    { src: cloudbedsLogo, alt: "Cloudbeds" },
    { src: salesforceLogo, alt: "Salesforce" },
    { src: openAILogo, alt: "OpenAI" },
    { src: mastercardLogo, alt: "Mastercard" },
    { src: amadeusLogo, alt: "Amadeus" },
    { src: mondayLogo, alt: "Monday.com" },
    { src: hubspotLogo, alt: "HubSpot" },
    { src: zapierLogo, alt: "Zapier" }, // Kept Zapier logo
  ];

  useEffect(() => {
    const container = containerRef.current;
    const strip = container.querySelector(".logo-strip");

    // Clone the strip once for seamless loop
    const clone = strip.cloneNode(true);
    container.appendChild(clone);

    const totalWidth = strip.offsetWidth;

    gsap.to(container, {
      x: `-=${totalWidth}`,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth)
      }
    });
  }, []);

  return (
    <section className="integrations-section">
      <div className="integration-wrapper">
        <h3>
          <span className="green-text">20,104+</span> Integration support from companies around the world
        </h3>
        <div className="logos-outer-wrapper">
          <div className="fade-left" />
          <div className="fade-right" />
          <div className="logos-container" ref={containerRef}>
            <div className="logo-strip">
              {logos.map((logo, index) => (
                <div
                  key={`logo-${index}`}
                  className="logo-container"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="integration-logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;