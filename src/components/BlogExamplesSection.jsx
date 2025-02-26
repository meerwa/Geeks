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
    description: "Explorez les dernières tendances en technologie, y compris l'IA, le développement logiciel et le machine learning. Des guides pratiques et des analyses pour les passionnés de tech.",
    image: BlogExample1,
  },
  {
    title: "Lifestyle Blog",
    description: "Conseils sur la santé, le bien-être et le développement personnel. Découvrez des astuces pour améliorer votre vie quotidienne et maintenir un équilibre sain.",
    image: BlogExample2,
  },
  {
    title: "Travel Blog",
    description: "Des récits de voyages, des astuces pratiques et des conseils pour découvrir de nouvelles destinations et planifier vos aventures à travers le monde.",
    image: BlogExample3,
  },
  {
    title: "Food Blog",
    description: "Recettes simples et créatives pour tous les goûts. Découvrez des plats sains, savoureux et faciles à préparer, avec des astuces de cuisine pour tous les niveaux.",
    image: BlogExample4,
  },
  {
    title: "Fashion Blog",
    description: "Les dernières tendances mode, des conseils de style et des inspirations pour créer des tenues adaptées à chaque occasion.",
    image: BlogExample5,
  },
  {
    title: "Fitness Blog",
    description: "Des conseils pour atteindre vos objectifs de fitness, avec des routines d'entraînement, des astuces de nutrition et des conseils pour rester motivé.",
    image: BlogExample6,
  },
  // Vous pouvez ajouter d'autres blogs ici...
];

const BlogExamplesSection = () => {
  return (
    <section className="py-12 px-6 md:px-20 text-center bg-gray-100">
      <h2 className="text-2xl font-bold">Blog Examples</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={blog.image} alt={`Blog Example ${index + 1}`} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="mt-2 text-gray-600">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogExamplesSection;
