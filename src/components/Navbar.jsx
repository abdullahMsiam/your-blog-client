import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    // const navigate = useNavigate("/")
    return (
        <div className='bg-gradient-to-r from-blue-100 to-purple-100'>
            <div className="navbar container mx-auto md:px-10">
                <div className="flex-1">
                    <Link to={"/"}><h1 className='font-bold text-3xl cursor-pointer pl-12'>YourBlog</h1></Link>
                </div>
                <div className="flex gap-2">
                    <Link to={"/dashboard/home"}><button className="btn btn-info rounded-full">Login --
                    </button></Link>
                    <Link to={"/dashboard/home"}><button className="btn rounded-full btn-error">Logout
                    </button></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar