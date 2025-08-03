import React from 'react';
import './DownloadSection.css';
import cravingScreenshot from '../assets/Result_Screenshot.jpg';

const DownloadSection = () => {
  return (
    <section className="download-section" id="download">
      <div className="container">
        <div className="download-content">
          <div className="download-text">
            <h2 className="download-title">
              Ready to Start Your Culinary Adventure?
            </h2>
            <p className="download-description">
              Join thousands of food lovers who have discovered their perfect recipes through Yumigo. 
              Download now and never wonder "what should I cook?" again.
            </p>
            
            <div className="download-features">
              <div className="feature-item">
                <span className="feature-icon">📱</span>
                <span>Available on iOS and Android</span>
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
              <a href="#" className="download-btn app-store">
                <div className="btn-content">
                  <span className="btn-subtitle">Download on the</span>
                  <span className="btn-title">App Store</span>
                </div>
              </a>
              <a href="#" className="download-btn google-play">
                <div className="btn-content">
                  <span className="btn-subtitle">Get it on</span>
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
    </section>
  );
};

export default DownloadSection;
