import React from "react";
import tarun_3 from "../assets/tarun_3.JPG"; // in case you want to use it later

function Index() {
    return (
        <div className="container mx-auto my-20 px-4 py-10">
            <div className="flex flex-col-reverse md:flex-row items-center gap-10">
                
                {/* Text Section */}
                <div className="md:w-3/5 w-full">
                    <div className="bg-white p-2 md:p-20">
                        <p className="text-gray-700 text-md md:text-xl leading-relaxed tracking-wide font-[Montserrat]">
                            <span className="md:text-xl text-black font-semibold">He</span> is a luminary in the world of modeling, revered for his exceptional talent and profound expertise in shaping aspiring models into industry icons. With over a decade of experience as a model mentor, Tarun has honed his craft to perfection, guiding countless individuals towards their dreams of strutting the runways of the world's fashion capitals.
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="md:w-2/5 w-full">
                    <img
                        src={tarun_3}
                        alt="Tarun Rajput"
                        className="w-full object-top h-64 md:h-[350px] object-cover rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Index;
