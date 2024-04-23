import React, { useState } from "react";
import { router } from '@inertiajs/react'

const CreateArticle = ({ categories }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: categories.length > 0 ? categories[0].id : "", // Assigning default category ID if available
    });

    // Handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Submit form data
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create slug from title
        const now = new Date();
        const uniqueSuffix = `${now.getDate()}_${now.getMonth() + 1}_${now.getFullYear()}_${now.getHours()}_${now.getMinutes()}_${now.getSeconds()}_${Math.random().toString(36).substr(2, 9)}`;
        const slug = `${formData.title.replace(/\s+/g, '_').toLowerCase()}_${uniqueSuffix}`;

        // Prepare FormData for submission
        const data = new FormData();
        data.append('title', formData.title);
        data.append('slug', slug);
        data.append('description', formData.description);
        data.append('category_id', formData.category);

        // Log formData
        console.log("Form Data:", formData);

        // Log data to be submitted
        console.log("Submitted Data:", Object.fromEntries(data.entries()));

        // Use Inertia.post to submit form data to the server
        router.post('/article/post', data);
        // Optional: Reset form data after successful submission
        setFormData({
            title: "",
            description: "",
            category: categories.length > 0 ? categories[0].id : "",
        });
    };

    return (
        <div className="w-full max-w-xs mx-auto">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Judul
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        placeholder="Masukkan judul artikel"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Deskripsi
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        placeholder="Tuliskan deskripsi artikel Anda"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                        Kategori
                    </label>
                    <select name="category" id="category" className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" onChange={handleChange} value={formData.category}>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Buat Artikel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateArticle;
