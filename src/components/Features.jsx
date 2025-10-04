import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Features.css';

const Features = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const features = [
    {
      icon: '🔍',
      title: 'Craving-Based Discovery',
      description: 'Tell us what you\'re in the mood for - salty, sweet, spicy, or sour - and get personalized recipe recommendations instantly.'
    },
    {
      icon: '👥',
      title: 'Social Community',
      description: 'Follow your favorite food creators, share recipes, and connect with fellow food enthusiasts from around the world.'
    },
    {
      icon: '⭐',
      title: 'Recipe Ratings & Reviews',
      description: 'Rate recipes, leave reviews, and discover top-rated dishes from the Yumigo community.'
    },
    {
      icon: '🏠',
      title: 'Personal Recipe Collection',
      description: 'Create and manage your own recipe collection. Share your culinary creations with the community.'
    },
    {
      icon: '📌',
      title: 'Save Favorites',
      description: 'Bookmark your favorite recipes and access them anytime. Build your personal cookbook effortlessly.'
    },
    {
      icon: '🍃',
      title: 'Seasonal Ingredients',
      description: 'Discover recipes featuring seasonal ingredients based on your location for fresher, more sustainable cooking.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 80, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section className="features-section" id="about" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Why Food Lovers Choose Yumigo</h2>
          <p className="section-description">
            Discover what makes Yumigo the perfect companion for your culinary journey
          </p>
        </motion.div>
        
        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="feature-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(45, 138, 114, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="feature-icon"
                whileHover={{ 
                  scale: 1.3,
                  rotate: [0, -10, 10, 0]
                }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              
              {/* Decorative elements */}
              <div className="feature-decoration">
                <div className="decoration-dot"></div>
                <div className="decoration-dot"></div>
                <div className="decoration-dot"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="features-stats"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="stat"
            whileHover={{ scale: 1.05 }}
          >
            <div className="stat-number">Coming Soon</div>
            <div className="stat-label">Recipes</div>
          </motion.div>
          <motion.div 
            className="stat"
            whileHover={{ scale: 1.05 }}
          >
            <div className="stat-number">Launch Soon</div>
            <div className="stat-label">Active Users</div>
          </motion.div>
          <motion.div 
            className="stat"
            whileHover={{ scale: 1.05 }}
          >
            <div className="stat-number">Beta Testing</div>
            <div className="stat-label">Recipe Ratings</div>
          </motion.div>
          <motion.div 
            className="stat"
            whileHover={{ scale: 1.05 }}
          >
            <div className="stat-number">Worldwide</div>
            <div className="stat-label">Availability</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
