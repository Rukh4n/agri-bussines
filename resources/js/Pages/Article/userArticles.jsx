import React from "react";
import NavBar from "../../Components/Users/NavBar";
import Footer from "@/Components/Users/Footer";

const UserArticles = ({ articles, categories }) => {
    return (
        <>
            <NavBar />
            <div className="grid p-20 bg-black">
                {articles.map((article, index) => {
                    const categoryId = article.category_id;
                    const categoryName = categories[categoryId]?.name;
                    const categorySlug = categories[categoryId]?.slug;

                    return (
                        <div key={index} className="mb-4 p-4 rounded-lg"> 
                            <a href={`/blog/${article.slug}`}>
                                <h1 className="text-white text-4xl">{article.title}</h1>
                            </a>
                            <a href={`/blog_kategori/${categorySlug}`}>
                                <p className="text-white text-xs">{categoryName}</p>
                            </a>
                        </div>
                    );
                })}
            </div>
            <Footer />
        </>
    );
};

export default UserArticles;
