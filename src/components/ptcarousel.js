import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import './ptcarousel.css'

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Index() {
    return (
        <div className="px-2  bg-gray-50 " >
            
            <div className="container bg-gray-50">
                <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} infinite={true}>
                    <div className="slider">
                       
                        <div className="slide-ana ">
                            <Slider>
                                <Slide index={0}>
                                    <div className="flex">
                                        <div className="flex items-center justify-center w-full  flex-col">
                                            {/* <div className="flex justify-start w-full">
                                                <p className="text-base leading-4 text-gray-800 mb-2 text-left">Her Closet</p>
                                            </div> */}
                                            <img src="/pic2.jpg" className="w-full h-full object-center object-cover sm:h-full" alt="model" />
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={1}>
                                    <div className="flex relative">
                                        <div className="flex items-center justify-center w-full  flex-col">
                                            {/* <div className="w-full flex justify-start">
                                                <p className="text-base leading-4 text-gray-800 mb-2 text-left">Men’s Classic</p>
                                            </div> */}
                                            <img src="/pic1.jpg" className="w-full h-full object-center object-cover sm:h-full" alt="model" />
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={2}>
                                    <div className="flex relative">
                                        <div className="flex items-center justify-center w-full  flex-col">
                                            {/* <div className="w-full flex justify-start">
                                                <p className="text-base leading-4 text-gray-800 mb-2 text-left">Outdoor Fashion</p>
                                            </div> */}
                                            <img src="/pic3.jpg" className="w-full h-full object-center object-cover sm:h-full" alt="model" />
                                        </div>
                                    </div>
                                </Slide>
                            </Slider>
                        </div>
                    </div>
                    <div className="flex justify-between mt-2 w-full">
                        <ButtonBack aria-label="go next" className="transform rotate-180 border rounded-full border-gray-600 p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
                            <svg width={23} height={24} viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.79102 12H18.2077" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.375 16L18.2083 12" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.375 8L18.2083 12" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <ButtonNext aria-label="go next" className="border rounded-full border-gray-600 p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
                            <svg width={23} height={24} viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.79102 12H18.2077" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.375 16L18.2083 12" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.375 8L18.2083 12" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>

           
        </div>
    );
}
