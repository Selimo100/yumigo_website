import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import CravingSection from '../components/CravingSection';
import Features from '../components/Features';
import DownloadSection from '../components/DownloadSection';

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <CravingSection />
      <Features />
      <DownloadSection />
    </main>
  );
};

export default Home;
