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
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <div className="header-content">
          
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/" className="logo">
              <motion.img 
                src={logo} 
                alt="Yumigo"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <span>Yumigo</span>
            </Link>
          </motion.div>
          
          {/* Navigation - Desktop */}
          <motion.nav 
            className={`nav ${isMenuOpen ? 'nav-open' : ''}`}
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
                    className="nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a 
                    href={item.to}
                    onClick={(e) => {
                      handleSectionClick(e, item.section);
                      setIsMenuOpen(false);
                    }}
                    className="nav-link"
                  >
                    {item.label}
                  </a>
                )}
              </motion.div>
            ))}
          </motion.nav>
          
          {/* CTA Button */}
          <div className="header-actions">
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.button
                onClick={handleDownloadClick}
                className="btn btn-primary btn-sm"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 6px 20px rgba(16, 185, 129, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Coming Soon ✨
              </motion.button>
            </motion.div>
          </div>
          
          {/* Mobile Menu Toggle */}
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.button>
        </div>
      </div>
      
      <ComingSoonModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </motion.header>
  );
};

export default Header;
