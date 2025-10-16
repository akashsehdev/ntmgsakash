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
import FAQSection from "../components/faq";
import FormPopupCTA from "../components/formpopup";
import AgencyCarousel from "../components/agencies_associated";
import SuccessStories from "../components/success_stories";
import Placements from "../components/placements";
import TalentJourney from "../components/talentJourney";
import GallerySection from "../components/mentorSection";
import MentorSection from "../components/mentorSection";
import ImageGrid from "../components/ImageGrid";
import ShortsSection from "../components/shortsSection";

export default function Home() {
  const shorts = [
    "tkiZHKUoPag",
    "1YiqBHh3f0g", 
    "Ey9AiPGRoVM",
    "GSui5a24s38",
    "Kmqg-ubAfDg", 
    "3Z0nRSHI3fI",
    "EQMNqDMyHLA",
    "tvYw8VPFD78",
    "gwdaKSZ-t7o",
    "Il683TlPysA",
    "FEMM4-0xcpA"

  ];
  return (
    <>
      {/* <Header /> */}
      <HeroSection />
      <HomeModelsSection2 />
      {/* <Hero /> */}
      <Programs />
      <About />
      <AgencyCarousel />
      {/* <Course/> */}
      {/* <Modelcarousel /> */}
      <SuccessStories />
      <TalentJourney />
      <Modelcarousel />
      <Placements />
      <MentorSection />
      {/* <Teamsection /> */}
      <Testimonialcarousel />
      <ShortsSection videos={shorts} />

      <FAQSection />
      <ImageGrid />
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
