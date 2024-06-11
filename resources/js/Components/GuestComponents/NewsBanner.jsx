import React from 'react';

const NewsBanner = () => {
    return (
        <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/assets/images/disoftwa_hero_image.jpg')" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4">
                <h1 className="text-white text-3xl md:text-6xl font-bold mb-4">Selalu Cepat Tau</h1>
                <p className="text-white text-xl md:text-2xl font-bold">Selalu update tentang informasi teknologi terkini</p>
            </div>
        </div>
    );
}

export default NewsBanner;
