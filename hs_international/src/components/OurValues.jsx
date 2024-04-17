import React from 'react'

const OurValues = () => {
  return (
    <div className=' py-4 flex flex-col  gap-10  pb-28'>
        <div className='py-20 w-full md:px-16'>
           <div className='w-full flex justify-center border-b-2  border-[#B18F62] pb-9'>
           <span className='font-marcellus text-center md:text-5xl text-4xl  text-[#B18F62]'>Our Values</span>
           </div>
        </div>
        <div className='grid lg:grid-cols-3  gap-10  w-full  xl:h-1/2 xl:gap-20  lg:gap-4 md:gap-20  container mx-auto '>
           <div className='bg-[#B18F62]  items-center justify-center h-full w-full flex flex-col border border-black p-5'>
                 <div className='flex flex-col items-center  justify-center gap-10 w-full lg:py-0 lg:px-0  md:px-28 md:py-28 py-10 h-full'> 
                  <img src='/hero/prof_ex 1.png' alt="" width={60}  height={60}/>
                 
                 <div className='font-marcellus flex  items-center gap-5 flex-col  justify-center'>
                    <h5 className=' text-xl'>Our Profesional Experts</h5>
                 <p className='text-center'>
                 Our Professional Experts and the broad array of our customer base has, and continues to give us pricing competitive advantages over our competitors.</p>
                 </div>
               
                 </div> 
             
           </div>
           <div className='bg-[#B18F62] items-center justify-center h-full w-full flex flex-col   border border-black p-5'>
           <div className='flex flex-col items-center  justify-center gap-10  lg:px-0  md:px-28 lg:py-0 md:py-28 w-full py-10 h-full'> 
            <img src='/hero/our_mission 1.png' alt=""  width={60}/>
             <div className='font-marcellus text-xl flex  justify-center'><h6>
                 Our Mission</h6></div>
             <div className='flex  justify-center'>
                    <p className='text-center'>To continuously exceed expectations of our trusted clients and deliver premier, personalized advisory experiance that is a simple and results in empowering the clients and their families</p>
                 </div>
            </div>       
           </div>
           <div className='bg-[#B18F62] items-center justify-center  h-full w-fullflex flex-col border border-black p-5'>
           <div className='flex flex-col items-center  justify-center gap-10  lg:px-0  md:px-28 lg:py-0 md:py-28 w-full py-10 h-full'>
            <img src='/hero/our_vision 1.png' alt="" width={60} height={60} />
            <div className='font-marcellus text-xl flex  justify-center'> 
                 <h6>Our Vision</h6></div>
                 <div className='flex  justify-center'><p className='text-center'>
                 To be widely recognized as a premier advisory firm by entering expert counsel to empower clients and their families in the entire recess of being a global citizen.
                    </p></div>
            
            </div> 
                 
           </div>
        </div>
    </div>
  )
}

export default OurValues