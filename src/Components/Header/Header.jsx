import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiShoppingCart } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
const Header = () => {
    let links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><a>Statistics</a></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink to='/about'>About Us</NavLink></li>
    </>
    return (
        <div className='px-5 pt-5'>
            <div className='bg-[#9538E2] text-white rounded-t-xl'>
                <div className='w-10/12 mx-auto'>
                    <div id='sidebar' className="navbar">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="text-black menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    {links}
                                </ul>
                            </div>
                            <Link to='/' className="text-xl font-semibold">Gadget Heaven</Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {links}
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <button className=' rounded-full border p-2 text-black bg-white mr-3 '><GiShoppingCart></GiShoppingCart></button>
                            <button className=' rounded-full border p-2 text-black bg-white '><FaRegHeart></FaRegHeart></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;