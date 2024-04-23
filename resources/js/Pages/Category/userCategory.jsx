import React from "react";

const userCategory = ({ category, articles }) => {
  
  const category_id = category.id

  const filteredArticles = articles.filter(articles => articles.category_id === category_id)
  
  console.log(filteredArticles)
  return (
    <>
      <section>
        <h1>{category.name}</h1>
        <div>
          <ul>
            {articles.map((article, index) => {
              return(
                <li key={index}>{article.name}</li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
export default userCategory