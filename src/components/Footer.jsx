import React from 'react'

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center p-10 mt-10 bg-gray-950 bottom-0 text-white">
            <div className='flex flex-col-reverse gap-7 md:flex-row justify-between items-center w-full max-w-5xl mx-auto '>
                <aside className='flex flex-col items-center gap-1'>
                    <img className='w-48 rounded-2xl' src="/src/assets/common-img/logo-2.png" alt="" />
                    <p className="font-bold">
                        YourBlog -- See yourself in the world of blogging!
                        <br />
                        Providing service since 2025
                    </p>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav>
                    <div className="">
                        <h1 className='font-bold text-lg underline'>Follow Us</h1>
                        <div className='flex md:flex-col items-start gap-2 mt-2'>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="link link-hover">Facebook</a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="link link-hover">Twitter</a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="link link-hover">Instagram</a>
                        </div>
                    </div>
                </nav>
            </div>
        </footer>
    )
}

export default Footer