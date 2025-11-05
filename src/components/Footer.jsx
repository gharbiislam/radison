import React from 'react'
import logo from '../assets/logos/icon.png'
import { PiFacebookLogo, PiInstagramLogo, PiThreadsLogo, PiLinkedinLogo, PiXLogo } from "react-icons/pi";
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className='lg:container  lg:flex flex-col items-center relative'>
            <div class="absolute top-0 right-4/6 w-4/6 h-40 bg-blue rounded-full opacity-15  blur-2xl transform -rotate-12"></div>

            <div className='md:flex justify-between lg:w-4/5 py-10 border-y border-border '>
                <div >
                    <span className='text-primaryText text-3xl flex  items-center'>
                        <img src={logo} alt="" className='h-9 mr-2 ' />
                        Radison
                    </span>

                    <p className='text-bodyS text-secondaryText mt-2 max-w-xs text-left'>Your trusted partner in AI solutions, creating smarter systems for smarter businesses.</p>
                   
                    <ul className='icons flex  items-center space-x-3'>
                        <li><a href="https://www.linkedin.com/feed/"><PiLinkedinLogo className='icon' /></a></li>
                        <li><a href="https://x.com/"><PiXLogo className='icon' /> </a></li>
                        <li><a href="https://www.instagram.com/"><PiInstagramLogo className='icon' />
                        </a></li>
                        <li><a href="https://www.facebook.com/"><PiFacebookLogo className='icon' />
                        </a></li>
                        <li><a href="https://www.threads.com/"><PiThreadsLogo className='icon' />
                        </a></li>
                    </ul>
                </div>

                <div className='flex '>
                    <div className='section text-left'>
                        <span className='text-cardContent text-primaryText'>Sections</span>
                        <ul>
                            <li><a href="#process">Process</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#benefits">Benefits</a></li>
                            <li><a href="#plan">Plans</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className='pages text-left ml-12'>
                        <span className='text-cardContent text-primaryText '>Pages</span>
                        <ul>
                            <li>
                                <Link to={`/`} className='text-secondaryText text-bodyXS hover:text-primaryText '>Home</Link>
                            </li>
                            <li>
                                <Link to={`/comingsoon`} className='text-secondaryText text-bodyXS hover:text-primaryText '>Coming soon</Link>
                            </li>
                            <li>
                                <Link to={`/404`} className='text-secondaryText text-bodyXS hover:text-primaryText '>404</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            
            <div className='hidden md:block  text-bodyS text-secondaryText py-5 w-full  '>
                <ul className=' flex justify-between gap-3 '>
                    <li className='hover:text-primaryText'><a href="https://framer.com/projects/EHb8NredFKNug7EGOWFq?duplicate=Odc9OZugVtNQNcLL3Ieu">Use template</a></li>
                    <li className='hover:text-primaryText'><a href="https://x.com/xlauncherx7">Visioned and Crafted  by <span className='text-primaryText'>Kanishk Dubey</span></a></li>
                    <li>© All right reserved</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer