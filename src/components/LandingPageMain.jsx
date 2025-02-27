import React from "react";
import HeaderSection from "./HeaderSection";
import FeaturesSection from "./FeaturesSection";
import BlogExamplesSection from "./BlogExamplesSection";
import TestimonialsSection from "./TestimonialsSection";
import CallToActionSection from "./CallToActionSection";

// ******************************************!!! Remarque !!*********************************************** 
// On attendant de configurer le Router vous trouver ci joint d'autres deux composants pour LOGIN ET SignUp & BLOGFORM

const LandingPageMain = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <HeaderSection />
      <FeaturesSection />
      <BlogExamplesSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
};

export default LandingPageMain;
