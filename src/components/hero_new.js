import React from "react";
import Navbar from "../components/navbar";
import { Link, useLocation } from "react-router-dom";
import HomeBg from "../assets/home_bg2.png"; // Default background image
import tarun_1 from "../assets/tarun_2.JPG";
import programs_banner from "../assets/programs/programs_banner.jpeg"; // Example program banner image

const HeroSection = () => {
  const location = useLocation();

  const backgroundImages = {
    "/": HomeBg,
    "/talent":
      HomeBg,
    "/tarun-rajput": tarun_1,
    "/work":
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=80",
    "/programspage": programs_banner,
    "/talent": "https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&w=1600&q=80",
    "/register": "https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&w=1600&q=80",
    // "https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&w=1600&q=80",
    "/about":
      "https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&w=1600&q=80",
    "/contact":
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1600&q=80",
  };
  const contentMap = {
    "/": {
      title: "Welcome to NTMGS World",
      description: "Empowering models with confidence and style",
      a: (
        <>
          <b>10000+</b> students trained <br />
          <b>10+</b> years of experience mentor <br />
          <b>100+</b> batches completed <br />
          <b>Provide career guidance</b>
        </>
      ),
    },


    "/talent": {
      title: "Discover Raw Talent",
      description: "Where potential meets opportunity in the world of modeling.",
    },
    "/tarun-rajput": {
      title: "Model Mentor Tarun Rajput",
      description: "Guiding aspiring models with years of experience and expertise.",
    },
    "/work": {
      title: "Our Portfolio Speaks",
      description: "Explore the stories we've told through style, posture, and grace.",
    },
    "/programspage": {
      title: "Explore Our Programs",
      description: "A step-by-step path to transform you into a confident model.",
    },
    "/about": {
      title: "About NTMGS",
      description: "Building a nurturing environment where creativity thrives.",
    },
    "/register": {
      title: "Register Now",
      description: "Join our community and start your modeling journey today!",
    },
    "/contact": {
      title: "Connect with Us",
      description: "Reach out for queries, enrollments, or collaborations.",
    },
  };

  const bgImage = backgroundImages[location.pathname] || backgroundImages["/"];
  const currentContent = contentMap[location.pathname] || contentMap["/"];

  // return (
  // <div
  //   className="relative h-[550px] md:h-screen w-full bg-cover bg-center transition-all duration-500"
  //   style={{
  //     backgroundImage: `url('${bgImage}')`,
  //   }}
  // >
  //   {/* Overlay */}
  //   <div className="absolute inset-0 bg-black/30 z-0" />

  //   {/* Navbar */}
  //   <div className="absolute text-white top-5 left-1/2 transform -translate-x-1/2 w-full px-4 md:px-0 z-10">
  //     <Navbar />
  //   </div>

  //   {/* Hero Content */}
  //   <div className="absolute top-1/3 md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 text-white text-center">
  //     <h1 className=" text-3xl md:text-5xl font-bold drop-shadow-md">
  //       Welcome to NTMGS World
  //     </h1>
  //     <p className="mt-4 text-xl">
  //       Empowering models with confidence and style
  //     </p>

  //     <Link to="/register">
  //       <button className="inline-block mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition duration-300">
  //         Enroll Now
  //       </button>
  //     </Link>
  //   </div>
  // </div>
  // );
  return (
    <div
      className="relative h-[550px] justify-center md:h-screen w-full bg-fixed bg-cover bg-top transition-all duration-500"
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-full px-4 md:px-0 z-10">
        <Navbar />
      </div>

      <div className="absolute top-1/3 md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 text-white text-center">
        <h1 className="text-2xl font-serif md:text-5xl font-bold drop-shadow-lg">
          {currentContent.title}
        </h1>
        <p className="mt-2 md:mt-4 font-bold text-md md:text-[20px] drop-shadow-md">
          "{currentContent.description}"
        </p>
        <br />
        <p className="mt-2 md:mt-4 text-md md:text-xl drop-shadow-md">
          {currentContent.a}
        </p>

        <Link to="/register">
          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
            Enroll Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
