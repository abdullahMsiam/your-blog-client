import React, { useState } from 'react'
import { FaBars, FaHome } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import { FaXmark } from 'react-icons/fa6'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    return (
        <div>
            <div className=''>
                <Navbar />
            </div>
            <div className='mx-auto'>
                <div className="drawer lg:drawer-open ">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col static">
                        {/* Page content here */}
                        <Outlet />
                        <label htmlFor="my-drawer-2" className="btn  bg-transparent drawer-button absolute -mt-12 w-12 lg:hidden ">
                            {
                                !isOpen ? (
                                    <FaBars className='text-2xl font-bold' onClick={() => setIsOpen(!isOpen)} />
                                ) : (
                                    <FaXmark className='text-2xl font-bold' onClick={() => setIsOpen(!isOpen)} />
                                )
                            }
                        </label>
                    </div>
                    <div className="drawer-side mt-16 md:mt-0 w-40 md:w-64 ">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className=""></label>
                        <ul className="menu bg-gradient-to-bl from-blue-50/70 to-purple-50/70 md:from-blue-100 md:to-purple-50 min-h-full w-full md:w-56 flex flex-col gap-1 ">
                            {/* Sidebar content here */}
                            {/* btn */}
                            <Link className={`btn btn-sm rounded-sm flex flex-row-reverse justify-evenly ${location.pathname === "/dashboard/home" ? "btn btn-active btn-secondary" : "btn-secondary btn-outline"}`} to={"/dashboard/home"}> <span><FaHome /></span> <span>Home</span> </Link>
                            {/* btn */}
                            <Link className={`btn btn-sm rounded-sm flex flex-row-reverse justify-evenly ${location.pathname === "/dashboard/home" ? "btn btn-active btn-secondary" : "btn-secondary btn-outline"}`} to={"/dashboard/home"}> <span><FaHome /></span> <span>Home</span> </Link>
                            {/* btn */}
                            <Link className={`btn btn-sm rounded-sm flex flex-row-reverse justify-evenly ${location.pathname === "/dashboard/home" ? "btn btn-active btn-secondary" : "btn-secondary btn-outline"}`} to={"/dashboard/home"}> <span><FaHome /></span> <span>Home</span> </Link>
                            {/* btn */}
                            <Link className={`btn btn-sm rounded-sm flex flex-row-reverse justify-evenly ${location.pathname === "/dashboard/home" ? "btn btn-active btn-secondary" : "btn-secondary btn-outline"}`} to={"/dashboard/home"}> <span><FaHome /></span> <span>Home</span> </Link>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard