import React from "react";
// import Hero from '../components/hero'
import Header from "../components/header";
// import About from '../components/about'
// import Course from '../components/courses'
// import Modelcarousel from '../components/carousel'
import Footer1 from "../components/footer";
// import Registerhero from '../components/registerhero'
import Registercontact from "../components/registercontact";
// import Aboutbenefit from '../components/aboutbenefit'
// import Aboutlearn from '../components/aboutlearn'
import Hero from "../components/hero";
import HeroSection from "../components/hero_new";

export default function RegisterPage() {
  return (
    <>
      {/* <Header /> */}
      {/* <Registerhero /> */}
      <HeroSection />
      <div className="bg-gray-100 py-10 px-4">
        <Registercontact />
      </div>
      <Footer1 />
    </>
  );
}
