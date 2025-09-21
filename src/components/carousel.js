import React, { useRef } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import women from "../data/women";
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
    // ...men.map((m) => ({ ...m, category: "men" })),
    ...women.map((m) => ({ ...m, category: "women" })),
    // ...boys.map((m) => ({ ...m, category: "boys" })),
    // ...girls.map((m) => ({ ...m, category: "girls" })),
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
    <div className="relative px-4 mb-20 py-10 mx-auto">
      <Slider {...settings}>
        {models.map((model) => (
          <div key={`${model.category}-${model.id}`} className="px-4">
            <div
              className="relative md:w-[390px] h-[250px] md:h-[430px] bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
              // onClick={() => handleClick(model)
              // }
            >


              {/* Model Name Centered */}
              {/* <div className="absolute inset-0 flex items-center justify-center z-10">
                <h2 className="text-white text-center text-2xl md:text-3xl font-bold px-6 py-2 rounded-full">
                  {model.name}
                </h2>
              </div> */}

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
