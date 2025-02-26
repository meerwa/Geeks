import React from "react";
import HeroSection from "./components/HeaderSection";
import FeaturesSection from "./components/FeaturesSection";
import BlogExamplesSection from "./components/BlogExamplesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CallToActionSection from "./components/CallToActionSection";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

// ******************************************!!! Remarque !!*********************************************** 
// On attendant de configurer le Router vous trouver ci joint d'autres deux composants pour LOGIN ET SignUp

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <HeroSection />
      <FeaturesSection />
      <BlogExamplesSection />
      <TestimonialsSection />
      <CallToActionSection />
      {/* <Login /> */}
      {/* <SignUp/> */}
    </div>
  );
};

export default LandingPage;
