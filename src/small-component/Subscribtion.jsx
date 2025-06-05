import React from 'react'

const Subscribtion = () => {
    return (
        <div className='max-w-5xl mx-auto mt-10 '>
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-10 rounded-3xl shadow-lg h-[350px] flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold text-center mb-5">Subscribe to Our Portal!</h2>
                <p className="text-center mb-5">Stay updated with the latest news and articles.</p>
                <form className="flex justify-center p-1 border border-gray-600 rounded-md w-1/2">
                    <input
                        type="email"
                        placeholder="Enter your email (example@gmail.com)"
                        className="p-2 outline-0 w-full"
                    />
                    <button className="btn btn-info  p-2 rounded-r-md">Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Subscribtion