import React, { useState } from 'react';
import './CravingSection.css';

const CravingSection = () => {
  const [selectedCraving, setSelectedCraving] = useState('salty');
  
  const cravings = [
    {
      id: 'salty',
      emoji: '🧂',
      title: 'Salty',
      description: 'Crispy, savory, and satisfying dishes that hit the spot',
      examples: ['Crispy Fried Chicken', 'Loaded Nachos', 'Garlic Parmesan Fries'],
      color: '#FF6B6B'
    },
    {
      id: 'sweet',
      emoji: '🍯',
      title: 'Sweet',
      description: 'Delightful desserts and sweet treats to satisfy your sugar cravings',
      examples: ['Chocolate Lava Cake', 'Strawberry Cheesecake', 'Caramel Ice Cream'],
      color: '#4ECDC4'
    },
    {
      id: 'spicy',
      emoji: '🌶️',
      title: 'Spicy',
      description: 'Fiery and bold flavors that bring the heat to your palate',
      examples: ['Spicy Thai Curry', 'Buffalo Wings', 'Jalapeño Poppers'],
      color: '#45B7D1'
    },
    {
      id: 'sour',
      emoji: '🍋',
      title: 'Sour',
      description: 'Tangy and zesty dishes that awaken your taste buds',
      examples: ['Lemon Tart', 'Pickled Vegetables', 'Sour Cream Soup'],
      color: '#96CEB4'
    }
  ];

  return (
    <section className="craving-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Are You Craving Today?</h2>
          <p className="section-description">
            Select your mood and discover recipes that match exactly what you're in the mood for
          </p>
        </div>
        
        <div className="craving-selector">
          {cravings.map((craving) => (
            <button
              key={craving.id}
              className={`craving-card ${selectedCraving === craving.id ? 'active' : ''}`}
              onClick={() => setSelectedCraving(craving.id)}
              style={{ '--accent-color': craving.color }}
            >
              <div className="craving-emoji">{craving.emoji}</div>
              <h3 className="craving-title">{craving.title}</h3>
            </button>
          ))}
        </div>
        
        <div className="craving-details">
          {cravings
            .filter(craving => craving.id === selectedCraving)
            .map(craving => (
              <div key={craving.id} className="craving-content">
                <div className="craving-info">
                  <h3 className="craving-main-title">
                    {craving.emoji} {craving.title} Cravings
                  </h3>
                  <p className="craving-description">{craving.description}</p>
                </div>
                <div className="craving-examples">
                  <h4>Popular {craving.title.toLowerCase()} recipes:</h4>
                  <ul className="examples-list">
                    {craving.examples.map((example, index) => (
                      <li key={index} className="example-item">{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CravingSection;
