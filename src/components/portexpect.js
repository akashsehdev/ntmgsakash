import React from "react";

function Index() {
    return (
        <>
            <div className="container pt-12 min-h-screen mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Text Container */}
                    <div className="w-full lg:w-1/2 pb-6 flex items-center justify-center lg:justify-start">
                        <div className="rounded p-6 lg:p-8 mt-8 lg:mt-0 max-w-md lg:max-w-none">
                            <h1 className="lg:text-4xl text-3xl font-bold text-center leading-tight text-gray-800">
                                WHAT TO EXPECT?
                            </h1>
                            <p className="mt-8 text-lg lg:text-xl text-justify">
                                Once you book a shoot with us, the first order of business is a one-on-one consultation with Model Mentor Tarun Rajput wherein the mood of your shoot will be decided according to your goals and aspirations.
                            </p>
                            <p className="mt-4 text-lg lg:text-xl text-justify">
                                On the day of your shoot, a team of expert stylists, MUAs, and Photographers gather to bring to life the Moodboard that has been prepared beforehand to ensure a smooth and stress-free shoot experience.
                            </p>
                            <p className="mt-4 text-lg lg:text-xl text-justify">
                                Your only tasks are to follow the instructions given to you before the shoot, and then some during the shoot as Tarun guides you through movements, expressions, and poses.
                            </p>
                            <p className="mt-4 text-lg lg:text-xl text-justify">
                                Since this is an end-to-end service, we select the best shots out of your entire shoot, get them edited, and share with you to be added as-is to your digital portfolio.
                            </p>
                        </div>
                    </div>
                    {/* Image Container */}
                    <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
                        <div className="rounded overflow-hidden h-auto max-w-sm lg:max-w-none">
                            <img
                                src='/westmodel5.png'
                                className="object-cover w-full h-64 md:h-auto"
                                alt="model"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
