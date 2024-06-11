import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router } from '@inertiajs/react';

const EditPost = ({ auth, post }) => {
  const slug = post.slug;
  const [data, setData] = useState({
    title: post.title,
    description: post.description,
  });

  const handleTitleChange = (e) => {
    setData({ ...data, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setData({ ...data, description: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.put(`/edit/article/${slug}`, data);
    console.log(data);
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight mb-4">Edit Post</h2>}
    ><div className="bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-white text-sm font-bold mb-2">
              Judul Artikel
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Judul Artikel"
              value={data.title}
              onChange={handleTitleChange}
              className="bg-black text-white  border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-white text-sm font-bold mb-2">
              Deskripsi Artikel
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Tulis Deskripsi Artikel"
              value={data.description}
              onChange={(e) => setData({ ...data, description: e.target.value })}
              className="bg-black text-white border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
          >
            Upload
          </button>
        </form>
      </div>

    </AuthenticatedLayout>
  );
};

export default EditPost;
