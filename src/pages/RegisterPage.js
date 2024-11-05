import React from 'react'
// import Hero from '../components/hero'
import Header from '../components/header'
// import About from '../components/about'
// import Course from '../components/courses'
// import Modelcarousel from '../components/carousel'
import Footer1 from '../components/footer'
// import Registerhero from '../components/registerhero'
import Registercontact from '../components/registercontact'
// import Aboutbenefit from '../components/aboutbenefit'
// import Aboutlearn from '../components/aboutlearn'
import Hero from '../components/hero'

export default function RegisterPage() {
  return (
    <>
     <Header />
     {/* <Registerhero /> */}
     <Hero />
     <Registercontact />
    
      <Footer1/>
    </>
  )
}