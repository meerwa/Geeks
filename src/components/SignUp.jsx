import React from "react";

const SignUp = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Image */}
      <div className="hidden md:flex md:w-1/2 bg-gray-200 items-center justify-center">
        <img
          src={require('../images/SignUpImg.jpg')}
          alt="Sign Up"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right side - Sign Up Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account? <a href="#" className="text-blue-500 hover:underline">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
