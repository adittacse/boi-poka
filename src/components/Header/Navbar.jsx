import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const links = <>
        <Link to="/" className="mr-8">Home</Link>
        <Link to="/about" className="mr-8">About</Link>
        <Link to="/listed-books" className="mr-8">Listed Books</Link>
        <Link to="/pages-to-read">Pages to Read</Link>
    </>

    return (
        <div className="navbar font-work-sans mt-8">
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
                <a className="font-bold text-[28px] primary-color">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn-primary font-semibold px-7 py-[18px] mr-4">Sign In</a>
                <a className="btn-secondary font-semibold px-7 py-[18px]">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;