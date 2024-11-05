import React from "react";
export default function index() {
    return (
        <>
            <div className="mx-auto container lg:px-20 md:px-6 px-4 py-12">
                <div className="flex items-center justify-center flex-col">
                    <h1 className="lg:text-5xl text-3xl font-bold leading-10 text-gray-800 text-center">About Mentors</h1>
                    {/* <p className="text-base leading-6 text-center text-gray-600 mt-5 lg:w-5/12 sm:w-7/12">A good idiom for kids is "It's raining cats and dogs." Kids know what both cats and dogs are from an early age</p> */}
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 pb-12 pt-20">
                    <div className="w-full flex items-center justify-center flex-col">
                        <div className="w-full px-5 -mb-10  relative z-40">
                            <img src="teamtarunpng.png" alt="girl smilling" className="w-full md:object-cover object-contain md:h-full h-[400px] rounded-md" />
                        </div>
                        <div className="pb-8 pt-14 bg-indigo-700 rounded-md w-full ">
                            <p className="text-xl font-semibold leading-5 text-center text-white">Tarun Rajput</p>
                            <p className="text-base leading-4 mt-2 text-center text-white">Model Mentor</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center flex-col">
                        <div className="w-full px-5 -mb-10  relative z-40">
                            <img src="/amisha.jpg" alt="guy smilling" className="w-full md:object-cover object-contain md:h-full h-[400px] rounded-md" />
                        </div>
                        <div className="pb-8 pt-14 bg-indigo-700 rounded-md w-full ">
                            <p className="text-xl font-semibold leading-5 text-center text-white">Amisha Chaudhary</p>
                            <p className="text-base leading-4 mt-2 text-center text-white">Pageant Coach</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
