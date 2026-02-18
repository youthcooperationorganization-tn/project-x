import React, { useState, useRef } from 'react';
import Footer from '../../components/Footer/Footer';
import './Constitution.css';
import ExecutivePower from './ExecutivePower/ExecutivePower';
import JudicialPower from './JudicialPower/JudicialPower';
import LegislativePower from './LegislativePower/LegislativePower';
import SplitSection from './SplitSection/SplitSection';
import TransitionBoard from './TransitionBoard/TransitionBoard';

/**
 * Project X: Federal Constitution Orchestrator
 * System: Monochrome Snap Engine v1.2
 */

const Constitution: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Define total sections for the dot navigation
  const sections = [0, 1, 2, 3, 4]; 

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, clientHeight } = containerRef.current;
      const index = Math.round(scrollTop / clientHeight);
      if (index !== activeSection) {
        setActiveSection(index);
      }
    }
  };

  const scrollToSection = (index: number) => {
    containerRef.current?.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="const-wrapper">
      <div 
        className="const-scroll-container" 
        ref={containerRef} 
        onScroll={handleScroll}
      >
        {/* Progress Sidebar */}
        <div className="hidden lg:flex scroll-progress-sidebar">
          {sections.map((i) => (
            <div 
              key={i} 
              className={`progress-dot ${activeSection === i ? 'active' : ''}`}
              onClick={() => scrollToSection(i)}
            />
          ))}
        </div>

        {/* SECTION 0: THE SPLIT (Federal/Regional) */}
        <div className="const-snap-section">
          <SplitSection />
        </div>

        {/* SECTION 1: TRANSITION BOARD */}
        <div className="const-snap-section">
          <TransitionBoard />
        </div>

        {/* SECTION 2: LEGISLATIVE POWER */}
        <div className="const-snap-section">
          <LegislativePower />
        </div>

        {/* SECTION 3: EXECUTIVE POWER */}
        <div className="const-snap-section">
          <ExecutivePower />
        </div>

        {/* SECTION 4: JUDICIAL POWER */}
        <div className="const-snap-section">
          <JudicialPower />
        </div>

        {/* FINAL SNAP POINT: FOOTER */}
        <div className="footer-snap-wrapper">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Constitution;