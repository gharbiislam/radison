import React from 'react'
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import 'aos/dist/aos.css'
const Contact = () => {
    return (
        <div className='relative flex flex-col justify-center items-center min-h-screen mt-5' id='contact'>
            <span className='badge' >Contact</span>

            <span className='shade'></span>

            <div className=' md:flex justify-between items-center lg:w-4/5 md:space-x-20'>

                <div className="py-8 md:w-1/2 sm:text-center md:text-left " data-aos='fade-right'>
                    <h2 className="text-h2 lg:text-h2-lg">Ask whatever you have in your mind</h2>

                    <p className='subtitle pb-8'>Whether you have questions or are ready to discuss your business, we’re here to help. Reach out today.</p>
                    
                    <div className='flex flex-col md:items-start items-center text-secondaryText text-bodyS space-y-2 sm:text-center'>
                        <span className='flex   items-center'><CiMail className='mr-2 size-6' />
                            <link rel="stylesheet" href="" />admin@raddision.com</span>
                        <span className='flex   items-center'>  <CiPhone className='mr-2 size-6' /><link rel="stylesheet" href="" />(969) 819-8061</span>
                        <span className='flex   items-center'> <CiLocationOn className='mr-2 size-6' />
                            <link rel="stylesheet" href="" />43 Roselle St. New York</span>
                    </div>
                </div>

                <form action="" className="py-8 md:w-1/2 text-left flex-col space-y-5" data-aos='fade-left'>
                    <label htmlFor="" className=''>Name
                        <input type="text" name="" placeholder='Jane Smith' id="" />
                    </label>

                    <label htmlFor="" className=''>Email
                        <input type="email" name="" placeholder='jane@framer.com' id="" />
                    </label>

                    <label htmlFor="" className=''>Message
                        <textarea name="" placeholder="Hi, i'm reaching out for ..." id="" ></textarea>
                    </label>

                    <button className='submit'>Submit</button>                </form>
            </div>
        </div>
    )
}

export default Contact