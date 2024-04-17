import React from 'react'
import { Link } from 'react-router-dom'

const Aboutus = () => {
  const phoneNumber = '+917306661706'; 
  const message = 'Hello! I am excited to get my student visa 🎉'; 

  const handleClick = () => {

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={`h-screen bg-[url('/hero/image8.png')] md:bg-[url('/hero/image-4.png')] bg-no-repeat bg-cover  bg-center bg-fixed `}>
        <div className='w-full h-full py-20 '>
          <div className='border-y h-full w-full flex items-end pb-16'>
            <div className='flex md:flex-row flex-col md:gap-0 gap-10 justify-between w-full px-12'>
               <Link > <h6 className='text-white md:text-8xl text-3xl font-marcellus'>Get a Student Visa</h6></Link>
                <div className='flex items-end'>
                <button className='text-white hover:text-black hover:border-black  border-2 border-white rounded-md  font-ineria-serif  px-16 py-3' onClick={()=>handleClick()}>Apply Now</button>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Aboutus