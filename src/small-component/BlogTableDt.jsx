import React from 'react'
import { MdDelete } from 'react-icons/md';

const BlogTableDt = ({ blog, index }) => {
    const { title, createdAt, isPublished } = blog;
    return (
        <tr className=''>
            <th className='px-2 py-2'>{index}</th>
            <th className='px-2 py-2'>{title}</th>
            <th className='px-2 py-2'>{createdAt}</th>
            <th className={`${isPublished ? "text-green-700" : "text-red-700"}`}>{isPublished ? "Published" : "Not Published"}</th>
            <th className='px-2 py-2 flex gap-2 justify-center'>
                <button className='btn btn-xs btn-outline btn-info'>{isPublished ? "Unpublish" : "Publish"}</button>
                <button className='btn btn-xs btn-error btn-outline'><MdDelete /></button>
            </th>
        </tr>
    )
}

export default BlogTableDt