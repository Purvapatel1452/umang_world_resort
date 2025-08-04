import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { initImageOptimizations, initResponsiveImages } from './utils/imageUtils';

function App() {
  useEffect(() => {
    // Initialize image optimizations
    initImageOptimizations();
    initResponsiveImages();
    
    // Preload critical images
    const criticalImages = [
      '/images/umang-logo.png',
      '/images/resort-main.jpg',
      '/images/resort-hero.mp4'
    ];
    
    // Add preload links for critical images
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = src.includes('.mp4') ? 'video' : 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
