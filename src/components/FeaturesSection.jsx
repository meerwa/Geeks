import React from "react";
import { FaRegSmile, FaUsers, FaPaintBrush } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section className="py-12 px-6 md:px-20 text-center">
      <h2 className="text-2xl font-bold">Why Choose BlogNews?</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <FaRegSmile className="mx-auto mb-4 text-blue-600 text-4xl" />
          <h3 className="text-xl font-semibold">Easy to Use</h3>
          <p className="mt-2 text-gray-600">Create and publish posts effortlessly.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <FaUsers className="mx-auto mb-4 text-blue-600 text-4xl" />
          <h3 className="text-xl font-semibold">Engaging Community</h3>
          <p className="mt-2 text-gray-600">Connect with writers and readers worldwide.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <FaPaintBrush className="mx-auto mb-4 text-blue-600 text-4xl" />
          <h3 className="text-xl font-semibold">Customizable Themes</h3>
          <p className="mt-2 text-gray-600">Personalize your blog with beautiful designs.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
