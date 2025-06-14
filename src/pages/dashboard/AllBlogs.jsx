import React from 'react'
import { blogs } from '../../assets/dummy'
import BlogTableDt from '../../small-component/BlogTableDt'

const AllBlogs = () => {
    return (
        <div className='ms-1'>
            <div>
                <h1 className='text-3xl font-bold'>All Blogs List</h1>
                <div className='max-w-5xl mt-2'>
                    <table className='text-xs uppercase w-full overflow-auto bg-purple-100 rounded-2xl'>
                        <thead  >
                            <tr >
                                <th className='px-2 py-4'>#</th>
                                <th className='px-2 py-4'>Blog Title</th>
                                <th className='px-2 py-4'>Date</th>
                                <th className='px-2 py-4'>Status</th>
                                <th className='px-2 py-4'>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                blogs.map((blog, index) => (
                                    <BlogTableDt key={blog._id} blog={blog} index={index + 1} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllBlogs