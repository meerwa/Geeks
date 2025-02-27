import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importer useNavigate pour redirection

const SignUp = () => {
  const [username, setUsername] = useState("");  // Pour stocker le nom d'utilisateur
  const [email, setEmail] = useState("");        // Pour stocker l'email
  const [password, setPassword] = useState("");  // Pour stocker le mot de passe
  const [confirmPassword, setConfirmPassword] = useState("");  // Pour la confirmation du mot de passe
  const [error, setError] = useState("");        // Pour afficher les erreurs
  const [loading, setLoading] = useState(false); // Pour afficher le chargement
  const [successMessage, setSuccessMessage] = useState(""); // Message de succès
  const navigate = useNavigate();                // Pour la redirection après inscription réussie

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Afficher le message de succès
        setSuccessMessage(data.message || "Utilisateur créé avec succès !");
        
        // Rediriger vers la page de login après 2 secondes
        setTimeout(() => {
          navigate("/login", { state: { message: data.message || "Utilisateur créé avec succès !" } });
        }, 2000);
      } else {
        setError(data.message || "Erreur lors de l'inscription");
      }
    } catch (error) {
      setError("Erreur de connexion au serveur");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex md:w-1/2 bg-gray-200 items-center justify-center">
        <img
          src={require('../images/SignUpImg.jpg')}
          alt="Sign Up"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            {successMessage && <p className="text-green-500 text-sm text-center">{successMessage}</p>}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              disabled={loading}
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
