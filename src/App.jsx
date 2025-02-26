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
      <Routes>
        {/* Home Page (and other pages) show the Navbar */}
        <Route
          path="/"
          element={
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
          }
        />

        {/* Demo Page hides the Navbar */}
        <Route
          path="/demo"
          element={
            <>
              {/* No Navbar here */}
              <DemoForm />
            </>
          }
        />

        {/* Add more routes as needed, decide if they show Navbar or not */}
      </Routes>
    </Router>
  );
}

export default App;
