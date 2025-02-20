import React from "react";
import full from "./Images/24-7phone.jpg";
import mon from "./Images/money.jpg";
import sca from "./Images/scale.jpg";
import sta from "./Images/star.jpg";
import "./BenefitsSection.css";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="benefits-section">
      <div className="benefits-container">
        <h1 className="benefits-heading">Benefits</h1>
        <h2>
          Reduce staffing costs, boost bookings, and provide 24/7 guest care with our AI.
          Automate reservations, handle inquiries instantly, and enhance guest satisfaction
          with seamless, human-like interactions. Enjoy scalable, consistent service that ensures 
          every guest feels valued—day or night.
        </h2>

        <div className="benefits-list">
          <div className="benefit-item">
            <h3 className="benefit-title">Cheaper than Employees/VAs</h3>
            <img src={mon} alt="money" />
          </div>

          <div className="benefit-item">
            <h3 className="benefit-title">72% Higher Conversion Rates</h3>
            <img src={sta} alt="star" />
          </div>

          <div className="benefit-item">
            <h3 className="benefit-title">Limitless Scalability</h3>
            <img src={full} alt="24/7 support" />
          </div>

          <div className="benefit-item">
            <h3 className="benefit-title">100% Consistency</h3>
            <img src={sca} alt="scale" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
