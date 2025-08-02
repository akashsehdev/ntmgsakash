// import React from "react";

// const HomeModelsSection2 = () => {
//   return (
//     <section className="w-full bg-white py-20 px-4 md:px-16">
//       <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
//         {/* Left: Images */}
//         <div className="relative w-full md:w-1/2 flex justify-center">
//           <img
//             src="/pic5.jpg" // Replace with actual path
//             alt="Model 1"
//             className="w-64 md:w-80 lg:w-96 object-cover shadow-lg"
//           />
//           <img
//             src="/pic6.jpg" // Replace with actual path
//             alt="Model 2"
//             className="absolute bottom-[-150px] md:left-[300px] w-58 md:w-60 lg:w-[350px] object-cover  border-[grey] shadow-xl"
//           />
//         </div>

//         {/* Right: Heading + Text */}
//         <div className="w-full md:w-1/2 text-center md:text-left mt-12 md:mt-0">
//           {/* Heading */}
//           <h2 className="text-4xl md:text-5xl font-serif text-[#6b3e2e] mb-6 italic">
//             NTMGS Models
//           </h2>

//           {/* Paragraph */}
//           <p className="text-gray-800 text-lg md:text-xl leading-relaxed max-w-md mx-auto md:mx-0 mb-6">
//             New Talent Models Grooming School is a leading institute dedicated
//             to shaping aspiring models into confident, industry-ready
//             professionals. Guided by model mentor Tarun Rajput, our programs
//             blend expert knowledge with hands-on training, welcoming individuals
//             of all genders, backgrounds, and body types in a supportive and
//             inclusive environment.
//           </p>

//           {/* Bullet Points */}
//           <ul className="list-disc list-inside text-gray-800 text-md md:text-lg space-y-2">
//             <li>
//               <strong>Expert Training:</strong> Courses designed by industry
//               veteran Tarun Rajput for real-world modeling success.
//             </li>
//             <li>
//               <strong>Inclusive Environment:</strong> Open to all, regardless of
//               gender, background, or body type.
//             </li>
//             <li>
//               <strong>Holistic Development:</strong> Focus on grooming,
//               confidence, and artistic expression.
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeModelsSection2;

import React from "react";

const HomeModelsSection2 = () => {
  return (
    <section className="w-full bg-white px-4 md:px-12 pb-36 lg:px-20">
      <div className="lg:flex justify-center text-center md:gap-14 col-span-2">
        <div className="w-full pt-20 md:pt-0 md:w-1/2 relative lg:flex items-center justify-center md:order-none">
          <div className="relative w-full md:w-1/2 flex justify-center">
            <img
              src="/pic5.jpg" // Replace with actual path
              alt="Model 1"
              className="w-64 md:w-80 lg:w-96 object-cover shadow-lg"
            />
            <img
              src="/pic6.jpg" // Replace with actual path
              alt="Model 2"
              className="absolute top-[140px] md:bottom-[-150px] md:left-[150px] w-52 md:w-60 lg:w-[350px] object-cover  border-[grey] shadow-xl"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-ful md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl pt-32 font-medium text-[#6b3e2e] mb-6 ">
            NTMGS Models
          </h2>

          <p className="text-gray-800 text-justify text-base sm:text-lg md:text-xl leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
            New Talent Models Grooming School is a leading institute dedicated
            to shaping aspiring models into confident, industry-ready
            professionals. Guided by model mentor Tarun Rajput, our programs
            blend expert knowledge with hands-on training, welcoming individuals
            of all genders, backgrounds, and body types in a supportive and
            inclusive environment.
          </p>

          <ul className="list-disc list-inside text-gray-800 text-left text-base sm:text-lg space-y-2 max-w-xl mx-auto md:mx-0">
            <li>
              <strong>Expert Training:</strong> Courses designed by industry
              veteran Tarun Rajput for real-world modeling success.
            </li>
            <li>
              <strong>Inclusive Environment:</strong> Open to all, regardless of
              gender, background, or body type.
            </li>
            <li>
              <strong>Holistic Development:</strong> Focus on grooming,
              confidence, and artistic expression.
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row items-center justify-between gap-24">
        {/* Images - Comes First
        <div className="w-full md:w-1/2 relative lg:flex items-center justify-center order-1 md:order-none">
          <div className="relative">
            <img
              src="/pic5.jpg"
              alt="Model 1"
              className="w-64 sm:w-72 md:w-80 lg:w-96 object-cover shadow-xl rounded-lg"
            />
            <img
              src="/pic6.jpg"
              alt="Model 2"
              className="absolute -bottom-20 sm:-bottom-24 left-1/2 -translate-x-1/2 md:left-[200px] md:translate-x-0 w-48 sm:w-56 md:w-64 lg:w-[320px] object-cover shadow-2xl rounded-lg border border-gray-300"
            />
          </div>
        </div>

        {/* Text Content 
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl pt-32  font-serif text-[#6b3e2e] mb-6 italic">
            NTMGS Models
          </h2>

          <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
            New Talent Models Grooming School is a leading institute dedicated
            to shaping aspiring models into confident, industry-ready
            professionals. Guided by model mentor Tarun Rajput, our programs
            blend expert knowledge with hands-on training, welcoming individuals
            of all genders, backgrounds, and body types in a supportive and
            inclusive environment.
          </p>

          <ul className="list-disc list-inside text-gray-800 text-base sm:text-lg space-y-2 max-w-xl mx-auto md:mx-0">
            <li>
              <strong>Expert Training:</strong> Courses designed by industry
              veteran Tarun Rajput for real-world modeling success.
            </li>
            <li>
              <strong>Inclusive Environment:</strong> Open to all, regardless of
              gender, background, or body type.
            </li>
            <li>
              <strong>Holistic Development:</strong> Focus on grooming,
              confidence, and artistic expression.
            </li>
          </ul>
        </div>
      </div> */}
    </section>
  );
};

export default HomeModelsSection2;
