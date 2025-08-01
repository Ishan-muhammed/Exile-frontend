import React, { useState } from "react";
import {
  initializeApp
} from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";
import "./ContactForm.css";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0zGJnZGT_5Dhu_XCvv4h0S6jvgBbQy-A",
  authDomain: "exile-website-form.firebaseapp.com",
  projectId: "exile-website-form",
  storageBucket: "exile-website-form.firebasestorage.app",
  messagingSenderId: "694977584802",
  appId: "1:694977584802:web:9278956b24295d5b2d01fb",
  measurementId: "G-4W92L5Z3J5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setSubmitStatus({
        message: "Please fill in all fields.",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ message: "", type: "" });

    try {
      await addDoc(collection(db, "contact-messages"), {
        name,
        email,
        message,
        timestamp: serverTimestamp(),
        status: "new",
      });

      setSubmitStatus({
        message: "Message sent successfully! We'll get back to you soon.",
        type: "success",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus({
        message: "Failed to send message. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form-section" id="contact">
      <div className="contact-form-container">
        <div className="contact-us-label">CONTACT US</div>
        <h1 className="contact-heading">Send us a message</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">How can we help you?</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how we can assist you..."
              rows="6"
              required
            />
          </div>

          {submitStatus.message && (
            <div
              className={`status-message ${
                submitStatus.type === "success"
                  ? "status-success"
                  : "status-error"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
            style={{
              opacity: isSubmitting ? 0.6 : 1,
              cursor: isSubmitting ? "not-allowed" : "pointer",
            }}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
