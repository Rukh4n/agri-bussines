import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const AdminSearch = ({ auth, user, initialSearchQuery, initialSearchResults }) => {
    const [searchQuery, setSearchQuery] = useState(initialSearchQuery || '');
    const [searchResults, setSearchResults] = useState(initialSearchResults || []);

    const handleSearch = (e) => {
        e.preventDefault();
        router.post('/search', { search: searchQuery }, {
            onSuccess: (page) => {
                setSearchResults(page.props.data);
            },
            onError: (errors) => {
                console.error('Error fetching search results:', errors);
            }
        });
    };

    return (

        <div className="flex flex-col items-center">
            <form onSubmit={handleSearch} className="flex items-center mb-4">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Cari judul"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-white border rounded py-2 px-3 mr-2 focus:outline-none focus:shadow-outline"
                />
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                >
                    Cari
                </button>
            </form>
            <div className="w-full">
                {searchResults.length > 0 ? (
                    <table className="w-full border-collapse table-fixed">
                        <thead>
                            <tr>
                                <th className="w-1/3 py-2 px-4 border">Judul</th>
                                <th className="w-1/3 py-2 px-4 border">Konten</th>
                                <th className="w-1/3 py-2 px-4 border">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchResults.map((result, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border">{result.title}</td>
                                    <td className="py-2 px-4 border">{result.content}</td>
                                    <td className="py-2 px-4 border">
                                        <a href={`/posts/${result.slug}`} className="text-blue-500 hover:underline mr-2">Lihat</a>
                                        <a href={`/posts/${result.slug}/edit`} className="text-yellow-500 hover:underline mr-2">Edit</a>
                                        <button
                                            onClick={() => handleDelete(result.slug)}
                                            className="text-red-500 hover:underline"
                                        >
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="py-2">Tidak ada hasil yang ditemukan.</p>
                )}
            </div>
        </div>
    );
};

export default AdminSearch;
