import React from 'react'

import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

function ComingSoon() {
  return (


<div>
      <Navbar/>

       <div className=' flex flex-col items-center justify-center my-40 text-center gap-4  '>
        

        <span className=' absolute top-0 -left-10 w-full lg:w-1/2 h-1/4 bg-blue opacity-15 blur-2xl rounded-tr-full'></span>
        <span className=' absolute bottom-32 right-0 w-full lg:w-1/2 h-1/4 bg-blue opacity-15 blur-2xl rounded-tl-full'></span>
        <span className='badge '>Coming soon</span>
        <h1  className='text-h1 lg:text-h1-lg ' >We’re Launching Soon!</h1>
    <p className='subtitle lg:w-1/3'>Something amazing is coming your way soon. Enter your email below to join our early-access list.</p>
<div className=' lg:w-1/4'>
 <input type="email" name="" id="" placeholder='name@email.com'/>
        <button className='bg-blue rounded-lg text-primaryText w-full mt-3 py-2'>Sign Up</button>    </div></div>
      
      <Footer/>
    </div>

       
  )
}

export default ComingSoon