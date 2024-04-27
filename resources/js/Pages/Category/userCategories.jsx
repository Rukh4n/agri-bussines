import React from 'react';
import NavBar from '../../Components/Users/NavBar';
import Footer from '../../Components/Users/Footer';

const userCategories = ({ categories }) => {
    return (
        <>
            <NavBar />
            <div className="flex flex-col  p-20 justify-center bg-black py-10 text-white">
                {categories.map((category, index) => {
                    return (
                        <div key={index} className=''>
                            <a href={`/blog_kategori/${category.slug}`}>
                                <h1 className="text-4xl my-10">{category.name}</h1>
                            </a>
                        </div>
                    );
                })}
            </div>
            <Footer />
        </>
    );
};

export default userCategories;
