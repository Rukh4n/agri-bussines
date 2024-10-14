import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router } from '@inertiajs/react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const UploadArticle = ({ user, auth, categories }) => {
  console.log(categories);

  const [data, setData] = useState({
    title: '',
    slug: '',
    description: '',
    category_id: '',
    new_category: '',
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
    if (!data.category_id) {
      newErrors.category_id = 'Category is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      router.post('upload-article-upload', data);
    }
  };

  const handleSaveCategory = () => {
    if (data.new_category.trim() === '') {
      setErrors({ ...errors, new_category: 'New category name is required' });
    } else {
      // Kirim kategori baru ke route "category-upload"
      router.post('/category-upload', { name: data.new_category }).then(() => {
        // Reset setelah menyimpan kategori baru
        setData({ ...data, new_category: '' });
      });
    }
  };
  console.log("category: ", categories);

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
              className="bg-black text-white border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            {errors.title && <p className="text-red-500 text-xs mt-2">{errors.title}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="new_category" className="block text-white text-sm font-bold mb-2">
              Tambah Kategori Baru
            </label>
            <div className="flex">
              <input
                type="text"
                name="new_category"
                id="new_category"
                placeholder="Masukkan kategori baru"
                value={data.new_category}
                onChange={(e) => setData({ ...data, new_category: e.target.value })}
                className="bg-black text-white border rounded-l w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                type="button"
                onClick={handleSaveCategory}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
            </div>
            {errors.new_category && <p className="text-red-500 text-xs mt-2">{errors.new_category}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="category_id" className="block text-white text-sm font-bold mb-2">
              Pilih Kategori
            </label>
            <select
              name="category_id"
              id="category_id"
              value={data.category_id}
              onChange={(e) => setData({ ...data, category_id: e.target.value })}
              className="bg-black text-white border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="" className="text-white">Pilih Kategori</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.category_name}
                </option>
              ))}
            </select>
            {errors.category_id && <p className="text-red-500 text-xs mt-2">{errors.category_id}</p>}
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
