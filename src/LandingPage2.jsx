// import React from "react";
// import { FaRegSmile, FaUsers, FaPaintBrush } from "react-icons/fa";
// import WelcomeImg from "./images/first.jpg";
// import BlogExample1 from "./images/first.jpg";
// import BlogExample2 from "./images/first.jpg";
// import BlogExample3 from "./images/first.jpg";

// const blogs = [
//   {
//     title: "Tech Blog",
//     description: "Explorez les dernières tendances en technologie, y compris l'IA, le développement logiciel et le machine learning. Des guides pratiques et des analyses pour les passionnés de tech.",
//     image: BlogExample1,
//   },
//   {
//     title: "Lifestyle Blog",
//     description: "Conseils sur la santé, le bien-être et le développement personnel. Découvrez des astuces pour améliorer votre vie quotidienne et maintenir un équilibre sain.",
//     image: BlogExample2,
//   },
//   {
//     title: "Travel Blog",
//     description: "Des récits de voyages, des astuces pratiques et des conseils pour découvrir de nouvelles destinations et planifier vos aventures à travers le monde.",
//     image: BlogExample3,
//   },
//   {
//     title: "Food Blog",
//     description: "Recettes simples et créatives pour tous les goûts. Découvrez des plats sains, savoureux et faciles à préparer, avec des astuces de cuisine pour tous les niveaux.",
//     image: BlogExample1,
//   },
//   {
//     title: "Fashion Blog",
//     description: "Les dernières tendances mode, des conseils de style et des inspirations pour créer des tenues adaptées à chaque occasion.",
//     image: BlogExample2,
//   },
//   {
//     title: "Fitness Blog",
//     description: "Des conseils pour atteindre vos objectifs de fitness, avec des routines d'entraînement, des astuces de nutrition et des conseils pour rester motivé.",
//     image: BlogExample3,
//   },
//   // Vous pouvez ajouter d'autres blogs ici...
// ];

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">
//       {/* Hero Section */}
//       <header className="relative bg-cover bg-center text-white py-16 text-center" style={{ backgroundImage: `url(${WelcomeImg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
//         {/* Superposition sombre */}
//         <div className="absolute inset-0 bg-black opacity-25"></div>

//         <h1 className="text-4xl font-bold mt-48 relative">Welcome to BlogNews</h1> {/* Augmenter la marge avec mt-48 */}
//         <p className="mt-6 text-lg relative">Your space to share and discover amazing stories</p> {/* Ajout de la marge pour le paragraphe */}
        
//         {/* Sous-titre supplémentaire */}
//         <h2 className="text-xl mt-4 font-light relative">Join a community of passionate bloggers and readers</h2>

//         {/* Liens d'appel à l'action */}
//         <div className="mt-8 relative">
//             <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200 mr-4">
//             Get Started
//             </button>
//             <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-600">
//             Learn More
//             </button>
//         </div>

//         {/* Ajout d'icônes pour plus d'interactivité */}
//         <div className="mt-8 relative">
//             <a href="#features" className="text-white mx-4 hover:text-blue-600">
//             <i className="fa fa-cogs text-3xl"></i> {/* Exemple d'icône pour les fonctionnalités */}
//             </a>
//             <a href="#testimonials" className="text-white mx-4 hover:text-blue-600">
//             <i className="fa fa-comments text-3xl"></i> {/* Exemple d'icône pour les témoignages */}
//             </a>
//             <a href="#contact" className="text-white mx-4 hover:text-blue-600">
//             <i className="fa fa-envelope text-3xl"></i> {/* Exemple d'icône pour les contacts */}
//             </a>
//         </div>
//         </header>



//       {/* Features Section */}
//       <section className="py-12 px-6 md:px-20 text-center">
//         <h2 className="text-2xl font-bold">Why Choose BlogNews?</h2>
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="p-6 bg-white shadow-md rounded-lg">
//             <FaRegSmile className="mx-auto mb-4 text-blue-600 text-4xl" />
//             <h3 className="text-xl font-semibold">Easy to Use</h3>
//             <p className="mt-2 text-gray-600">Create and publish posts effortlessly.</p>
//           </div>
//           <div className="p-6 bg-white shadow-md rounded-lg">
//             <FaUsers className="mx-auto mb-4 text-blue-600 text-4xl" />
//             <h3 className="text-xl font-semibold">Engaging Community</h3>
//             <p className="mt-2 text-gray-600">Connect with writers and readers worldwide.</p>
//           </div>
//           <div className="p-6 bg-white shadow-md rounded-lg">
//             <FaPaintBrush className="mx-auto mb-4 text-blue-600 text-4xl" />
//             <h3 className="text-xl font-semibold">Customizable Themes</h3>
//             <p className="mt-2 text-gray-600">Personalize your blog with beautiful designs.</p>
//           </div>
//         </div>
//       </section>
      
//       {/* Blog Examples Section */}
//       <section className="py-12 px-6 md:px-20 text-center bg-gray-100">
//         <h2 className="text-2xl font-bold">Blog Examples</h2>
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {blogs.map((blog, index) => (
//             <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <img src={blog.image} alt={`Blog Example ${index + 1}`} className="w-full h-48 object-cover" />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold">{blog.title}</h3>
//                 <p className="mt-2 text-gray-600">{blog.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-12 px-6 md:px-20 text-center bg-gray-200">
//         <h2 className="text-2xl font-bold">What Our Users Say</h2>
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="p-6 bg-white shadow-md rounded-lg">
//             <p className="italic">"BlogNews changed my blogging experience completely!"</p>
//             <p className="mt-4 font-semibold">- Alex Johnson</p>
//           </div>
//           <div className="p-6 bg-white shadow-md rounded-lg">
//             <p className="italic">"The community is amazing, and the themes are gorgeous."</p>
//             <p className="mt-4 font-semibold">- Sarah Lee</p>
//           </div>
//           <div className="p-6 bg-white shadow-md rounded-lg">
//             <p className="italic">"So easy to use, even for beginners! Highly recommended."</p>
//             <p className="mt-4 font-semibold">- Michael Brown</p>
//           </div>
//         </div>
//       </section>
      
//       {/* Call to Action Section */}
//       <section className="bg-blue-600 text-white text-center py-12">
//         <h2 className="text-2xl font-bold">Start Blogging Today!</h2>
//         <p className="mt-2 text-lg">Join now and share your first story with the world.</p>
//         <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200">
//           Sign Up Now
//         </button>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;
