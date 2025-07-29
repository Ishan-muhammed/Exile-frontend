import React, { useState } from 'react';
// Import Firebase modules
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import "./ContactForm.css";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0zGJnZGT_5Dhu_XCvv4h0S6jvgBbQy-A",
  authDomain: "exile-website-form.firebaseapp.com",
  projectId: "exile-website-form",
  storageBucket: "exile-website-form.firebasestorage.app",
  messagingSenderId: "694977584802",
  appId: "1:694977584802:web:9278956b24295d5b2d01fb",
  measurementId: "G-4W92L5Z3J5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async () => {
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Add document to Firestore
      await addDoc(collection(db, 'contact-messages'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
        status: 'new'
      });

      setSubmitStatus('Message sent successfully! We\'ll get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-section">
      <div className="contact-form-container">
        {/* Header */}
        <div className="contact-us-label">CONTACT US</div>
        <h1 className="contact-heading">Send us a message</h1>
        
        {/* Form */}
        <div className="contact-form">
          {/* Name Field */}
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
            />
          </div>
          
          {/* Email Field */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="email@gmail.com"
            />
          </div>
          
          {/* Message Field */}
          <div className="form-group">
            <label>How can we help you?</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us how we can assist you..."
              rows="6"
            />
          </div>
          
          {/* Status Message */}
          {submitStatus && (
            <div className={`status-message ${
              submitStatus.includes('successfully') ? 'status-success' : 'status-error'
            }`}>
              {submitStatus}
            </div>
          )}
          
          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="submit-button"
            style={{
              opacity: isSubmitting ? 0.6 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer'
            }}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;