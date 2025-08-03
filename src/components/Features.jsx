import React from 'react';
import './Features.css';

const Features = () => {
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

  return (
    <section className="features-section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Food Lovers Choose Yumigo</h2>
          <p className="section-description">
            Discover what makes Yumigo the perfect companion for your culinary journey
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="features-stats">
          <div className="stat">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Recipes</div>
          </div>
          <div className="stat">
            <div className="stat-number">5K+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat">
            <div className="stat-number">15K+</div>
            <div className="stat-label">Recipe Ratings</div>
          </div>
          <div className="stat">
            <div className="stat-number">50+</div>
            <div className="stat-label">Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
