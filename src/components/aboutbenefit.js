import React from "react";

function Index() {
    return (
        <>
            {/* Large Screens */}
            <div className="hidden lg:block container pt-36 mx-auto">
                <div className="flex flex-wrap">
                    <div className="md:w-1/3 w-full flex justify-center">
                        <div className="rounded">
                            <img src='/westmodel11.png' className="object-cover object-center w-full" alt="model" />
                        </div>
                    </div>
                    <div className="md:w-1/3 w-full pb-6 flex flex-col items-center">
                        <h1 className="lg:text-4xl text-3xl font-bold leading-tight text-gray-800 my-5 text-center">
                            WHO CAN BENEFIT FROM OUR COURSES
                        </h1>
                        <ul className="mt-16 list-disc text-center">
                            <li className="mb-4 text-xl">Aspiring models</li>
                            <li className="mb-4 text-xl">Working models looking to achieve international standards</li>
                            <li className="mb-4 text-xl">Candidates looking to find their niche be it plus size/petite/fitness/commercial/runway model</li>
                            <li className="mb-4 text-xl">Anyone who wishes to improve their overall personality and communication</li>
                            <li className="mb-4 text-xl">Pageant Aspirants</li>
                            <li className="mb-4 text-xl">Budding Actors</li>
                        </ul>
                    </div>
                    <div className="md:w-1/3 w-full flex justify-center">
                        <div className="rounded">
                            <img src='/westmodel3.png' className="object-cover object-center w-full" alt="model" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Small Screens */}
            <div className="lg:hidden container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full flex justify-center">
                        <div className="rounded">
                            <img src='/westmodel4.png' className="object-cover w-full md:h-full h-64" alt="model" /> {/* Adjusted height */}
                        </div>
                    </div>
                    <div className="w-full pb-6 flex flex-col items-center">
                        <h1 className="mt-5 text-center text-2xl font-bold leading-tight text-gray-800">
                            WHO CAN BENEFIT FROM OUR COURSES
                        </h1>
                        <ul className="mt-4 list-disc text-center">
                            <li className="mb-4 text-xl">Aspiring models</li>
                            <li className="mb-4 text-xl">Working models looking to achieve international standards</li>
                            <li className="mb-4 text-xl">Candidates looking to find their niche be it plus size/petite/fitness/commercial/runway model</li>
                            <li className="mb-4 text-xl">Anyone who wishes to improve their overall personality and communication</li>
                            <li className="mb-4 text-xl">Pageant Aspirants</li>
                            <li className="mb-4 text-xl">Budding Actors</li>
                        </ul>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="rounded">
                            <img src='/westmodel3.png' className="object-cover w-full h-64" alt="model" /> {/* Adjusted height */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
