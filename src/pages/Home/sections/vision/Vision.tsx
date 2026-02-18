import React from 'react';
import './Vision.css';

/**
 * Project X: Vision Component
 * Focus: High-contrast Industrial Brutalism
 */

const Vision: React.FC = () => {
  return (
    <section className="vision-section hero-bg-dots">
      <div className="vision-container">
        <span className="industrial-tag">Core_Protocol_v0.1</span>
        
        <h1 className="hero-title">
          FEDERAL <br />
          <span className="hero-italic">CONSTITUTION.</span>
        </h1>

        <div className="hero-footer-grid">
          <div className="hero-text-block">
            <p className="hero-lead">The Sovereign Confederal Protocol.</p>
            <p className="hero-sub">
              Architecting a decentralized Tunisia where regional autonomy 
              forms the bedrock of national sovereignty.
            </p>
          </div>
          
          <div className="hero-actions">
            <button className="btn-solid">Join Initiative</button>
            <button className="btn-glass">The Acts</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;