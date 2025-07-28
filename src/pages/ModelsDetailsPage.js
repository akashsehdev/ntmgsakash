import React from 'react'
// import Hero from '../components/hero'
import Header from '../components/header'
// import About from '../components/about'
import Course from '../components/courses'
// import Modelcarousel from '../components/carousel'
import Footer1 from '../components/footer'
import Abouthero from '../components/abouthero'
import Aboutbenefit from '../components/aboutbenefit'
import Aboutlearn from '../components/aboutlearn'
import HeroSection from '../components/hero_new'
import ModelDetail from '../components/ModelDetails'
import Navbar from '../components/navbar'


export default function ModelsDetailsPage() {
  return (
    <>
     {/* <Header /> */}
     <Navbar/>
     <ModelDetail/>
     <Footer1/>
    </>
  )
}
