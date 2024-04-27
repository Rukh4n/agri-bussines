import React from 'react';

const Services = () => {
    return (
        <section className="bg-dark">
            <div className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-6xl font-extrabold">Layanan Kami.</h2>
                    </div>
                    <div className="mt-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="p-6 max-w-sm rounded-lg border border-gray-700 shadow-md">
                                <img src='/icons/setting.svg' className="animate-spin font-normal text-gray-400" />
                                <h5 className="mb-2 text-2xl font-bold tracking-tight">Software Enginering</h5>
                            </div>
                            <div className="p-6 max-w-sm rounded-lg border border-gray-700 -md">
                                <img src='/icons/data-analysis-svgrepo-com.svg' className="font-normal text-gray-400" />
                                <h5 className="mb-2 text-2xl font-bold tracking-tight">Data Analisis</h5>                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
