import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/shared/Hero'
import image from '/hero/exporthero.png'
import Footer from '../components/Footer'

const Export = () => {
  return (
    <div>
      <Navbar />
      <Hero image={image} text='Import & Export' />
      <div className='py-40 flex items-center justify-between  bg-[#870000]'>
        <div className='container mx-auto text-white font-Montserrat  '>
          <p >
            HSL INTERNATIONAL , we specialize in delivering top-tier import and export services that connect businesses worldwide. Our comprehensive offerings include product sourcing, customs clearance, and logistics, all designed to streamline international trade and enhance your business efficiency. With a robust network of international partners and a keen understanding of global markets, we ensure seamless operations from start to finish.
          </p>

          <p className='mt-[20px]'>
            In addition to import services, we excel in export solutions that drive your products to new markets. Our team conducts detailed market research to provide insights into your target destinations, assisting with all necessary export documentation and ensuring compliance with international regulations. Our reliable freight forwarding services ensure your goods reach their global destinations efficiently and securely.
          </p>

          <p className='mt-[20px]  '>
            Wve have 10 years of experience in the industry, HSL INTERNATIONAL  has built a reputation for quality, integrity, and customer satisfaction. Our seasoned professionals are dedicated to providing personalized solutions that meet your specific needs, leveraging our global network to deliver cost-effective and reliable logistics. Trust us to be your partner in navigating the complexities of international trade, helping you achieve success in the global marketplace.
          </p>

        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Export