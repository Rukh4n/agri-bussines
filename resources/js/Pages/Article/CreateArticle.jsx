import React, { useState } from "react";

const CreateArticle = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission

        const { title, description, category } = formData;

        console.log("Form Data:", { title, description, category });

        // Reset form data (optional)
        setFormData({ title: "", description: "", category: "" });
    };

    return (
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
                        name="title" // Add name attribute for form handling
                        value={formData.title} // Set value from state
                        onChange={handleChange} // Attach onChange handler
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                        Deskripsi
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        placeholder="Tuliskan deskripsi artikel Anda"
                        name="description" // Add name attribute for form handling
                        value={formData.description} // Set value from state
                        onChange={handleChange} // Attach onChange handler
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                        Kategori
                    </label>
                    <select name="category" id="category" className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" onChange={handleChange}>
                        <option value="">Pilih Kategori</option>
                        <option value="kategori-1">Kategori 1</option>
                        <option value="kategori-2">Kategori 2</option>
                        <option value="kategori-3">Kategori 3</option>
                        <option value="kategori-4">Kategori 4</option>
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
