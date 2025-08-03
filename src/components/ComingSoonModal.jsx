import React from 'react';
import './ComingSoonModal.css';

const ComingSoonModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>
        <div className="modal-body">
          <div className="modal-icon">🚀</div>
          <h2 className="modal-title">Coming Soon to App Stores!</h2>
          <p className="modal-description">
            We're putting the finishing touches on Yumigo! Our app will be available for download on both iOS and Android app stores very soon.
          </p>
          <div className="modal-features">
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <span>Recipe discovery based on cravings</span>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <span>Social cooking community</span>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <span>Personal recipe collections</span>
            </div>
          </div>
          <p className="modal-cta">
            Follow us on social media to be the first to know when Yumigo launches!
          </p>
          <div className="modal-social">
            <a href="https://www.instagram.com/yumigo.app/profilecard/?igsh=MXMyaWJ1c3dwd2M0NA==" target="_blank" rel="noopener noreferrer" className="social-btn">
              📷 Instagram
            </a>
            <a href="https://www.tiktok.com/@yumigo.official?_t=ZN-8yZP4DFZCbv&_r=1" target="_blank" rel="noopener noreferrer" className="social-btn">
              🎵 TikTok
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonModal;
