import React from 'react'
import { blogs } from '../../assets/dummy'

const DashboardHome = () => {

    const totalApprovedComments = blogs.reduce((total, blog) => {
        if (Array.isArray(blog.comments)) {
            const approved = blog.comments.filter((c) => c.isApproved).length;
            return total + approved;
        }
        return total;
    }, 0);

    const unpublishedCount = blogs.filter(blog => blog.isPublished === false).length;

    console.log(totalApprovedComments)
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6 justify-items-center-safe  mt-5'>
                <div className='bg-purple-100 w-2xs h-20 flex flex-col justify-center px-3 rounded-xl'>
                    <p className='text-xl font-semibold -ms-1'>Total Blogs</p>
                    <p>{blogs?.length}</p>
                </div>
                <div className='bg-purple-100 w-2xs h-20 flex flex-col justify-center px-3 rounded-xl'>
                    <p className='text-xl font-semibold -ms-1'>Total Comments</p>
                    <p>{totalApprovedComments}</p>
                </div>
                <div className='bg-purple-100 w-2xs h-20 flex flex-col justify-center px-3 rounded-xl'>
                    <p className='text-xl font-semibold -ms-1'>Draft</p>
                    <p>{unpublishedCount}</p>
                </div>
            </div>

            <div className='mt-10 ms-2'>
                <h1 className='text-3xl font-bold '>Recent Blogs</h1>
                <div className='max-w-5xl mt-2'>
                    <table className='text-xs uppercase w-full overflow-auto bg-purple-100 rounded-2xl'>
                        <thead>
                            <tr>
                                <th className='px-2 py-4'>#</th>
                                <th className='px-2 py-4'>Blog Title</th>
                                <th className='px-2 py-4'>Date</th>
                                <th className='px-2 py-4'>Status</th>
                                <th className='px-2 py-4'>Action</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DashboardHome