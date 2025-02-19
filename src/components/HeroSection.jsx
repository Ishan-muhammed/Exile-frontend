import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Herosection.css";

const HeroSection = () => {
  const heroRef = useRef(null);
  const typedRef = useRef(null);
  const waveRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    const typed = new Typed(typedRef.current, {
      strings: [
        "Automate Customer Support",
        "Handle Calls Seamlessly",
        "Boost Business Efficiency"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: false,
    });

    // Optional wave animation if you have an SVG ref
    gsap.to(waveRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>
          <span className="highlight-text">Building AI Phone Agents</span>
        </h1>
        <h2>
          <span ref={typedRef}></span>
        </h2>
        <p>
          We build AI phone agents to streamline your customer service and efficiency.
        </p>
        <a href="#demo-call" className="btn-hero">Get Started</a>
      </div>
    </section>
  );
};

export default HeroSection;
