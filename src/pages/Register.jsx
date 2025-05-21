import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Register = () => {

    const { registerUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const userDetails = {
            name:name,
            photo:photo,
            email:email
        }

        registerUser(email, password)
            .then(result => {
                if (result.user) {
                    fetch('http://localhost:5000/users', {
                        method:"POST",
                        headers:{
                            'content-type':'application/json'
                        },
                        body:JSON.stringify(userDetails)
                    })
                    .then(res=>res.json())
                    .then(result=>{
                        console.log(result);
                    })
                }
            })
            .catch(error => {
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
                    <h3 className="text-center font-medium text-3xl my-10">Register Now!</h3>
                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset gap-5">

                            {/*  name */}
                            <div>
                                <label className="font-medium text-lg">Your Name</label>
                                <input name="name" type="text" className="input w-full" placeholder="Your Name" required />
                            </div>

                            {/* image */}
                            <div>
                                <label className="font-medium text-lg">Photo URL</label>
                                <input name="photo" type="text" className="input w-full" placeholder="Photo url" required />
                            </div>

                            {/* email */}
                            <div>
                                <label className="font-medium text-lg">Register Email</label>
                                <input name="email" type="email" className="input w-full" placeholder="email" required />
                            </div>

                            {/* password */}
                            <div>
                                <label className="font-medium text-lg">Password</label>
                                <input name="password" type="password" className="input w-full" placeholder="Password" required />
                            </div>

                            <input className="btn btn-accent" type="submit" value="Register" />
                        </fieldset>
                    </form>
                </section>
                <p className="text-center text-lg my-10">Already have an account? <Link to='/login' className="text-rose-500">Login</Link></p>
            </main>

            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default Register;