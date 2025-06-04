import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ValuePropositionSection from "../components/ValuePropositionSection";
import HowItWorksSection from "../components/HowItWorksSection";
import PricingSection from "../components/PricingSection";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";

const HomepageTrueWisdomPurpleBGWhite = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-ibm-plex-sans">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ValuePropositionSection />
        <HowItWorksSection />
        <PricingSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};
export default HomepageTrueWisdomPurpleBGWhite;
