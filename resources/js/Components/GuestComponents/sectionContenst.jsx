import React from 'react';

const SectionContenst = () => {
    return (
        <div className="bg-black text-white section-contents px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* bagian kiri */}
                <div className="flex items-center justify-center px-5 pb-20 pt-20">
                    <p className='text-4xl'>Berikut merupakan contoh dari berbagai project yang telah kami kerjakan semenjak kami hadir di tahun 2024</p>
                </div>
                {/* bagian kanan */}
                <div className="grid grid-cols-2 gap-4 px-5 pb-20 pt-20">
                    <img src="/assets/images/disoftwa_web_development.jpeg" alt="" className="w-full" />
                    <img src="/assets/images/disoftwa_data_analytic.jpeg" alt="" className="w-full" />
                    <img src="/assets/images/disoftwa_wordpres_example.jpeg" alt="" className="w-full" />
                    <img src="/assets/images/disoftwa_data_analitic_example.jpeg" alt="" className="w-full" />
                </div>
            </div>
        </div>
    );
}

export default SectionContenst;
