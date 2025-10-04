import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ComingSoonModal = ({ isOpen, onClose }) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
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
            padding: '2rem'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              borderRadius: '24px',
              padding: '3rem',
              maxWidth: '500px',
              width: '100%',
              position: 'relative',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
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

            {/* Content */}
            <div style={{ textAlign: 'center' }}>
              {/* Animated Icon */}
              <motion.div
                style={{
                  fontSize: '4rem',
                  marginBottom: '1.5rem',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  borderRadius: '50%',
                  width: '100px',
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)'
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🚀
              </motion.div>

              <motion.h2
                style={{
                  fontSize: '2.25rem',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #10b981, #059669, #047857)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '1rem',
                  lineHeight: '1.2'
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Coming Soon!
              </motion.h2>

              <motion.p
                style={{
                  fontSize: '1.125rem',
                  color: '#6b7280',
                  marginBottom: '2rem',
                  lineHeight: '1.6'
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                We're putting the finishing touches on Yumigo! Get ready for the most amazing recipe discovery experience.
              </motion.p>

              {/* Features */}
              <motion.div
                style={{
                  display: 'grid',
                  gap: '1rem',
                  marginBottom: '2rem',
                  textAlign: 'left'
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {[
                  'Craving-based recipe discovery',
                  'Global cooking community',
                  'Personal recipe collections',
                  'AI-powered recommendations'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.75rem',
                      background: 'rgba(16, 185, 129, 0.05)',
                      borderRadius: '12px',
                      border: '1px solid rgba(16, 185, 129, 0.1)'
                    }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '0.75rem',
                      fontWeight: 'bold'
                    }}>
                      ✓
                    </div>
                    <span style={{ fontWeight: '500', color: '#374151' }}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'center'
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.a
                  href="https://www.instagram.com/yumigo.app/profilecard/?igsh=MXMyaWJ1c3dwd2M0NA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '50px',
                    background: 'linear-gradient(135deg, #e91e63, #ad1457)',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 15px rgba(233, 30, 99, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 6px 20px rgba(233, 30, 99, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  📷 Instagram
                </motion.a>

                <motion.a
                  href="https://www.tiktok.com/@yumigo.official?_t=ZN-8yZP4DFZCbv&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '50px',
                    background: 'linear-gradient(135deg, #000000, #333333)',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  🎵 TikTok
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ComingSoonModal;
