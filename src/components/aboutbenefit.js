import React from "react";

function Index() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        WHO CAN BENEFIT FROM OUR COURSES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="/westmodel11.png"
            alt="Model"
            className="w-full max-w-md h-auto object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Text Content */}
        <div className="text-gray-800 text-lg md:text-xl space-y-5">
          <ul className="list-disc list-inside">
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

      {/* Mobile Only Image (optional extra visual) */}
      <div className="block md:hidden mt-10">
        <img
          src="/westmodel4.png"
          alt="Model Mobile"
          className="w-full h-64 object-cover rounded-xl shadow-md"
        />
      </div>
    </section>
  );
}

export default Index;
