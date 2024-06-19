import React from 'react'

import Hero from '../components/Hero'
import WhatWeDO from '../components/WhatWeDO'
import Aboutus from '../components/Aboutus'
import Services from '../components/Services'
import OurValues from '../components/OurValues'
import Contactus from '../components/Contactus'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='overflow-hidden  '>
        <Navbar />
        <Hero/>
        <WhatWeDO/>
        <Aboutus/>
        <Services/>
        <Contactus/>
        <Footer/>
    </div>
  )
}

export default Home