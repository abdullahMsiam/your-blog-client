import React from 'react'

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
    }
    return (
        <div>
            <div className="container mx-auto hero bg-gradient-to-r from-blue-100 to bg-purple-100 min-h-screen -mb-10">
                <div className="hero-content flex-col -mt-16 md:w-1/3 ">
                    <div className="text-center ">
                        <h1 className="text-4xl font-bold">Login now!</h1>
                        <h1 className="text-4xl font-bold">Login now!</h1>


                    </div>
                    <div className="card  w-full shadow-2xl ">
                        <div className="card-body">
                            <form onSubmit={handleSubmit} className="fieldset">
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input w-full bg-transparent" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input w-full bg-transparent" placeholder="Password" />
                                <input className="btn btn-neutral mt-4" type="submit" value="Login" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login