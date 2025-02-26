import React from "react";
import HeroSection from "./components/HeaderSection";
import FeaturesSection from "./components/FeaturesSection";
import BlogExamplesSection from "./components/BlogExamplesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CallToActionSection from "./components/CallToActionSection";
import BlogForm from "./components/BlogForm";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";

// ******************************************!!! Remarque !!*********************************************** 
// On attendant de configurer le Router vous trouver ci joint d'autres deux composants pour LOGIN ET SignUp

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <NavBar/>
      <HeroSection />
      <FeaturesSection />
      <BlogExamplesSection />
      <TestimonialsSection />
      <CallToActionSection />
      {/* <Login /> */}
      {/* <SignUp/> */}
      {/* <BlogForm /> */}

    </div>
  );
};

export default LandingPage;
