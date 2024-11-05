import React from "react";

function Index() {
    return (
        <>
            <div className="container mx-auto pt-6 px-4 md:px-0">
                <div className="flex flex-wrap md:flex-nowrap items-center">
                    {/* Text Section */}
                    <div className="md:w-3/5 w-full mb-8 md:mb-0 md:pr-6">
                        <div className="rounded text-center md:text-left p-8 md:p-16">
                            <h2 className="text-4xl lg:text-5xl font-extrabold mt-14">MODEL TRAINING PROGRAM</h2>
                            <p className="text-md mt-8 text-gray-600 tracking-wide text-xl text-justify">
                                Welcome to the New Talent Models Grooming School, where we empower aspiring models with the skills, confidence, and professionalism needed to thrive in the dynamic world of fashion and entertainment. Our comprehensive training program is designed to nurture talent, refine techniques, and unlock potential, preparing individuals for successful careers on the runway, in print, and beyond.
                            </p>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-2/5 w-full">
                        <div className="rounded">
                            <img src="/tarunrajput.png" alt="Tarun Rajput" className=" object-contain md:object-cover md:object-left w-full h-64 md:h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
