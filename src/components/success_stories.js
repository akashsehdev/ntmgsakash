import React from "react";
import a from "../assets/models/WhatsApp Image 2025-08-08 at 15.23.27.jpeg";
import d from "../assets/models/WhatsApp Image 2025-08-08 at 15.23.29 (1).jpeg";
import e from "../assets/models/WhatsApp Image 2025-08-08 at 15.23.29 (2).jpeg";
import g from "../assets/models/WhatsApp Image 2025-08-08 at 15.23.30 (1).jpeg";
import h from "../assets/models/WhatsApp Image 2025-08-08 at 15.23.30.jpeg";
import i from "../assets/models/WhatsApp Image 2025-08-08 at 15.23.31 (1).jpeg";
import k from "../assets/models/WhatsApp Image 2025-08-08 at 15.23.32 (1).jpeg";
import l from "../assets/models/WhatsApp Image 2025-08-08 at 15.23.32 (2).jpeg";


const logos = [
    a, d, e, g, h, i, k, l
];

export default function SuccessStories() {
    // Duplicate logos for seamless infinite loop
    const loopLogos = [...logos, ...logos];

    return (
        <div className="w-full overflow-hidden bg-white py-8">

            <div className="2xl:container 2xl:mx-auto  px-4 md:px-6 xl:px-20 flex justify-center items-center">
                <div className="flex flex-col items-center justify-center max-w-4xl text-center">

                    <h1 className="text-3xl font-serif md:text-6xl pb-3 font-normal text-gray-900 leading-snug">
                        Success Stories
                    </h1>
                    <p className="text-lg md:text-xl pb-12 text-justify leading-relaxed tracking-wide font-light">
                        Placements after mentorship
                    </p>


                </div>
            </div>

            <div className="flex animate-scroll-fast">
                {loopLogos.map((logo, index) => (
                    <div className="flex-shrink-0" key={index}>
                        <img
                            src={logo}
                            alt={`logo-${index}`}
                            className="h-80 object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
