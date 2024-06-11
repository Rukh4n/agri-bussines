import React from 'react';

const Headers = () => {
    return (
        <header className='text-white h-screen flex items-center justify-center bg-gradient-to-r from-indigo-950 to-black'>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div className="text-center md:text-left mb-20 pl-10">
                        <h1 className="text-2xl md:text-6xl font-bold">Software Development and Software Consultant</h1>
                        <a href="https://wa.me/085727165906"
                            className="mt-4 inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Hubungi kami</a>
                    </div>
                    <div className="flex justify-center md:justify-center">
                        <img src="/assets/images/disoftwa_logo.png" alt="Disoftwa Logo" width={400} className='rounded-xl' />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Headers;
