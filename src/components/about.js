import React from 'react';

function Index() {
  return (
    <div className='overflow-hidden'>
      <div className="2xl:container 2xl:mx-auto py-12 px-4 md:px-6 xl:px-20 flex justify-center items-center space-y-8 md:space-y-12 flex-col">
        <div className="flex items-center justify-center flex-col space-y-2 md:space-y-4">
          <p className="md:w-2/3 tracking-wider font-thin text-lg md:text-xl leading-8 md:leading-8 text-center text-gray-600">
            <span className="text-3xl">New Talent Models Grooming School</span> is a premier institution committed to empowering <span className="text-2xl">aspiring models</span> and individuals with the skills and knowledge needed to excel in the competitive world of modeling.
            <br />
            <br />
            Our comprehensive programs are crafted by <span className="text-2xl">Model Mentor Tarun Rajput</span>, drawing upon years of industry expertise to provide a holistic understanding of the modeling business.
          </p>
          <p className="md:w-2/3 tracking-wider font-thin text-lg md:text-xl leading-8 md:leading-8 text-center text-gray-600">
            We welcome individuals of all backgrounds, genders, and body types, offering a nurturing environment where <span className="text-2xl">dreams are transformed</span> into polished, artistic realities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
