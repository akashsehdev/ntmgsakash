// import React from "react";
// import tarun_3 from "../assets/tarun_3.JPG"; // in case you want to use it later

// function Index() {
//     return (
//         <div className="container mx-auto my-20 px-4 py-10">
//             <div className="flex flex-col-reverse md:flex-row items-center gap-10">
                
//                 {/* Text Section */}
//                 <div className="md:w-3/5 w-full">
//                     <div className="bg-white p-2 md:p-20">
//                         <p className="text-gray-700 text-md md:text-xl leading-relaxed tracking-wide font-[Montserrat]">
//                             <span className="md:text-xl text-black font-semibold">He</span> is a luminary in the world of modeling, revered for his exceptional talent and profound expertise in shaping aspiring models into industry icons. With over a decade of experience as a model mentor, Tarun has honed his craft to perfection, guiding countless individuals towards their dreams of strutting the runways of the world's fashion capitals.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Image Section */}
//                 <div className="md:w-2/5 w-full">
//                     <img
//                         src={tarun_3}
//                         alt="Tarun Rajput"
//                         className="w-full object-top h-64 md:h-[350px] object-cover rounded-2xl shadow-lg"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Index;


import React from "react";
import tarun_3 from "../assets/tarun_3.JPG";

function Index() {
    return (
        <div className="relative my-20">
            {/* Background diagonal split */}
            <div className="absolute inset-0">
                <div className="bg-gradient-to-br from-pink-100 to-purple-200 h-1/2 w-full md:h-full transform -skew-y-6 origin-top-left"></div>
            </div>

            <div className="relative container mx-auto px-4 py-16 md:py-24">
                <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
                    
                    {/* Text Section */}
                    <div className="md:w-3/5 w-full bg-white/90 backdrop-blur-md p-6 md:p-16 rounded-3xl shadow-2xl transition-transform hover:scale-105">
                        <p className="text-gray-800 text-md md:text-xl leading-relaxed tracking-wide font-[Montserrat]">
                            <span className="md:text-2xl text-black font-bold">He</span> is a luminary in the world of modeling, revered for his exceptional talent and profound expertise in shaping aspiring models into industry icons. With over a decade of experience as a model mentor, Tarun has honed his craft to perfection, guiding countless individuals towards their dreams of strutting the runways of the world's fashion capitals.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-2/5 w-full relative">
                        <div className="overflow-hidden rounded-3xl shadow-2xl">
                            <img
                                src={tarun_3}
                                alt="Tarun Rajput"
                                className="w-full h-72 md:h-[400px] object-cover object-top transform transition-transform duration-500 hover:scale-105"
                            />
                            {/* Gradient overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 rounded-3xl"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Index;
