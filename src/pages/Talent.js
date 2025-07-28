import React from "react";
import Carousel from "../components/carouselComp";
import men from "../data/men";
import women from "../data/women";
import boys from "../data/boys";
import girls from "../data/girls";
import Navbar from "../components/navbar";
import HeroSection from "../components/hero_new";

const Talent = () => {
  return (
    <>
    <HeroSection/>
    <div className="min-h-screen bg-white py-10 px-4 md:px-16">
      <h1 className="text-4xl font-bold text-center mb-10">Our Talent</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Men</h2>
        <Carousel models={men} category="men" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Women</h2>
        <Carousel models={women} category="women" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Boys</h2>
        <Carousel models={boys} category="boys" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Girls</h2>
        <Carousel models={girls} category="girls" />
      </section>
    </div>
    </>
  );
};

export default Talent;
