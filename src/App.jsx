import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Center from "./components/center";
import FeaturesSection from "./components/Features";
import BenefitsSection from "./components/BenefitsSection";
import FAQSection from "./components/FAQSection";
import CalEmbed from "./components/CalEmbed";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Center />
      <FeaturesSection />
      <BenefitsSection />
      <FAQSection />
      <CalEmbed />
      <Footer />
    </>
  );
}

export default App;
