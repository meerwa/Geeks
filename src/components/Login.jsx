import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import de Link et useNavigate

const Login = () => {
  const [email, setEmail] = useState("");        // Pour stocker l'email
  const [password, setPassword] = useState("");  // Pour stocker le mot de passe
  const [error, setError] = useState("");        // Pour afficher les erreurs
  const [loading, setLoading] = useState(false); // Pour afficher le chargement
  const navigate = useNavigate();                // Pour la redirection après la connexion réussie

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(""); // Reset l'erreur au début de la soumission

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Envoie l'email et le mot de passe
      });

      const data = await response.json();

      if (response.ok) {
        // Sauvegarder le token dans le localStorage
        localStorage.setItem("authToken", data.token);

        // Rediriger vers la page principale ou autre page protégée
        navigate("/blogs");
      } else {
        setError(data.message || "Erreur lors de la connexion");
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
          src={require('../images/LoginImg.jpg')}
          alt="Login"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

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
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
