import React from 'react';
import { CgWebsite } from "react-icons/cg";
import { IoIosGitNetwork } from "react-icons/io";
import { CiDatabase } from "react-icons/ci";

const ServicesBanner = () => {
    return (
        <div className='text-white bg-black px-5 md:px-20 py-10 pb-40'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='border border-white rounded-xl p-3 flex flex-col items-center shadow-white shadow-lg'>
                    <CgWebsite className='text-8xl mb-4' />
                    <h1 className='text-2xl'>Web Development</h1>
                    <p className='py-5 text-center'>Kami melayani pembuatan website menggunakan berbagai teknologi seperti WordPress, PHP murni, maupun JavaScript murni.</p>
                </div>
                <div className='border border-white rounded-xl p-3 flex flex-col items-center shadow-white shadow-lg'>
                    <IoIosGitNetwork className='text-8xl mb-4' />
                    <h1 className='text-2xl'>Web System Development</h1>
                    <p className='py-5 text-center'>Melayani pembuatan sistem berbasis web menggunakan framework seperti Laravel dan NodeJs</p>
                </div>
                <div className='border border-white rounded-xl p-3 flex flex-col items-center shadow-white shadow-lg'>
                    <CiDatabase className='text-8xl mb-4' />
                    <h1 className='text-2xl'>Data Analisis</h1>
                    <p className='py-5 text-center'>Melayani analisis berbagai macam data untuk menemukan insight yang lebih mendalam menggunakan Python, Google Spreadsheet maupun Excel</p>
                </div>
            </div>
        </div>
    );
}

export default ServicesBanner;
