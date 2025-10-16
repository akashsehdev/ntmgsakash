import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "About", path: "/about" },
    { label: "Tarun Rajput", path: "/tarun-rajput" },
    { label: "Our Talent", path: "/talent" },
    { label: "Programs", path: "/programspage" },
    { label: "Enroll Now", path: "/register" },
    { label: "Contact", path: "/contact" },
  ];

  return (

    <div className={`fixed top-0 left-0 w-full z-50 bg-transparent text-white px-6 md:px-[100px] mt-5 ${className}`}>
      {/* Flex container to organize logo, nav, icons */}
      <div className="flex items-center justify-between w-full">

        {/* Logo - Left */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              src="/newtalentlogo.png"
              alt="Logo"
              className="h-[55px] w-auto object-contain"
            />
          </Link>
        </div>

        {/* Nav Links - Center (desktop only) */}
        <nav className="hidden md:flex justify-center items-center flex-1">
          <div className="flex justify-center items-center rounded-[120px] backdrop-blur-sm bg-white/5 border border-white/10 shadow-lg transition-all duration-300">
            {navItems.map((item) => (
              <Link to={item.path} key={item.label}>
                <div
                  className={`px-6 py-2 mx-2 my-2 cursor-pointer transition-all duration-200 rounded-full ${location.pathname === item.path
                    ? "bg-white text-black font-medium"
                    : item.color
                    }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </nav>

        {/* Icons or Burger - Right */}
        <div className="flex items-center gap-4">
          {/* Desktop icons */}
          <div className="hidden md:flex gap-4 text-white text-lg items-center">
            <a href="https://www.instagram.com/newtalentmodelgrooming/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/newtalentmodelsgroomingschool" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/+919971957084" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://www.youtube.com/@TARUNRAJPUTMODELMENTOR" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>

          {/* Burger menu for mobile */}
          <div className="md:hidden flex items-center text-white text-2xl">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <IoMdClose /> : <>&#9776;</>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[80px] left-4 right-4 bg-white/10 backdrop-blur-xl rounded-2xl p-6 z-40 shadow-xl md:hidden">
          <div className="flex flex-col gap-2 text-white text-base font-medium">
            {navItems.map((item) => (
              <Link to={item.path} key={item.label}>
                <div
                  onClick={() => setIsOpen(false)}
                  className={`cursor-pointer text-center px-2 py-2 rounded-3xl ${location.pathname === item.path
                    ? "bg-white text-[green] font-semibold"
                    : item.color || "text-white"
                    }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}

            {/* Mobile Social Icons */}
            <div className="flex gap-4 mt-4">
              <a href="https://www.instagram.com/newtalentmodelgrooming/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/newtalentmodelsgroomingschool" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://wa.me/+919971957084" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
              <a href="https://www.youtube.com/@TARUNRAJPUTMODELMENTOR" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default Navbar;
