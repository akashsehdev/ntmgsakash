import React from "react";
import Navbar from "../components/navbar";
import { Link, useLocation } from "react-router-dom";
import HomeBg from "../assets/home_bg.png"; // Default background image

const HeroSection = () => {
  const location = useLocation();

  const backgroundImages = {
    "/": HomeBg,
    "/talent":
      "https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&w=1600&q=80",
    "/work":
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=80",
    "/programspage":
      "https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&w=1600&q=80",
    "/about":
      "https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&w=1600&q=80",
    "/contact":
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1600&q=80",
  };

  const bgImage = backgroundImages[location.pathname] || backgroundImages["/"];

  return (
    <div
      className="relative h-[550px] md:h-screen w-full bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Navbar */}
      <div className="absolute text-white top-5 left-1/2 transform -translate-x-1/2 w-full px-4 md:px-0 z-10">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="absolute top-1/3 md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 text-white text-center">
        <h1 className=" text-3xl md:text-5xl font-bold drop-shadow-md">
          Welcome to NTMGS World
        </h1>
        <p className="mt-4 text-xl">
          Empowering models with confidence and style
        </p>

        <Link to="/register">
          <button className="inline-block mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition duration-300">
            Enroll Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
