import React from "react";
import b from "../assets/models/WhatsApp Image 2025-08-08 at 15.23.28 (1).jpeg";
import c from "../assets/models/WhatsApp Image 2025-08-08 at 15.23.28.jpeg";
import f from "../assets/models/WhatsApp Image 2025-08-08 at 15.23.29.jpeg";
import j from "../assets/models/WhatsApp Image 2025-08-08 at 15.23.31.jpeg";
import m from "../assets/models/WhatsApp Image 2025-08-08 at 15.23.32.jpeg";
import n from "../assets/models/WhatsApp Image 2025-08-08 at 15.23.33.jpeg";
import o from "../assets/models/WhatsApp Image 2025-08-08 at 15.23.34 (1).jpeg";
import p from "../assets/models/WhatsApp Image 2025-08-08 at 15.23.34.jpeg";
import q from "../assets/models/WhatsApp Image 2025-08-08 at 15.23.35.jpeg";


const logos = [
    b, c, f, j, m, n, o, p, q
];

export default function Placements() {
    // Duplicate logos for seamless infinite loop
    const loopLogos = [...logos, ...logos];

    return (
        <div className="w-full overflow-hidden bg-white py-8">

            <div className="2xl:container 2xl:mx-auto py-16 px-4 md:px-6 xl:px-20 flex justify-center items-center">
                <div className="flex flex-col items-center justify-center max-w-7xl text-center">

                    <h1 className="text-2xl font-serif md:text-6xl pb-3 font-normal text-gray-900 leading-snug">
                    Working for Brands after Placements

                    </h1>
                    <p className="text-md md:text-xl text-center leading-relaxed tracking-wide font-light">
                    Models have worked for all top brands in India
                    </p>


                </div>
            </div>

            <div className="flex animate-scroll">
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
