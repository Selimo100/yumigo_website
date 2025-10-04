import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';
import logo from '../assets/icon.png';
import ComingSoonModal from './ComingSoonModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        background: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(20px)',
        zIndex: 1000,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease'
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0' }}>
          
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              to="/" 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                textDecoration: 'none', 
                color: 'white', 
                fontWeight: '700', 
                fontSize: '1.5rem' 
              }}
            >
              <motion.img 
                src={logo} 
                alt="Yumigo"
                style={{ width: '40px', height: '40px', borderRadius: '8px' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <span>Yumigo</span>
            </Link>
          </motion.div>
          
          {/* Navigation - Desktop */}
          <motion.nav 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '2rem',
              '@media (max-width: 768px)': { display: 'none' }
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {[
              { to: '/', label: 'Home', isLink: true },
              { to: '#about', label: 'Features', isLink: false, section: 'about' },
              { to: '#download', label: 'Download', isLink: false, section: 'download' },
              { to: '#contact', label: 'Contact', isLink: false, section: 'contact' }
            ].map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }}>
                {item.isLink ? (
                  <Link 
                    to={item.to}
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      fontWeight: '500',
                      fontSize: '1rem',
                      transition: 'color 0.3s ease',
                      opacity: 0.9
                    }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a 
                    href={item.to}
                    onClick={(e) => handleSectionClick(e, item.section)}
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      fontWeight: '500',
                      fontSize: '1rem',
                      transition: 'color 0.3s ease',
                      opacity: 0.9,
                      cursor: 'pointer'
                    }}
                  >
                    {item.label}
                  </a>
                )}
              </motion.div>
            ))}
          </motion.nav>
          
          {/* CTA Button */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button
              onClick={handleDownloadClick}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                fontWeight: '600',
                fontSize: '0.9rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 6px 20px rgba(16, 185, 129, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Coming Soon ✨
            </motion.button>
          </motion.div>
          
          {/* Mobile Menu Toggle */}
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'none',
              '@media (max-width: 768px)': { display: 'flex' },
              flexDirection: 'column',
              gap: '4px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span style={{ 
              width: '24px', 
              height: '2px', 
              background: 'white', 
              borderRadius: '1px',
              transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              transition: 'all 0.3s ease'
            }}></span>
            <span style={{ 
              width: '24px', 
              height: '2px', 
              background: 'white', 
              borderRadius: '1px',
              opacity: isMenuOpen ? 0 : 1,
              transition: 'all 0.3s ease'
            }}></span>
            <span style={{ 
              width: '24px', 
              height: '2px', 
              background: 'white', 
              borderRadius: '1px',
              transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none',
              transition: 'all 0.3s ease'
            }}></span>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'rgba(15, 23, 42, 0.95)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '2rem'
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>
                Home
              </Link>
              <a href="#about" onClick={(e) => handleSectionClick(e, 'about')} style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>
                Features
              </a>
              <a href="#download" onClick={(e) => handleSectionClick(e, 'download')} style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>
                Download
              </a>
              <a href="#contact" onClick={(e) => handleSectionClick(e, 'contact')} style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </div>
      
      <ComingSoonModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </motion.header>
  );
};

export default Header;
