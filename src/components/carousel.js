// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";

// /* Install pure-react-carousel using -> npm i pure-react-carousel */

// export default function Index() {
//     return (
//         <div className="container mx-auto ">
//              <div class="text-center flex flex-col justify-center items-center space-y-4 mt-32">
//                         <h1 class="text-3xl lg:text-6xl font-semibold leading-9 text-center text-gray-800">NTMGS Agency</h1>
//                         {/* <p class="text-base leading-6 md:leading-4 text-center text-gray-600">Dive deep into the world of fashion with our lastest blogs updates.</p> */}
//         </div>

//         <div className='overflow-y-hidden'>
//       <div className="2xl:container 2xl:mx-auto py-12 px-4 md:px-6 xl:px-20 flex justify-center items-center space-y-8 md:space-y-12 flex-col">
//         <div className="flex items-center justify-center flex-col space-y-2 md:space-y-4">
//           {/* <h1 className="text-xl md:text-2xl lg:text-4xl font-bold lg:font-extrabold leading-5 md:leading-8 leading-9 text-center text-gray-800">Who we are</h1> */}
//           <p className="md:w-full  tracking-wider font-thin text-xl leading-2 md:leading-2 text-center text-gray-600">
//                 {/* Carousel for desktop and large size devices */}
//                 NTMGS Talent Management Agency is a beacon of inclusivity and empowerment within the fashion and modeling industry. With a steadfast commitment to celebrating diversity in all its forms, NTMGS stands at the forefront of reshaping conventional beauty standards. Embracing models of varying ethnicities, body types, genders, and ages, the agency embodies a progressive ethos that champions authenticity and individuality. Through comprehensive representation and dedicated mentorship programs, NTMGS provides a nurturing environment where models can flourish and showcase their unique talents on both local and global stages.
// </p>

//         </div>

//       </div>

//     </div>

//             <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 ">
//                 {/* Carousel for desktop and large size devices */}
//                 <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={8} visibleSlides={4.5} step={1} infinite={true}>
//                     <div className="w-full relative flex items-center justify-center">
//                         <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
//                             <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </ButtonBack>
//                         <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
//                             <Slider>
//                                 <div id="slider" className="h-full flex lg:gap-2 md:gap-2 gap-14 items-center justify-start transition ease-out duration-700">
//                                     <Slide index={0}>
//                                     <div className="block flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="/pic11.png" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                             <img src="/pic1.jpg" alt="sitting area" className="object-cover object-center w-full" />
//                                         </div>
//                                     </Slide>
//                                     <Slide index={1}>
//                                         <div className="block flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="/pic3.jpg" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                             <img src="/pic4.jpg" alt="sitting area" className="object-cover object-center w-full" />
//                                         </div>
//                                     </Slide>
//                                     <Slide index={2}>
//                                     <div className="block flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="/pic5.jpg" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                             <img src="/pic6.jpg" alt="sitting area" className="object-cover object-center w-full" />
//                                         </div>
//                                     </Slide>
//                                     <Slide index={3}>
//                                     <div className="block flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="/pic7.JPG" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                             <img src="/pic8.JPG" alt="sitting area" className="object-cover object-center w-full" />
//                                         </div>
//                                     </Slide>
//                                     <Slide index={4}>
//                                     <div className="block flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="/pic9.JPG" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                             <img src="/pic10.JPG" alt="sitting area" className="object-cover object-center w-full" />
//                                         </div>
//                                     </Slide>
//                                     <Slide index={5}>
//                                     <div className="block flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="/pic11.png" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                             <img src="/pic12.JPG" alt="sitting area" className="object-cover object-center w-full" />
//                                         </div>
//                                     </Slide>
//                                     <Slide index={6}>
//                                     <div className="block flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="/pic13.JPG" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                             <img src="/pic14.JPG" alt="sitting area" className="object-cover object-center w-full" />
//                                         </div>
//                                     </Slide>
//                                     <Slide index={7}>
//                                     <div className="block flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="/pic15.JPG" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                             <img src="/pic16.JPG" alt="sitting area" className="object-cover object-center w-full" />
//                                         </div>
//                                     </Slide>

//                                 </div>
//                             </Slider>
//                         </div>
//                         <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
//                             <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </ButtonNext>
//                     </div>
//                 </CarouselProvider>

//                 {/* Carousel for tablet and medium size devices */}
//                 <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={16} visibleSlides={2} step={1} infinite={true}>
//                     <div className="w-full relative flex items-center justify-center">
//                         <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
//                             <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </ButtonBack>
//                         <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
//                             <Slider>
//                                 <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
//                                     <Slide index={0}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic2.jpg" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         {/* <img src="/pic1.jpg" alt="sitting area" className="object-cover object-center w-full" /> */}
//                                         </div>
//                                     </Slide>
//                                     <Slide index={1}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic3.jpg" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         {/* <img src="/pic4.jpg" alt="sitting area" className="object-cover object-center w-full" /> */}
//                                         </div>
//                                     </Slide>
//                                     <Slide index={2}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic5.jpg" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         {/* <img src="/pic6.jpg" alt="sitting area" className="object-cover object-center w-full" /> */}
//                                         </div>
//                                     </Slide>
//                                     <Slide index={3}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic7.JPG" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         {/* <img src="/pic8.jpg" alt="sitting area" className="object-cover object-center w-full" /> */}
//                                         </div>
//                                     </Slide>
//                                     <Slide index={4}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic9.JPG" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         {/* <img src="/pic10.jpg" alt="sitting area" className="object-cover object-center w-full" /> */}
//                                         </div>
//                                     </Slide>
//                                     <Slide index={5}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic11.JPG" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         {/* <img src="/pic12.jpg" alt="sitting area" className="object-cover object-center w-full" /> */}
//                                         </div>
//                                     </Slide>
//                                     <Slide index={6}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic13.JPG" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         {/* <img src="/pic14.jpg" alt="sitting area" className="object-cover object-center w-full" /> */}
//                                         </div>
//                                     </Slide>
//                                     <Slide index={7}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic15.JPG" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         {/* <img src="/pic16.jpg" alt="sitting area" className="object-cover object-center w-full" /> */}
//                                         </div>
//                                     </Slide>
//                                     <Slide index={8}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic1.JPG" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         {/* <img src="/pic16.jpg" alt="sitting area" className="object-cover object-center w-full" /> */}
//                                         </div>
//                                     </Slide>
//                                     <Slide index={9}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic4.jpg" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         {/* <img src="/pic16.jpg" alt="sitting area" className="object-cover object-center w-full" /> */}
//                                         </div>
//                                     </Slide>
//                                     <Slide index={10}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic6.jpg" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         {/* <img src="/pic16.jpg" alt="sitting area" className="object-cover object-center w-full" /> */}
//                                         </div>
//                                     </Slide>
//                                     <Slide index={11}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic8.JPG" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         {/* <img src="/pic16.jpg" alt="sitting area" className="object-cover object-center w-full" /> */}
//                                         </div>
//                                     </Slide>
//                                     <Slide index={12}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic10.JPG" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         {/* <img src="/pic16.jpg" alt="sitting area" className="object-cover object-center w-full" /> */}
//                                         </div>
//                                     </Slide>
//                                     <Slide index={13}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic12.JPG" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         {/* <img src="/pic16.jpg" alt="sitting area" className="object-cover object-center w-full" /> */}
//                                         </div>
//                                     </Slide>
//                                     <Slide index={14}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic14.JPG" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         {/* <img src="/pic16.jpg" alt="sitting area" className="object-cover object-center w-full" /> */}
//                                         </div>
//                                     </Slide>
//                                     <Slide index={15}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic16.JPG" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         {/* <img src="/pic16.jpg" alt="sitting area" className="object-cover object-center w-full" /> */}
//                                         </div>
//                                     </Slide>

//                                 </div>
//                             </Slider>
//                         </div>
//                         <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
//                             <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </ButtonNext>
//                     </div>
//                 </CarouselProvider>

//                 {/* Carousel for mobile and Small size Devices */}
//                 <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true}>
//                     <div className="w-full relative flex items-center justify-center">
//                         <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
//                             <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </ButtonBack>
//                         <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
//                             <Slider>
//                                 <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
//                                     <Slide index={0}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic1.jpg" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         </div>
//                                     </Slide>
//                                     <Slide index={1}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic2.jpg" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         </div>
//                                     </Slide>
//                                     <Slide index={2}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic3.jpg" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         </div>
//                                     </Slide>
//                                     <Slide index={3}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic4.jpg" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         </div>
//                                     </Slide>
//                                     <Slide index={4}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic5.jpg" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         </div>
//                                     </Slide>
//                                     <Slide index={5}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic6.jpg" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         </div>
//                                     </Slide>
//                                     <Slide index={6}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic7.JPG" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         </div>
//                                     </Slide>
//                                     <Slide index={7}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic8.JPG" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         </div>
//                                     </Slide>
//                                     <Slide index={8}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic9.JPG" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         </div>
//                                     </Slide>
//                                     <Slide index={9}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic10.JPG" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         </div>
//                                     </Slide>
//                                     <Slide index={10}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic13.JPG" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         </div>
//                                     </Slide>
//                                     <Slide index={11}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                         <img src="/pic12.JPG" alt="sitting area" className="object-cover object-center w-full pb-2" />
//                                         </div>
//                                     </Slide>
//                                 </div>
//                             </Slider>
//                         </div>
//                         <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
//                             <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </ButtonNext>
//                     </div>
//                 </CarouselProvider>
//             </div>
//         </div>
//     );
// }

import React, { useRef } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import men from "../data/men";
import women from "../data/women";
import boys from "../data/boys";
import girls from "../data/girls";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
    onClick={onClick}
  >
    <FiChevronRight size={24} />
  </div>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
    onClick={onClick}
  >
    <FiChevronLeft size={24} />
  </div>
);

export default function Carousel() {
  const navigate = useNavigate();
  const dragRef = useRef(false);

  const models = [
    ...men.map((m) => ({ ...m, category: "men" })),
    ...women.map((m) => ({ ...m, category: "women" })),
    ...boys.map((m) => ({ ...m, category: "boys" })),
    ...girls.map((m) => ({ ...m, category: "girls" })),
  ];

  const settings = {
    dots: true, // ✅ Enabled dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "80px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: () => (dragRef.current = true),
    afterChange: () => {
      setTimeout(() => {
        dragRef.current = false;
      }, 100);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerPadding: "40px" },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerPadding: "20px" },
      },
    ],
  };

  const handleClick = (model) => {
    if (!dragRef.current) {
      navigate(`/talent/${model.category}/${model.id}`);
    }
  };

  return (
    <div className="relative px-4 py-10 mx-auto">
      <Slider {...settings}>
        {models.map((model) => (
          <div key={`${model.category}-${model.id}`} className="px-4">
            <div
              className="relative md:w-[390px] h-[250px] md:h-[430px] bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
              onClick={() => handleClick(model)}
            >

                
              {/* Model Name Centered */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <h2 className="text-white text-center text-2xl md:text-3xl font-bold px-6 py-2 rounded-full">
                  {model.name}
                </h2>
              </div>


              {/* Image */}
              <img
                src={model.image}
                alt={model.name}
                className="h-full w-full bg-black/50 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
