import React from "react"; 
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function Index() {
    return (
        <div className="px-4 md:px-6 md:py-12 bg-gray-50" style={{ height: "600px" }}>
            <div className="container mx-auto hidden lg:block px-5 max-w-screen-md h-full">
                <div className="w-full h-full">
                    <input type="radio" name="slider" id="item-1" defaultChecked className="hidden" />
                    <input type="radio" name="slider" id="item-2" className="hidden" />
                    <input type="radio" name="slider" id="item-3" className="hidden" />
                    
                    <div className="relative w-full h-full mb-5 cards flex justify-center">
                        <label className="card absolute w-8/12 lg:w-10/12 xl:w-full h-full transition-transform duration-300 ease-in-out cursor-pointer" htmlFor="item-1" id="song-1">
                            <img src="/port4.jpg" alt="song" className="mt-2 w-full h-full object-center object-cover" />
                        </label>
                        <label className="card absolute w-8/12 lg:w-10/12 xl:w-full h-full transition-transform duration-300 ease-in-out cursor-pointer" htmlFor="item-2" id="song-2">
                            <img src="/port5.jpg" alt="song" className="mt-2 w-full h-full object-center object-cover" />
                        </label>
                        <label className="card absolute w-8/12 lg:w-10/12 xl:w-full h-full transition-transform duration-300 ease-in-out cursor-pointer" htmlFor="item-3" id="song-3">
                            <img src="/port6.jpg" alt="song" className="mt-2 w-full h-full object-center object-cover" />
                        </label>
                    </div>
                </div>
            </div>

            <div className="container md:hidden mx-auto px-4 md:px-24 bg-gray-50">
                <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} infinite={true}>
                    <div className="slider lg:hidden py-6 md:py-12">
                        <h1 className="text-3xl font-semibold text-center text-gray-800">Collections</h1>
                        <div className="slide-ana lg:relative mt-8 md:mt-20">
                            <Slider>
                                <Slide index={0}>
                                    <div className="flex justify-center">
                                        <div className="flex items-center justify-center w-full flex-col">
                                            <div className="flex justify-start w-full">
                                                <p className="text-base leading-4 text-gray-800 mb-2 text-left">Her Closets</p>
                                            </div>
                                            <img src="/port4.jpg" alt="model" className="w-full h-full object-center object-cover sm:h-full" />
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={1}>
                                    <div className="flex justify-center">
                                        <div className="flex items-center justify-center w-full flex-col">
                                            <div className="w-full flex justify-start">
                                                <p className="text-base leading-4 text-gray-800 mb-2 text-left">Men’s Classic</p>
                                            </div>
                                            <img src="/port5.jpg" alt="model" className="w-full h-full object-center object-cover sm:h-full" />
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={2}>
                                    <div className="flex justify-center">
                                        <div className="flex items-center justify-center w-full flex-col">
                                            <div className="w-full flex justify-start">
                                                <p className="text-base leading-4 text-gray-800 mb-2 text-left">Outdoor Fashion</p>
                                            </div>
                                            <img src="/port6.jpg" alt="model" className="w-full h-full object-center object-cover sm:h-full" />
                                        </div>
                                    </div>
                                </Slide>
                            </Slider>
                        </div>
                    </div>

                    <div className="flex justify-between w-full py-8 lg:px-24 lg:mt-20">
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

            <style>
                {`
                    #item-1:checked ~ .cards #song-3,
                    #item-2:checked ~ .cards #song-1,
                    #item-3:checked ~ .cards #song-2 {
                        transform: translatex(-40%) scale(0.8);
                        opacity: 0.4;
                        z-index: 0;
                    }

                    #item-1:checked ~ .cards #song-2,
                    #item-2:checked ~ .cards #song-3,
                    #item-3:checked ~ .cards #song-1 {
                        transform: translatex(40%) scale(0.8);
                        opacity: 0.4;
                        z-index: 0;
                    }

                    #item-1:checked ~ .cards #song-1,
                    #item-2:checked ~ .cards #song-2,
                    #item-3:checked ~ .cards #song-3 {
                        transform: translatex(0) scale(1);
                        opacity: 1;
                        z-index: 1;
                    }

                    .slider {
                        width: 100%;
                        height: 300px;
                        position: relative;
                        overflow: hidden;
                    }

                    Slide > div {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        transition: all 1s;
                    }

                    @media (min-width: 640px) and (max-width: 1023px) {
                        .slider {
                            height: 750px;
                        }
                    }
                    @media (min-width: 200px) and (max-width: 639px) {
                        .slider {
                            height: 450px;
                        }
                    }
                `}
            </style>
        </div>
    );
}
