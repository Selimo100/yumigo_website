import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './DownloadSection.css';
import cravingScreenshot from '../assets/Result_Screenshot.jpg';
import ComingSoonModal from './ComingSoonModal';
import YaraMascot from './YaraMascot';

const DownloadSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section className="download-section" id="download" ref={ref}>
      <div className="container">
        <motion.div 
          className="download-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="download-text" variants={itemVariants}>
            <motion.h2 
              className="download-title"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to Start Your Culinary Adventure?
            </motion.h2>
            <motion.p 
              className="download-description"
              variants={itemVariants}
            >
              Join thousands of food lovers who will discover their perfect recipes through Yumigo. 
              Our app is coming soon to iOS and Android - be the first to experience recipe discovery based on your cravings!
            </motion.p>
            
            <motion.div className="download-features" variants={itemVariants}>
              {[
                { icon: '📱', text: 'Coming soon to iOS and Android' },
                { icon: '🆓', text: 'Free to download and use' },
                { icon: '⚡', text: 'Instant recipe recommendations' }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="feature-item"
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <span className="feature-icon">{feature.icon}</span>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div className="download-buttons" variants={itemVariants}>
              <motion.a 
                href="#" 
                className="download-btn app-store" 
                onClick={handleDownloadClick}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="btn-content">
                  <span className="btn-subtitle">Coming soon to</span>
                  <span className="btn-title">App Store</span>
                </div>
              </motion.a>
              <motion.a 
                href="#" 
                className="download-btn google-play" 
                onClick={handleDownloadClick}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="btn-content">
                  <span className="btn-subtitle">Coming soon to</span>
                  <span className="btn-title">Google Play</span>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="download-visual"
            initial={{ x: 200, opacity: 0, rotateY: 45 }}
            animate={inView ? { x: 0, opacity: 1, rotateY: 0 } : { x: 200, opacity: 0, rotateY: 45 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="app-preview">
              <motion.div 
                className="preview-phone"
                animate={{
                  y: [0, -10, 0],
                  rotateZ: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img src={cravingScreenshot} alt="Yumigo Craving Selection" className="phone-screenshot" />
                <div className="phone-glow"></div>
              </motion.div>
              
              {/* Floating Yara mascot */}
              <motion.div 
                className="floating-yara"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15 
                }}
              >
                <YaraMascot style={{ width: '100px', height: '100px' }} />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="preview-decorations">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="decoration-element"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.8, 0.3],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.8,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <ComingSoonModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default DownloadSection;
