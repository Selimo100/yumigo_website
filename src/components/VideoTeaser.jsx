import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './VideoTeaser.css';
import teaserVideo from '../assets/TeaserVideo.jpeg'; // We'll use this as a poster

const VideoTeaser = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    setShowModal(true);
    // In a real scenario, you would have an actual video file
    // For now, we'll create a fancy modal with the teaser image
  };

  const closeModal = () => {
    setShowModal(false);
    setIsPlaying(false);
  };

  return (
    <>
      <motion.div 
        className="video-teaser"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        onClick={handlePlayClick}
      >
        <div className="video-container">
          <img 
            src={teaserVideo} 
            alt="Yumigo App Teaser" 
            className="video-poster"
          />
          <motion.div 
            className="play-button"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(255, 255, 255, 0.7)",
                "0 0 0 20px rgba(255, 255, 255, 0)",
                "0 0 0 0 rgba(255, 255, 255, 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </motion.div>
          
          <div className="video-overlay">
            <div className="video-info">
              <h3>Watch Yumigo in Action</h3>
              <p>See how easy it is to find recipes based on your cravings</p>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="floating-elements">
          {['🍽️', '✨', '🔥', '💫'].map((emoji, index) => (
            <motion.span
              key={index}
              className="floating-emoji"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5,
                ease: "easeInOut"
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <motion.div 
          className="video-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={closeModal}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            
            <div className="teaser-content">
              <img 
                src={teaserVideo} 
                alt="Yumigo App Teaser" 
                className="modal-image"
              />
              <div className="teaser-text">
                <h2>Coming Soon!</h2>
                <p>Yumigo is currently in development. Our team is working hard to bring you the most amazing recipe discovery experience!</p>
                <div className="features-preview">
                  <div className="feature-item">
                    <span className="feature-icon">🎯</span>
                    <span>Craving-based recommendations</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🌍</span>
                    <span>Global recipe community</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">📱</span>
                    <span>Mobile-first experience</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default VideoTeaser;