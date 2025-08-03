import React, { useState } from 'react';
import './DownloadSection.css';
import cravingScreenshot from '../assets/Result_Screenshot.jpg';
import ComingSoonModal from './ComingSoonModal';

const DownloadSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section className="download-section" id="download">
      <div className="container">
        <div className="download-content">
          <div className="download-text">
            <h2 className="download-title">
              Ready to Start Your Culinary Adventure?
            </h2>
            <p className="download-description">
              Join thousands of food lovers who will discover their perfect recipes through Yumigo. 
              Our app is coming soon to iOS and Android - be the first to experience recipe discovery based on your cravings!
            </p>
            
            <div className="download-features">
              <div className="feature-item">
                <span className="feature-icon">📱</span>
                <span>Coming soon to iOS and Android</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🆓</span>
                <span>Free to download and use</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <span>Instant recipe recommendations</span>
              </div>
            </div>
            
            <div className="download-buttons">
              <a href="#" className="download-btn app-store" onClick={handleDownloadClick}>
                <div className="btn-content">
                  <span className="btn-subtitle">Coming soon to</span>
                  <span className="btn-title">App Store</span>
                </div>
              </a>
              <a href="#" className="download-btn google-play" onClick={handleDownloadClick}>
                <div className="btn-content">
                  <span className="btn-subtitle">Coming soon to</span>
                  <span className="btn-title">Google Play</span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="download-visual">
            <div className="app-preview">
              <div className="preview-phone">
                <img src={cravingScreenshot} alt="Yumigo Craving Selection" className="phone-screenshot" />
              </div>
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

export default DownloadSection;
