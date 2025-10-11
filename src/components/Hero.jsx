import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import homeScreenshot from '../assets/Home_Screenshot.jpg';
import cravingScreenshot from '../assets/Craving_Screenshot.jpg';
import profileScreenshot from '../assets/Profile_Screenshot.jpg';
import yaraImage from '../assets/Yara_YumigoMascot.jpeg';
import teaserVideo from '../assets/YumigoTeaser.MP4';
import teaserThumbnail from '../assets/542974B5-F0E8-476E-A095-941B0DD0018D_4_5005_c.jpeg';
import ComingSoonModal from './ComingSoonModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleVideoClick = (e) => {
    e.preventDefault();
    setShowVideoModal(true);
  };

  return (
    <div ref={ref} style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #064e3b 0%, #065f46 15%, #047857 30%, #059669 45%, #10b981 60%, #34d399 75%, #6ee7b7 90%, #a7f3d0 100%)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      paddingTop: '80px'
    }}>
      {/* Enhanced Green Animated Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(52, 211, 153, 0.25) 0%, transparent 50%),
          radial-gradient(circle at 60% 10%, rgba(110, 231, 183, 0.2) 0%, transparent 60%),
          radial-gradient(circle at 40% 80%, rgba(5, 150, 105, 0.15) 0%, transparent 70%)
        `,
        animation: 'float 20s ease-in-out infinite'
      }} />

      {/* Additional Green Particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(circle at 10% 90%, rgba(34, 197, 94, 0.1) 0%, transparent 40%),
          radial-gradient(circle at 90% 20%, rgba(22, 163, 74, 0.08) 0%, transparent 45%),
          radial-gradient(circle at 30% 50%, rgba(187, 247, 208, 0.05) 0%, transparent 35%)
        `,
        animation: 'floatReverse 25s ease-in-out infinite'
      }} />

      {/* Floating Yara Mascot */}
      <motion.div
        initial={{ x: -200, opacity: 0, rotate: -180 }}
        animate={{ x: 0, opacity: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 50, 
          damping: 20,
          delay: 1.5 
        }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '120px',
          height: '120px',
          zIndex: 10
        }}
      >
        
      </motion.div>

      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '0 1rem', 
        width: '100%', 
        zIndex: 2, 
        position: 'relative'
      }}>
        <div className="hero-grid">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover Recipes Based on Your{' '}
              <motion.span
                style={{
                  background: 'linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                  textShadow: '0 0 30px rgba(16, 185, 129, 0.5)'
                }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Cravings
              </motion.span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Tell Yumigo what you're craving - salty, sweet, spicy, or sour - and get personalized recipe recommendations from our community of food lovers around the world.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={handleDownloadClick}
                className="btn btn-primary"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 15px 35px rgba(16, 185, 129, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Coming Soon ✨
              </motion.button>

              <motion.button
                onClick={handleVideoClick}
                className="btn btn-secondary"
                whileHover={{ 
                  scale: 1.05,
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderColor: 'rgba(255, 255, 255, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Preview
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Phones */}
          <motion.div
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: '600px' }}
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { src: homeScreenshot, delay: 0.5, x: -60, rotate: -5 },
              { src: cravingScreenshot, delay: 0.7, x: 0, rotate: 0 },
              { src: profileScreenshot, delay: 0.9, x: 60, rotate: 5 }
            ].map((phone, index) => (
              <motion.div
                key={index}
                style={{
                  position: 'absolute',
                  width: '240px',
                  height: '480px',
                  background: 'linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)',
                  borderRadius: '30px',
                  padding: '15px',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                  transform: `translateX(${phone.x}px) rotate(${phone.rotate}deg)`,
                  zIndex: index === 1 ? 3 : 2
                }}
                initial={{ scale: 0.8, opacity: 0, y: 100 }}
                animate={inView ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.8, opacity: 0, y: 100 }}
                transition={{ 
                  duration: 0.8, 
                  delay: phone.delay,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <img 
                  src={phone.src} 
                  alt={`Yumigo Screen ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '20px'
                  }}
                />
                {/* Phone reflection */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  right: '15px',
                  height: '30%',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
                  borderRadius: '20px 20px 0 0',
                  pointerEvents: 'none'
                }} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Compact Video Preview Modal */}
      {showVideoModal && (
        <motion.div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            padding: '1rem'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowVideoModal(false)}
        >
          <motion.div
            className="video-modal"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setShowVideoModal(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: 'none',
                background: 'rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                color: '#6b7280',
                zIndex: 10,
                transition: 'all 0.2s ease'
              }}
              whileHover={{ 
                scale: 1.1, 
                background: 'rgba(239, 68, 68, 0.1)',
                color: '#ef4444'
              }}
              whileTap={{ scale: 0.95 }}
            >
              ×
            </motion.button>

            {/* Video Preview Section */}
            <div style={{ position: 'relative' }}>
              <motion.div 
                style={{ 
                  position: 'relative',
                  background: '#000'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <video 
                  controls
                  autoPlay
                  muted
                  poster={teaserThumbnail}
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    display: 'block',
                    borderRadius: '0'
                  }}
                >
                  <source src={teaserVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>

              {/* Content */}
              <motion.div 
                style={{ 
                  padding: '1rem',
                  textAlign: 'center' 
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  style={{
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem'
                  }}
                  animate={{
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🎬
                </motion.div>

                <h2 style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: '800', 
                  marginBottom: '0.5rem',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Yumigo Preview
                </h2>
                
                <p style={{ 
                  color: '#6b7280', 
                  fontSize: '0.8rem', 
                  lineHeight: '1.4',
                  marginBottom: '0.75rem'
                }}>
                  Watch our app teaser!
                </p>

                {/* Quick Features */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.3rem',
                  justifyContent: 'center',
                  marginBottom: '0.75rem'
                }}>
                  {['🍕 Cravings', '👥 Community', '⭐ Reviews'].map((feature, index) => (
                    <motion.span
                      key={index}
                      style={{
                        background: 'rgba(16, 185, 129, 0.1)',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '12px',
                        fontSize: '0.7rem',
                        fontWeight: '500',
                        color: '#059669'
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>

                <motion.p 
                  style={{ 
                    fontSize: '0.9rem',
                    color: '#10b981',
                    fontWeight: '600'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Coming Very Soon! �
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <ComingSoonModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateX(0) translateY(0) scale(1); }
          25% { transform: translateX(20px) translateY(-10px) scale(1.02); }
          50% { transform: translateX(-10px) translateY(15px) scale(0.98); }
          75% { transform: translateX(15px) translateY(-20px) scale(1.01); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
