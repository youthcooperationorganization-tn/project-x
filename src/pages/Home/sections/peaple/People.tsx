import React from 'react';
import './People.css';

/**
 * Project X: People (Initiative) Component
 * Focus: Radical Decentralization & Regional Sovereignty
 */

const People: React.FC = () => {
  return (
    <section className="people-section bg-flag-red">
      <div className="people-container">
        <div className="aesthetic-grid">
          <div className="text-content">
            <div className="protocol-chip">ANTI_CORRUPTION_INITIATIVE</div>
            <h2 className="display-title text-white">
              DECENTRALIZE <br/>THE POWER.
            </h2>
            <div className="manifesto-box border-white/30">
              <p className="manifesto-bold text-white">
                Dismantling a failed system to empower 24 sovereign nodes.
              </p>
              <p className="manifesto-light text-white/90">
                The central government has disregarded the interior for decades. 
                This protocol ensures every region becomes a primary architect of its own future through the power of its people.
              </p>
            </div>
          </div>

          <div className="visual-content">
            <div className="node-display border-white/20">
              <span className="node-main-num text-white">24</span>
              <span className="node-label text-white/70 uppercase">Sovereign Nodes</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background watermark for industrial depth */}
      <div className="bg-watermark">DECENTRALIZE</div>
    </section>
  );
};

export default People;