import React from 'react'
import Benefits from '../components/Benefits';
import Contact from '../components/Contact';
import CTA from '../components/CTA';
import Faqs from '../components/Faqs';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import Plans from '../components/Plans';
import Services from '../components/Services';
import HeroSection from '../components/HeroSection';
import ShortIntro from '../components/ShortIntro';
import Navbar from '../components/Navbar';
import Process from '../components/Process';

const Home = () => {
  return (
    <div className="App bg-black flex items-start justify-center text-center ">
      <div className="container mx-5 space-y-5">
        <Navbar />
        <HeroSection />
        <ShortIntro />
        <Process />
        <Services />
        <Benefits />
        <Plans />
        <Testimonials />
        <Contact />
        <Faqs />
        <CTA />


        <Footer />
      </div>
    </div>
  )
}

export default Home