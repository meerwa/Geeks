import React from "react";

const CallToActionSection = () => {
  return (
    <section className="bg-blue-600 text-white text-center py-12">
      <h2 className="text-2xl font-bold">Start Blogging Today!</h2>
      <p className="mt-2 text-lg">Join now and share your first story with the world.</p>
      <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200">
        Sign Up Now
      </button>
    </section>
  );
};

export default CallToActionSection;
