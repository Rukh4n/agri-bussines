import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { router } from '@inertiajs/react';

export default function Dashboard({ auth, posts, meta }) {
    
    const next = posts.next_page_url;
    const current = posts.current_page;
    const prev_page = posts.prev_page_url;
    const datas = posts.data;

    const handleDelete = (slug) => {
        router.delete(`/article/${slug}`);
    };

    // Fungsi untuk menangani navigasi pagination
    const handlePagination = (url) => {
        if (url) {
            router.get(url);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className="mt-4 mx-auto w-full max-w-md text-white">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((post, index) => (
                            <tr key={post.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{index + 1 + (current - 1) * posts.per_page}</td> {/* Menampilkan nomor */}
                                <td className="px-6 py-4 whitespace-nowrap">{post.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <a href={`/article/${post.slug}`} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mr-3">
                                        Lihat
                                    </a>
                                    <a href={`/edit-article/${post.slug}`} className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 mr-3">
                                        Edit
                                    </a>
                                    <button
                                        onClick={() => handleDelete(post.slug)}
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Menambahkan navigasi pagination */}
                <div className="flex justify-between mt-4">
                    <button 
                        onClick={() => handlePagination(prev_page)} 
                        disabled={!prev_page}
                        className={`px-4 py-2 rounded ${!prev_page ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'} text-white`}
                    >
                        Sebelumnya
                    </button>
                    <button 
                        onClick={() => handlePagination(next)} 
                        disabled={!next}
                        className={`px-4 py-2 rounded ${!next ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'} text-white`}
                    >
                        Berikutnya
                    </button>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
