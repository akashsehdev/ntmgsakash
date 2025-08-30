// import React from "react";

// function Index() {
//   return (
//     <>
//       {/* Section Header */}
//       <div className="w-full flex justify-center mt-32 px-4 text-center">
//         <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
//           WHAT WILL YOU LEARN?
//         </h1>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-[1440px] mx-auto px-2 md:px-4 pt-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">

//           {/* Left Box */}
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <h2 className="text-md md:text-2xl font-bold text-center text-gray-800 mb-4">
//               TAILORED MODEL TRAINING
//             </h2>
//             <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-[17px]">
//               <li>Signature Runway walks</li>
//               <li>Body Language</li>
//               <li>Artistic Emoting</li>
//               <li>Dynamic photo movement</li>
//               <li>Posing</li>
//               <li>Personal Branding</li>
//               <li>Image & Presentation</li>
//               <li>Dealing with Agencies</li>
//               <li>Handling Pret & Couture Outfits</li>
//               <li>Expert Tips from Industry Giants</li>
//               <li>Modeling ethos when at work</li>
//               <li>Expectations vs Realities</li>
//             </ul>
//           </div>

//           {/* Center Image */}
//           <div className="flex justify-center items-center">
//             <img
//               src="/westmodel5.png"
//               alt="Model"
//               className="w-full max-w-sm md:max-w-xs lg:max-w-full h-auto object-contain"
//             />
//           </div>

//           {/* Right Box */}
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <h2 className="text-md md:text-2xl font-bold text-center text-gray-800 mb-4">
//               TAILORED PAGEANT TRAINING
//             </h2>
//             <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-[17px]">
//               <li>The Essence of Beauty Pageants</li>
//               <li>Building your own Coaching Plan</li>
//               <li>Stage Presence, Ramp walk and Posing</li>
//               <li>Positive Inner Image and Body language</li>
//               <li>Pageant Introduction Techniques</li>
//               <li>Judges Interview Preparation</li>
//               <li>Voice Modulation & Diction</li>
//               <li>On stage Question/Answer sessions</li>
//               <li>Hair & Makeup, Etiquette training</li>
//               <li>Detailed Wardrobe Analysis & Styling</li>
//               <li>Beauty with a Purpose Project</li>
//               <li>Expectations vs Realities</li>
//             </ul>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// export default Index;



import React from "react";
import modelImg from "../assets/tarun_3.JPG";

export default function WhatWillYouLearn() {
  return (
    <section className="relative w-full bg-black text-white py-24 px-4 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-3xl font-serif md:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase">
          WHAT WILL YOU LEARN
        </h1>
        <p className="text-gray-400 mt-4 text-base md:text-lg">
          Transform yourself into a world-class model or pageant professional
          with our expert-led, comprehensive courses.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
  {/* Left Box */}
  <div className="bg-gradient-to-tr from-gray-800/90 to-black/80 backdrop-blur-lg border border-white/10 text-white rounded-3xl p-8 shadow-[0_15px_30px_rgba(0,0,0,0.5)] relative z-10 lg:-translate-y-12">
    <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-center tracking-wide uppercase">
      Model Training
    </h2>
    <ul className="list-disc list-inside space-y-2 text-sm md:text-base leading-relaxed pl-0 md:pl-4">
      <li>Signature Runway Walks</li>
      <li>Body Language & Poise</li>
      <li>Artistic Emoting & Expression</li>
      <li>Dynamic Photo Movement</li>
      <li>Posing Techniques</li>
      <li>Personal Branding</li>
      <li>Image & Presentation Skills</li>
      <li>Agency Management</li>
      <li>Pret & Couture Outfit Handling</li>
      <li>Expert Tips from Industry Leaders</li>
    </ul>
  </div>

  {/* Center Image */}
  <div className="flex justify-center items-center relative z-20 lg:-translate-y-16">
    <div className="relative w-full max-w-md lg:max-w-none">
      <img
        src={modelImg}
        alt="Model"
        className="rounded-3xl w-full h-auto object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>
  </div>

  {/* Right Box */}
  <div className="bg-gradient-to-tr from-gray-800/90 to-black/80 backdrop-blur-lg border border-white/10 text-white rounded-3xl p-8 shadow-[0_15px_30px_rgba(0,0,0,0.5)] relative z-10 lg:-translate-y-24">
    <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-center tracking-wide uppercase">
      Pageant Training
    </h2>
    <ul className="list-disc list-inside space-y-2 text-sm md:text-base leading-relaxed pl-0 md:pl-4">
      <li>The Essence of Beauty Pageants</li>
      <li>Coaching Plan Development</li>
      <li>Stage Presence & Ramp Walk</li>
      <li>Body Language & Confidence</li>
      <li>Pageant Introduction Techniques</li>
      <li>Judges Interview Prep</li>
      <li>Voice Modulation & Diction</li>
      <li>On-stage Q&A Skills</li>
      <li>Hair, Makeup & Styling Guidance</li>
      <li>Beauty With a Purpose Projects</li>
      <li>Expectations vs Realities</li>
    </ul>
  </div>
</div>


      {/* Decorative shapes / accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}
