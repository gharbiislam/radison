import React from 'react'
import icon from '../assets/logos/icon.png'
import logo2 from '../assets/logos/logo2.png'
import logo1 from '../assets/logos/logo1.png'
import logo3 from '../assets/logos/logo3.png'
import SolideBtn from './SolideBtn'
const HeroSection = () => {
  return (
    <div className=' flex flex-col items-center justify-center min-h-screen text-center gap-4  '>
        

        <span className=' absolute top-0 -left-10 w-full lg:w-1/2 h-1/4 bg-blue opacity-15 blur-2xl rounded-tr-full'></span>
        <span className=' absolute bottom-0 right-0 w-full lg:w-1/2 h-1/4 bg-blue opacity-15 blur-2xl rounded-tl-full'></span>
        <span className='badge flex gap-2 items-center'> <img src={icon} alt=""  className='h-4 w-4'/>Radison - Ai Automation Partner</span>
        <h1 className='text-h1 lg:text-h1-lg lg:w-3/5'>Transforming workflows with AI powered automation</h1>
    <p className='subtitle lg:w-1/3'>Experience the future of business with intelligent, scalable automation solutions tailored to your needs</p>
    
    <div className='flex gap-4'>
        <SolideBtn>Our Services</SolideBtn>
    <button className='btn  '>See plans</button>
    </div>

    <div className='grid grid-cols-3 gap-16 mt-4'>
        <img src={logo2} alt="" className='h-6' />
        <img src={logo1} alt=""  className='h-6'/>
        <img src={logo3} alt="" className='h-6'/>
</div>
    </div>
    

  )
}

export default HeroSection 