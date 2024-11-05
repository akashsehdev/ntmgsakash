import React from "react";

const Banner8 = () => {
    return (
        <div className="mx-auto container py-12 px-6 xl:px-0 flex justify-center items-center flex-col">
            {/* Flexbox container for course details */}
            <div className="flex flex-col md:flex-row justify-between bg-gray-50 items-start w-full">
                
                {/* Course Duration */}
                <div className="flex flex-row w-full md:w-1/3 py-5">
                    {/* "Course Details" text - Hidden on medium and smaller devices */}
                    <div className="hidden lg:flex items-center bg-gray-800 justify-center">
                        <p className="transform flex flex-shrink-0 -rotate-90 text-2xl font-semibold tracking-wide leading-normal text-white">
                            Course Details
                        </p>
                    </div>
                    {/* Course Duration Content */}
                    <div className="w-full lg:w-auto">
                        <p className="text-2xl font-semibold leading-9 text-gray-800">COURSE DURATION</p>
                        <p className="text-base xl:text-xl leading-7 text-gray-600">
                            1 Year <br />
                            4 Online sessions before the course starts <br />
                            14 Days of Offline Camp <br />
                            8 Online sessions after the course <br />
                            2 Booster sessions before the audition
                        </p>
                    </div>
                </div>

                {/* Course Schedule */}
                <div className="flex flex-col w-full md:w-1/3 px-4 py-5">
                    <p className="text-2xl font-semibold leading-9 text-gray-800 md:hidden flex">COURSE SCHEDULE</p>
                    <p className="text-base xl:text-xl leading-7 text-gray-600">
                        Offline Classes Starting <br />
                        July 2024 <br /> <br />
                        Timings <br />
                        08:00 - 17:00 <br />
                    </p>
                </div>

                {/* Medium & Format */}
                <div className="flex flex-col w-full md:w-1/3 px-4 py-5">
                    <p className="text-2xl font-semibold leading-9 text-gray-800">MEDIUM & FORMAT</p>
                    <p className="text-base xl:text-xl leading-7 text-gray-600">
                        The course is an amalgamation of Theory sessions, Practical sessions, Intra-course assessments, and one-on-one counselling sessions.
                        <br /><br />
                        Delivered in English & Hindi
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner8;
