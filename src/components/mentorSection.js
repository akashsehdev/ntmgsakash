import React from "react";

// Example images – replace with your own
import img1 from "../assets/mentors/tarun.jpeg";
import img2 from "../assets/mentors/dimplekapoor.jpg";
import img3 from "../assets/mentors/saudkhan.jpg";
import img4 from "../assets/mentors/ashish.jpg";
import img5 from "../assets/mentors/amisha.jpg";
import img6 from "../assets/mentors/tarunsingh.jpg";
import img7 from "../assets/mentors/prateekdhawan.JPG";
import img8 from "../assets/mentors/khizar.JPG";
import img9 from "../assets/mentors/apala.jpg";
import img10 from "../assets/mentors/salik.jpg";
import img11 from "../assets/mentors/umang.jpg";

export default function MentorSection() {
  const mentors = [
    { id: 1, image: img1, name: "Tarun Rajput", caption: "Founder, NTMGS" },
    { id: 2, image: img2, name: "Dimple Kapoor", caption: "Grooming Expert" },
    { id: 3, image: img3, name: "Saud Khan", caption: "Top Model" },
    { id: 4, image: img4, name: "Ashish Kumar", caption: "Fitness Expert" },
    { id: 5, image: img5, name: "Amisha Chaudhary", caption: "Pageant Coach" },
    { id: 6, image: img6, name: "Tarun Singh", caption: "Celebrity Photographer" },
    { id: 7, image: img7, name: "Prateek Dhawan", caption: "Founder, DCOP" },
    { id: 8, image: img8, name: "Khizar Hussain", caption: "Fashion Choreographer" },
    { id: 9, image: img9, name: "Apala Rajvanshi", caption: "Top Model" },
    { id: 10, image: img10, name: "Salik Zargar", caption: "Top Model" },
    { id: 11, image: img11, name: "Umang Katyal", caption: "Fitness Coach" },
  ];

  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-center font-serif text-white text-2xl lg:text-6xl mb-12">
          Meet Our Mentors
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
            >
              {/* Image */}
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay with name + caption */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center p-4">
                <p className="text-white text-xl font-bold">{mentor.name}</p>
                <p className="text-gray-200 text-sm mt-2">{mentor.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
