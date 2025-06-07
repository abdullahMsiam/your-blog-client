import React, { useState } from 'react'
import AdminNav from './AdminNav'
import { FaBars } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import { FaXmark } from 'react-icons/fa6'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className=''>
                <Navbar />
            </div>
            <div>
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
                    <div className="drawer-side mt-16 md:mt-0 w-40 ">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-gradient-to-bl from-blue-100 to-purple-50 text-base-content min-h-full w-80 ">
                            {/* Sidebar content here */}
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard