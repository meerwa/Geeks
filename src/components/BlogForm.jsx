import React, { useState } from 'react';

const BlogForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  const [date, setDate] = useState('');

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const blogData = {
      title,
      body,
      image,
      date,
    };

    onSubmit(blogData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center"> {/* Fond gris et centrage */}
      <div className="w-full sm:w-2/5 p-6 bg-white rounded-lg shadow-lg "> {/* Largeur 40% sur grands écrans */}
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Ajouter un nouveau Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">Titre du blog:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">Description du blog:</label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">Image du blog:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-gray-600 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {image && <img src={image} alt="Preview" className="mt-4 rounded-lg w-32" />}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Soumettre
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
