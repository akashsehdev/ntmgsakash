// import { Link } from "react-router-dom";
// import tarun_1 from "../assets/tarun_1.JPEG";
// import tarun_2 from "../assets/tarun_2.JPG";
// import tarun_3 from "../assets/tarun_3.JPG";

// export default function Abouthero() {
//   return (
//     <>
//       <div class="hidden lg:block relative h-[70vh] text-black overflow-hidden">


//         <div class="flex flex-row items-center justify-end h-full ">
//           <div class="absolute w-1/3 inset-0">
//             {/* <img src="/trnewhero.png" alt="Background " class="object-cover ml-32 object-center" /> */}
//             <img src={tarun_1} alt="Background" class="object-cover ml-16 object-center" />
//             <div class="absolute inset-0 "></div>
//           </div>

//           <div class="w-2/3 h-full relative z-10 flex  pl-32  flex-col justify-center items-center ">
//             {/* <img src="/ntmgslogomobile.png"  alt="Background " class="z-12" /> */}

//             <br /><br />
//             <h1 class="text-5xl font-bold leading-tight -ml-24 mb-4">About NTMGS</h1>
//             <br />
//             <p class="text-lg text-justify  mr-32 mb-8">NTMGS is an all inclusive agency dedicated towards a focused endeavour of transforming models and aspiring models into their world class counterparts by incorporating years of industry experience and knowledge. Transforming dreams of all men and women into groomed, artistic versions of themselves, any place to THE place. We do not discriminate over gender, height, weight, age, and colour.</p>
//             {/* <Link to="/register"  className="cursor-pointer">
//     <button class="bg-black text-gray-100 hover:bg-gray-700 py-2 px-6 text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Enroll Here</button>
//     </Link> */}
//           </div>
//         </div>
//       </div>


//       {/* small screen */}
//       <div class="xl:hidden bg-gray-100  mb-4  h-96 text-black overflow-hidden">

//         <div class="absolute mt-10 ml-2">

//           <img src="/trnewheromobile.png" alt="Background " class="object-cover mt-16 h-[210px]  object-center" />
//           {/* <div class="absolute inset-0 bg-black opacity-20"></div> */}
//         </div>

//         <div class="flex flex-row items-center mr-12 mt-12 justify-end  h-full">
//           <div class="relative z-10 flex flex-col justify-center  items-center h-full ">
//             <img src="/ntmgslogomobile.png" class="mt-4" alt="Background " />

//             <br />
//             {/* <h1 class="text-5xl font-bold leading-tight mb-4">Welcome to Our Awesome Website</h1>
//     <p class="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p> */}
//             <Link to="/register" className="cursor-pointer">
//               <button class="bg-black text-gray-100 hover:bg-gray-700 py-2 px-6 text-xs font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Enroll Here</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//       {/* small screen ends */}

//     </>
//   );
// };

import { Link } from "react-router-dom";
import tarun_1 from "../assets/tarun_1.JPEG";
// import tarun_2 from "../assets/tarun_2.JPG";
import tarun_3 from "../assets/mentors/tarun.jpeg";

export default function Abouthero() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div className="w-full h-[450px] sm:h-96 md:h-[500px] lg:h-[600px] relative">
          <img
            src={tarun_3}
            alt="Background"
            className="object-cover object-center w-full h-full rounded-2xl shadow-2xl"
          />
        </div>

        {/* Right Text */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-3xl font-serif sm:text-4xl md:text-5xl  mb-6">
            About NTMGS
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
            NTMGS is an all-inclusive agency dedicated to transforming models and aspiring models into world-class professionals by incorporating years of industry experience and knowledge. We turn dreams into groomed, artistic versions of themselves. We do not discriminate based on gender, height, weight, age, or color.
          </p>
          <Link to="/register" className="self-center lg:self-start">
            <button className="bg-white text-black hover:bg-gray-200 py-2 px-6 text-base font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              Enroll Here
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
