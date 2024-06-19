import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contactus = () => {

  emailjs.init("3FD6sg7ICQ-T0Tj2u");
  const form=useRef()
  const [data,setData]=useState({
    name:'',
    email:'',
    phone:'',
    message:''
  })
const [lag,setLag]=useState(false)

const [error,setError]=useState({
    emailError:'',
    phoneError:'',
    nameError:'',
    messageError:''
})

const handlechange=(key,e)=>{  
setData({
    ...data,
    [key]:e.target.value
})
}

const handleSubmit = async(e) => {
    e.preventDefault();
    const { name, email, phone, message } = data;

    let hasError = false;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newError = {
      emailError: '',
      phoneError: '',
      nameError: '',
      messageError: ''
    };

    if (!name.trim()) {
      newError.nameError = 'Name is required';
      hasError = true;
    }

    if (!email.trim() || !emailPattern.test(email)) {
      newError.emailError = 'Invalid email address';
      hasError = true;
    }

    if (!phone.trim() || isNaN(phone)) {
      newError.phoneError = 'Invalid phone number';
      hasError = true;
    }

    if (!message.trim()) {
      newError.messageError = 'Message is required';
      hasError = true;
    }

    setError(newError);

    if (!hasError) {
      console.log("No error, form submitted successfully",data,form);

      emailjs
      .sendForm('service_kidd0ge', 'template_q4eli4w',form.current,"3FD6sg7ICQ-T0Tj2u")
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
      setLag(true);
    }
  };



console.log();
  return (
    <div  className='h-[900px] bg-[#000E41] grid lg:grid-cols-2 px-16 relative'>
         <div className=' border-b-2 left-0 top-36 border-b-[#DCD4C3] absolute w-[900px]'></div>
    <div className='flex flex-col gap-28'>
    <div className='text-[#DCD4C3] md:text-5xl text-4xl font-kanit   pt-12  pb-6 relative'>Contact Us
    </div>
    <form ref={form}>
    <div className='w-full flex flex-col gap-10'>
  <div className='flex flex-col'>
  <input type='text' value={data.name} placeholder='Name' name='name' onChange={(e)=>handlechange('name',e)} className='px-5 rounded md:w-3/4 text-white  h-[60px] bg-transparent border-2 font-kanit'  />
   {error.nameError && <span className='text-red-500'>{error.nameError}</span>}
  </div>
  <div className='flex flex-col'> <input type='email' value={data.email} placeholder='Email' name='email' onChange={(e)=>handlechange('email',e)} className='px-5 rounded md:w-3/4  text-white  h-[60px] bg-transparent border-2 font-kanit'  />
   {error.emailError && <span className='text-red-500'>{error.emailError}</span>}</div>
   <div className='flex flex-col'> <input type='text' value={data.phone}   placeholder='Phone' name='phone' onChange={(e)=>handlechange('phone',e)} className='px-5 rounded md:w-3/4 text-white   h-[60px] bg-transparent border-2 font-kanit'  />
   {error.phoneError && <span className='text-red-500'>{error.phoneError}</span>}</div>
   <div className='flex flex-col'>  <textarea type='text' value={data.message} placeholder='Message' name='message'  onChange={(e)=>handlechange('message',e)} className='px-5 rounded md:w-3/4 py-2 text-white  bg-transparent border-2 font-kanit'  ></textarea>
   {error.messageError && <span className='text-red-500'>{error.messageError}</span>}</div>
 
   <div>
   <button className='text-gray-600  font-kanit  border-2 border-white rounded-md  px-16 py-3 hover:border-black hover:text-black' type='submit' onClick={(e)=>handleSubmit(e)} >Submit</button>
    
   </div>
   </div>
   </form>
    </div>
  <div className='items-center lg:flex justify-end w-full hidden'>
  <img src="/hero/image6.png" alt=""  className='w-full xl:py-10 xl:px-14'/>
  </div>
    </div>
  )
}

export default Contactus