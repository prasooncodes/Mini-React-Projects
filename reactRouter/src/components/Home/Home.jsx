import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import overwaterVillas from '../../assets/images/overwater-villas.jpg';

function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Hero Section */}
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-20 bg-gradient-to-br from-emerald-50 to-sky-100">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center">
                    {/* Logo/Image */}
                    <div className="w-full sm:w-1/2 flex justify-center sm:justify-start mb-8 sm:mb-0">
                        <img
                            src={Logo}
                            alt="PalmShade Inn Logo"
                            className="w-full sm:w-5/6 md:w-4/5 lg:w-[500px] xl:w-[600px] h-auto rounded-xl shadow-lg"
                            loading="lazy"
                        />
                    </div>

                    {/* Hero Text */}
                    <div className="w-full sm:w-1/2 max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-extrabold sm:text-5xl leading-tight tracking-wide text-green-900">
                            Welcome to PalmShade Inn
                            <span className="block text-2xl sm:text-3xl font-medium text-gray-700 mt-4">
                                A Tranquil Oasis by the Sea
                            </span>
                        </h2>

                        <p className="text-base sm:text-lg text-gray-600">
                            Discover a haven of palm trees, golden sands, and luxurious relaxation. Your beachside escape awaits.
                        </p>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-green-700 rounded-lg hover:bg-green-800 transition"
                            to="/book"
                        >
                            Book Your Stay
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Feature Image Section */}
            <div className="grid place-items-center sm:mt-24 mt-16 px-4">
                <img
                    src={overwaterVillas}
                    alt="PalmShade Beach Villas"
                    className="rounded-2xl shadow-xl max-w-4xl w-full"
                    loading="lazy"
                />
            </div>

            {/* Welcome Message */}
            <section className="text-center py-16 px-6 sm:px-16">
                <h1 className="text-3xl sm:text-5xl font-bold text-green-900 mb-6">
                    Experience Serenity & Luxury
                </h1>
                <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-700">
                    Nestled along the sun-drenched coastline, PalmShade Inn offers a perfect blend of comfort, elegance, and natural beauty. Whether you're here to unwind or explore, our beachfront resort is your sanctuary.
                </p>
            </section>
        </div>
    );
}

export default Home;
