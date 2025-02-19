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
        <h1 className="benefits-heading">
            Benefits
            </h1>

            <h2>
            Reduce staffing costs, boost bookings, and provide 24/7 guest care with our AI.
             Automate reservations, handle inquiries instantly, and enhance guest satisfaction
             with seamless, human-like interactions. Enjoy scalable, consistent service that ensures 
             every guest feels valued—day or night.
        </h2>
        
        <div className="benefits-list">
          <div className="benefit-item">
          <img src={mon} alt="money" />
           <div className="benefit-text1">
            <h3>Lower staffing costs</h3>
            </div>
          </div>
          <div className="benefit-item">
          <img src={sta} alt="scale" />
          <div className="benefit-text2">
              <h3>Enhanced guest <br/>satisfaction</h3>
             </div>
          </div>
          <div className="benefit-item">
            <img src={full} alt="full 24-7" />
             <div className="benefit-text3">
              <h3>24/7 Guest support</h3>
             </div>
          </div>
          <div className="benefit-item">
          <img src={sca} alt="scale" />
          <div className="benefit-text4">
              <h3>Limitless scalability</h3>
             </div>
            <h3>Limitless scalability</h3>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
