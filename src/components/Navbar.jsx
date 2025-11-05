import React, { useState, useEffect } from 'react';
import icon from '../assets/logos/icon.png';
import SolideBtn from './SolideBtn';

const Navbar = () => {
  const [fix, setFix] = useState(false);
  const [active, setActive] = useState('process');

  const handleScroll = () => {
    setFix(window.scrollY >= 1000);

    if (window.scrollY < document.getElementById('services').offsetTop) setActive('process');
    else if (window.scrollY < document.getElementById('benefits').offsetTop) setActive('services');
    else if (window.scrollY < document.getElementById('plans').offsetTop) setActive('benefits');
    else if (window.scrollY < document.getElementById('contact').offsetTop) setActive('plans');
    else setActive('contact');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="flex justify-center">
      <nav className={`navbar ${fix ? 'change' : ''}`}>
        <span className="flex gap-2 text-cardTitle text-primaryText">
          <img src={icon} alt="" className="w-7 h-7" />
          <p className={fix ? 'hidden' : ''}>Radison</p>
        </span>

        <ul className={fix ? 'flex  gap-2 text-bodyXS' : 'flex gap-5 text-bodyXS'}>
          {['process','services','benefits','plans','contact'].map(item => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`px-2 py-1 rounded ${active === item ? 'bg-cardBg rounded-md px-2 py-1 ' : ''}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <SolideBtn>
          <p className={fix ? 'hidden' : ''}>Get in touch</p>
        </SolideBtn>
      </nav>
    </header>
  );
};

export default Navbar;
