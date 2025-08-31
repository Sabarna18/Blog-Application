import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage, createdBy }) {

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-950 hover:bg-gray-800 transition duration-300 border-2 border-transparent hover:border-blue-800 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          <img src={`${appwriteService.getFilePreview(featuredImage)}&mode=admin`} alt={title}
            className='rounded-xl object-cover h-50 w-full' />

        </div>
        <h2
          className='text-xl text-white font-bold'
        >{title}</h2>
        <h3 className=' bg-slate-500 cursor-pointer inline-block hover:bg-slate-300 transition duration-300
         hover:border-black border-2 border-transparent rounded-md m-4 p-2 text-black'> posted by: {createdBy}</h3>
      </div>
    </Link>
  )
}


export default PostCard