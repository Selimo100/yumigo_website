import React, { useState } from 'react';
import './Hero.css';
import homeScreenshot from '../assets/Home_Screenshot.jpg';
import cravingScreenshot from '../assets/Craving_Screenshot.jpg';
import profileScreenshot from '../assets/Profile_Screenshot.jpg';
import ComingSoonModal from './ComingSoonModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Discover Recipes Based on Your 
              <span className="highlight"> Cravings</span>
            </h1>
            <p className="hero-description">
              Tell Yumigo what you're craving - salty, sweet, spicy, or sour - and get personalized recipe recommendations from our community of food lovers around the world.
            </p>
            <div className="hero-buttons">
              <a href="#download" className="btn btn-primary" onClick={handleDownloadClick}>
                Coming Soon
              </a>
              <a href="#about" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
          <div className="hero-phones">
            <div className="phone phone-1">
              <img src={homeScreenshot} alt="Yumigo Home Screen" />
            </div>
            <div className="phone phone-2">
              <img src={cravingScreenshot} alt="Yumigo Craving Selection" />
            </div>
            <div className="phone phone-3">
              <img src={profileScreenshot} alt="Yumigo Profile Screen" />
            </div>
          </div>
        </div>
      </div>
      
      <ComingSoonModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;
