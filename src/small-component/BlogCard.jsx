import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const { _id, title, description, imageUrl, category } = blog;
    const navigate = useNavigate();
    return (
        <div>
            <div className="cursor-pointer card bg-base-100 w-[330px] h-[340px] shadow-sm" onClick={() => navigate(`/blog/${_id}`)}>
                <figure>
                    <img className='h-40 w-full object-cover'
                        src={imageUrl}
                        alt={category} />
                </figure>
                <div className="p-2">
                    <button className='btn btn-secondary btn-outline btn-xs disabled:'>{category}</button>
                    <h2 className="card-title mt-2">{title}</h2>
                    <p dangerouslySetInnerHTML={{ __html: description.slice(0, 90) }}></p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard