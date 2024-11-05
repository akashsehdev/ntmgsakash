import React from 'react'

function index() {
  return (
    <div className='overflow-y-hidden'>
      <div className="2xl:container 2xl:mx-auto py-12 px-4 md:px-6 xl:px-20 flex justify-center items-center space-y-8 md:space-y-12 flex-col">
        <div className="flex items-center justify-center flex-col space-y-2 md:space-y-4">
          <h1 className="text-4xl">THE MENTOR</h1>
          <h1 className="text-5xl pt-8">TARUN RAJPUT</h1>
          <h1 className="text-xl -pt-8">Founder New Talent Models Grooming School</h1>

          <img src="/hero2.png" alt="Background " class="object-cover h-64 pt-6 object-center" />

          {/* <h1 className="text-xl md:text-2xl lg:text-4xl font-bold lg:font-extrabold leading-5 md:leading-8 leading-9 text-center text-gray-800">Who we are</h1> */}
          <p className="md:w-2/3  tracking-wider font-thin text-xl leading-8 md:leading-8 text-center text-gray-600">
            A luminary in the world of modeling, revered for his exceptional talent and profound expertise in shaping aspiring models into industry icons. With over a decade of experience as a model mentor, Tarun has honed his craft to perfection, guiding countless individuals towards their dreams of strutting the runways of the world's fashion capitals.
          </p> <p className="md:w-2/3  tracking-wider font-thin text-xl leading-8 md:leading-8 text-center text-gray-600">
            Tarun Rajput's legacy as a model mentor is not just defined by the models he has nurtured, but by the indelible mark he has left on the industry as a whole.
          </p>
        </div>

      </div>

    </div>

  )
}

export default index
