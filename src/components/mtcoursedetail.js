import React from "react";
import ModelTrainingCarousel from "./mtcarousel";
function Index() {
  return (
    <>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="rounded border-gray-300  dark:border-gray-700 h-auto p-2 m-8" >

          <div className="p-4">
            <h1 className="text-3xl font-bold"> Tarun Rajput- Model Mentor and Founder of NTMGS </h1>

          </div>

          <ModelTrainingCarousel />

          <div className="mt-16">
            <h1 className="text-3xl font-bold">Principle</h1>
            <p className="mt-4 text-xl text-justify">NTMGS was founded on the principles of inclusivity and driven by urgency to make itself accessible. While we offer a lot of different services, the model training camp is our flagship course.</p>
          </div>

          <div className="mt-8">
            <h1 className="text-3xl font-bold">Course Details</h1>
            <ul className="list-disc mt-4 ml-8 text-justify">
              <li className="text-xl">5 Day Intensive Offline Training - Theory and Practicals</li>
              <li className="text-xl">Conducted by Tarun Rajput and her team of Experts</li>
              <li className="text-xl">Inclusive platform for budding and experienced models</li>
              <li className="text-xl">Portfolio Shoot by Industry Professionals</li>

            </ul>
          </div>




        </div>
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="rounded border-gray-300  dark:border-gray-700 h-auto p-2 m-8" >
          <div className="p-4">
            <h1 className="text-3xl font-bold"> Tarun Rajput- Fashion Director and Grooming Expert for VG Mrs India  </h1>

          </div>

          <div class="aspect-w-16 aspect-h-9">
            <iframe title="thisframe" src="https://www.youtube.com/embed/JQHlMn9_khM?si=hUXuee36mNW65LUI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          {/* insert here */}

          <div className="mt-24">
            <h1 className="text-3xl font-bold">NTMGS COMMUNITY</h1>
            <p className="mt-4 text-xl text-justify">You will be inducted into the NTMGS Community. Its a strong network platform and a safe space for model for information about the industry as well as credible work opportunities</p>
          </div>

          <div className="mt-8 text-justify">
            <h1 className="text-3xl font-bold">PILLARS OF OUR PROGRAM</h1>
            <ul className="list-disc mt-4 ml-8 text-justify">
              <li className="text-xl">Business of Modeling</li>
              <li className="text-xl">Personal Branding</li>
              <li className="text-xl">Ramp Walk and Posing</li>
              <li className="text-xl">Fully guided Portfolio Shoot</li>
              <li className="text-xl">Access to NTMGS Network</li>
              <li className="text-xl">Audition and Casting Techniques</li>
              <li className="text-xl">Agency Contracts</li>
              <li className="text-xl">Golden Rules of Modeling</li>

            </ul>
          </div>

        </div>
      </div>


    </>
  );
}
export default Index;
