import React, { useEffect } from 'react';
import icon from '../assets/logos/icon.png';
import logo2 from '../assets/logos/logo2.png';
import logo1 from '../assets/logos/logo1.png';
import logo3 from '../assets/logos/logo3.png';
import SolideBtn from './SolideBtn';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Universe from './Universe';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative min-h-screen -mx-16  overflow-hidden">
      <Universe />
      <span className="absolute top-0 -left-10 w-full lg:w-1/2 h-1/4 bg-blue opacity-15 blur-2xl rounded-tr-full"></span>
      <span className="absolute bottom-0 right-0 w-full lg:w-1/2 h-1/4 bg-blue opacity-15 blur-2xl rounded-tl-full"></span>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4 px-4">
        <span className="badge flex gap-2 items-center z-10" data-aos="zoom-in" data-aos-delay="0"  >
          <img src={icon} alt="" className="h-4 w-4" /> Radison - AI Automation Partner
        </span>

        <h1 className="text-h1 lg:text-h1-lg lg:w-3/5 z-10" data-aos="zoom-in" data-aos-delay="100" >
          Transforming workflows with AI powered automation
        </h1>

        <p className="subtitle lg:w-1/3 z-10" data-aos="zoom-in" data-aos-delay="200" >
          Experience the future of business with intelligent, scalable automation solutions tailored to your needs
        </p>

        <div className="flex gap-4 z-10" data-aos="zoom-in" data-aos-delay="200">
          <SolideBtn>Our Services</SolideBtn>
          <button className="btn">See plans</button>
        </div>

        <div className="relative mt-4 z-10" data-aos="zoom-in" data-aos-delay="400">
          <div className="grid grid-cols-3 gap-16">
            <img src={logo2} alt="" className="h-6" />
            <img src={logo1} alt="" className="h-6" />
            <img src={logo3} alt="" className="h-6" />
          </div>
          <div className="absolute inset-0 pointer-events-none w-full">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
