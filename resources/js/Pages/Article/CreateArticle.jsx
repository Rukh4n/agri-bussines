import React, { useState } from "react";
import { router } from "@inertiajs/react";

const CreateArticle = ({ categories }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
    });

    // Handle input changes
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    // Submit form data
    const handleSubmit = (e) => {
        e.preventDefault();

        // Use router.post to submit form data to the server
        router.post('post', formData); // Assuming route name is 'articles.store'

        // Optional: Reset form data after successful submission
        setFormData({ title: "", description: "", category: "" });
    };

    return (
        <>
            <div className="w-full max-w-xs mx-auto">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Judul
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="title"
                            type="text"
                            placeholder="Masukkan judul artikel"
                            name="title" // Add name attribute
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
                            name="description" // Add name attribute
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                            Kategori
                        </label>
                        <select name="category" id="category" className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" onChange={handleChange}>
                            {categories.map((category, index) => (
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
        </>
    );
};

export default CreateArticle;
