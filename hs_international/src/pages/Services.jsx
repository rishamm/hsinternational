import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/shared/Hero'
import Contactus from '../components/Contactus'
import Footer from '../components/Footer'
import image from '/hero/Recta.png'
const Services = () => {
  return (
    <div>
    <Navbar/>
      <Hero image={image} text='Our Services'/>
       <Contactus/>
      <Footer/>
    </div>
  )
}

export default Services