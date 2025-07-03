import React from 'react';
import beachVillas from '../../assets/images/beach-villas.jpg';

function About() {
    return (
        <div className="py-20 bg-gradient-to-br from-emerald-50 to-sky-100">
            <div className="container mx-auto px-6 text-gray-700 md:px-12 xl:px-20">
                <div className="flex flex-col-reverse md:flex-row items-center gap-10">
                    {/* Text Section */}
                    <div className="md:w-7/12 lg:w-6/12">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-green-900 mb-6">
                            Discover the Story of PalmShade Inn
                        </h2>
                        <p className="text-lg leading-relaxed">
                            PalmShade Inn was born from a love of nature, tranquility, and beachfront bliss. Nestled along the serene coastline, we offer guests a warm blend of tropical charm and modern luxury.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed">
                            Whether you're enjoying a sunrise over the waves or relaxing under palm trees, every moment here is designed for peace, comfort, and unforgettable memories.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-5/12 lg:w-6/12">
                        <img
                            src={beachVillas}
                            alt="Beach Villas"
                            className="rounded-xl shadow-xl w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
