// import React from "react";
// import Navbar from "../components/navbar";
// import { Link, useLocation } from "react-router-dom";
// import HomeBg from "../assets/ntmgs_bg.png"; // Default background image
// import tarun_1 from "../assets/tarun_2.JPG";
// import programs_banner from "../assets/programs/programs_banner.jpeg"; // Example program banner image

// const HeroSection = () => {
//   const location = useLocation();

//   const backgroundImages = {
//     // "/": HomeBg,
//     "/": "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ntmgs_bg.png",
//     // "/talent":
//     //   HomeBg,
//     "/tarun-rajput": tarun_1,
//     "/work":
//       "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=80",
//     "/programspage": programs_banner,
//     // "/talent": "https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&w=1600&q=80",
//     "/talent": "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ntmgs_bg.png",
//     "/register": "https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&w=1600&q=80",
//     // "https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&w=1600&q=80",
//     "/about":
//       "https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&w=1600&q=80",
//     "/contact":
//       "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1600&q=80",
//   };
//   const contentMap = {
//     "/": {

//       title: (

//         <>

//           <span className="drop-shadow-lg">"WELCOME TO NTMGS WORLD"</span>
//         </>
//       ),
//       description: "Walk with the kind of confidence that tells the world you know your worth. Style is just the reflection, but the real power is the belief you carry within.",
//       a: (
//         <div className="drop-shadow-md">
//           <p className="font-semibold">Empowering models with confidence and style</p>
//           <br />
//           <b className="drop-shadow-lg">10000+</b> Students Trained <br />
//           <b>10+</b> Years of Experience as Mentor <br />
//           <b>100+</b> Batches Completed <br />
//           <b>Provide Career Guidance</b>
//         </div>
//       ),
//     },


//     "/talent": {
//       title: "Discover Raw Talent",
//       description: "Where potential meets opportunity in the world of modeling.",
//     },
//     "/tarun-rajput": {
//       title: "Model Mentor Tarun Rajput",
//       description: "Guiding aspiring models with years of experience and expertise.",
//     },
//     "/work": {
//       title: "Our Portfolio Speaks",
//       description: "Explore the stories we've told through style, posture, and grace.",
//     },
//     "/programspage": {
//       title: "Explore Our Programs",
//       description: "A step-by-step path to transform you into a confident model.",
//     },
//     "/about": {
//       title: "About NTMGS",
//       description: "Building a nurturing environment where creativity thrives.",
//     },
//     "/register": {
//       title: "Register Now",
//       description: "Join our community and start your modeling journey today!",
//     },
//     "/contact": {
//       title: "Connect with Us",
//       description: "Reach out for queries, enrollments, or collaborations.",
//     },
//   };

//   const bgImage = backgroundImages[location.pathname] || backgroundImages["/"];
//   const currentContent = contentMap[location.pathname] || contentMap["/"];


//   return (
//     // <div
//     //   className="relative h-[550px] top-1/2  justify-center md:h-screen w-full bg-fixed bg-cover bg-top transition-all duration-500"
//     //   style={{
//     //     backgroundImage: `url('${bgImage}')`,
//     //   }}
//     // >
//     <div
//       className="relative h-[600px] md:h-screen w-full bg-fixed bg-cover bg-center md:bg-top transition-all duration-500"
//       style={{
//         backgroundImage: `url('${bgImage}')`,
//       }}
//     >
//       <div className="absolute inset-0 bg-black/60 z-0" />

//       <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-full px-4 md:px-0 z-10">
//         <Navbar />
//       </div>

//       <div className="absolute top-1/4 md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 text-white text-center">
//         {/* <h1 className="text-2xl font-serif md:text-4xl font-bold drop-shadow-lg">
//           {currentContent.title}
//         </h1>
//         <p className="mt-2 md:mt-4 font-bold text-md md:text-[20px] drop-shadow-md">
//           "{currentContent.description}"
//         </p>
//         <br />
//         <p className="mt-2 md:mt-4 text-md md:text-lg drop-shadow-md">
//           {currentContent.a}
//         </p> */}
//         <h1 className="text-md sm:text-2xl md:text-4xl font-serif font-bold drop-shadow-lg px-2">
//           {currentContent.title}
//         </h1>
//         <p className="mt-2 md:mt-4 font-medium text-sm sm:text-base md:text-lg drop-shadow-md px-3">
//           "{currentContent.description}"
//         </p>
//         <br />
//         <br />
//         <br />
//         <p className="mt-3 text-sm sm:text-base md:text-xl drop-shadow-md px-3">
//           {currentContent.a}
//         </p>

//         <Link to="/register">
//           <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-black hover:text-white transition duration-300">
//             Book A Consultation Call
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { Link, useLocation } from "react-router-dom";
import tarun_1 from "../assets/tarun_2.JPG";
import about_bg from "../assets/about_bg.jpg";
import programs_banner from "../assets/programs/programs_banner.jpeg";

const HeroSection = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Background images map
  const backgroundImages = {
    "/": {
      desktop:
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ntmgs_bg.png",
      mobile:
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/064A4141%20copy.jpg",
    },
    "/talent": {
      desktop:
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ntmgs_bg.png",
      mobile:
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/064A4038%20copy.jpg",
    },
    "/tarun-rajput": tarun_1,
    "/work":
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=80",
    "/programspage": programs_banner,
    "/register":
      "https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&w=1600&q=80",
    "/about": about_bg,
    // "https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&w=1600&q=80",
    "/contact":
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1600&q=80",
  };

  // Page content
  const contentMap = {
    "/": {
      title: (
        <>
          <span className="drop-shadow-lg">"WELCOME TO NTMGS WORLD"</span>
        </>
      ),
      description:
        "Walk with the kind of confidence that tells the world you know your worth. Style is just the reflection, but the real power is the belief you carry within.",
      a: (
        <div className="drop-shadow-md">
          <p className="font-semibold">
            Empowering models with confidence and style
          </p>
          <br />
          <b className="drop-shadow-lg">10000+</b> Students Trained <br />
          <b>10+</b> Years of Experience as Mentor <br />
          <b>100+</b> Batches Completed <br />
          <b>Provide Career Guidance</b>
        </div>
      ),
    },
    "/talent": {
      title: "Discover Raw Talent",
      description:
        "Where potential meets opportunity in the world of modeling.",
    },
    "/tarun-rajput": {
      title: "Model Mentor Tarun Rajput",
      description:
        "Guiding aspiring models with years of experience and expertise.",
    },
    "/work": {
      title: "Our Portfolio Speaks",
      description:
        "Explore the stories we've told through style, posture, and grace.",
    },
    "/programspage": {
      title: "Explore Our Programs",
      description:
        "A step-by-step path to transform you into a confident model.",
    },
    "/about": {
      title: "About NTMGS",
      description:
        "Building a nurturing environment where creativity thrives.",
    },
    "/register": {
      title: "Register Now",
      description:
        "Join our community and start your modeling journey today!",
    },
    "/contact": {
      title: "Connect with Us",
      description:
        "Reach out for queries, enrollments, or collaborations.",
    },
  };

  // Choose correct background image
  let bgImage;
  if (location.pathname === "/" || location.pathname === "/talent") {
    bgImage = isMobile
      ? backgroundImages[location.pathname].mobile
      : backgroundImages[location.pathname].desktop;
  } else {
    bgImage =
      backgroundImages[location.pathname] ||
      backgroundImages["/"].desktop;
  }

  const currentContent =
    contentMap[location.pathname] || contentMap["/"];

  return (
    <div
      className="relative h-[600px] md:h-screen w-full bg-fixed bg-cover bg-center md:bg-top transition-all duration-500"
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Navbar */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-full px-4 md:px-0 z-10">
        <Navbar />
      </div>

      {/* Content */}
      <div className="absolute top-1/4 md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 text-white text-center">
        <h1 className="text-2xl mt-20 md:text-4xl font-serif font-bold drop-shadow-lg px-2">
          {currentContent.title}
        </h1>
        <p className="mt-2 md:mt-4 font-medium text-sm sm:text-base md:text-lg drop-shadow-md px-3">
          "{currentContent.description}"
        </p>
        <br />
        <br />
        <br />
        <p className="mt-3 text-sm sm:text-base md:text-xl drop-shadow-md px-3">
          {currentContent.a}
        </p>

        <Link to="/register">
          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-black hover:text-white transition duration-300">
            Book A Consultation Call
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
