import React from "react";

export default function ImageGrid() {
  const images = [
    "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid/pic1.jpeg",
    "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid/pic2.jpeg",
    "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid/pic3.jpeg",
    "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid/pic4.jpeg",
    "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid/pic5.jpeg",
    "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid/pic6.jpeg",
    "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid/pic7.jpeg",
    "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid/pic8.jpeg",
    "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid/pic9.jpeg",
    "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid/pic10.jpeg",
  ];

  return (
    <section className="bg-black py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full h-[250px] aspect-[5/3] overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
