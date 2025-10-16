import React from "react";

export default function ImageGrid2() {
    const images = [
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic25.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic22.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic1.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic2.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic3.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic4.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic5.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic6.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic7.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic8.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic9.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic10.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic11.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic12.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic13.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic14.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic15.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic16.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic17.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic18.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic19.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic20.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic21.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic23.jpeg",
        "https://cdn.jsdelivr.net/gh/akashsehdev/ntmgs-assets@main/ImageGrid2/pic24.jpeg",
    ];

    return (
        <section className="bg-black py-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="m-10">
                    <h2 className="text-[20px] lg:text-5xl font-bold font-serif text-white mb-4 text-center">
                        Awards & Recognitions
                    </h2>
                    <p className="text-[14px] lg:text-3xl text-white text-center">
                        Celebrating Excellence: Showcasing Our Journey of Awards and Recognitions
                    </p>
                </div>
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
