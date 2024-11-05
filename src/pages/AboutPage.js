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


export default function AboutPage() {
  return (
    <>
     <Header />
     <Abouthero />
     
     <Aboutbenefit />
     <Aboutlearn />
     <Course />
      <Footer1/>
    </>
  )
}
