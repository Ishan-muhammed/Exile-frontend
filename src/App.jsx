import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import VideoSection from "./components/VideoSection";
import IntegrationsSection from "./components/IntegrationsSection";
import AaliyaIntro from "./components/AaliyaIntro";
import BenefitsSection from "./components/BenefitsSection";
import VoiceSlider from "./components/VoiceSlider";
import Newproduct from "./components/Newproduct"; // ✅ New section added
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import HowItWorksSection from "./components/HowItWorksSection";
import CalEmbed from "./components/CalEmbed";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <VideoSection />
              <IntegrationsSection />
              <AaliyaIntro />
              <BenefitsSection />
              <VoiceSlider />
              <Newproduct /> {/* ✅ New pricing section */}
              <PricingSection />
              <FAQSection />
              <HowItWorksSection />
              <CalEmbed />
              <ContactForm />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;