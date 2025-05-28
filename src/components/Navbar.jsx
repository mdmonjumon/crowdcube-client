import { Link, NavLink, useLocation } from "react-router-dom";
import logo from '../assets/logos.png'
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { MdDarkMode, MdLightMode } from "react-icons/md";



const Navbar = () => {

    const [menu, setMenu] = useState(false)
    const [hover, setHover] = useState(false)
    const location = useLocation()
    const { user, signOutUser } = useContext(AuthContext)





    const links = <>
        <NavLink to='/' className='text-lg'>Home</NavLink>
        <NavLink to='/campaigns' className='text-lg'>All Campaign</NavLink>
        <NavLink to='/addCampaign' className='text-lg'>Add New Campaign</NavLink>
        <NavLink to='/myCampaign' className='text-lg'>My Campaign</NavLink>
        <NavLink to='/myDonations' className='text-lg'>My Donations</NavLink>

        {
            location.pathname === '/'
            &&
            <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" className="theme-controller" value='dark' />

                {/* light icon */}
                <MdLightMode className="swap-on h-6 w-10 fill-current" />

                {/* dark icon */}

                <MdDarkMode className="swap-off h-6 w-10 fill-current" />
            </label>
        }




    </>

    const handleSignOut = () => {
        signOutUser()
    }

    return (
        <div>
            <div className="navbar max-w-[1440px] mx-auto">
                <div className="navbar-start">
                    <div>
                        <div onClick={() => setMenu(!menu)} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul

                            tabIndex={0}
                            className={`lg:hidden absolute  flex flex-col gap-3 w-40 ${menu ? 'left-0 bg-base-100 rounded-box mt-3 w-52 p-2 shadow min-h-[calc(100vh-90px)] z-50' : '-left-60'}`}>
                            {links}
                        </ul>
                    </div>

                    <img className="h-20 w-52 size-full object-cover" src={logo} alt="logo" />
                </div>

                <div className="navbar-end gap-3 relative">
                    {
                        user ?
                            <>
                                <img onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} className="h-14 w-14 size-full rounded-full" src={user.photoURL} alt={user.displayName} />
                                {
                                    hover &&
                                    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="flex flex-col gap-3 absolute top-12 right-0 bg-base-100 p-5 z-50 min-w-max">
                                        <span>{user.displayName}</span>
                                        <button onClick={handleSignOut} className="btn btn-accent">Logout</button>
                                    </div>
                                }


                            </>
                            :
                            <>
                                <Link to='/register' className="text-lg">Register</Link>
                                <Link to='/login' className="text-lg">Login</Link>
                            </>
                    }
                </div>
            </div>

            <div className="hidden lg:flex items-center justify-center border bg-[#0A3B1E] text-white py-4">
                <ul className="menu menu-horizontal items-center max-w-[1440px] mx-auto px-1 gap-10">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;