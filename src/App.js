// import './App.module.css';
// import LandingPageMain from './components/LandingPageMain';
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
// import NavBar from "./components/NavBar";
// import BlogSection from "./components/Blog Section";
// import HandleMyBlogs from "./components/HandleMyBlogs";

// const isAuthenticated = () => {
//   return localStorage.getItem("authToken") !== null; 
// };

// const PrivateRoute = ({ children }) => {
//   return isAuthenticated() ? children : <Navigate to="/login" />;
// };

// const App = () => {
//   return (
//     <Router>
//       <PrivateRoute><NavBar /></PrivateRoute>
//       <Routes>
//         <Route path="/" element={<LandingPageMain />} />
//         <Route path="/blogs" element={<PrivateRoute><BlogSection /></PrivateRoute>} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/my-blogs" element={<PrivateRoute><HandleMyBlogs /></PrivateRoute>} />
//         <Route path="*" element={<Navigate to="/Login" />} /> 
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import './App.module.css';
import LandingPageMain from './components/LandingPageMain';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import BlogSection from "./components/BlogSection";
import HandleMyBlogs from "./components/HandleMyBlogs";

const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null; 
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <AuthLayout>
        <Routes>
          <Route path="/" element={<LandingPageMain />} />
          <Route path="/blogs" element={<PrivateRoute><BlogSection /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/my-blogs" element={<PrivateRoute><HandleMyBlogs /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthLayout>
    </Router>
  );
};

// Composant pour afficher le NavBar uniquement si l'utilisateur est authentifié
const AuthLayout = ({ children }) => {
  const location = useLocation();
  const publicPaths = ["/", "/login", "/signup"];

  return (
    <>
      {isAuthenticated() && !publicPaths.includes(location.pathname) && <NavBar />}
      {children}
    </>
  );
};

export default App;
