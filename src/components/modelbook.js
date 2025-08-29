import React from "react";
import { useNavigate } from "react-router-dom";


export default function ModelBook({ models = [], category }) {
    const navigate = useNavigate();

    if (!models || models.length === 0) {
        return <p className="text-center py-10">No models found.</p>;
    }

    return (
        <div className="w-full bg-black px-32 py-20">
            <h2 className="text-center font-serif text-white text-6xl font-medium mb-10">
                Our Talents
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 md:px-10">
                {models.map((model) => (
                    <div
                        key={model.id}
                        onClick={() => navigate(`/talent/${category}/${model.id}`)}
                        className="cursor-pointer group"
                    >
                        <div className="overflow-hidden border-4 border-white">
                            <img
                                src={model.image}
                                alt={model.name}
                                className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <p className="mt-2 text-center text-white font-medium">
                            {model.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
