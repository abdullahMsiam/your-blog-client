import React from 'react'
import { Link } from 'react-router-dom'

const AdminNav = () => {
    return (
        <div className='bg-gradient-to-r from-blue-100 to-purple-100'>
            <div className="navbar container mx-auto md:px-24">
                <div className="flex-1">
                    <Link to={"/"}><h1 className='font-bold text-3xl cursor-pointer pl-20'>YourBlog</h1></Link>
                </div>
                <div className="flex-none">
                    <button className="btn btn-info rounded-full">Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminNav