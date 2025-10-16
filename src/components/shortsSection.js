import React from "react";

const ShortsSection = ({ videos }) => {
  return (
    <section className="w-full py-12 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-serif md:text-3xl font-bold text-center mb-8">
          Reviews of Our Students
        </h2>

        <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
          {videos.map((videoId, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[220px] sm:w-[260px] md:w-[300px] aspect-[9/16] rounded-2xl overflow-hidden shadow-lg border border-gray-700"
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&loop=1&playlist=${videoId}&modestbranding=1&controls=1`}
                title={`YouTube Short ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortsSection;
