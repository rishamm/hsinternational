import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {

  const phoneNumber = '+917306661706'; 
  const message = 'Hello! I would like to know more about your services 🎉'; 

  const handleClick = () => {

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className='h-[116px]  flex  w-full xl:gap-96 lg:gap-48  bg-transparent absolute   '> 
    
      <Link to={'/'} className='border-0'>
       
       <div className='font-ineria-serif sm:text-3xl text-xl flex gap-2 h-full items-center px-7 cursor-pointer'> 
        <h6 className='text-[#C70039]'>HS</h6>
        <h6 className='text-white'>INTERNATIONAL</h6>
        </div>
       </Link>
        <div className=' h-full flex items-center px-5 xl:text-xl lg:text-base  w-full justify-center'>
       <div className='font-marcellus hidden lg:flex justify-end w-full text-white '>
       {/* <Link className='border-b-2 border-[#FC6736] '>HOME
          </Link>
          <Link>
          ABOUT US 
          </Link>
          <Link>
          SERVICES 
          </Link> */}
          <Link className='px-16 hover:text-[#FC6736]' onClick={handleClick}>
          CONTACT US
          </Link>
       </div>
        </div>
      </div>
   
  )
}

export default Navbar