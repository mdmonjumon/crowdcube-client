import React, { useContext, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa6';
import { GoEye, GoEyeClosed } from 'react-icons/go';

const Login = () => {

    const { userSignIn, signInWithGoogle } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)


    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        userSignIn(email, password)
            .then(result => {
                if (result.user.email) {
                    Swal.fire({
                        icon: "success",
                        title: "Signin successful",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    if (location.state) {
                        navigate(location.state)
                    }
                    else {
                        navigate('/')
                    }

                }

            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Try again with valid email and password",
                    showConfirmButton: false,
                    timer: 2000
                });
            })

    }


    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                if (result.user.email) {
                    if (location.state) {
                        navigate(location.state)
                    }
                    else {
                        navigate('/')

                    }
                }
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Try again",
                    showConfirmButton: false,
                    timer: 2000
                });
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
                            <div className='relative'>
                                <label className="font-medium text-lg">Password</label>
                                <input name="password" type={`${showPassword? 'text':'password'}`} className="input w-full" placeholder="Password" required />

                                <div onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-9 z-10 cursor-pointer">

                                    {
                                        showPassword ? <GoEyeClosed size='25' /> : <GoEye size='25' />
                                    }

                                </div>

                            </div>



                            <input className="btn btn-accent" type="submit" value="Login" />
                        </fieldset>
                    </form>
                </section>
                <p className="text-center text-lg my-10">Don't have an account? <Link to='/register' className="text-rose-500">Register</Link></p>

                <div className='w-fit mx-auto'>
                    <button onClick={handleSignInWithGoogle} className='btn btn-accent text-lg'><FaGoogle color='#4285F4' /> Login with Google</button>
                </div>
            </main>

            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default Login;