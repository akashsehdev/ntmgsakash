import React from 'react'
// import Hero from '../components/hero'
import Header from '../components/header'
// import About from '../components/about'
// import Course from '../components/courses'
// import Modelcarousel from '../components/carousel'
import Footer1 from '../components/footer'
import PageantTrainingHero from '../components/pthero'
import PageantCourseDetail from '../components/ptcoursedetail'
import PageantTrainingPrograms from '../components/ptprograms'
import PageantTrainingContact from '../components/ptcontact'
// import TheMentor from '../components/thementor'
import Testimonials from '../components/testimonialcarousel'
import Pageantfaq from '../components/pageantfaq'
import PageantCourseDetail1 from '../components/pageantcoursedetail'
import PageantCourseflow from '../components/pageantcourseflow'
import Pageantteam from '../components/pageantteam'
import Pageanttrainingnewherodialog from '../components/ptnewherodialog1'

export default function PageantTraining() {
  return (
    <>
     <Header />
     <Pageanttrainingnewherodialog />
     <PageantTrainingHero />
     <Pageantfaq />
     <PageantCourseDetail1 />
     <PageantCourseflow />
     <PageantCourseDetail />

     <PageantTrainingContact />
     <PageantTrainingPrograms />
     <Pageantteam />
     {/* <TheMentor /> */}
     <Testimonials />
    
    
      <Footer1/>
    </>
  )
}
