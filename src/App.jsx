import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import CravingSection from './components/CravingSection';
import Features from './components/Features';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <CravingSection />
        <Features />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
