import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type"; // Keep this if you use it elsewhere, otherwise it can be removed
import "./Herosection.css";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const mainHeadingRef = useRef(null);
  const paragraphRef = useRef(null);
  const featuresRef = useRef(null); // Ref for the container of animated texts

  useEffect(() => {
    // Fade in Hero Section
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

    // Gradient on first two words of H1
    if (mainHeadingRef.current) {
      const mainWords = mainHeadingRef.current.querySelectorAll(".main-word");
      if (mainWords.length >= 1) mainWords[0].classList.add("gradient-word");
      if (mainWords.length >= 2) mainWords[1].classList.add("gradient-word");
    }

    // --- NEW ANIMATION LOGIC FOR FEATURE LINES ---
    if (featuresRef.current) {
      const featureLines = gsap.utils.toArray(featuresRef.current.children); // Get all direct children divs

      let tl = gsap.timeline({ repeat: -1, defaults: { duration: 1, ease: "power2.inOut" } });

      featureLines.forEach((line, index) => {
        tl.fromTo(
          line,
          { opacity: 0, y: 20, pointerEvents: "none" }, // Start hidden and slightly below
          { opacity: 1, y: 0, pointerEvents: "auto" }, // Fade in and move up
          "+=1" // Start this animation 1 second after the previous one finishes (or immediately for the first)
        )
          .to(
            line,
            { opacity: 0, y: -20, pointerEvents: "none" }, // Fade out and move up
            "+=2" // Stay for 2 seconds, then fade out
          );
      });

      // To make sure only one line is visible at a time
      gsap.set(featureLines.slice(1), { opacity: 0, pointerEvents: "none" });
    }
    // --- END NEW ANIMATION LOGIC ---
  }, []);

  // Helper to split H1 into spans
  const splitMainHeading = (text) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className="main-word">
        {word}&nbsp;
      </span>
    ));
  };

  const handleScrollToAliyah = (e) => {
    e.preventDefault(); // prevent link behavior
    const target = document.getElementById("aliyah-intro");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-content">
        <h1 ref={mainHeadingRef}>
          {splitMainHeading("Revolutionize Hotel Guest Experience.")}
        </h1>

        {/* New Animated Text */}
        <div className="features-container" ref={featuresRef}>
          <div className="feature-line">24/7 Availability</div>
          <div className="feature-line">No Missed Calls</div>
          <div className="feature-line">Instant Bookings</div>
        </div>

        <p ref={paragraphRef}>
          Our AI answers calls 24/7, freeing your staff for essential tasks.
        </p>

        {/* Scroll to Aliyah Intro Section */}
        <a
          href="#aliyah-intro"
          onClick={handleScrollToAliyah}
          className="btn-hero"
        >
         Meet Our Aliyah
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
