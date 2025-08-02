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

import React from "react";
import tarun_1 from "../assets/tarun_1.JPEG";

function Index() {
    return (
        <div className="max-w-screen-xl mx-auto my-10 md:my-32 px-4 md:py-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image Section */}
                <div className="md:w-2/5 w-full">
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img
                            src={tarun_1}
                            alt="Tarun Rajput"
                            className="w-full h-72 md:h-[500px] object-cover object-top rounded-lg"
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="md:w-3/5 w-full">
                    <div className="p-6 md:p-10 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md bg-white text-left">
                        <p className="text-gray-700 tracking-wide text-[15px] text-justify md:text-xl font-light leading-relaxed mb-6">
                            <span className="text-md md:text-xl font-medium text-black">Tarun's</span> journey is an inspiration to aspiring models worldwide, showcasing the transformative power of dedication and talent in the pursuit of one's passion.
                        </p>
                        <p className="text-gray-700 text-[15px] text-justify md:text-xl tracking-wide font-light leading-relaxed">
                            Tarun Rajput's legacy as a model mentor is not just defined by the models he has nurtured, but by the indelible mark he has left on the industry as a whole.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
