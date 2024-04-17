import React from 'react'
import img from '/hero/image-3.png'
const WhatWeDO = () => {
  const phoneNumber = '+917306661706'; 
  const message = 'Hello! I would like to know more about your services 🎉'; 

  const handleClick = () => {

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className='py-16 bg-[#3C3C3C] flex gap-10'>
    <div className=' h-full   items-center  ml-10 lg:flex hidden'>
        <img src={img} alt="" />
    </div>
    <div className='lg:w-[67%] flex flex-col gap-12'>
        <div className='text-[#FFF5E0] font-marcellus border-b-2 border-white w-full pb-7' >
            <h6 className='sm:text-5xl text-3xl sm:text-left text-center'>WHAT WE DO ?</h6>
        </div>
        <p className='text-[#FFF5E0] font-marcellus lg:leading-8 xl:text-lg xl:leading-10  lg:text-base sm:text-2xl text-sm  leading-10  text-left p-3 sm:w-[90%]  '>
        Embark on a journey of discovery with our comprehensive suite of services designed to make your dreams a reality. Whether you're seeking to study abroad, pursue career opportunities with a job visa, or start a new chapter with migration visa assistance, our experienced team is here to guide you every step of the way. Immerse yourself in new cultures, broaden your horizons, and build a brighter future with our tailored solutions. And for those seeking adventure, our curated tours and travel packages offer unforgettable experiences in every corner of the globe. Let us be your trusted partner in exploration and achievement. Your journey starts here.
        Whether you're aspiring to pursue higher education overseas, seeking lucrative career prospects with a job visa, or planning a seamless transition to a new homeland through migration visa assistance, our dedicated team is committed to turning your aspirations into achievements. With personalized guidance and expert support, we simplify the complex processes involved in studying abroad, securing employment abroad, and relocating to a new country. Additionally, our meticulously crafted tours and travel packages promise unforgettable experiences, blending cultural immersion with unparalleled adventure. From exploring iconic landmarks to discovering hidden gems, let us curate the perfect itinerary for your next unforgettable journey. Embrace the world with confidence and embark on a transformative odyssey with us.
        </p>
        <div className='pl-3'>
        <button className='text-white  hover:text-black hover:border-black  border-2 border-white rounded-md  font-ineria-serif  px-16 py-3' onClick={handleClick}>Know More</button>
        </div>
    </div>
    </div>
  )
}

export default WhatWeDO