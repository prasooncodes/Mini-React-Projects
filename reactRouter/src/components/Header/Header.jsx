import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { ChevronDown } from 'lucide-react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="shadow-md sticky top-0 z-50 bg-green-900">
            <nav className="px-4 lg:px-10 py-4 border-b border-green-800">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3">
                        <img src={Logo} className="h-16 sm:h-20" alt="PalmShade Inn Logo" />
                        <span className="self-center text-xl font-bold text-white hidden sm:inline">
                            PalmShade Inn
                        </span>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center space-x-4 lg:order-2">
                        <Link
                            to="#"
                            className="text-white hover:bg-green-800 focus:ring-4 focus:ring-green-700 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none transition"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-green-900 bg-orange-300 hover:bg-orange-400 focus:ring-4 focus:ring-orange-200 font-semibold rounded-lg text-sm px-4 py-2 focus:outline-none transition"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div
                        className={`${
                          menuOpen ? 'block' : 'hidden'
                        } w-full lg:flex lg:items-center lg:space-x-8 lg:order-1 lg:w-auto mt-4 lg:mt-0`}
                    >
                        <ul className="flex flex-col lg:flex-row text-base font-medium w-full space-y-2 lg:space-y-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 transition-colors duration-200 ${isActive ? 'text-orange-300' : 'text-green-100'} hover:text-orange-300`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 transition-colors duration-200 ${isActive ? 'text-orange-300' : 'text-green-100'} hover:text-orange-300`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 transition-colors duration-200 ${isActive ? 'text-orange-300' : 'text-green-100'} hover:text-orange-300`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li className="relative">
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="flex items-center py-2 pr-4 pl-3 text-green-100 hover:text-orange-300 transition-colors"
                                >
                                    Rooms <ChevronDown className="ml-1 h-4 w-4" />
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute bg-white shadow-lg rounded-md py-2 mt-2 w-48 z-50">
                                        <Link to="/rooms/deluxe" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100">Deluxe Room</Link>
                                        <Link to="/rooms/ocean-view" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100">Ocean View</Link>
                                        <Link to="/rooms/family-suite" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100">Family Suite</Link>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
