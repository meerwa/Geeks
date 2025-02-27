import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { FaBook } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom"; 

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    fetch("http://localhost:8080/logout", {
      method: "POST",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then(() => {
        localStorage.removeItem("authToken"); 
        setIsLoggedIn(false);
        navigate("/login"); // ✅ Redirection vers login
        console.log("loged");
      })
      .catch((error) =>
        console.error("Erreur lors de la déconnexion", error)
      );
  };


  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={require("../images/LOGO.jpg")} className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-blue-500">
            <i>BlogNews</i>
          </span>
        </Link>

        {/* Bouton menu pour mobile */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Ouvrir le menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Menu */}
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 rounded-lg bg-gray-50 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 space-y-2 md:space-y-0 md:space-x-4">
            {isLoggedIn && (
              <>
                {/* Lien vers Actualités */}
                <li>
                  <Link
                    to="/Blogs"
                    className="flex items-center space-x-2 py-2 px-4 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  >
                    <FaBook className="text-white" /> <span>Actualités</span>
                  </Link>
                </li>

                {/* Lien vers Mes Blogs */}
                <li>
                  <Link
                    to="/my-blogs"
                    className="flex items-center space-x-2 py-2 px-4 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  >
                    <FaBook className="text-white" /> <span>Mes Blogs</span>
                  </Link>
                </li>

                {/* Bouton Déconnexion */}
                <li>
                  <button
                    onClick={handleLogout}
                    className="block py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    Déconnexion
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
