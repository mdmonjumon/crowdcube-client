import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logos.png'


const Navbar = () => {

    const links = <>
    <NavLink className='text-lg'>Home</NavLink>
    <NavLink className='text-lg'>All Campaign</NavLink>
    <NavLink className='text-lg'>Add New Campaign</NavLink>
    <NavLink className='text-lg'>My Campaign</NavLink>
    <NavLink className='text-lg'>My Donations</NavLink>

    </>

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                
                <img className="h-20 w-1/2 size-full object-cover" src={logo} alt="logo" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="text-lg">Register</Link>
            </div>
        </div>
    );
};

export default Navbar;