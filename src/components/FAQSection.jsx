// FAQSection.jsx
import React, { useState } from "react";
import { faqData } from "./faqData";
import "./FAQSection.css";

const FAQSection = () => {
  return (
    <section className="faq-section">
      {/* Wrap title + FAQ in one box */}
      <div className="faq-box">
        <h2 className="faq-title">Frequently <br /> Asked Questions</h2>
        <div className="faq-container">
          {faqData.map((item, index) => (
            <FAQItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Single FAQ item logic (unchanged)
const FAQItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  const toggleFAQ = () => setOpen(!open);

  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <div className="faq-question" onClick={toggleFAQ}>
        <h3>{item.question}</h3>
        <span className="faq-icon">{open ? "–" : "+"}</span>
      </div>
      <div className={`faq-answer ${open ? "show" : ""}`}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

export default FAQSection;
