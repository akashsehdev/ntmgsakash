import React from 'react'
// import Hero from '../components/hero'
import Header from '../components/header'
// import About from '../components/about'
// import Course from '../components/courses'
// import Modelcarousel from '../components/carousel'
import Footer1 from '../components/footer'
import ModelTrainingHero from '../components/mthero'
import TheMentor from '../components/thementor'
import Testimonials from '../components/testimonialcarousel'
import ModelTrainingPrograms from '../components/mtprograms'
import ModelTrainingContact from '../components/mtcontact'
import ModelCourseDetail from '../components/mtcoursedetail'

export default function ModelTraining() {
  return (
    <>
     <Header />
     <ModelTrainingHero />
     <ModelCourseDetail />
     <ModelTrainingContact />
     <ModelTrainingPrograms />
     <TheMentor />
     <Testimonials />
    
    
      <Footer1/>
    </>
  )
}
