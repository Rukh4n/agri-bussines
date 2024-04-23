import React from "react";
import NavBar from "../Components/Users/NavBar";

const Welcome = () => {
    return (
        <div className="min-h-screen bg-gray-800 text-white">
            {/* Headr */}
            <NavBar/>
            {/* endHeader */}

            {/* Main contens */}
            <main className="bg-gradient-to-r from-blue-800 to-purple-300">
                <div className="py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold">Layanan Kami</h2>
                            <p className="mt-3 max-w-2xl mx-auto text-xl">
                                Kami menyediakan jasa pengembangan software dan engineering dengan standar industri terkini.
                            </p>
                        </div>
                        <div className="mt-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="p-6 max-w-sm bg-gray-900 rounded-lg border border-gray-700 shadow-md">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight">Software Engineering</h5>
                                    <p className="font-normal text-gray-400">Membangun dan mengembangkan software yang robust dan scalable.</p>
                                </div>
                                <div className="p-6 max-w-sm bg-gray-900 rounded-lg border border-gray-700 shadow-md">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight">Software Development</h5>
                                    <p className="font-normal text-gray-400">Mengembangkan aplikasi web dan mobile dengan teknologi terbaru.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Welcome;