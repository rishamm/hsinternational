import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  const phoneNumber = '+917306661706'; 
  const message = 'Hello! I would like to know more about your services 🎉'; 

  const handleClick = () => {

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={`h-screen bg-[url('/hero/image7.png')] sm:bg-[url('/hero/image-2.png')]  bg-no-repeat bg-cover relative bg-fixed overflow-hidden`}>
          <Navbar />
         <div className=' h-full grid  lg:grid-cols-2  items-end pb-28 '>
            <div className=' h-full w-full'>
                <div className='border-s border-white w-0 h-full absolute left-40 top-40  lg:block hidden'></div>
            </div>
           <div className=' lg:bg-black flex  flex-col font-marcellus px-12 py-12 lg:bg-opacity-50 gap-5'>
             <span className='text-white text-5xl md:text-7xl sm:text-6xl'>International</span>
             <span className='text-white text-5xl md:text-7xl  sm:text-6xl'>Migration</span>
             <span className='text-white text-5xl md:text-7xl sm:text-6xl'>Services</span>
           <div className='w-full'>
           <button className='lg:text-gray-600 text-white font-ineria-serif border-white border-2 lg:border-gray-600 rounded-md  px-16 py-3 hover:border-white hover:text-white' onClick={handleClick}>Know More</button>
           </div>
           </div>
         </div>
    </div>
  )
}

export default Hero