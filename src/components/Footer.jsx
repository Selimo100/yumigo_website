import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/icon.png';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <Link to="/">
                  <img src={logo} alt="Yumigo" />
                  <span>Yumigo</span>
                </Link>
              </div>
              <p className="footer-description">
                Discover your next favorite recipe based on what you're craving. 
                Join our community of food lovers from around the world.
              </p>
              <div className="social-links">
                <a href="https://www.instagram.com/yumigo.app/profilecard/?igsh=MXMyaWJ1c3dwd2M0NA==" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">📷</span>
                  Instagram
                </a>
                <a href="https://www.tiktok.com/@yumigo.official?_t=ZN-8yZP4DFZCbv&_r=1" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">🎵</span>
                  TikTok
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="link-group">
                <h4 className="link-title">App</h4>
                <a href="#features" className="footer-link" onClick={(e) => handleSectionClick(e, 'about')}>Features</a>
                <a href="#download" className="footer-link" onClick={(e) => handleSectionClick(e, 'download')}>Download</a>
                {/* <Link to="/team" className="footer-link">Team</Link> */}
              </div>
              
              <div className="link-group">
                <h4 className="link-title">Contact Us</h4>
                <form className="contact-form" action="mailto:yumigo.information@gmail.com" method="post" encType="text/plain">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    className="form-input"
                    required 
                  />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    className="form-input"
                    required 
                  />
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    className="form-textarea"
                    rows="4"
                    required
                  ></textarea>
                  <button type="submit" className="form-submit">Send Message</button>
                </form>
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
