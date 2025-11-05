import React from 'react'
import p1 from '../assets/vd/p1.mp4'
import p2 from '../assets/vd/p2.mp4'
import p3 from '../assets/vd/p3.mp4'

const Process = () => {
    const process = [
        {
            vid: p1,
            title: 'Discovery & Analysis',
            text: 'We dive deep into your needs, exploring ideas and defining strategies for long-term success.',
        },
        {
            vid: p2,
            title: 'Development & Test',
            text: 'We craft tailored solutions for your goals and rigorously test them for top-notch reliability.',
        },
        {
            vid: p3,
            title: 'Launch & Maintain',
            text: 'We deploy your solution seamlessly and ensure its continued performance with ongoing care.',
        },
    ]

    return (
        <div className='min-h-screen flex flex-col items-center' id='services'>
            <span className='badge mb-4'>Process</span>
            <h2 className='text-h2 lg:text-h2-lg'>Your path to excellence</h2>
            <p className='subtitle'>A simple, effective approach to deliver excellence.</p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-7 lg:w-10/12 mt-10'>
                {process.map((proces, index) => (
                    <div key={index} className='bg-cardBg py-5 px-6 border border-border flex flex-col text-left rounded-[30px] gap-2 relative'>
                        <div className='relative w-full h-[200px] rounded-xl overflow-hidden'>
                            <video src={proces.vid} autoPlay loop muted className='w-full h-56 object-fill rounded-xl' ></video>
                            <div className='absolute bottom-0 left-0 min-w-full h-5 bg-black  blur-xl'></div>
                        </div>

                        <span className='card_title text-left mt-3'>{proces.title}</span>
                        <p className='card_content text-left'>{proces.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Process
