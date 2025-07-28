import React from "react";
import { Link } from "react-router-dom";
import programs from "../data/programs";

const Programs = () => {
  return (
    <section className="py-20 px-6 md:px-44 bg-[grey]/5">
      <h2 className="text-4xl font-semibold text-center mb-6">Our Programs</h2>
      <p className="text-center text-gray-700 max-w-3xl mx-auto">
        At NTMGS Talent Management, we empower diverse talent to shine in the
        fashion and modeling world. Our inclusive programs support all body
        types, genders, and backgrounds—offering mentorship, grooming, and
        global opportunities to help you succeed.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {programs.map((program, index) => (
          <Link to={`/programs/${program.slug}`} key={index}>
            <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 z-0" />

              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
                <h3 className="text-lg md:text-xl font-bold">
                  {program.title}
                </h3>
                <p className="text-sm md:text-base mt-2">{program.duration}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Programs;
