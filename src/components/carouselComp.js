import React from "react";
import { useNavigate } from "react-router-dom";

const Carousel = ({ models = [], category }) => {
  const navigate = useNavigate();

  if (!models || models.length === 0) return <p>No models found.</p>;

  return (
    <div className="flex px-10 py-10 gap-4 rounded-xl overflow-x-auto">
      {models.map((model) => (
        <div
          key={model.id}
          className="min-w-[350px] cursor-pointer hover:scale-105 transition"
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
  );
};

export default Carousel;
