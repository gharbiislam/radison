import React from 'react'
import SolideBtn from '../components/SolideBtn.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Link } from 'react-router-dom'

const P404 = () => {
  return (
    <div>
      <Navbar/>

       <div className=' flex flex-col items-center justify-center my-40 text-center gap-4  '>
        

        <span className=' absolute top-0 -left-10 w-1/2 h-1/4 bg-blue opacity-15 blur-2xl rounded-tr-full'></span>
        <span className=' absolute bottom-32 right-0 w-full lg:w-1/2 h-1/4 bg-blue opacity-15 blur-2xl rounded-tl-full'></span>
        <span className='badge '>Page not found</span>
        <h1  className='text-h1 lg:text-h1-lg ' >Oops! Page Not Found</h1>
    <p className='subtitle lg:w-1/3'>It looks like the page you’re searching for doesn’t exist or has been moved. Let’s get you back to where you need to be.</p>
     <SolideBtn>   <Link to={`/home`}>Let's go home</Link></SolideBtn>
    </div>
      
      <Footer/>
    </div>
  )
}

export default P404