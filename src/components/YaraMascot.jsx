import React from 'react';
import { motion } from 'framer-motion';
import './YaraMascot.css';
import yaraImage from '../assets/Yara_YumigoMascot.jpeg';

const YaraMascot = ({ className = '', style = {} }) => {
  const containerVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.5,
      rotate: -180 
    },
    visible: { 
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const floatVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    pulse: {
      boxShadow: [
        "0 0 20px rgba(74, 157, 132, 0.3)",
        "0 0 40px rgba(74, 157, 132, 0.6)",
        "0 0 20px rgba(74, 157, 132, 0.3)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className={`yara-mascot ${className}`}
      style={style}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ 
        scale: 1.1,
        rotate: [0, -10, 10, -5, 0],
        transition: { duration: 0.5 }
      }}
    >
      <motion.div
        className="yara-container"
        variants={floatVariants}
        animate="float"
      >
        <motion.div
          className="yara-glow"
          variants={glowVariants}
          animate="pulse"
        >
          <img 
            src={yaraImage} 
            alt="Yara - Yumigo Mascot" 
            className="yara-image"
          />
        </motion.div>
        
        {/* Sparkle effects */}
        <div className="sparkles">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="sparkle"
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>
      
    
    </motion.div>
  );
};

export default YaraMascot;