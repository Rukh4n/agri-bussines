import React from 'react'
import NavBar from "../../Components/Users/NavBar";

const userCategories = ({ categories }) => {
    return (
        <>
            <NavBar />
            <div>
                {categories.map((category, index) => {
                    return (
                        <h1>{category.name}</h1>
                    )
                })}
            </div>
        </>
    )
}

export default userCategories
