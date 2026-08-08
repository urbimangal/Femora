import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/home/Hero'
import WhyFemora from '../components/home/WhyFemora'
import FAQ from '../components/home/FAQ'
import Footer from '../components/common/Footer'

function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>  
      <WhyFemora/>
      <FAQ/>
      <Footer/>
    </>
  )
}

export default Home
