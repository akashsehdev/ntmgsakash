import React from "react";
// eslint-disable-next-line
import "swiper/css/bundle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore  from "swiper";
import { Navigation, Autoplay } from 'swiper/modules';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

function index() {
  return (
    <>
    <div>
      <div className="relative py-12">
      <div className="py-14 px-3">
  <div className="lg:max-w-[1280px] md:max-w-[744px] max-w-[375px] mx-auto bg-white">
    <div className="bg-white lg:px-10 md:px-6 px-4 py-7">
      <div className="swiper mySwiper">
      <Swiper
             slidesPerView={"auto"}
             autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
             slidesPerGroupSkip={3}
             grabCursor={true}
             loopFillGroupWithBlank={true}
             loop={true}
             navigation={{
               prevEl: ".swiper-button-prev",
               nextEl: ".swiper-button-next",
             }}
             breakpoints={{
               // when window width is >= 320px
               320: {
                 slidesPerView: 1,
                 spaceBetween: 24,
               },
               // when window width is >= 480px
               480: {
                 slidesPerView: 1,
                 spaceBetween: 24,
               },
               // when window width is >= 640px
               640: {
                 slidesPerView: 1,
                 spaceBetween: 24,
               },
               1024: {
                 slidesPerView: 1,
                 spaceBetween: 32,
                 slidesPerGroup: 1,
               },
               1336: {
                 slidesPerView: 1,
                 spaceBetween: 32,
               },
             }}
              className="swiper mySwiper"
            >
        

          <SwiperSlide className="swiper-slide relative">

            <img src="/portslide1.jpeg" alt="accessories" className="lg:block md:hidden hidden" />
            <img src="/portslide1.jpeg" alt="accessories" className="lg:hidden md:block hidden" />
            <img src="/portslide1.jpeg" alt="accessories" className="lg:hidden md:hidden block" />
            <div className="absolute left-0 bottom-0 bg-white bg-opacity-50 px-4 pt-4 max-w-[275px] w-full">
              <p className="lg:text-4xl md:text-3xl text-3xl font-semibold leading-9 text-center text-gray-800 pb-4">Grooming Classes at NTMGS</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide relative">
            <img src="/slideport2.png" alt="man and woman" className="lg:block md:hidden hidden" />
            <img src="/slideport2.png" alt="man and woman" className="lg:hidden md:block hidden" />
            <img src="/slideport2.png" alt="men and woman" className="lg:hidden md:hidden block" />
            <div className="absolute left-0 bottom-0 bg-white bg-opacity-50 px-4 pt-4 max-w-[267px] w-full">
              <p className="lg:text-4xl md:text-3xl text-3xl font-semibold leading-9 text-center text-gray-800 pb-4">Tarun Rajput Founder NTMGS</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide relative">
            <img src="/awardgulshan.png" alt="woman" className="lg:block md:hidden hidden" />
            <img src="/awardgulshan.png" alt="woman" className="lg:hidden md:block hidden" />
            <img src="/awardgulshan.png" alt="woman" className="lg:hidden md:hidden block" />
            <div className="absolute left-0 bottom-0 bg-white bg-opacity-50 px-4 pt-4  max-w-[293px] w-full">
              <p className="lg:text-4xl md:text-3xl text-3xl font-semibold leading-9 text-center text-gray-800 pb-4">Award by Gulshan Grover & Sangeeta Bijilani</p>
            </div>
          </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</div>


        <style>
          {`
               .swiper-slide {
                text-align: center;
                font-size: 18px;
                /* Center slide text vertically */
                display: -webkit-box;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
                -webkit-box-align: center;
                -webkit-align-items: center;
                align-items: center;
            }
            .swiper-slide img {
                object-fit: cover;
            }
        `}
        </style>
      </div>
    </>
  );
}

export default index;
