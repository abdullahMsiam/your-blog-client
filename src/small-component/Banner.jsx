import React from 'react'
import { GiBiceps } from "react-icons/gi";

const Banner = () => {
    return (
        <div className='mt-10'>
            <div className='animate-bounce text-center w-11/12 md:w-1/4 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 transform duration-50 rounded-3xl md:rounded-full shadow-lg '>
                <h1 className=' gap-2'>Latest: Experience blogging with Ai <span className='inline-block font-bold text-black text-xl'><GiBiceps /></span> </h1>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className=' mt-5 text-4xl md:text-5xl font-bold text-center'>Hey, Find your blog <br /> from <span className='text-info'>YourBlog...</span></h1>
                <p className='text-center w-4/5 text-xl mt-5 text-gray-600'>Share your thoughts, read inspiring stories, and connect with <br /> voices that matter.</p>
            </div>
            <div className='w-80 p-1  text-center mt-6 border-2 border-gray-400 rounded-full mx-auto '>
                <form action="" className='flex items-center justify-between'>
                    <input className='outline-0 px-2' type="text" placeholder='Search your keyword' />
                    <input className='btn btn-soft btn-info rounded-full' type="submit" value="Search" />
                </form>
            </div>
        </div>
    )
}

export default Banner