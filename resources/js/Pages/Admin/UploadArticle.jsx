import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router } from '@inertiajs/react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const UploadArticle = ({ user, auth }) => {
  const [data, setData] = useState({
    title: '',
    slug: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

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
    let newErrors = {};

    if (!data.title) {
      newErrors.title = 'Title is required';
    }
    if (!data.description) {
      newErrors.description = 'Description is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Simulate posting data to the server
      router.post('upload-article-upload', data);
    }
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
              required
            />
            {errors.title && <p className="text-red-500 text-xs mt-2">{errors.title}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-white text-sm font-bold mb-2">
              Deskripsi Artikel
            </label>
            <CKEditor
              editor={ClassicEditor}
              data={data.description}
              onChange={(event, editor) => {
                const newData = editor.getData();
                setData({ ...data, description: newData });
              }}
              className="bg-black text-white border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.description && <p className="text-red-500 text-xs mt-2">{errors.description}</p>}
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

export default UploadArticle;
