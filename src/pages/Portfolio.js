import React from 'react'
// import Hero from '../components/hero'
import Header from '../components/header'
// import About from '../components/about'
// import Course from '../components/courses'
// import Modelcarousel from '../components/carousel'
import Footer1 from '../components/footer'
import PortfolioSlider from '../components/portslider'
import PortfolioSlider1 from '../components/portslider1'
import PortfolioSlider2 from '../components/portslider2'
import PortfolioBenefit from '../components/portbenefit'
import PortfolioExpect from '../components/portexpect'
import PortfolioNeed from '../components/portneed'
import PortFaq from '../components/portfaq'
import PortContact from '../components/portcontact'
import Testimonials from '../components/testimonialcarousel'

export default function Portfolio() {
  return (
    <>
     <Header />
     <PortfolioSlider />
     <PortfolioBenefit />
     <PortfolioSlider1 />
     <PortfolioExpect />
     <PortfolioSlider2 />
     <PortfolioNeed />
     <PortFaq />
     <PortContact />
     <Testimonials />
      <Footer1/>
    </>
  )
}
