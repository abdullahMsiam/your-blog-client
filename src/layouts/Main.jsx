import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import { useEffect } from 'react'

const Main = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
        <div className='bg-gradient-to-bl from-purple-50 to-blue-50'>
            <Navbar />
            <div className='container mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Main