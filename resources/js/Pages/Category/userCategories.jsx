import React from 'react'

const userCategories = ({ categories }) => {
    return (
        <>
            <div>
                {categories.map((category, index) => {
                    return(
                        <h1>{category.name}</h1>
                    )
                })}
            </div>
        </>
    )
}

export default userCategories
