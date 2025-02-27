import React from "react";
import BlogExample1 from "../images/BlogExample1.jpg";
import BlogExample2 from "../images/BlogExample2.jpg";
import BlogExample3 from "../images/BlogExample3.jpg";
import BlogExample4 from "../images/BlogExample4.jpg";
import BlogExample5 from "../images/BlogExample5.jpg";
import BlogExample6 from "../images/BlogExample6.jpg";

const blogs = [
  {
    title: "Tech Blog",
    description:
      "Explorez les dernières tendances en technologie, y compris l'IA, le développement logiciel et le machine learning.",
    image: BlogExample1,
    date: "25 Février 2025",
  },
  {
    title: "Lifestyle Blog",
    description:
      "Conseils sur la santé, le bien-être et le développement personnel. Découvrez des astuces pour améliorer votre vie quotidienne.",
    image: BlogExample2,
    date: "20 Février 2025",
  },
  {
    title: "Travel Blog",
    description:
      "Des récits de voyages, des astuces pratiques et des conseils pour découvrir de nouvelles destinations.",
    image: BlogExample3,
    date: "15 Février 2025",
  },
  {
    title: "Food Blog",
    description:
      "Recettes simples et créatives pour tous les goûts. Découvrez des plats sains et savoureux avec des astuces de cuisine.",
    image: BlogExample4,
    date: "10 Février 2025",
  },
  {
    title: "Fashion Blog",
    description:
      "Les dernières tendances mode, des conseils de style et des inspirations pour créer des tenues adaptées à chaque occasion.",
    image: BlogExample5,
    date: "5 Février 2025",
  },
  {
    title: "Fitness Blog",
    description:
      "Des conseils pour atteindre vos objectifs de fitness, avec des routines d'entraînement et des astuces de nutrition.",
    image: BlogExample6,
    date: "1 Février 2025",
  },
];

const BlogSection = () => {
  return (
    <section className="py-12 px-6 md:px-20 text-center bg-gray-100">
      <h2 className="text-4xl font-bold mb-8 text-blue-500">Actualités & Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">

              <h3 className="text-xl font-semibold text-blue-500">{blog.title}</h3>
              
              <p className="mt-2 text-gray-600">{blog.description}</p>
              <p className="text-sm text-gray-500">Posté le : {blog.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
