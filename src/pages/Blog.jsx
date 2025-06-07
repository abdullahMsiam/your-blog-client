import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogs } from '../assets/dummy'
import moment from 'moment';
import BlogCard from '../small-component/BlogCard';

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
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id]);

    console.log(blogs, id);

    return loading ? (
        <div className='flex items-center justify-center h-screen gap-1 text-info '>
            <span className="loading loading-ring loading-xl"></span>
            <span className="loading loading-ring loading-xl"></span>
            <span className="loading loading-ring loading-xl"></span>
        </div>
    ) : (
        <div className='h-fit -mt-10 bg-gradient-to-r from-blue-100 to-purple-100 -mb-10'>
            <div className="max-w-5xl mx-auto mt-10 card rounded-none">
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-4xl font-bold text-center'>{data?.title}</h1>
                    <h2 className='text-lg text-gray-600 text-center'>"{data?.subTitle}"</h2>
                    <p className='w-64 text-center mt-4 text-lg bg-gradient-to-b from-sky-300 to bg-purple-100 rounded-t-full px-2.5'>Author: {data?.author || "Anonymous Person"}</p>
                    <p className='w-64 text-center bg-gradient-to-b from-purple-100 to-sky-300 rounded-b-full px-2.5 '>Published: {moment(data?.createdAt).format('Do MMMM YYYY')}</p>
                </div>
                <div className="card-body">
                    <div>
                        <img className='mx-auto w-fit rounded-2xl' src={data?.imageUrl} alt="" />
                    </div>
                    <div className=' w-11/12 md:w-5/6 mx-auto blog-content mt-6' dangerouslySetInnerHTML={{ __html: data?.description }}></div>
                </div>
            </div>
            {/* comment */}
            <div className='max-w-3xl w-11/12 md:w-full mx-auto'>
                <h4 className='font-bold'>Comments({data?.comments.length})</h4>
                <div className='h-[350px] overflow-y-auto rounded-lg '>
                    {
                        data?.comments.map((comment, index) => (
                            <div key={index} className='bg-blue-50 p-4 rounded-lg my-0.5'>
                                <div className='flex items-center justify-between'>
                                    <p className='font-semibold'>{comment?.userName}</p>
                                    <p className='text-sm text-gray-600'>{moment(comment?.createdAt).startOf('day').fromNow()}</p>
                                </div>
                                <p className='mt-2'>{comment?.comment}</p>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <h4 className='font-bold mt-4'>Leave a Comment</h4>
                    <form className='flex flex-col gap-2'>
                        <input type="text" placeholder='Your Name' className='outline-0 border border-gray-400 rounded-lg px-2 w-full bg-blue-50 h-10' required />
                        <input type='text' placeholder='Your Comment' className='outline-0 border border-gray-400 rounded-lg px-2 w-full h-14 bg-blue-50' required></input>
                        <input className='btn btn-info rounded-full' type="submit" value="Share" />
                    </form>
                </div>
            </div>

            <div className='max-w-5xl mx-auto mt-10 pb-10'>
                <h1 className='text-3xl font-bold text-center mt-10'>Related Blogs</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 justify-items-center'>
                    {blogs.filter(blog => blog._id !== data?._id).slice(0, 3).map(blog => (
                        <BlogCard key={blog._id} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog