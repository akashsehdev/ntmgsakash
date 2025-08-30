

// import React from "react";
// import tarun_1 from "../assets/tarun_2.JPG";

// function Index() {
//     return (
//         <div className="max-w-screen-xl mx-auto my-10 md:my-32 px-4">
//             <div className="flex flex-col-reverse md:flex-row items-center gap-y-12 md:gap-x-10">

//                 {/* Text Section */}
//                 <div className="w-full md:w-3/5">
//                     <div className="text-center md:text-left p-2 md:p-12">
//                         <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold">
//                             TARUN RAJPUT
//                         </h2>

//                         <p className="text-[17px] text-justify text-gray-700 mt-4 md:mt-8 leading-relaxed font-light md:text-xl">
//                             He is a professional Indian model <span className="font-semibold italic"> (GROOMING EXPERT, EDUCATOR, SHOW DIRECTOR, FASHION CHOREOGRAPHER) </span> and the founder of New Talent Modeling Grooming School.
//                         </p>

//                         <p className="text-[17px] text-justify text-gray-700 mt-6 leading-relaxed font-light text-lg md:text-xl">
//                             After starting his career nearly a decade ago, Tarun Rajput has emerged as a respected figure in the fashion industry, known for his creativity and dedication. With collaborations with renowned designers, his influence has reshaped contemporary trends and left a lasting impact on haute couture.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Image Section */}
//                 <div className="w-full md:w-2/5 flex justify-center">
//                     <img
//                         src={tarun_1}
//                         alt="Tarun Rajput"
//                         className="w-full object-cover object-top max-w-sm md:max-w-full h-72 md:h-[500px] rounded-lg shadow-md"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Index;

import React from "react";
import tarun_1 from "../assets/tarun_1.JPEG";
import tarun_2 from "../assets/tarun_2.JPG";
import tarun_3 from "../assets/tarun_3.JPG";

export default function AboutPerson() {
    return (
        <section className="md:w-full bg-black mx-auto py-28 px-4 md:px-56">
            <div className="flex flex-col-reverse md:flex-row items-center gap-12 relative">

                {/* Text Section */}
                <div className="w-full md:w-3/5 z-20">
                    <div className="bg-gradient-to-br from-gray-900/90 via-black/70 to-gray-900/90 p-6 md:p-12 rounded-3xl shadow-2xl backdrop-blur-sm text-white">
                        <h2 className="text-2xl font-serif sm:text-4xl md:text-5xl font-extrabold mb-4 text-center md:text-left">
                            TARUN RAJPUT
                        </h2>

                        <p className="text-base md:text-lg leading-relaxed mt-4 text-justify">
                            He is a professional Indian model{" "}
                            <span className="font-semibold italic">
                                (GROOMING EXPERT, EDUCATOR, SHOW DIRECTOR, FASHION CHOREOGRAPHER)
                            </span>{" "}
                            and the founder of New Talent Modeling Grooming School.
                        </p>

                        <p className="text-base md:text-lg leading-relaxed mt-6 text-justify">
                            After starting his career nearly a decade ago, Tarun Rajput has emerged as a respected figure in the fashion industry, known for his creativity and dedication. With collaborations with renowned designers, his influence has reshaped contemporary trends and left a lasting impact on haute couture.
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-2/5 flex justify-center relative">
                    {/* Background Shadow Image */}
                    <img
                        src={tarun_2}
                        alt="Tarun Rajput Side"
                        className="absolute top-0 left-0 w-32 sm:w-36 md:w-44 h-40 sm:h-48 md:h-56 object-cover rounded-xl shadow-xl transform rotate-[-5deg] transition-transform duration-500 hover:scale-105 z-20"
                    />

                    {/* Secondary Layer Image */}
                    <img
                        src={tarun_3}
                        alt="Tarun Rajput Secondary"
                        className="absolute bottom-0 right-0 w-32 sm:w-36 md:w-44 h-40 sm:h-48 md:h-56 object-cover rounded-xl shadow-xl transform rotate-[5deg] transition-transform duration-500 hover:scale-105 z-20"
                    />

                    {/* Main Image */}
                    <img
                        src={tarun_1}
                        alt="Tarun Rajput Main"
                        className="relative w-64 sm:w-72 md:w-80 h-72 sm:h-80 md:h-[500px] object-cover rounded-3xl shadow-2xl z-10 transform hover:scale-105 transition-transform duration-500 "
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent z-0"></div>
                </div>
            </div>

            
        </section>
    );
}
