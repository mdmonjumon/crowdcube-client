import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logos.png'
import { useState } from "react";


const Navbar = () => {

    const [menu, setMenu] = useState(false)

    const links = <>
        <NavLink to='/' className='text-lg'>Home</NavLink>
        <NavLink className='text-lg'>All Campaign</NavLink>
        <NavLink to='/addCampaign' className='text-lg'>Add New Campaign</NavLink>
        <NavLink className='text-lg'>My Campaign</NavLink>
        <NavLink className='text-lg'>My Donations</NavLink>

    </>

    return (
        <div>
            <div className="navbar max-w-[1440px] mx-auto">
                <div className="navbar-start">
                    <div>
                        <div onClick={()=>setMenu(!menu)} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                        
                            tabIndex={0}
                            className={`lg:hidden absolute  flex flex-col gap-3 w-40 ${menu? 'left-0 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow min-h-[calc(100vh-90px)]':'-left-60'}`}>
                            {links}
                        </ul>
                    </div>

                    <img className="h-20 w-52 size-full object-cover" src={logo} alt="logo" />
                </div>
                
                <div className="navbar-end gap-3">
                    <Link className="text-lg">Register</Link>
                    <Link className="text-lg">Login</Link>
                </div>
            </div>

            <div className="hidden lg:flex items-center justify-center border bg-[#0A3B1E] text-white py-4">
                <ul className="menu menu-horizontal max-w-[1440px] mx-auto px-1 gap-10">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;