import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {

    const {userSignIn}= useContext(AuthContext)


    const handleLogIn = (e)=>{
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        userSignIn(email, password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log('error', error)
        })

    }


    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>

            <main className="max-w-[1440px] mx-auto my-10 px-3">
                <section className="card bg-base-100 w-full mx-auto max-w-xl shrink-0 shadow-2xl p-10">
                    <h3 className="text-center font-medium text-3xl my-10">Login Now!</h3>
                    <form onSubmit={handleLogIn}>
                        <fieldset className="fieldset gap-5">
                            {/* email */}
                            <div>
                                <label className="font-medium text-lg">Email</label>
                                <input name="email" type="email" className="input w-full" placeholder="email" required />
                            </div>

                            {/* password */}
                            <div>
                                <label className="font-medium text-lg">Password</label>
                                <input name="password" type="password" className="input w-full" placeholder="Password" required />
                            </div>

                            <div>
                                <p className='text-sm underline cursor-pointer'>Forgot Password?</p>
                            </div>

                            <input className="btn btn-accent" type="submit" value="Login" />
                        </fieldset>
                    </form>
                </section>
                <p className="text-center text-lg my-10">Don't have an account? <Link to='/register' className="text-rose-500">Register</Link></p>
            </main>

            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default Login;