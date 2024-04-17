import React from 'react'

const Footer = () => {
  return (
    <div className={`bg-[url('/hero/footer.png')] bg-cover bg-center bg-no-repeat w-full   `}>
       <div className=' flex flex-col  py-10 w-full h-full  px-16'>
       <div className={`grid lg:grid-cols-4  grid-cols-1  lg:gap-0 gap-10  py-10`}>
           <div className='flex text-white flex-col'>
            <img src="/hero/footersvg.svg" alt="" />
            <span>REG : #ACF-5208</span>
           </div>
           <div className='flex flex-col text-white lg:items-start gap-2'>
            <span className='flex text-[#FC6736] items-center'><img src="/hero/Link.svg" alt="" /> Our Links</span>
            <span className='text-white'>Home</span>
            <span>About us</span>
            <span>Contact</span>
           </div>
           <div className='flex flex-col text-white lg:items-start gap-2'>
            <span className='flex text-[#FC6736]  items-center'>
            <img src="/hero/Bell_Ring.svg" alt="" /> 
            Get In Touch</span>
            <span className='text-white'>Home</span>
            <span> <a href="mailto:hsintl.ventures@gmail.com" target='blank'>Hsintl.ventures@gmail.com</a></span>
            <span><a href="tel:+917306661706" target='blank'>+917306661706</a></span>
            <span><a href="tel:+919946305045" target='blank'>+919946305045</a></span>
           </div>
           <div className='flex flex-col text-white lg:items-start gap-2'>
            <span className='flex text-[#FC6736] items-center'><img src="/hero/Map_Pin.svg" alt="" /> Location</span>
            <span>Ground Floor</span>
            <span>CD Tower , </span>
            <span>Opposite Baby Memorial Hospital,</span>
            <span>Calicut</span>
            <span>Kerala, India</span>
           </div>
       </div>
       <div className='flex gap-5 py-10  '>
        <a href="https://www.instagram.com/hs__international__?igsh=OXdrZHk5dHdqZGlu" target='blank'> <img src="/hero/insta.svg " className='w-10'  alt="" /></a>
        <a href="https://www.facebook.com/hsinternationalclt" target='blank'><img src="/hero/fb.svg" className='w-10' alt="" width={50} /></a>
       <a href=""> <img src="/hero/x.svg" className='w-10' alt="" width={50} /></a>
       <a href=""> <img src="/hero/threads.svg" className='w-10' alt="" width={50} /></a>
       <a href=""> <img src="/hero/in.svg" className='w-10' alt="" width={50} /></a>
        </div> 
        <div className='text-gray-500'>
        © 2024 HS Internatonal , All Rights Reserved
        </div>
        </div> 
    </div>
  )
}

export default Footer