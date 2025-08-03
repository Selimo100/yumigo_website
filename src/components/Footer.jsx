import React from 'react';
import './Footer.css';
import logo from '../assets/icon.png';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={logo} alt="Yumigo" />
                <span>Yumigo</span>
              </div>
              <p className="footer-description">
                Discover your next favorite recipe based on what you're craving. 
                Join our community of food lovers from around the world.
              </p>
              <div className="social-links">
                <a href="https://instagram.com/yumigo" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">📷</span>
                  Instagram
                </a>
                <a href="https://tiktok.com/@yumigo" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">🎵</span>
                  TikTok
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="link-group">
                <h4 className="link-title">App</h4>
                <a href="#features" className="footer-link">Features</a>
                <a href="#download" className="footer-link">Download</a>
                <a href="#" className="footer-link">How it Works</a>
                <a href="#" className="footer-link">FAQ</a>
              </div>
              
              <div className="link-group">
                <h4 className="link-title">Community</h4>
                <a href="#" className="footer-link">Recipe Sharing</a>
                <a href="#" className="footer-link">Food Creators</a>
                <a href="#" className="footer-link">Cooking Tips</a>
                <a href="#" className="footer-link">Blog</a>
              </div>
              
              <div className="link-group">
                <h4 className="link-title">Support</h4>
                <a href="mailto:yumigo.information@gmail.com" className="footer-link">Contact Us</a>
                <a href="#" className="footer-link">Help Center</a>
                <a href="#" className="footer-link">Privacy Policy</a>
                <a href="#" className="footer-link">Terms of Service</a>
              </div>
            </div>
          </div>
          
          <div className="footer-contact">
            <div className="contact-info">
              <h4 className="contact-title">Get in Touch</h4>
              <a href="mailto:yumigo.information@gmail.com" className="contact-email">
                <span className="contact-icon">📧</span>
                yumigo.information@gmail.com
              </a>
              <p className="contact-text">
                Have questions or feedback? We'd love to hear from you!
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 Yumigo. All rights reserved.
            </p>
            <div className="footer-meta">
              <span>Made with ❤️ for food lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
