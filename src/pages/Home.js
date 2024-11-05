import React from 'react'
import Hero from '../components/hero'
import Header from '../components/header'
import About from '../components/about'
import Course from '../components/courses'
import Modelcarousel from '../components/carousel'
import Teamsection from '../components/teamsection'
// import Header1 from '../components/header1'
import Footer1 from '../components/footer'
import Testimonialcarousel from '../components/testimonialcarousel'


export default function Home() {
  return (
    <>
     <Header />
      <Hero />
      <About />
      <Course/>
      <Modelcarousel />
      <Teamsection />
      <Testimonialcarousel />
     
      <Footer1/>
    </>
  )
}
