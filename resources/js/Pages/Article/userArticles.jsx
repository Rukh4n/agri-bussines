import React from "react";
import NavBar from "../../Components/Users/NavBar";
import Footer from "@/Components/Users/Footer";

const UserArticles = ({ articles, categories }) => {
    return (
        <>
            <NavBar />
            <div className="grid grid-cols-4 gap-4">
                {articles.map((article, index) => {
                    const categoryId = article.category_id;
                    const categoryName = categories[categoryId]?.name;
                    const categorySlug = categories[categoryId]?.slug;
                    return (
                        <div key={index}>
                            <a href={`/blog/${article.slug}`}>
                                <h1>{article.title}</h1>
                            </a>
                            <a href={`/blog_kategori/${categorySlug}`}>
                                <p>{categoryName}</p>
                            </a>
                        </div>
                    );
                })}
            </div>
            <Footer/>
        </>
    );
};

export default UserArticles;
