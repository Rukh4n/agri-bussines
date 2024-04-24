import React from "react";
import NavBar from "../../Components/Users/NavBar";

const userArticle = ({ article }) => {

    return (
        <>
            <NavBar />
            <div>
                <h1>{article.title}</h1>
                <p>{article.description}</p>
            </div>
        </>
    )
}
export default userArticle