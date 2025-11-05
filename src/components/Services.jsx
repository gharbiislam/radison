import React from 'react'
import vd1 from '../assets/vd/vd1.mp4'
import vd2 from '../assets/vd/vd2.mp4'
import vd3 from '../assets/vd/vd3.mp4'
import vd4 from '../assets/vd/vd4.mp4'
import vd5 from '../assets/vd/vd5.mp4'

const Services = () => {
  const service = [
    {
      vid: vd1,
      title: 'Business Chatbot',
      text: 'Enhance customer interactions by automating responses with intelligent chatbots, providing seamless service.',
    },
    {
      vid: vd2,
      title: 'Content Creation',
      text: 'Effortlessly generate high-quality, engaging content tailored to your audience using AI-powered tools.',
    },
    {
      vid: vd3,
      title: 'Lead Generation',
      text: 'Strengthen your sales pipeline by identifying, targeting, and attracting high-quality prospects with precision.',
    },
    {
      vid: vd4,
      title: 'Data Insights',
      text: 'Extract actionable insights from complex data sets to drive informed decisions and accelerate business growth.',
    },
    {
      vid: vd5,
      title: 'AI Consulting',
      text: 'Work with our experts to develop personalized AI strategies that streamline operations and deliver impactful results.',
    },
  ]

  return (
    <div className='min-h-screen flex flex-col items-center ' id='services'>
      <span className='badge'>Services</span>
      <h2 className='text-h2 lg:text-h2-lg'>Innovative services for growth</h2>
      <p className='subtitle'>Tailored solutions to streamline, innovate, and grow.</p>
      
      <div className='grid grid-cols-1 lg:grid-cols-6 gap-4 lg:w-10/12'>
        {service.map((srv, index) => (
          <div key={index} className={`bg-cardBg py-5 px-8 border border-border flex flex-col text-left rounded-lg gap-5 ${index < 3 ? 'col-span-2' : 'col-span-3'}`}>
            <div className='relative w-full h-[280px] overflow-hidden'>
              <video src={srv.vid} autoPlay loop muted className='h-72 w-full object-fill rounded-xl'></video>
              <div className='absolute bottom-0 left-0 min-w-full h-5 bg-black blur-xl'></div>
            </div>
            <div>
              <span className='card_title text-left my-2'>{srv.title}</span>
              <p className='card_content text-left'>{srv.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services