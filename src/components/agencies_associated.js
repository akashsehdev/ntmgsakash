import React from "react";
import aura from "../assets/agencies/aura.png";
import ella from "../assets/agencies/ella models.png";
import faze from "../assets/agencies/faze.png";
import featartist from "../assets/agencies/featartist.jpg";
import inega from "../assets/agencies/inega.png";
import delhimodelling from "../assets/agencies/modellingagency.jpg";
import ninja from "../assets/agencies/ninja.jpg";
import toabh from "../assets/agencies/toabh.jpg";


const logos = [
    aura,
    ella,
    faze,
    featartist,
    inega,
    delhimodelling,
    ninja,
    toabh
];

export default function AgencyCarousel() {
    // Duplicate logos for seamless infinite loop
    const loopLogos = [...logos, ...logos];

    return (
        <div className="w-full overflow-hidden bg-white py-8">

            <div className="2xl:container 2xl:mx-auto py-16 px-4 md:px-6 xl:px-20 flex justify-center items-center">
                <div className="flex flex-col items-center justify-center space-y-10 max-w-4xl text-center">

                    <h1 className="text-3xl font-serif md:text-6xl font-normal text-gray-900 leading-snug">
                        Agencies Associated
                    </h1>
                    <p className="text-lg md:text-xl text-justify leading-relaxed tracking-wide font-light">
                        After placements models have worked for all top agencies in India
                    </p>


                </div>
            </div>

            <div className="flex animate-scroll">
                {loopLogos.map((logo, index) => (
                    <div className="flex-shrink-0 px-10" key={index}>
                        <img
                            src={logo}
                            alt={`logo-${index}`}
                            className="h-32 object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
