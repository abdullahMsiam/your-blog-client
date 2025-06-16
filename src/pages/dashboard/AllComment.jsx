import React from 'react'
import { blogs } from '../../assets/dummy'
import { MdDelete } from 'react-icons/md';

const AllComment = () => {
    const allComment = blogs.flatMap(blog => blog.comments);
    return (
        <div className='ms-2'>
            <h1 className='text-4xl font-bold text-center my-2'>All Comment</h1>
            <div>
                {
                    allComment.map((comment, index) => (
                        <div key={index} className='max-w-2xl border bg-blue-100 rounded-lg px-3 py-1 my-1 mx-auto '>
                            <p>{comment?.comment}</p>
                            <div className='flex justify-end-safe gap-4'>
                                <button className='btn btn-outline btn-success btn-xs'>Approve</button>
                                <button className='btn btn-outline btn-error btn-xs'><MdDelete /></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllComment