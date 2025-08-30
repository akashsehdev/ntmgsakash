// import React from "react";
// import tarun_1 from "../assets/tarun_1.JPEG";

// function Index() {
//     return (
//         <>
//             <div className="container mx-auto md:pt-6 pt-14 px-4">
//                 <div className="flex flex-wrap">
//                     {/* Image Section */}
//                     <div className="md:w-2/5 w-full mb-6 md:mb-0">
//                         <div className="rounded overflow-hidden">
//                             <img src={tarun_1} alt="Background" className="object-contain h-64 w-full md:h-auto" />
//                         </div>
//                     </div>

//                     {/* Text Section */}
//                     <div className="md:w-3/5 w-full flex md:pl-6">
//                         <div className="rounded border-gray-300 text-center p-8 dark:border-gray-700 w-full">
//                             <p className="text-md text-left mt-14 text-gray-600 tracking-wide font-thin text-xl">
//                                 <span className="text-4xl">Tarun's</span> journey is an inspiration to aspiring models worldwide,
//                                 showcasing the transformative power of dedication and talent in the pursuit of one's passion.
//                             </p>
//                             <br />
//                             <p className="text-md text-left text-gray-600 tracking-wide font-thin text-xl">
//                                 Tarun Rajput's legacy as a model mentor is not just defined by the models he has nurtured, but by the indelible mark he has left on the industry as a whole.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Index;

// import React from "react";
// import tarun_1 from "../assets/tarun_1.JPEG";

// function Index() {
//     return (
//         <div className="max-w-screen-xl mx-auto my-10 md:my-32 px-4 md:py-6">
//             <div className="flex flex-col md:flex-row items-center gap-8">
//                 {/* Image Section */}
//                 <div className="md:w-2/5 w-full">
//                     <div className="rounded-lg overflow-hidden shadow-md">
//                         <img
//                             src={tarun_1}
//                             alt="Tarun Rajput"
//                             className="w-full h-72 md:h-[500px] object-cover object-top rounded-lg"
//                         />
//                     </div>
//                 </div>

//                 {/* Text Section */}
//                 <div className="md:w-3/5 w-full">
//                     <div className="p-6 md:p-10 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md bg-white text-left">
//                         <p className="text-gray-700 tracking-wide text-[15px] text-justify md:text-xl font-light leading-relaxed mb-6">
//                             <span className="text-md md:text-xl font-medium text-black">Tarun's</span> journey is an inspiration to aspiring models worldwide, showcasing the transformative power of dedication and talent in the pursuit of one's passion.
//                         </p>
//                         <p className="text-gray-700 text-[15px] text-justify md:text-xl tracking-wide font-light leading-relaxed">
//                             Tarun Rajput's legacy as a model mentor is not just defined by the models he has nurtured, but by the indelible mark he has left on the industry as a whole.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Index;

import React from "react";
import tarun_1 from "../assets/tarun_1.JPEG";
import tarun_2 from "../assets/tarun_2.JPG";

export default function ModernJourney() {
    return (
        <section className="max-w-screen-xl mx-auto py-28 px-4 md:px-12 relative">

            {/* Abstract Background Behind Images */}
            <div className="absolute top-0 left-0 w-full h-[500px] md:h-[600px] bg-gradient-to-br from-indigo-500/20 via-pink-500/20 to-yellow-400/20 rounded-3xl -z-10 transform rotate-6"></div>
            <div className="absolute top-0 left-0 w-full h-[500px] md:h-[600px] bg-gradient-to-tl from-purple-700/20 via-pink-600/20 to-indigo-600/20 rounded-3xl -z-20 transform -rotate-6"></div>

            <div className="flex flex-col md:flex-row items-center gap-12 relative">

                {/* Image Section */}
                <div className="md:w-2/5 w-full relative flex justify-center">
                    {/* Small Top Accent */}
                    {/* <img
            src={tarun_2}
            alt="Tarun Accent"
            className="absolute -top-8 left-4 w-28 sm:w-36 md:w-44 h-36 sm:h-44 md:h-56 object-cover rounded-xl shadow-lg transform rotate-[-12deg] transition-transform duration-500 hover:scale-105 z-10"
          /> */}

                    {/* Main Image */}
                    <img
                        src={tarun_1}
                        alt="Tarun Main"
                        className="relative w-64 sm:w-72 md:w-80 h-72 sm:h-80 md:h-[500px] object-cover rounded-3xl shadow-2xl z-20 transform hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Text Section */}
                <div className="md:w-3/5 w-full">
                    <div className="p-6 md:p-12 bg-black/60 backdrop-blur-md rounded-3xl shadow-2xl text-white relative overflow-hidden">
                        {/* Decorative Floating Circles */}
                        <div className="absolute -top-6 -left-6 w-28 h-28 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>

                        <h2 className="text-xl font-serif sm:text-4xl md:text-5xl font-extrabold mb-6 text-center md:text-left">
                            TARUN'S JOURNEY
                        </h2>

                        <p className="text-base md:text-lg leading-relaxed mb-6 text-justify">
                            <span className="font-semibold">Tarun's</span> journey is an inspiration to aspiring models worldwide, showcasing the transformative power of dedication and talent in the pursuit of one's passion.
                        </p>

                        <p className="text-base md:text-lg leading-relaxed text-justify">
                            Tarun Rajput's legacy as a model mentor is not just defined by the models he has nurtured, but by the indelible mark he has left on the industry as a whole.
                        </p>
                    </div>
                </div>

            </div>


        </section>
    );
}
