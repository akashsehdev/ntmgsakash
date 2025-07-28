import React from "react";
import { Link } from "react-router-dom";
import programs from "../data/programs";
import HeroSection from "../components/hero_new";
import Programs from "../components/programs";
import Footer1 from "../components/footer";

const ProgramsPage = () => {
  return (
    <>
        <HeroSection/>
        <Programs/>
        <Footer1/>
    </>
  );
};

export default ProgramsPage;
