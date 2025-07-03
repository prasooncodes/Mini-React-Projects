import React from 'react';

function Contact() {
    return (
        <div className="relative flex items-top justify-center min-h-[700px] bg-gradient-to-br from-sky-50 to-emerald-100 sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden rounded-xl shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Contact Info */}
                        <div className="p-8 bg-white">
                            <h1 className="text-4xl text-green-900 font-extrabold tracking-tight">
                                Get in Touch with Us
                            </h1>
                            <p className="text-lg text-gray-600 mt-3">
                                We’d love to hear from you. Reach out for reservations, questions, or just to say hello!
                            </p>

                            <div className="flex items-center mt-8 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-7 h-7 text-green-700"
                                >
                                    <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="ml-4 font-medium">
                                    Palm Beach Road, Goa 403001, India
                                </span>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-7 h-7 text-green-700"
                                >
                                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.5 4.493a1 1 0 01-.5 1.21l-2.26 1.13a11.042 11.042 0 005.52 5.516l1.13-2.257a1 1 0 011.21-.502l4.49 1.498a1 1 0 01.69.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="ml-4 font-medium">
                                    +91 9936325315
                                </span>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-7 h-7 text-green-700"
                                >
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                                    <path d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="ml-4 font-medium">
                                    contact@palmshadeinn.com
                                </span>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="p-8 bg-emerald-50 flex flex-col justify-center">
                            <div className="flex flex-col mb-4">
                                <label htmlFor="name" className="mb-1 font-semibold text-green-900">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    className="py-3 px-4 rounded-md border border-gray-300 focus:border-green-600 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mb-4">
                                <label htmlFor="email" className="mb-1 font-semibold text-green-900">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="you@example.com"
                                    className="py-3 px-4 rounded-md border border-gray-300 focus:border-green-600 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mb-4">
                                <label htmlFor="message" className="mb-1 font-semibold text-green-900">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="How can we help you?"
                                    className="py-3 px-4 rounded-md border border-gray-300 focus:border-green-600 focus:outline-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="mt-2 bg-green-700 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-800 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;