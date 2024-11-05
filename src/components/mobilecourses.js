import React from "react";
import { Link } from 'react-router-dom';

function Index() {
  return (
    <>
      <div className="bg-gray-800 md:hidden my-4">
        <div className="lg:max-w-[1280px] md:max-w-[744px] max-w-full mx-auto bg-white lg:px-10 md:px-6 py-10 relative">
          <div>
            <Link to="/pageant-training" className="cursor-pointer">
              <div className="relative w-full mb-6"> {/* Added mb-6 for spacing */}
                <div className="w-full">
                  <img
                    src="/Pageant.png"
                    alt="Pageant"
                    className="mt-6 w-full h-64 object-contain"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#000000]/20 to-[#000000]/30 py-3 px-3 absolute bottom-0 w-full backdrop-blur-xl">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-5xl font-medium leading-none text-white">
                        Pageant Training
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/model-training" className="cursor-pointer">
              <div className="relative w-full mb-6"> {/* Added mb-6 for spacing */}
                <div className="w-full">
                  <img
                    src="/modelneeraj.png"
                    alt="Model Training"
                    className="mt-6 w-full h-64 object-contain"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#000000]/20 to-[#000000]/30 py-3 px-3 absolute bottom-0 w-full backdrop-blur-xl">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-5xl font-medium leading-none text-white">
                        Model Training
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/portfolio" className="cursor-pointer">
              <div className="relative w-full mb-6"> {/* Added mb-6 for spacing */}
                <div className="w-full">
                  <img
                    src="/portmodelnew.png"
                    alt="Portfolio Shoot"
                    className="mt-6 w-full h-64 object-contain"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#000000]/20 to-[#000000]/30 py-3 px-3 absolute bottom-0 w-full backdrop-blur-xl">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-5xl text-center font-medium leading-none text-white">
                        Portfolio Shoot
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
