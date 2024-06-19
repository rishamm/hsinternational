import React from 'react'
import { Link, useLocation } from "react-router-dom";
import '../assets/font.css'

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  let about=false;
  let home=false;
  let services=false;
  let contact=false;
 if(
currentPath.startsWith('/aboutus')&&currentPath.endsWith('aboutus') 
 ){
  about=true
 }
 if(
  currentPath.startsWith('/services')&&currentPath.endsWith('services') 
   ){
    services=true
   }
   if(
    currentPath.startsWith('/contact')&&currentPath.endsWith('contact') 
     ){
      contact=true
     }
     if(
      currentPath.startsWith('/')&&currentPath.endsWith('/') 
       ){
        home=true
       }
  const phoneNumber = '+917306661706'; 
  const message = 'Hello! I would like to know more about your services 🎉'; 

  const handleClick = () => {

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className=' h-[116px]  flex  w-full  lg:gap-48  bg-[#000E41]    '> 
    
      <div className='container mx-auto'>
      <div className=' h-[116px]  flex  w-full xl:gap-96 lg:gap-48  bg-[#000E41]   '>
      <Link to={'/'} className='border-0'>
       
       <div className='font-ineria-serif sm:text-3xl text-xl flex gap-2 h-full items-center px-7 cursor-pointer'> 
        <h6 className='text-[#C70039] font-kanit'>HS</h6>
        <h6 className='text-white font-kanit'>INTERNATIONAL</h6>
        </div>
       </Link>
        <div className=' h-full flex items-center px-5 xl:text-xl lg:text-base  w-full justify-center'>
       <div className='font-kanit font-medium hidden lg:flex justify-between w-full text-white '>
       <Link to={'/'} className={`${home?'border-b-2 border-[#FC6736]' : "none"}`}>
           HOME
          </Link>
          <Link to={'/aboutus'} className={`${about?'border-b-2 border-[#FC6736]' : "none"}`}>
          ABOUT US 
          </Link>
          <Link to={'/services'} className={`${services?'border-b-2 border-[#FC6736]' : "none"}`}>
          SERVICES 
          </Link>
          <Link to={'/contact'} className={`${contact?'border-b-2 border-[#FC6736]' : "none"}`} onClick={handleClick}>
          CONTACT US
          </Link>
       </div>
        </div>
      </div>
      </div>
      </div>
   
  )
}

export default Navbar