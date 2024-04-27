import React from "react";
import NavBar from "../../Components/Users/NavBar";
import Footer from "../../Components/Users/Footer";

const userArticle = ({ article }) => {

    return (
        <>
            <NavBar />
            <div className="bg-black text-white p-20">
                <h1 className="text-4xl pb-10">{article.title}</h1>
                <p>{article.description}</p>
            </div>
            <Footer />
        </>
    )
}
export default userArticle