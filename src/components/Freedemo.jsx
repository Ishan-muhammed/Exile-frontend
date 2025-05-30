import React, { useState } from "react";
import "./Freedemo.css"; // We'll create a CSS file for styling

const DemoForm = () => {
  // Local state for each form field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [aiVoiceAvatar, setAiVoiceAvatar] = useState("");
  const [howDidYouFindUs, setHowDidYouFindUs] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      businessName,
      aiVoiceAvatar,
      howDidYouFindUs,
      whatsappNumber,
      phoneNumber,
    };

    // Post the form data to your Google Apps Script Web App
    fetch("https://script.google.com/macros/s/AKfycbzWuKQI65ZeKwq9E5SBCvqyfPZf6trjK7S7KtyGvq9N_ewogy-Jc7XdfZS6qdS94qEegw/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "success") {
          console.log("Form submitted successfully!", data);
          // Optionally, show a success message to the user here
        } else {
          console.error("Error submitting form:", data.error);
          // Optionally, show an error message to the user here
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Optionally, show an error message to the user here
      });

    // Reset form fields
    setName("");
    setEmail("");
    setBusinessName("");
    setAiVoiceAvatar("");
    setHowDidYouFindUs("");
    setWhatsappNumber("");
    setPhoneNumber("");
  };

  return (
    <div className="demo-form-container">
      <h1>Test Out Our AI Facilitators Right Now.</h1>
      <p>
        It’s time for the Future, it’s time for you to enhance your business with
        revolutionary, extraordinary technology. Welcome to Exile Automate
      </p>
      <form onSubmit={handleSubmit} className="demo-form">
        <label>Name</label>
        <input
          type="text"
          placeholder="Happy person"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="happyperson@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Business Name</label>
        <input
          type="text"
          placeholder="Happy"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />

        <label>AI Voice Avatar</label>
        <select
          value={aiVoiceAvatar}
          onChange={(e) => setAiVoiceAvatar(e.target.value)}
          required
        >
          <option value="">Select an Avatar</option>
          <option value="Jordan - American Accent (Hospital Appointment Reminder)">
            Jordan - American Accent (Hospital Appointment Reminder)
          </option>
          {/* Add more options as needed */}
        </select>

        <label>How did you find us?</label>
        <select
          value={howDidYouFindUs}
          onChange={(e) => setHowDidYouFindUs(e.target.value)}
        >
          <option value="">Select an Option</option>
          <option value="Google">Google</option>
          <option value="Social Media">Social Media</option>
          <option value="Referral">Youtube</option>
          <option value="Other">Other</option>
        </select>

        <label>WhatsApp Number (Used For Contact)</label>
        <input
          type="tel"
          placeholder="+1 858 262 7132"
          value={whatsappNumber}
          onChange={(e) => setWhatsappNumber(e.target.value)}
        />

        <label>Phone Number (Used For Demo Call)</label>
        <input
          type="tel"
          placeholder="+1 858 262 7132"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DemoForm;
