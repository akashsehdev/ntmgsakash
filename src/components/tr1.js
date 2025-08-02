

import React from "react";
import tarun_1 from "../assets/tarun_2.JPG";

function Index() {
    return (
        <div className="max-w-screen-xl mx-auto my-10 md:my-32 px-4">
            <div className="flex flex-col-reverse md:flex-row items-center gap-y-12 md:gap-x-10">

                {/* Text Section */}
                <div className="w-full md:w-3/5">
                    <div className="text-center md:text-left p-2 md:p-12">
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold">
                            TARUN RAJPUT
                        </h2>

                        <p className="text-[17px] text-justify text-gray-700 mt-4 md:mt-8 leading-relaxed font-light md:text-xl">
                            He is a professional Indian model <span className="font-semibold italic"> (GROOMING EXPERT, EDUCATOR, SHOW DIRECTOR, FASHION CHOREOGRAPHER) </span> and the founder of New Talent Modeling Grooming School.
                        </p>

                        <p className="text-[17px] text-justify text-gray-700 mt-6 leading-relaxed font-light text-lg md:text-xl">
                            After starting his career nearly a decade ago, Tarun Rajput has emerged as a respected figure in the fashion industry, known for his creativity and dedication. With collaborations with renowned designers, his influence has reshaped contemporary trends and left a lasting impact on haute couture.
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-2/5 flex justify-center">
                    <img
                        src={tarun_1}
                        alt="Tarun Rajput"
                        className="w-full object-cover object-top max-w-sm md:max-w-full h-72 md:h-[500px] rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
}

export default Index;
