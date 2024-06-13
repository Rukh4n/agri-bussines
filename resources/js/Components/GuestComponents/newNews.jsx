import React, { useEffect, useState } from 'react';

const NewNews = () => {
    const [newsData, setNewsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/newNews')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error fetching data');
                }
                return response.json();
            })
            .then((data) => {
                setNewsData(data);
            })
            .catch((error) => {
                console.error('Error:', error.message);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const newsDataRow = newsData?.data || [];

    return (
        <div className='bg-black text-white'>
            <h1 className='text-5xl text-center'>Artikel Terbaru</h1>
            <div className="py-20 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-10">
                {newsDataRow.map((news, index) => (
                    <div key={index} className="border p-5 rounded-md">
                        <a href={`/article/${news.slug}`}>
                            <h1 className="text-3xl font-bold">{news.title}</h1>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewNews;
