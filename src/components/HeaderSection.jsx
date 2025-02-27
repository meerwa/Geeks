import React from "react";
import { Link } from "react-router-dom"; // Import de Link
import WelcomeImg from "../images/first.jpg";

const HeaderSection = () => {
  return (
    <header className="relative bg-cover bg-center text-white py-16 text-center" 
      style={{ backgroundImage: `url(${WelcomeImg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
      
      <div className="absolute inset-0 bg-black opacity-25"></div>

      <h1 className="text-4xl font-bold mt-48 relative">Welcome to BlogNews</h1>
      <p className="mt-6 text-lg relative">Your space to share and discover amazing stories</p>
      
      <h2 className="text-xl mt-4 font-light relative">Join a community of passionate bloggers and readers</h2>

      <div className="mt-8 relative">
        <Link to="/signup" className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200 mr-4">
          Get Started
        </Link>
        <Link to="/login" className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-600">
          Connexion
        </Link>
      </div>

    </header>
  );
};

export default HeaderSection;
