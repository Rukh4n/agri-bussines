import React, { useState } from "react";
import { router } from '@inertiajs/react'

const CreateCategory = ({ auth }) => {
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
        generateSlug(e.target.value); // Panggil fungsi generateSlug saat input berubah
    };

    const generateSlug = (input) => {
        const randomSuffix = Math.floor(Math.random() * 10000); // Bilangan acak antara 0 dan 9999
        const timestamp = Date.now(); // Timestamp saat ini
        const generatedSlug = `${input.toLowerCase().replace(/\s/g, "-")}-${timestamp}-${randomSuffix}`;
        setSlug(generatedSlug); // Update nilai slug
    };
    const data = {
        "name": name,
        "slug": slug
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post('post', data, {
            preserveState: (page) => Object.keys(page.props.errors).length,
        })
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Full name"
                        aria-label="Full name"
                        value={name}
                        onChange={handleChange}
                    />
                    <button
                        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="submit"
                    >
                        Buat
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateCategory;
