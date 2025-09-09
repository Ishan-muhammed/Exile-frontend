import React from "react";
import "./BenefitsSection.css";

// Import your images
import instantRepliesImage from "./Images/24 hr.png";
import savesTimeImage from "./Images/time saving .png";
import worksWithSystemsImage from "./Images/works with your existing system.png";
import youOwnAgentImage from "./Images/you fully own the agent.png";

const benefitsData = [
  {
    image: instantRepliesImage,
    title: "Instant replies, 24/7",
    description:
      "Deliver instant, multilingual support to guests, day or night. Our AI handles 10 calls at once, providing seamless, perfect service and capturing every lead.",
  },
  {
    image: savesTimeImage,
    title: "Saves time for your team",
    description:
      "By expertly handling repetitive incoming calls, our AI receptionist frees your team to focus on direct guest engagement, upselling, or other crucial tasks that truly need a human..",
  },
  {
    image: worksWithSystemsImage,
    title: "Works with your existing systems",
    description:
      "Our AI receptionist integrates seamlessly with your existing hotel systems like PMS, CRS, and other systems. It easily integrates,automating your workflow without manual work..",
  },
  {
    image: youOwnAgentImage,
    title: "Actionable Insights & Reporting",
    description:
      "Our AI provides detailed reports, call recordings, call patterns, guest inquiries, and peak times. Access this data instantly from your dashboard to make smarter decisions..",
  },
];

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <h2 className="benefits-heading">
          What you get with Exile Automate
        </h2>
        <p className="benefits-subheading">
        Free up your front desk. Our AI receptionist handles every call. That means no missed opportunities, happier guests, and more revenue for your hotel.
        </p>
        <div className="benefits-grid">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon-wrapper">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="benefit-icon"
                />
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))
          }
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;