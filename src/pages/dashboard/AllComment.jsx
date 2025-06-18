import React from 'react'
import { blogs } from '../../assets/dummy';
import moment from 'moment'
import { MdDelete } from 'react-icons/md';

const AllComment = () => {
    const allComment = blogs.flatMap(blog => blog.comments);
    return (
        <div className='ms-2'>
            <h1 className='text-4xl font-bold text-center my-2'>All Comment</h1>
            <div>
                {
                    allComment.map((comment, index) => (
                        <div key={index} className='max-w-2xl border bg-blue-50 rounded-lg px-3 py-1 my-1 mx-auto '>
                            <div className='flex justify-between'>
                                <p className='font-semibold'>{comment?.userName}</p>
                                <p>{moment(comment?.createdAt).startOf('day').fromNow()}</p>
                            </div>
                            <p>"{comment?.comment}"</p>
                            <div className='flex justify-end gap-4'>
                                <button className='btn btn-outline hover:bg-green-900 bg-green-300 hover:text-white btn-xs'>Approve</button>
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