import React from "react";
import img1 from "../assets/dimplekapoor.jpg";
import img2 from "../assets/pic6.jpg";

function WhoCanBenefit() {
  return (
    <section className="relative w-full mx-auto px-6 md:px-16 lg:px-56 py-16 md:py-24 bg-white text-black overflow-hidden">
      {/* Title */}
      <h1 className="text-3xl font-serif sm:text-4xl md:text-5xl lg:text-5xl text-center mb-4 md:mb-20 tracking-wide">
        Who Can Benefit From Our Courses
      </h1>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 gap-12 items-center relative">
        {/* Left Text */}
        <div className="space-y-6 text-black text-lg md:text-xl leading-relaxed">
          <ul className="list-disc list-inside space-y-4">
            <li>Aspiring models</li>
            <li>Working models aiming for international standards</li>
            <li>
              Candidates exploring their niche — plus size, petite, fitness,
              commercial, or runway
            </li>
            <li>Individuals wanting to enhance personality and communication</li>
            <li>Pageant aspirants</li>
            <li>Budding actors</li>
          </ul>
        </div>

        {/* Right Images */}
        <div className="relative flex justify-center items-center">
          <img
            src={img1}
            alt="Model 1"
            className="rounded-2xl object-cover w-64 sm:w-72 md:w-80 h-[400px] sm:h-[450px] md:h-[500px] border-4 border-white shadow-2xl absolute -left-12 sm:left-16 -top-20 z-10 transform rotate-[-5deg] transition-transform duration-500 hover:scale-105"
          />
          <img
            src={img2}
            alt="Model 2"
            className="rounded-2xl object-cover w-64 sm:w-72 md:w-80 h-[400px] sm:h-[450px] md:h-[500px] border-4 border-white shadow-2xl absolute right-0 -top-4 z-0 transform rotate-[5deg] transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

     
      {/* Mobile Layout */}
      <div className="md:hidden w-full flex flex-col items-center mb-10 px-4">
        {/* Image Wrapper */}
        <div className="flex flex-col gap-4 w-full items-center">
          <img
            src={img1}
            alt="Model 1"
            className="w-full max-w-sm h-64 sm:h-72 object-cover rounded-2xl border-2 border-white shadow-xl"
          />
          <img
            src={img2}
            alt="Model 2"
            className="w-full max-w-sm h-64 sm:h-72 object-cover rounded-2xl border-2 border-white shadow-xl"
          />
        </div>

        {/* Text below images */}
        <div className="mt-6 space-y-3 text-black text-base sm:text-lg leading-relaxed text-left w-full max-w-sm">
          <ul className="list-disc list-inside space-y-2">
            <li>Aspiring models</li>
            <li>Working models aiming for international standards</li>
            <li>
              Candidates exploring their niche — plus size, petite, fitness,
              commercial, or runway
            </li>
            <li>Individuals wanting to enhance personality and communication</li>
            <li>Pageant aspirants</li>
            <li>Budding actors</li>
          </ul>
        </div>
      </div>


    </section>
  );
}

export default WhoCanBenefit;
