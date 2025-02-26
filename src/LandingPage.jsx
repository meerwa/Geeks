import React from "react";
import HeroSection from "./components/HeaderSection";
import FeaturesSection from "./components/FeaturesSection";
import BlogExamplesSection from "./components/BlogExamplesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CallToActionSection from "./components/CallToActionSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <HeroSection />
      <FeaturesSection />
      <BlogExamplesSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
};

export default LandingPage;
