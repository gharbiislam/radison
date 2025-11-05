import React from 'react'
import SolideBtn from './SolideBtn'
import logo from '../assets/logos/icon.png'

const CTA = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='relative py-16 md:max-w-md space-y-5 text-center'>
                <span className='absolute w-36 h-36 bg-blue blur-2xl opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></span>
                
                <span className='badge flex justify-center items-center mx-auto w-fit'>
                    <img src={logo} alt="logo" className='w-4 mr-2' />
                    Radison
                </span>

                <h2 className="text-h2 lg:text-h2-lg">Let’s talk about your next big move</h2>
                <p className='subtitle'>Hop on a call with us to see how our services can accelerate your growth.</p>
                
                <div className="flex justify-center">
                    <SolideBtn>Schedule a quick call</SolideBtn>
                </div>

                <p className='text-secondaryText text-bodyS'>
                    Its <span className='text-primaryText'>Free</span>
                </p>
            </div>
        </div>
    )
}

export default CTA
