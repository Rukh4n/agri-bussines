import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { router } from '@inertiajs/react';

export default function Dashboard({ auth, posts, meta }) {
    
    const next = posts.next_page_url ;
    const current = posts.current_page ;
    const prev_page = posts.prev_page_url ;
    console.log(prev_page)
    const datas = posts.data;
    console.log(posts)


    const handleDelete = (slug) => {
        router.delete(`/article/${slug}`);
        // console.log(`Deleting post with slug: ${slug}`);
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
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((post) => (
                            <tr key={post.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{post.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <a href={`/article/${post.slug}`} className="text-blue-500 hover:underline mr-2">
                                        Lihat
                                    </a>
                                    <a href={`/edit-article/${post.slug}`} className="text-yellow-500 hover:underline mr-2">
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
                >
            </div>
        </AuthenticatedLayout>
    );
}