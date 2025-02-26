import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="py-12 px-6 md:px-20 text-center bg-gray-200">
      <h2 className="text-2xl font-bold">What Our Users Say</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <p className="italic">
            "BlogNews completely transformed my blogging experience! It's user-friendly, and I was able to customize my blog easily with their templates. Highly recommend it for anyone starting a blog."
          </p>
          <p className="mt-4 font-semibold">- Alex Johnson</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <p className="italic">
            "The community is amazing, and I’ve connected with talented writers worldwide. The platform is easy to use and allows for great customization of my blog."
          </p>
          <p className="mt-4 font-semibold">- Sarah Lee</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <p className="italic">
            "BlogNews made blogging easy for me, even as a beginner. The interface is intuitive, and the support is excellent. It’s a perfect platform for both newbies and experienced bloggers."
          </p>
          <p className="mt-4 font-semibold">- Michael Brown</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
