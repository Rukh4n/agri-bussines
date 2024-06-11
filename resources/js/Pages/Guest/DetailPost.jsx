import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

const DetailArticle = ({ auth, post }) => {
  console.log(post)
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight mb-4">Profile</h2>}
    >
      <div>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
      </div>
    </AuthenticatedLayout>
  )
}

export default DetailArticle
