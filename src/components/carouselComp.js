// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Carousel = ({ models = [], category }) => {
//   const navigate = useNavigate();

//   if (!models || models.length === 0) return <p>No models found.</p>;

//   return (
//     <div className="flex ml-10 px-0 py-10 gap-4 rounded-xl overflow-x-auto scrollbar-hide">
//       {models.map((model) => (
//         <div
//           key={model.id}
//           className="min-w-[350px] cursor-pointer hover:scale-105 transition"
//           onClick={() => navigate(`/talent/${category}/${model.id}`)}
//         >
//           <img
//             src={model.image}
//             alt={model.name}
//             className="w-full h-[400px] object-cover rounded-xl shadow-md"
//           />
//           <p className="mt-2 text-center font-semibold">{model.name}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Carousel;

import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Carousel = ({ models = [], category }) => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 1; // show one at a time (can adjust)
  const totalDots = Math.ceil(models.length / visibleCards);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: currentIndex * scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  if (!models || models.length === 0) return <p>No models found.</p>;

  return (
    <div className="w-full px-10 py-10">
      {/* Carousel Wrapper */}
      <div
        ref={scrollRef}
        className="flex gap-4 rounded-xl overflow-x-auto scrollbar-none scroll-smooth"
      >
        {models.map((model) => (
          <div
            key={model.id}
            className="min-w-full  md:min-w-[350px] transition-transform duration-300 cursor-pointer"
            onClick={() => navigate(`/talent/${category}/${model.id}`)}
          >
            <img
              src={model.image}
              alt={model.name}
              className="w-full h-[400px] object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 text-center font-semibold">{model.name}</p>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalDots }).map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

