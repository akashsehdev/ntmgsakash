import React from 'react';

function Index() {
  return (
    <div className="overflow-hidden bg-black font-montserrat text-white ">
      <div className="2xl:container 2xl:mx-auto py-20 px-4 md:px-6 xl:px-20 flex justify-center items-center">
        <div className="flex flex-col items-center text-center justify-center space-y-10 max-w-4xl ">

          <h1 className="text-2xl font-serif md:text-5xl font-normal text-white leading-snug">
            New Talent Models Grooming School
          </h1>

          <p className="text-lg md:text-xl   font-light">
            It is a premier institution committed to empowering <span className="md:text-xl font-medium ">aspiring models</span> and individuals with the skills and knowledge needed to excel in the competitive world of modeling.
            Our comprehensive programs are crafted by <span className="md:text-xl font-semibold ">model mentor Tarun Rajput</span>, drawing upon years of industry expertise to provide a holistic understanding of the modeling business.
          </p>

          <p className="text-lg  md:text-xl  font-light">
            We welcome individuals of all backgrounds, genders, and body types, offering a nurturing environment where <span className="text-xl font-medium ">dreams are transformed</span> into polished, artistic realities.
          </p>

        </div>
      </div>
    </div>
  );
}

export default Index;
