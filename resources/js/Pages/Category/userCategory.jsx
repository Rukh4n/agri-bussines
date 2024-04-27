import React from "react";
import NavBar from "../../Components/Users/NavBar";
import Footer from "../../Components/Users/Footer";

const userCategory = ({ category, articles }) => {
  const category_id = category.id;

  return (
    <>
      <NavBar />
      <section className="bg-black text-white p-10">
        <h1>{category.name}</h1>
        <div>
          {articles.map((article, index) => {
            return (
              <div key={index} className="my-10">
                <a href={`/blog/${article.slug}`}>
                  <h4>{article.title}</h4>
                </a>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default userCategory;
