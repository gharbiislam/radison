import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import icon from '../assets/logos/icon.png';
import SolideBtn from './SolideBtn';

const Navbar = () => {
  const [fix, setFix] = useState(false);
  const [active, setActive] = useState('process');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    setFix(window.scrollY >= 1000);


    const sections = {
      process: document.getElementById('process'),
      services: document.getElementById('services'),
      benefits: document.getElementById('benefits'),
      plans: document.getElementById('plans'),
      contact: document.getElementById('contact'),
    };

    if (!sections.services || !sections.benefits || !sections.plans || !sections.contact) return;

    if (window.scrollY < sections.services.offsetTop) setActive('process');
    else if (window.scrollY < sections.benefits.offsetTop) setActive('services');
    else if (window.scrollY < sections.plans.offsetTop) setActive('benefits');
    else if (window.scrollY < sections.contact.offsetTop) setActive('plans');
    else setActive('contact');


  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);
    setActive(item);
  };

  return (<header className="flex justify-center sticky top-0 z-50 bg-transparent">
    <nav className={`navbar flex justify-between items-center w-full max-w-7xl px-6 py-4 ${fix ? 'change' : ''}`}>
      <div className="flex items-center gap-2"> <img src={icon} alt="logo" className="w-7 h-7" />
        <span className='hidden md:block'>
          <p className={` text-cardTitle  ${fix ? 'hidden' : ''}  `}>Radison</p> 
        </span>
      </div>

      <ul className={`${fix ? 'flex gap-2 text-bodyXS' : 'flex gap-5 text-bodyXS'} hidden md:flex`}>
        {['process', 'services', 'benefits', 'plans', 'contact'].map(item => (
          <li key={item}>
            <a href={`#${item}`}
               className={`px-2 py-1 rounded ${active === item ? 'bg-cardBg rounded-md px-2 py-1' : ''}`} >
               {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden md:block">
        <SolideBtn>
          <p className={fix ? 'hidden' : ''}>Get in touch</p>
        </SolideBtn>
      </div>


      
      <button className="md:hidden text-white"  onClick={() => setMobileMenuOpen(!mobileMenuOpen)} >
        {mobileMenuOpen ? <HiX className="w-8 h-8" /> : <HiMenu className="w-8 h-8" />}
      </button>

      {mobileMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-black md:hidden px-6 py-4 flex flex-col gap-4 text-white">
          <ul className="flex flex-col gap-3">
            {['process', 'services', 'benefits', 'plans', 'contact'].map(item => (
              <li key={item}>
                <a href={`#${item}`} onClick={() => handleNavClick(item)}className="block">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <SolideBtn className="w-full mt-4">
            <p>Get in touch</p>
          </SolideBtn>
        </nav>
      )}
    </nav>
  </header>


  );
};

export default Navbar;
