import React from "react";
import NavBar from "../../Components/Users/NavBar";

const userCategory = ({ category, articles }) => {

  const category_id = category.id

  // const filteredArticles = articles.filter(articles => articles.category_id === category_id)

  console.log(articles)
  return (
    <>
      <NavBar />
      <section>
        <h1>{category.name}</h1>
        <div>
          {articles.map((article, index) => {
            return (
              <>
                <div>
                  <a href={`/blog/${article.slug}`}>
                    <h4 key={index}>{article.title}</h4>
                  </a>
                </div>
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}
export default userCategory