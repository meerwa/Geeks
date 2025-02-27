import React, { useState } from "react";

const HandleMyBlogs = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Tech Blog",
      description: "Explorez les dernières tendances en technologie.",
      image: require("../images/BlogExample2.jpg"), // Image locale
    },
    {
      id: 2,
      title: "Lifestyle Blog",
      description: "Conseils sur la santé et le bien-être.",
      image: require("../images/BlogExample3.jpg"), // Image locale
    },
    {
      id: 3,
      title: "Voyage Blog",
      description: "Découvrez les meilleures destinations.",
      image: require("../images/BlogExample4.jpg"), // Image locale
    },
  ]);

  const [newBlog, setNewBlog] = useState({ title: "", description: "", image: "" });
  const [editingBlog, setEditingBlog] = useState(null);

  // Gérer l'upload d'image
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewBlog({ ...newBlog, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Ajouter un blog
  const addBlog = () => {
    if (!newBlog.title || !newBlog.description || !newBlog.image) return;
    setBlogs([...blogs, { ...newBlog, id: Date.now() }]);
    setNewBlog({ title: "", description: "", image: "" });
  };

  // Supprimer un blog
  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  // Préparer la modification
  const startEditing = (blog) => {
    setEditingBlog(blog);
    setNewBlog(blog);
  };

  // Mettre à jour un blog
  const updateBlog = () => {
    setBlogs(blogs.map((blog) => (blog.id === editingBlog.id ? newBlog : blog)));
    setEditingBlog(null);
    setNewBlog({ title: "", description: "", image: "" });
  };

  return (
    <section className="p-6">
      <h2 className="text-4xl font-bold mb-4 text-center text-blue-500">Gérer Mes Blogs</h2>

      {/* Formulaire d'ajout / modification */}
      <div className="mb-4 p-4 bg-gray-100 rounded-lg max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Titre"
          className="border p-2 rounded w-full mb-2"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="border p-2 rounded w-full mb-2"
          value={newBlog.description}
          onChange={(e) => setNewBlog({ ...newBlog, description: e.target.value })}
        />

        {/* Input file stylisé */}
        <label className="cursor-pointer bg-blue-500 text-white p-2 rounded w-full block text-center mb-2">
          📁 Choisir une image
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>

        {newBlog.image && (
          <img src={newBlog.image} alt="Preview" className="w-full h-32 object-cover rounded mb-2 border border-gray-300 shadow" />
        )}

        {editingBlog ? (
          <button onClick={updateBlog} className="bg-blue-500 text-white p-2 rounded w-full">
            Modifier
          </button>
        ) : (
          <button onClick={addBlog} className="bg-green-500 text-white p-2 rounded w-full">
            Ajouter
          </button>
        )}
      </div>

      {/* Liste des blogs avec une mise en page à 3 colonnes */}
      <div className="flex flex-wrap justify-center gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="w-[30%] bg-white shadow-lg p-4 rounded-lg">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded border border-gray-300" />
            <h3 className="text-xl font-semibold mt-2">{blog.title}</h3>
            <p className="text-gray-600">{blog.description}</p>
            <div className="mt-2 flex space-x-2">
              <button onClick={() => startEditing(blog)} className="bg-yellow-500 text-white px-3 py-1 rounded">
                ✏ Modifier
              </button>
              <button onClick={() => deleteBlog(blog.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                🗑 Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HandleMyBlogs;
