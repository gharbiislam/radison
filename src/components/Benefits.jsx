import React, { useEffect } from 'react'
import { HiOutlineArrowTrendingDown, HiOutlineArrowTrendingUp,HiOutlineCheck } from "react-icons/hi2";
import 'aos/dist/aos.css';
const Benefits = () => { 
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center " id='benefits'>
      <div data-aos="fade-up"  >
      <span className="badge">Benefits</span>
      
      <div  className='mb-14'>
      <h2 className='text-h2 lg:text-h2-lg'>Maximize efficiency and impact</h2>
      <p className='subtitle'>
        Discover the key benefits of partnering with us.
      </p></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-4/5 ">
        <div className="benefit_card relative space-y-2"  data-aos="fade-up" data-aos-delay="0">
          <span className="card_shade"></span>
          <HiOutlineArrowTrendingDown className="icon text-3xl " />

          <p className="card_title">Cost reduction</p>
          <p className="card_content">
            Optimize business processes and streamline operations to significantly minimize costs and maximize overall efficiency.
          </p>
        </div>

        <div className="benefit_card relative space-y-2"  data-aos="fade-up" data-aos-delay="200">
          <span className="card_shade"></span>
      <HiOutlineCheck className="icon text-3xl " />
          <p className="card_title">Improved outcomes</p>
          <p className="card_content">
            Optimize business processes and streamline operations to significantly minimize costs and maximize overall efficiency.
          </p>
        </div>

        <div className="benefit_card relative space-y-2"  data-aos="fade-up" data-aos-delay="400">
          <span className="card_shade"></span>
          <HiOutlineArrowTrendingUp className="icon text-3xl " />
          <p className="card_title">Increased productivity</p>
          <p className="card_content">
            Enhance group performance and output by automating redundant tasks, refining processes, and speeding up business functions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Benefits
