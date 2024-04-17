import React, { useState } from "react";
import { router } from "@inertiajs/react";

const EditArticle = ({ categories, article }) => {
    const [formData, setFormData] = useState({
        title: article.title,
        description: article.description,
        category_id: article.category_id,
    });

    // Handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        router.patch(`/article/update/${article.slug}`, formData);
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
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category_id">
                        Kategori
                    </label>
                    <select name="category_id" id="category_id" className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" onChange={handleChange} value={formData.category_id}>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Perbarui Artikel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditArticle;
