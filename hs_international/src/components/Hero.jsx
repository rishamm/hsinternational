import React from 'react'


const Hero = () => {
  const phoneNumber = '+917306661706'; 
  const message = 'Hello! I would like to know more about your services 🎉'; 

  const handleClick = () => {

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={`h-screen bg-[url('/hero/image-hero.png')] sm:bg-[url('/hero/image-hero.png')]  bg-no-repeat bg-cover relative  overflow-hidden`}>
         <div className='h-full container mx-auto'>
        
         <div className=' h-full grid  lg:grid-cols-2  items-center px-3  '>
           <div className='flex lg:justify-start xl:justify-center    rounded'>
             
           <div className=' bg-white flex w-full bg-opacity-[0.5] flex-col font-kanit px-6 py-6 md:px-12  md:py-12  gap-5 rounded-2xl'>
             <span className='text-[#000E41]  text-3xl font-bold font-kanit md:text-7xl sm:text-6xl'>International</span>
             <span className='text-[#000E41]  text-3xl md:text-7xl font-bold font-kanit  sm:text-6xl'>Migration</span>
             <span className='text-[#000E41]  text-3xl md:text-7xl font-bold font-kanit sm:text-6xl'>Services</span>
           <div className='w-full'>
           <button className='lg:text-white bg-[#C00000] text-white font-kanit rounded-md px-3 py-2 md:px-6 md:py-3 hover:border-white hover:text-white' onClick={handleClick}>Know More</button>
           </div>
           </div>
           </div>
         </div>
         </div>
    </div>
  )
}

export default Hero