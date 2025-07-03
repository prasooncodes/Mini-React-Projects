import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'; 

function Footer() {
    return (
        <footer className="bg-green-900 text-white border-t">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-10 lg:py-12">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src={Logo}
                                className="mr-3 h-24"
                                alt="PalmShade Inn Logo"
                            />
                        </Link>
                        <p className="mt-4 text-sm text-green-200 max-w-sm">
                            Escape to paradise at PalmShade Inn – where sun, sand, and serenity await you every day.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-orange-300">Resources</h2>
                            <ul className="text-green-200 font-medium space-y-2">
                                <li>
                                    <Link to="/" className="hover:text-white transition">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:text-white transition">About</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-orange-300">Follow us</h2>
                            <ul className="text-green-200 font-medium space-y-2">
                                <li>
                                    <a href="https://github.com/prasooncodes" className="hover:text-white transition" target="_blank" rel="noreferrer">Github</a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:text-white transition">Discord</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-orange-300">Legal</h2>
                            <ul className="text-green-200 font-medium space-y-2">
                                <li>
                                    <Link to="#" className="hover:text-white transition">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition">Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-8 border-green-700 sm:mx-auto" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-green-200 sm:text-center block mb-4 sm:mb-0">
                        © {new Date().getFullYear()} PalmShade Inn. All rights reserved.
                    </span>
                    <span className="text-sm text-green-300">
                        Made with ❤️ by <a href="https://github.com/prasooncodes" className="hover:underline text-white" target="_blank" rel="noopener noreferrer">Prasoon Mishra</a>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
