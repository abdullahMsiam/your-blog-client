import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate("/")
    return (
        <div className="navbar bg-gradient-to-r from-blue-100 to-purple-100">
            <div className="flex-1">
                {/* <Link to={"/"}>
                    <img className='h-12 w-40' src="/src/assets/common-img/logo-2.png" alt="" />
                </Link> */}
                <h1 onClick={() => navigate()} className='font-bold text-3xl cursor-pointer'>YourBlog</h1>
            </div>
            <div className="flex-none">
                <button className="btn btn-info rounded-full">Login --
                </button>
            </div>
        </div>
    )
}

export default Navbar