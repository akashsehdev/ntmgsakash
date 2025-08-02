import React from "react";

function Index() {
  return (
    <>
      {/* Section Header */}
      <div className="w-full flex justify-center mt-32 px-4 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
          WHAT WILL YOU LEARN?
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-2 md:px-4 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">

          {/* Left Box */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-md md:text-2xl font-bold text-center text-gray-800 mb-4">
              TAILORED MODEL TRAINING
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-[17px]">
              <li>Signature Runway walks</li>
              <li>Body Language</li>
              <li>Artistic Emoting</li>
              <li>Dynamic photo movement</li>
              <li>Posing</li>
              <li>Personal Branding</li>
              <li>Image & Presentation</li>
              <li>Dealing with Agencies</li>
              <li>Handling Pret & Couture Outfits</li>
              <li>Expert Tips from Industry Giants</li>
              <li>Modeling ethos when at work</li>
              <li>Expectations vs Realities</li>
            </ul>
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center">
            <img
              src="/westmodel5.png"
              alt="Model"
              className="w-full max-w-sm md:max-w-xs lg:max-w-full h-auto object-contain"
            />
          </div>

          {/* Right Box */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-md md:text-2xl font-bold text-center text-gray-800 mb-4">
              TAILORED PAGEANT TRAINING
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-[17px]">
              <li>The Essence of Beauty Pageants</li>
              <li>Building your own Coaching Plan</li>
              <li>Stage Presence, Ramp walk and Posing</li>
              <li>Positive Inner Image and Body language</li>
              <li>Pageant Introduction Techniques</li>
              <li>Judges Interview Preparation</li>
              <li>Voice Modulation & Diction</li>
              <li>On stage Question/Answer sessions</li>
              <li>Hair & Makeup, Etiquette training</li>
              <li>Detailed Wardrobe Analysis & Styling</li>
              <li>Beauty with a Purpose Project</li>
              <li>Expectations vs Realities</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}

export default Index;
