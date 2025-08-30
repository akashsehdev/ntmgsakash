// import React from "react";

// export default function Home() {
//     return (
//         <>
//             <div>
//                 <div className="relative py-16 bg-gradient-to-b from-indigo-700 to-indigo-600 flex justify-center items-center">
//                     <div>
//                         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-10 text-white">Shoot for Renowed Designers</h1>
//                     </div>
//                 </div>
//                 <div className="container mx-auto py-9 flex flex-col items-center justify-center">
//                     <div role="list" className="w-11/12 md:w-2/3 grid grid-cols-1 md:grid-cols-1 gap-6">
//                         <div role="listitem" className="focus:outline-none">
//                             <button className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
//                                 <div className="flex">
//                                     <div className="pt-4">
//                                         {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                                             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                                             <circle cx={9} cy={7} r={4} />
//                                             <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
//                                             <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//                                             <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
//                                         </svg> */}
//                                     </div>
//                                     <div className="ml-4">
//                                         {/* <p className="text-base font-medium leading-none text-gray-800">Getting Started</p> */}
//                                         <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12"> Bharat Reshma</p>
//                                     </div>
//                                 </div>
//                             </button>
//                         </div>
//                         <div role="listitem" className="focus:outline-none">
//                             <button href="javascript:void(0)" className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
//                                 <div className="flex">
//                                     <div className="pt-4">
//                                         {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                                             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                                             <circle cx={9} cy={7} r={4} />
//                                             <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
//                                             <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//                                             <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
//                                         </svg> */}
//                                     </div>
//                                     <div className="ml-4">
//                                         {/* <p className="text-base font-medium leading-none text-gray-800">User Account</p> */}
//                                         <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12"> Harish K Vasisth </p>
//                                     </div>
//                                 </div>
//                             </button>
//                         </div>
//                         <div role="listitem" className="focus:outline-none">
//                             <button href="javascript:void(0)" className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
//                                 <div className="flex">
//                                     <div className="pt-4">
//                                         {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                                             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                                             <circle cx={9} cy={7} r={4} />
//                                             <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
//                                             <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//                                             <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
//                                         </svg> */}
//                                     </div>
//                                     <div className="ml-4">
//                                         {/* <p className="text-base font-medium leading-none text-gray-800">Product Features</p> */}
//                                         <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">Archana Kochar </p>
//                                     </div>
//                                 </div>
//                             </button>
//                         </div>
//                         <div role="listitem" className="focus:outline-none">
//                             <button href="javascript:void(0)" className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
//                                 <div className="flex">
//                                     <div className="pt-4">
//                                         {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                                             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                                             <circle cx={9} cy={7} r={4} />
//                                             <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
//                                             <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//                                             <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
//                                         </svg> */}
//                                     </div>
//                                     <div className="ml-4">
//                                         {/* <p className="text-base font-medium leading-none text-gray-800">Customization Options</p> */}
//                                         <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">
//                                             Siddharth Tytler
//                                         </p>
//                                     </div>
//                                 </div>
//                             </button>
//                         </div>

//                         <div role="listitem" className="focus:outline-none">
//                             <button href="javascript:void(0)" className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
//                                 <div className="flex">
//                                     <div className="pt-4">
//                                         {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                                             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                                             <circle cx={9} cy={7} r={4} />
//                                             <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
//                                             <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//                                             <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
//                                         </svg> */}
//                                     </div>
//                                     <div className="ml-4">
//                                         {/* <p className="text-base font-medium leading-none text-gray-800">Customization Options</p> */}
//                                         <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">
//                                             Dimple Kapoor

//                                         </p>
//                                     </div>
//                                 </div>
//                             </button>
//                         </div>

//                         {/* <div role="listitem" className="focus:outline-none">
//                             <a href="javascript:void(0)" className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
//                                 <div className="flex">
//                                     <div>
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                                             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                                             <rect x={3} y={5} width={18} height={14} rx={3} />
//                                             <line x1={3} y1={10} x2={21} y2={10} />
//                                             <line x1={7} y1={15} x2="7.01" y2={15} />
//                                             <line x1={11} y1={15} x2={13} y2={15} />
//                                         </svg>
//                                     </div>
//                                     <div className="ml-4">
//                                         <p className="text-base font-medium leading-none text-gray-800">Payment Gateways</p>
//                                         <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">Get started fast with installation and theme setup instructions</p>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div> */}
//                         {/* <div role="listitem" className="focus:outline-none">
//                             <a href="javascript:void(0)" className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
//                                 <div className="flex">
//                                     <div>
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                                             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                                             <rect x={5} y={11} width={14} height={10} rx={2} />
//                                             <circle cx={12} cy={16} r={1} />
//                                             <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
//                                         </svg>
//                                     </div>
//                                     <div className="ml-4">
//                                         <p className="text-base font-medium leading-none text-gray-800">Security Options</p>
//                                         <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">Get started fast with installation and theme setup instructions</p>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div> */}
//                     </div>

//                 </div>
//             </div>
//         </>
//     );
// }


// import React from "react";

// export default function Home() {
//     return (
//         <>
//             <div className="bg-[#ededed] py-10">
//                 {/* Header Section */}
//                 <div className="relative py-5 md:py-16 bg-gradient-to-b  flex justify-center items-center">
//                     <h1 className="text-2xl sm:text-2xl lg:text-5xl font-bold leading-10 text-black text-center">
//                         Shoot for Renowned Designers
//                     </h1>
//                 </div>

//                 {/* Designers List */}
//                 <div className="container mx-auto px-4">
//                     <div className="flex gap-6 overflow-x-auto md:flex-wrap md:justify-center no-scrollbar">
//                         {[
//                             "Bharat Reshma",
//                             "Harish K Vasisth",
//                             "Archana Kochar",
//                             "Siddharth Tytler",
//                             "Dimple Kapoor",
//                         ].map((designer, idx) => (
//                             <div
//                                 key={idx}
//                                 className="min-w-[220px] my-5 md:min-w-[250px] bg-white shadow-md rounded-xl p-6 flex items-center justify-center"
//                             >
//                                 <p className="text-sm md:text-base text-gray-700 font-medium text-center">
//                                     {designer}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }


// import React from "react";

// export default function Home() {
//     const designers = [
//         "Bharat Reshma",
//         "Harish K Vasisth",
//         "Archana Kochar",
//         "Siddharth Tytler",
//         "Dimple Kapoor",
//     ];

//     return (
//         <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-16 relative overflow-hidden">
//             {/* Decorative Circles */}
//             <div className="absolute -top-20 -left-10 w-72 h-72 bg-pink-200 rounded-full opacity-30 blur-3xl"></div>
//             <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>

//             {/* Header Section */}
//             <div className="relative text-center mb-12">
//                 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
//                     Shoot for Renowned Designers
//                 </h1>
//                 <p className="mt-4 text-gray-600 text-base md:text-lg">
//                     Join hands with the industry’s top talents and make your mark on the runway
//                 </p>
//             </div>

//             {/* Designers List */}
//             <div className="container mx-auto px-4">
//                 <div className="flex gap-6 overflow-x-auto md:overflow-x-visible md:flex-wrap no-scrollbar">
//                     {designers.map((designer, idx) => (
//                         <div
//                             key={idx}
//                             className="min-w-[220px] md:min-w-[250px] bg-white rounded-3xl p-6 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer relative overflow-hidden"
//                         >
//                             <p className="text-gray-800 font-semibold text-center text-base md:text-lg">
//                                 {designer}
//                             </p>
//                             {/* Glow effect */}
//                             <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 opacity-20 rounded-3xl blur-xl pointer-events-none"></div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }


// import React, { useState } from "react";
// import bharat from "../assets/ashish.jpg";
// import harish from "../assets/ashish.jpg";
// import archana from "../assets/ashish.jpg";
// import siddharth from "../assets/ashish.jpg";
// import dimple from "../assets/ashish.jpg";

// export default function Home() {
//     const designers = [
//         { name: "Bharat Reshma", img: bharat },
//         { name: "Harish K Vasisth", img: harish },
//         { name: "Archana Kochar", img: archana },
//         { name: "Siddharth Tytler", img: siddharth },
//         { name: "Dimple Kapoor", img: dimple },
//     ];

//     const [current, setCurrent] = useState(0);

//     // Mobile: handle next card
//     const nextCard = () => {
//         setCurrent((prev) => (prev + 1) % designers.length);
//     };

//     const prevCard = () => {
//         setCurrent((prev) => (prev - 1 + designers.length) % designers.length);
//     };

//     return (
//         <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-16 relative overflow-hidden">
//             {/* Decorative Background */}
//             <div className="absolute -top-20 -left-10 w-72 h-72 bg-pink-200 rounded-full opacity-30 blur-3xl"></div>
//             <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>

//             {/* Header */}
//             <div className="text-center mb-12">
//                 <h1 className="text-2xl font-serif sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
//                     Shoot for Renowned Designers
//                 </h1>
//                 <p className="mt-4 text-gray-600 text-base md:text-lg">
//                     Join hands with the industry’s top talents and make your mark on the runway
//                 </p>
//             </div>

//             {/* Desktop Grid */}
//             <div className="hidden md:flex container mx-auto gap-8 flex-wrap justify-center">
//                 {designers.map((designer, idx) => (
//                     <div
//                         key={idx}
//                         className="relative bg-white rounded-3xl shadow-lg p-6 w-60 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden"
//                     >
//                         <img
//                             src={designer.img}
//                             alt={designer.name}
//                             className="w-32 h-32 object-cover rounded-full mb-4"
//                         />
//                         <p className="text-gray-800 font-semibold text-center text-lg">
//                             {designer.name}
//                         </p>
//                         <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 opacity-20 rounded-3xl blur-xl pointer-events-none"></div>
//                     </div>
//                 ))}
//             </div>

//             {/* Mobile Card Switch */}
//             <div className="md:hidden container mx-auto relative flex items-center justify-center">
//                 <div className="w-72 bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center transition-all duration-500">
//                     <img
//                         src={designers[current].img}
//                         alt={designers[current].name}
//                         className="w-32 h-32 object-cover rounded-full mb-4"
//                     />
//                     <p className="text-gray-800 font-semibold text-center text-lg">
//                         {designers[current].name}
//                     </p>
//                     <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 opacity-20 rounded-3xl blur-xl pointer-events-none"></div>
//                 </div>

//                 {/* Navigation Buttons */}
//                 <button
//                     onClick={prevCard}
//                     className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow hover:bg-white"
//                 >
//                     ◀
//                 </button>
//                 <button
//                     onClick={nextCard}
//                     className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow hover:bg-white"
//                 >
//                     ▶
//                 </button>
//             </div>
//         </div>
//     );
// }


import React, { useState } from "react";
import bharat from "../assets/ashish.jpg";
import harish from "../assets/ashish.jpg";
import archana from "../assets/ashish.jpg";
import siddharth from "../assets/ashish.jpg";
import dimple from "../assets/ashish.jpg";

export default function Home() {
    const designers = [
        { name: "Bharat Reshma", img: bharat },
        { name: "Harish K Vasisth", img: harish },
        { name: "Archana Kochar", img: archana },
        { name: "Siddharth Tytler", img: siddharth },
        { name: "Dimple Kapoor", img: dimple },
    ];

    const [current, setCurrent] = useState(0);
    const nextCard = () => setCurrent((prev) => (prev + 1) % designers.length);
    const prevCard = () => setCurrent((prev) => (prev - 1 + designers.length) % designers.length);

    return (
        <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-16 relative overflow-hidden">
            {/* Background shapes */}
            <div className="absolute -top-20 -left-10 w-72 h-72 bg-pink-200 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>

            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                    Shoot for Renowned Designers
                </h1>
                <p className="mt-4 text-gray-600 text-base md:text-lg">
                    Join hands with the industry’s top talents and make your mark on the runway
                </p>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:flex container mx-auto gap-8 flex-wrap justify-center">
                {designers.map((designer, idx) => (
                    <div
                        key={idx}
                        className="relative bg-white rounded-3xl shadow-lg p-6 w-60 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden"
                    >
                        {/* Polygon / slanted image */}
                        <div className="w-32 h-32 mb-4 overflow-hidden rounded-3xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                            <img
                                src={designer.img}
                                alt={designer.name}
                                className="w-full h-full object-cover clip-[polygon(0_0,100%_0,100%_85%,0%_100%)]"
                            />
                        </div>
                        <p className="text-gray-800 font-semibold text-center text-lg">
                            {designer.name}
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 opacity-20 rounded-3xl blur-xl pointer-events-none"></div>
                    </div>
                ))}
            </div>

            {/* Mobile Card Switch */}
            <div className="md:hidden container mx-auto relative flex items-center justify-center">
                <div className="w-72 bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center transition-all duration-500">
                    <div className="w-32 h-32 mb-4 overflow-hidden rounded-3xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                        <img
                            src={designers[current].img}
                            alt={designers[current].name}
                            className="w-full h-full object-cover clip-[polygon(0_0,100%_0,100%_85%,0%_100%)]"
                        />
                    </div>
                    <p className="text-gray-800 font-semibold text-center text-lg">
                        {designers[current].name}
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 opacity-20 rounded-3xl blur-xl pointer-events-none"></div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevCard}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow hover:bg-white"
                >
                    ◀
                </button>
                <button
                    onClick={nextCard}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow hover:bg-white"
                >
                    ▶
                </button>
            </div>
        </div>
    );
}
