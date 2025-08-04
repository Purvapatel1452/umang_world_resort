import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHotel } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    
    // Handle scroll to update active section
    const handleScroll = () => {
      const sections = ['home', 'about', 'adventures', 'indoor-games', 'pool', 'entertainment', 'rooms', 'dining', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', showButton);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', showButton);
    };
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='navbar-logo' onClick={() => scrollToSection('home')}>
            <img 
              src="/images/umang-logo.png" 
              alt="Umang World Resort & Jaymadi Farm House" 
              className="logo-image responsive-img"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className='logo-text' style={{display: 'flex'}}>
              <span className='logo-main'>Umang</span>
              <span className='logo-sub'>World Resort</span>
            </div>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <div className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => scrollToSection('home')}>
                Home
              </div>
            </li>
            <li className='nav-item'>
              <div className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}>
                About
              </div>
            </li>
            <li className='nav-item dropdown'>
              <span className='nav-link dropdown-toggle'>
                Activities
              </span>
              <ul className='dropdown-menu'>
                <li>
                  <div onClick={() => scrollToSection('adventures')}>
                    Outdoor Adventures
                  </div>
                </li>
                <li>
                  <div onClick={() => scrollToSection('indoor-games')}>
                    Indoor Games
                  </div>
                </li>
                <li>
                  <div onClick={() => scrollToSection('pool')}>
                    Swimming Pool
                  </div>
                </li>
                <li>
                  <div onClick={() => scrollToSection('entertainment')}>
                    Entertainment
                  </div>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <div className={`nav-link ${activeSection === 'rooms' ? 'active' : ''}`} onClick={() => scrollToSection('rooms')}>
                Rooms
              </div>
            </li>
            <li className='nav-item'>
              <div className={`nav-link ${activeSection === 'dining' ? 'active' : ''}`} onClick={() => scrollToSection('dining')}>
                Dining
              </div>
            </li>
            <li className='nav-item'>
              <div className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`} onClick={() => scrollToSection('gallery')}>
                Gallery
              </div>
            </li>
            <li className='nav-item'>
              <div className='booking-btn' onClick={() => scrollToSection('contact')}>
                Contact Us
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 