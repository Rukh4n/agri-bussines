import React from "react";
import NavBar from "../Components/Users/NavBar";
import Footer from "@/Components/Users/Footer";
import Headers from "@/Components/Headers";
import Services from "@/Components/Services";
import NewArticles from "@/Components/NewArticles";

const Welcome = ({ new_articles }) => {
    console.log(new_articles);
    return (
        <div className="min-h-screen bg-gray-800 text-white">
            {/* Headr */}
            <NavBar />
            {/* endHeader */}

            {/* Main contens */}
            <Headers />
            <Services />
            <NewArticles />
            <Footer />
        </div>
    );
};

export default Welcome;