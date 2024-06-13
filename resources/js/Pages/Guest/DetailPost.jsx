import React from 'react';
import MyGuestLayout from '@/GuestLayout/MyGuestLayout';

const DetailArticle = ({ auth, post }) => {
  return (
    <MyGuestLayout>
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: post.description }} />
      </div>
    </MyGuestLayout>
  );
};

export default DetailArticle;
