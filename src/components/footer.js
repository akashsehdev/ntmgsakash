import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer1 = () => {
    return (
        <div className="mx-auto  bg-black py-16 xl:px-20 lg:px-12 sm:px-6 px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-8 gap-4">
                <div className="flex flex-col flex-shrink-0">
                    <div>
                        <img className="h-16" src="/newtalentlogo.png" alt="logo " />
                    </div>
                    <p className="text-sm leading-none text-white mt-4">G-28/1A, Main Market, Block J <br /> <br /> Rajouri Garden, New Delhi, Delhi, 110027</p>

                </div>

                <div>
                    <h2 className="text-base font-semibold leading-4 gap-4 text-white">Quick Links</h2>
                    {/* <p className="hover:text-gray-500 text-base leading-4 mt-6 text-white cursor-pointer">Home</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-white cursor-pointer">About</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-white cursor-pointer">Tarun Rajput</p> */}
                    <div className="flex flex-col">
                        <Link
                            to="/"
                            className="hover:text-gray-500 text-base leading-4 mt-6 text-white cursor-pointer transition duration-300"
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className="hover:text-gray-500 text-base leading-4 mt-6 text-white cursor-pointer transition duration-300"
                        >
                            About
                        </Link>

                        <Link
                            to="/tarun-rajput"
                            className="hover:text-gray-500 text-base leading-4 mt-6 text-white cursor-pointer transition duration-300"
                        >
                            Tarun Rajput
                        </Link>

                    </div>
                    <br />
                    <p><a href="https://wa.me/+919971957084" className="hover:text-gray-500 text-base leading-4  text-white cursor-pointer" target="_blank" rel="noopener noreferrer">
                        Contact Us
                    </a></p>
                </div>
                <div >
                    <label className="text-xl font-medium text-white">Social</label>
                    <div className="flex items-center gap-x-4 mt-4">

                        {/* <a href="https://www.instagram.com/newtalentmodelgrooming/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-white" />
                        </a>
                        <a href="https://www.youtube.com/@TARUNRAJPUTMODELMENTOR" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="text-white" />
                        </a> */}

                        <a href="https://www.instagram.com/newtalentmodelgrooming/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-white" />
                        </a>
                        <a href="https://www.facebook.com/newtalentmodelsgroomingschool" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="text-white" />
                        </a>
                        <a href="https://wa.me/+919971957084" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="text-white" />
                        </a>
                        <a href="https://www.youtube.com/@TARUNRAJPUTMODELMENTOR" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="text-white" />
                        </a>

                    </div>




                    <p className="text-sm leading-none text-white mt-4">info@ntmgs.in</p>
                    <br />

                    <p className="text-sm leading-none text-white mt-4">Copyright © 2024 NTMGS All rights reserved</p>


                </div>
            </div>

        </div >
    );
};

export default Footer1;
