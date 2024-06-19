import React from 'react'
import Navbar from '../components/Navbar'
import image from '/hero/Rect.png'
import Footer from '../components/Footer'
import Hero from '../components/shared/Hero'
import Contactus from '../components/Contactus'
import { card_3 } from '../components/data'

const Aboutus = () => {
  return (
    <div className={`overflow-hidden`}>
      <Navbar />
      <Hero image={image} text='About-us' />
      <div className='py-40 flex items-center justify-between  bg-[#870000]'>
        <div className='container mx-auto text-white font-kanit '>
          Our mission is to bridge the gap between talented professionals seeking international career opportunities and top-tier employers worldwide. We are dedicated to helping job seekers realize their dreams of working abroad while providing companies with access to a diverse pool of highly skilled candidates.
          We provide end-to-end services for overseas education, career, Visa assistance, immigration and PR services around the world.


          We are one of the leading and growing consultants for students who are wishing to study abroad. In addition, we also focus on expanding our reach to various countries globally for achieving short-term and long-term goals with the help of overseas education, career, migration services through world-class universities, organizations and also providing support for getting PR.
        </div>
      </div>
      <div className={`py-12 bg-[#000E41] bg-[url('/hero/image-sec.png')] md:bg-[url('/hero/image-sec.png')] bg-blend-overlay bg-opacity-[1]  bg-no-repeat bg-cover  bg-center  `}>
        <div className='w-full h-full  '>
          <div className=' h-full w-full flex  pb-16'>
            <div className=' flex-col  flex  justify-between w-full h-full gap-20  '>
              <div className=' w-full '>
                <div className='w-full h-full flex justify-center   pb-9'>
                  <span className='font-kanit font-semibold text-center md:text-5xl text-4xl pt-12  text-white '>Our Main Practices</span>
                </div>
              </div>
              <div className='grid  lg:grid-cols-3 md:grid-flow-col-1 px-2 gap-10  w-full container mx-auto'>
                {card_3.map((data) => (
                  <div className=' s-3  gap-10  w-full p   xl:gap-20  lg:gap-4 md:gap-20   '>
                    <div className='bg-white  rounded-3xl   items-center justify-center h-full w-full flex flex-col border border-black p-1'>
                      <div className='flex flex-col items-center  justify-between gap-10 w-full lg:py-0 lg:px-0  md:px-28 md:py-28 py-10 h-full '>
                        <div className='relative '>
                          <img src={data.img} alt="" className='rounded-3xl h-[300px] w-[400px]' />

                        </div>
                        <div className='font-kanit flex  items-center  gap-5 flex-col   md:justify-center px-7 py-5' >
                          <h5 className=' text-xl text-left w-full'>0{data.id}</h5>
                          <h5 className=' text-xl text-left w-full'>{data.heading}</h5>
                          <p className='text-left'>
                            {data.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-40 flex items-center justify-between  bg-[#870000]'>
        <div className='container mx-auto text-white font-kanit flex items-center justify-center '>
          <h1>Our Team</h1>

        </div>
      </div>
      <Contactus />
      <Footer />
    </div>
  )
}

export default Aboutus