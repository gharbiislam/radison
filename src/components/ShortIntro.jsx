import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const ShortIntro = () => {
  useEffect(() => {
    AOS.init({ startEvent: 'scroll' });
  }, []);
  return (
    <div className=' flex flex-col items-center justify-center  text-center gap-6 pt-20' >

      <span className='absolute top-auto w-full lg:w-1/3 h-3 bg-blue opacity-70 blur-2xl rounded-full ' data-aos="fade-up"></span>
      
      <span className='badge'>Who We Are</span>

      <h3 className='text-h3 lg:text-h3-lg lg:w-3/5'>We are Radison, we help founders like you to automate their day to day business operations with the help of AI</h3>
    </div>
  )
}

export default ShortIntro