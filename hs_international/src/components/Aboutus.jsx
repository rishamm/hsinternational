import React from 'react'
import { Link } from 'react-router-dom'
import { card_2 } from './data';
const Aboutus = () => {
  const phoneNumber = '+917306661706'; 
  const message = 'Hello! I am excited to get my student visa 🎉'; 
  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={`py-12 bg-[#000E41] bg-[url('/hero/image8.png')] md:bg-[url('/hero/image-4.png')] bg-blend-overlay bg-opacity-[0.8]  bg-no-repeat bg-cover  bg-center bg-fixed `}>
        <div className='w-full h-full  '>
          <div className=' h-full w-full flex  pb-16'>
            <div className=' flex-col  flex  justify-between w-full h-full gap-20  '>
            <div className=' w-full '>
           <div className='w-full h-full flex justify-center border-b-2  border-white  pb-9'>
           <span className='font-kanit font-semibold text-center md:text-5xl text-4xl pt-12  text-white '>Our Values</span>
           </div>
        </div>
       <div className='grid  lg:grid-cols-3 md:grid-flow-col-1 px-2 gap-10 w-full container mx-auto'>
       {card_2.map((data)=>(
          <div className=' s-3  gap-10  w-full p   xl:gap-20  lg:gap-4 md:gap-20   '>
           <div className='bg-white  rounded-3xl   items-center justify-center h-full w-full flex flex-col border border-black p-1'>
                 <div className='flex flex-col items-center  justify-center gap-10 w-full lg:py-0 lg:px-0  md:px-28 md:py-28 py-10 h-full '> 
                 <div className='relative '>
                 <img src={data.img} alt="" className='rounded-3xl h-[300px] w-[400px]' />
                 <div className='absolute  rounded-[50%] bg-[#CA4A4A] p-4 justify-center flex items-center bottom-[-10%] right-4'>
                 <img src={data.logo} alt="" width={60}  height={60} className=''/>
                 </div>
                 </div>
                 <div className='font-kanit flex  items-center  gap-5 flex-col   md:justify-center px-7 py-5' >
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
  )
}

export default Aboutus