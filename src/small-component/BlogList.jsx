import React, { useState } from 'react'
import { blogs } from '../assets/dummy';
import BlogCard from './BlogCard';

const BlogList = () => {
    const blogCategories = ["All", "Technology", "Health", "Lifestyle", "Travel", "Food", "Education", "Finance", "Entertainment"];
    const [menu, setMenu] = useState("All");
    return (
        <div className='w-11/12 md:w-2/3 mx-auto mt-16'>
            <div className='flex md:justify-center overflow-x-scroll'>
                {/* blog category */}
                {
                    blogCategories.map((item) => (
                        <div key={item} className='relative'>
                            <button onClick={() => setMenu(item)} className={`btn btn-sm btn-outline btn-info rounded-full m-2 ${menu == item && 'btn-active'}`}>
                                {item}
                            </button>
                        </div>
                    ))
                }
            </div>
            <div className='grid grid-cols-1 justify-items-center md:grid-cols-3 gap-3 '>
                {
                    blogs.filter((blog) => menu == "All" ? true : blog.category == menu).map((blog) => <BlogCard key={blog._id} blog={blog} />)
                }
            </div>
        </div>
    )
}

export default BlogList