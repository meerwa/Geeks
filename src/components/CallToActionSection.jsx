import React from "react";
import { Link } from "react-router-dom"; // Import de Link

const CallToActionSection = () => {
  return (
    <section className="bg-blue-600 text-white text-center py-12">
      <h2 className="text-2xl font-bold">Start Blogging Today!</h2>
      <p className="mt-2 text-lg">Join now and share your first story with the world.</p>
      
      <Link 
        to="/signup" 
        className="mt-6 inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200"
      >
        Sign Up Now
      </Link>
    </section>
  );
};

export default CallToActionSection;
