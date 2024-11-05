import React, { useState } from "react";

export default function IndexPage() {
  const [show, setShow] = useState(null);

  return (
    <>
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <img src="/trd.jpg" className="absolute h-full object-cover object-center w-full" alt="background" />
        {/* Increased transparency for the background overlay */}
        <div className="absolute bg-gray-900 h-full w-full opacity-40" /> 
        <div className="mx-auto container lg:px-0 px-4 h-full relative">
          <div className="flex flex-col items-center justify-end lg:pb-28 pb-14 pt-80 md:pt-96">
            <div className="xl:w-1/2 lg:w-2/3 md:w-3/4 w-full flex flex-col items-center bg-gradient-to-r from-gray-700 to-gray-500 rounded-lg lg:translate-x-6 bg-opacity-80">
              <div className="w-full flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <p className="mt-2 text-4xl sm:text-4xl md:text-4xl font-semibold text-center text-white">PAGEANT TRAINING COURSE</p>
                  <p className="text-base text-center text-white mt-8">A one-year Hybrid Pageant Grooming Program aimed to deliver a holistic personality transformation, mentored by Tarun Rajput & Amisha Chaudhary</p>
                </div>
              </div>

              <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
                {/* Card for Tarun Rajput */}
                <div className="rounded flex justify-center">
                  <div className="flex flex-col mx-auto w-full bg-white dark:bg-gray-800 shadow rounded bg-opacity-80 backdrop-filter backdrop-blur-lg">
                    <div className="w-full p-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded shadow">
                          <img className="w-full h-full overflow-hidden object-cover rounded" src="/pic16new.png" alt="Tarun Rajput" />
                        </div>
                        <div className="ml-3">
                          <h5 className="text-gray-800 dark:text-gray-100 font-medium text-base">Tarun Rajput</h5>
                          <p className="text-gray-600 dark:text-gray-400 text-xs font-normal">Founder, NTMGS</p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm font-normal">To many naive users of the platform, a redesign may look just like a facelift.</p>
                    </div>
                  </div>
                </div>

                {/* Card for Amisha Chaudhary */}
                <div className="rounded flex justify-center">
                  <div className="flex flex-col mx-auto w-full bg-white dark:bg-gray-800 shadow rounded bg-opacity-80 backdrop-filter backdrop-blur-lg">
                    <div className="w-full p-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded shadow">
                          <img className="w-full h-full overflow-hidden object-cover rounded" src="/amishadp.jpg" alt="Amisha Chaudhary" />
                        </div>
                        <div className="ml-3">
                          <h5 className="text-gray-800 dark:text-gray-100 font-medium text-base">Amisha Chaudhary</h5>
                          <p className="text-gray-600 dark:text-gray-400 text-xs font-normal">Founder, DIADEM</p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm font-normal">To many naive users of the platform, a redesign may look just like a facelift.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
