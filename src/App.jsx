import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Center from "./components/center";
import FeaturesSection from "./components/Features";
import BenefitsSection from "./components/BenefitsSection";
import FAQSection from "./components/FAQSection";
import CalEmbed from "./components/CalEmbed";
import Footer from "./components/Footer";
import DemoForm from "./components/Freedemo";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Center />
            <FeaturesSection />
            <BenefitsSection />
            <FAQSection />
            <CalEmbed />
            <Footer />
          </>
        } />
        <Route path="/demo" element={<DemoForm />} />
      </Routes>
    </Router>
  );
}

export default App;
