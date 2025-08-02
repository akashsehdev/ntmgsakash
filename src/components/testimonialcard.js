import React from "react";

export default function TestimonialCard({ imgs, caps }) {
  return (
    <div className="px-4 py-6 w-full">
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title={caps}
          src={imgs}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h1 className="mt-4 text-center text-[16px] md:text-[22px] font-semibold text-gray-700">{caps}</h1>
    </div>
  );
}
