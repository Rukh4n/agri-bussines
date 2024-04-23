import React from "react";
import NavBar from "../../Components/Users/NavBar";

const UserArticles = ({ articles, categories }) => {


    return (
        <>
            <NavBar />

            <div className="grid grid-cols-4 gap-4">
                {articles.map((article, index) => {
                    const catgory_id = article.category_id

                    return (
                        <div key={index}>
                            <a href={`/blog/${article.slug}`}>
                                <h1>{article.title}</h1>
                            </a>

                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default UserArticles;
