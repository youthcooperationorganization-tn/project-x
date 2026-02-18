import React, { useState } from 'react';
import './Debate.css';

/**
 * Project X: Debate Component
 * Focus: Community Engagement & Dynamic Theming
 */

const TextAlign = {
  center: 'center' as const
};

const Debate: React.FC = () => {
  const [theme, setTheme] = useState<'none' | 'discord' | 'reddit'>('none');

  return (
    <section className={`debate-section theme-${theme}`}>
      <div className="debate-container">
        <div className="debate-box">
          <h2 className="debate-title" style={{ textAlign: TextAlign.center }}>
            Join the Debate.
          </h2>
          <p className="debate-desc" style={{ textAlign: TextAlign.center }}>
            The drafting process is open. Contribute your voice to the 
            Sovereign Confederal Protocol of Tunisia on your preferred platform.
          </p>
          
          <div className="community-btn-grid">
            <a 
              href="#" 
              className="community-btn-industrial"
              onMouseEnter={() => setTheme('discord')}
              onMouseLeave={() => setTheme('none')}
            >
              <span className="btn-meta">UPLINK_01</span>
              <span className="btn-text">Discord Community</span>
            </a>

            <a 
              href="#" 
              className="community-btn-industrial"
              onMouseEnter={() => setTheme('reddit')}
              onMouseLeave={() => setTheme('none')}
            >
              <span className="btn-meta">UPLINK_02</span>
              <span className="btn-text">Reddit Forum</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Debate;