import React from "react";
import Hero from "../components/hero";
import Header from "../components/header";
import About from "../components/about";
import Modelcarousel from "../components/carousel";
import Teamsection from "../components/teamsection";
import HeroSection from "../components/hero_new";
// import Header1 from '../components/header1'
import Footer1 from "../components/footer";
import Testimonialcarousel from "../components/testimonialcarousel";
import HomeModelsSection2 from "../components/home_section_2";
import Programs from "../components/programs";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <HeroSection />
      <HomeModelsSection2 />
      {/* <Hero /> */}
      <Programs />
      <About />
      {/* <Course/> */}
      <Modelcarousel />
      {/* <Teamsection /> */}
      <Testimonialcarousel />
      {/* <div className="flex justify-center text-center md:gap-14 col-span-2"> */}
        {/* mobile */}
        {/* <div className="md:hidden">
          <h1>left mobile</h1>
          <p>Full Stack Developer</p>
        </div> */}

        {/* mobile */}
        {/* <div className="md:hidden">
          <h1>Right Mobile</h1>
          <p>Full Stack Developer</p>
        </div> */}

        {/* desktop */}
        {/* <div className="hidden md:block">
          <h1>left desktop</h1>
          <p>Full Stack Developer</p>
        </div> */}

        {/* desktop */}
        {/* <div className="hidden md:block">
          <h1>Right Desktop</h1>
          <p>Full Stack Developer</p>
        </div>  */}
      {/* </div> */}
      <Footer1 />
    </>
  );
}
