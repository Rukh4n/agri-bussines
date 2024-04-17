import React from "react";
import { router } from "@inertiajs/react";

const Article = ({ articles }) => {
    console.log("data :", articles);

    const handleDelete = (slug) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus artikel ini?")) {
            router.delete(`/article/destroy/${slug}`).then(() => {
                // Refresh data setelah berhasil dihapus
                router.reload();
            }).catch(error => {
                console.error("Error:", error);
            });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <a href="article/create" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded px-10 mb-4">
                Upload Artikel
            </a>

            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="Song">No</th>
                        <th className="Artist">Judul</th>
                        <th>Action</th> {/* Tambah kolom untuk tombol aksi */}
                    </tr>
                </thead>
                <tbody>
                    {articles.map((article, index) => (
                        <tr key={index}>
                            <td className="Song px-10">{index + 1}</td>
                            <td className="Artist px-10">{article.title}</td>
                            <td className="flex space-x-2">
                                <a href={`/article/view/${article.slug}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    View
                                </a>
                                <a href={`/article/edit/${article.slug}`} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                    Edit
                                </a>
                                <button onClick={() => handleDelete(article.slug)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Article;
