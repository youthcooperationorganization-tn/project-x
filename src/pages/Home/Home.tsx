import React, { useState, useRef } from 'react';
import Footer from '../../components/Footer/Footer';
import './Home.css';
import Debate from './sections/debate/Debate';
import People from './sections/peaple/People';
import Pillars from './sections/pillars/Pillars';
import Vision from './sections/vision/Vision';

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, clientHeight } = containerRef.current;
      const index = Math.round(scrollTop / clientHeight);
      if (index !== activeSection) {
        setActiveSection(index);
      }
    }
  };

  return (
    <div className="home-wrapper">
      <div 
        className="home-scroll-container" 
        ref={containerRef} 
        onScroll={handleScroll}
      >
        <div className="snap-section"><Vision /></div>
        <div className="snap-section"><People /></div>
        <div className="snap-section"><Pillars /></div>
        
        {/* The last content section */}
        <div className="snap-section"><Debate /></div>

        {/* FOOTER: Integrated into the scroll flow */}
        <div className="footer-snap-point">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;