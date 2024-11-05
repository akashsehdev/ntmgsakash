// import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Testimonialcard from './testimonialcard'

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Index() {
    return (
        <div className="2xl:mx-auto 2xl:container flex justify-center">
            <div className=" py-12 m-8 w-full ">
            <div class="text-center flex flex-col justify-center items-center space-y-4 ">
                        <h1 class="text-3xl lg:text-6xl font-semibold leading-9 text-center text-gray-800">Testimonials</h1>
                        {/* <p class="text-base leading-6 md:leading-4 text-center text-gray-600">Dive deep into the world of fashion with our lastest blogs updates.</p> */}
        </div>
                {/* Carousel for Small-Sized Screen */}
                <CarouselProvider className="relative block sm:hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={9} visibleSlides={1} step={1} infinite={true}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <Slider>
                           
                        <Slide className="carousel__inner-slideLarge" index={0}>
                            <Testimonialcard imgs="https://www.youtube.com/embed/J-M4jyCYbcY?si=tmbfAGJ4r2ZHDWif" caps="Maira Singh Rajput shares her experience with NTMGS"  />
                            </Slide>
                            <Slide className="carousel__inner-slideLarge" index={1}>
                            <Testimonialcard imgs="https://www.youtube.com/embed/wUzFMtcKY34?si=DHF_5N6yKI6p2bJo" caps="Pradeep Singh Kharera shares his experience with NTMGS"  />
                            </Slide>
                            <Slide className="carousel__inner-slideLarge" index={2}>
                            <Testimonialcard imgs="https://www.youtube.com/embed/Y41CidYTdx0?si=5mEUYRnYRHOmLBQ4" caps="Mohit Prajapati shares his experience with NTMGS"  />
                            </Slide>
                            <Slide className="carousel__inner-slideLarge" index={3}>
                            <Testimonialcard imgs="https://www.youtube.com/embed/YFjMHiWnSH4?si=ZR-oJ40c9Trf9JKR" caps="Deepak Gehlot from Delhi shares his experience with NTMGS"  />
                            </Slide>
                            <Slide className="carousel__inner-slideLarge" index={4}>
                            <Testimonialcard imgs="https://www.youtube.com/embed/9PXn_ub0KKE?si=cdFUJu7QPfPvGzpA" caps="Nitesh shares experience regarding his diploma course expereince with NTMGS"  />
                            </Slide>
                            <Slide className="carousel__inner-slideLarge" index={5}>
                            <Testimonialcard imgs="https://www.youtube.com/embed/LshKm_1aFeE?si=23PTvOUHSABCqvhl" caps="Karan Singh shares her experience regarding NTMGS"  />
                            </Slide>
                            <Slide className="carousel__inner-slideLarge" index={6}>
                            <Testimonialcard imgs="https://www.youtube.com/embed/X59ramTYk18?si=VWYB-oicErlB-rLN" caps="Vishakha Jaatni shares her experience with NTMGS"  />
                            </Slide>
                            <Slide className="carousel__inner-slideLarge" index={7}>
                            <Testimonialcard imgs="https://www.youtube.com/embed/_UbKfcYw5gI?si=RZf_7nH3o-FIWe1c" caps="Shrey shares his portfolio experience with NTMGS"  />
                            </Slide>

                        </Slider>
                        <ButtonNext role="button" aria-label="slide forward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for Medium and Large-Sized Screen */}
                <CarouselProvider className="relative hidden sm:block" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={8} visibleSlides={3} step={1} infinite={true} currentSlide={1}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0  focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <Slider className="carousel__sliderLarge">
                            <Slide className="carousel__inner-slideLarge" index={0}>
                            <Testimonialcard imgs="https://www.youtube.com/embed/J-M4jyCYbcY?si=tmbfAGJ4r2ZHDWif" caps="Maira Singh Rajput shares her experience with NTMGS"  />
                            </Slide>
                            <Slide className="carousel__inner-slideLarge" index={1}>
                            <Testimonialcard imgs="https://www.youtube.com/embed/wUzFMtcKY34?si=DHF_5N6yKI6p2bJo" caps="Pradeep Singh Kharera shares his experience with NTMGS"  />
                            </Slide>
                            <Slide className="carousel__inner-slideLarge" index={2}>
                            <Testimonialcard imgs="https://www.youtube.com/embed/Y41CidYTdx0?si=5mEUYRnYRHOmLBQ4" caps="Mohit Prajapati shares his experience with NTMGS"  />
                            </Slide>
                            <Slide className="carousel__inner-slideLarge" index={3}>
                            <Testimonialcard imgs="https://www.youtube.com/embed/YFjMHiWnSH4?si=ZR-oJ40c9Trf9JKR" caps="Deepak Gehlot from Delhi shares his experience with NTMGS"  />
                            </Slide>
                            <Slide className="carousel__inner-slideLarge" index={4}>
                            <Testimonialcard imgs="https://www.youtube.com/embed/9PXn_ub0KKE?si=cdFUJu7QPfPvGzpA" caps="Nitesh shares experience regarding his diploma course expereince with NTMGS"  />
                            </Slide>
                            <Slide className="carousel__inner-slideLarge" index={5}>
                            <Testimonialcard imgs="https://www.youtube.com/embed/LshKm_1aFeE?si=23PTvOUHSABCqvhl" caps="Karan Singh shares her experience regarding NTMGS"  />
                            </Slide>
                            <Slide className="carousel__inner-slideLarge" index={6}>
                            <Testimonialcard imgs="https://www.youtube.com/embed/X59ramTYk18?si=VWYB-oicErlB-rLN" caps="Vishakha Jaatni shares her experience with NTMGS"  />
                            </Slide>
                            <Slide className="carousel__inner-slideLarge" index={7}>
                            <Testimonialcard imgs="https://www.youtube.com/embed/_UbKfcYw5gI?si=RZf_7nH3o-FIWe1c" caps="Shrey shares his portfolio experience with NTMGS"  />
                            </Slide>
                            
                        </Slider>
                        <ButtonNext role="button" aria-label="slide forward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>

            <style>
                {`
                    .gallery-cell {
                        height: 386px;
                        padding-right:15px;
                    }
                    @media (min-width: 300px) and (max-width: 420px) {
                        .gallery-cell {
                            height: 286px !important;
                            
                        }
                    }
                    
                    @media (max-width: 640px) {
                        .gallery-cell {
                            padding-right:0;
                        }
                    }

                    .carousel__sliderLarge {
                        padding-left: 20%;
                        padding-right: 20%;
                    }

                    /* gives us the illusion of spaces between the slides */
                    .carousel__inner-slideLarge {
                        width: calc(100% - 20px);
                        height: calc(100% - 20px);
                        left: 10px;
                        top: 10px;
                        
                    }
                `}
            </style>
        </div>
    );
}
