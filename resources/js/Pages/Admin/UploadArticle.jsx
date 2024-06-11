import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router } from '@inertiajs/react';
// import { Jodit } from 'jodit';
// import HTMLReactParser from 'html-react-parser';


const UploadArticle = ({ user, auth }) => {
  const [data, setData] = useState({
    title: '',
    slug: '',
    description: '',
  });

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    const newSlug = generateSlug(newTitle);
    setData({ ...data, title: newTitle, slug: newSlug });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate posting data to the server
    router.post('upload-article-upload', data);
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight mb-4">Profile</h2>}
    >
      <div className="bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
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
              className="bg-black text-white border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
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
          {/* <Jodit></Jodit> */}
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

export default UploadArticle;
