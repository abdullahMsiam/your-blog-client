import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

const Main = () => {
    return (
        <>
            <Navbar />
            <div className='container mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Main