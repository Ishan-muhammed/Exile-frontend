import React from "react";
import "./HowItWorksSection.css";

// Import your local images
import step1Icon from "./Images/call-logo.png";
import step2Icon from "./Images/searching-logo.png";
import step3Icon from "./Images/keyboard-logo.png";
import step4Icon from "./Images/rocket-logo.png";

const stepsData = [
  {
    number: "01",
    icon: step1Icon, // Discovery Call - using call_logo.png
    title: "Discovery Call",
    description: "We learn about your business and figure out what kind of AI agent you need.",
  },
  {
    number: "02",
    icon: step2Icon, // Scoping Call - using searching_logo.png
    title: "Scoping Call",
    description: "We plan from start to finish and provide insights for a high-impact system.",
  },
  {
    number: "03",
    icon: step3Icon, // Development - using keyboard_logo.png
    title: "Development",
    description: "Your AI agent gets built and connected to your systems - ready to use, no extra fees.",
  },
  {
    number: "04",
    icon: step4Icon, // Testing & Launch - using rocket_logo.png
    title: "Testing & Launch",
    description: "Final testing, then your AI agent goes live and starts helping your business.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">
        <p className="how-it-works-subheading">HOW IT WORKS</p>
        <h2 className="how-it-works-heading">
          Getting started is easy
        </h2>

        <div className="how-it-works-grid">
          {stepsData.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-card-header">
                <span className="step-number">{step.number}</span>
                <img src={step.icon} alt={step.title} className="step-icon" />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;