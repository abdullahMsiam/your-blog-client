import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogs } from '../assets/dummy'
import moment from 'moment';

const Blog = () => {
    const id = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = blogs.find(blog => blog._id === id.id);
            setData(data);
        };
        fetchData();
        setLoading(false);
    }, []);

    console.log(blogs, id);

    return loading ? (
        <div>Loading.........</div>
    ) : (
        <div className='h-fit flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 -mb-10'>
            <div className="max-w-5xl mx-auto mt-10 card rounded-none pb-10 shadow-initial">
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-4xl font-bold text-center'>{data?.title}</h1>
                    <h2 className='text-lg text-gray-600'>"{data?.subTitle}"</h2>
                    <p className='mt-4 text-lg bg-gradient-to-b from-sky-300 to bg-purple-100 rounded-t-full px-2.5'>Author: {data?.author || "Anonymous Person"}</p>
                    <p className='bg-gradient-to-t to-purple-100 from-sky-300 px-3 rounded-b-full '>Published: {moment(data?.createdAt).format('Do MMMM YYYY')}</p>
                </div>
                <div className="card-body">
                    <div>
                        <img className='mx-auto w-fit rounded-2xl' src={data?.imageUrl} alt="" />
                    </div>
                    <div className='text-justify w-11/12 md:max-w-4xl mx-auto blog-content mt-6' dangerouslySetInnerHTML={{ __html: data?.description }}></div>

                </div>
            </div>

            <div className='max-w-5xl mx-auto mt-10'>
                <h1 className='text-3xl font-bold text-center mt-10'>Related Blogs</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
                    {blogs.filter(blog => blog._id !== data?._id).slice(0, 3).map(blog => (
                        <div key={blog._id} className="card bg-base-100 shadow-sm">
                            <figure>
                                <img className='h-40 w-full object-cover' src={blog.imageUrl} alt={blog.category} />
                            </figure>
                            <div className="p-2">
                                <button className='btn btn-secondary btn-outline btn-xs disabled:'>{blog.category}</button>
                                <h2 className="card-title mt-2">{blog.title}</h2>
                                <p dangerouslySetInnerHTML={{ __html: blog.description.slice(0, 90) }}></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog