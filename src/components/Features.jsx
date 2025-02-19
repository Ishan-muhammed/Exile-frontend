import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "./Images/multilngualy.jpg";
import hum from "./Images/Ehuman.jpg";
import inte from "./Images/integrations bl2.jpg";
import rob from "./Images/robo1.jpg";
import flo from "./Images/flow.jpg";
import "./Features.css";

const Features = () => {
  const FeatureRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      FeatureRef.current,
      { opacity: 0, y: 9 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: FeatureRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section id="features" className="features-section" ref={FeatureRef}>
      <h2>Features</h2>
      <div className="features-container">
        {/* Top Row - Two Small Boxes */}
        <div className="feature-box small-box">
          <img src={img} alt="Multilingual Support" />
          <h3>Multilingual Support</h3>
          <p>
            Our agents detect and speak your customer's language instantly, ensuring seamless communication worldwide.
          </p>
        </div>
        <div className="feature-box small-box">
          <img src={hum} alt="Human in the Loop" />
          <h3>Human in the Loop</h3>
          <p>
            Agents can transfer calls anytime, manage after-hours or overflow calls, all customizable to your needs.
          </p>
        </div>

        {/* Center Row - One Large Box */}
        <div className="feature-box large-box">
          <img src={rob} alt="Built Your Way" />
          <h3>Built Your Way, For Your Needs!</h3>
          <p>
            From first contact to booked meetings—fully automated, multi-channel, and custom-built to grow your business on autopilot.
          </p>
        </div>

        {/* Bottom Row - Two Small Boxes */}
        <div className="feature-box small-box">
          <img src={inte} alt="Integrations" />
          <h3>Integrations</h3>
          <p>
            Our agents can book appointments into your software and handle data during or after calls seamlessly.
          </p>
        </div>
        <div className="feature-box small-box">
          <img src={flo} alt="Custom Call Flows" />
          <h3>Custom Call Flows</h3>
          <p>
            Agents follow your specific call flows with safeguards to ensure consistent and accurate interactions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
