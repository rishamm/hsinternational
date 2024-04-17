import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhatWeDO from '../components/WhatWeDO'
import Aboutus from '../components/Aboutus'
import Services from '../components/Services'
import OurValues from '../components/OurValues'
import Contactus from '../components/Contactus'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='overflow-hidden  '>
       
        <Hero/>
        <WhatWeDO/>
        <Aboutus/>
        <Services/>
        <OurValues/>
        <Contactus/>
        <Footer/>
    </div>
  )
}

export default Home