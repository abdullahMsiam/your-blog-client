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

    console.log(totalApprovedComments)
    return (
        <div className='container mx-auto'>
            <div>
                <div>
                    <p>Total Blogs</p>
                    <p>{blogs?.length}</p>
                </div>
                <div>
                    <p>Total Comments</p>
                    <p>{totalApprovedComments}</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardHome