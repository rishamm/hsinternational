import React from 'react'

const Hero = ({image,text}) => {
  return (
    <div className={`w-full h-screen bg-no-repeat bg-cover flex justify-center items-center `} style={{backgroundImage: `url(${image})`}}>
     
        <h2 className='text-bold font-kanit text-white text-7xl'>{text}</h2>
    </div>
  )
}

export default Hero