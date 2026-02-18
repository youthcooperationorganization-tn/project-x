import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Governance.css';

interface GovernanceProps {
  activeRegion: { fr: string; ar: string } | null;
}

const Governance: React.FC<GovernanceProps> = ({ activeRegion }) => {
  const isNational = !activeRegion;
  
  const cards = [
    { 
      id: '01', 
      title: 'COMMISSION', 
      text: isNational ? "National ISIE Oversight" : `Regional Branch of ${activeRegion.fr}` 
    },
    { 
      id: '02', 
      title: 'CONSTITUTION', 
      text: isNational ? "2022 Supreme Mandate" : `Local Statutes for ${activeRegion.fr}`, 
      highlight: true 
    },
    { 
      id: '03', 
      title: 'PARLIAMENT', 
      text: isNational ? "Bicameral Assembly" : `Regional Council of ${activeRegion.fr}` 
    }
  ];

  return (
    <section className="governance-container">
      <div className="governance-inner"> {/* Wrapper for centering */}
        <div className="governance-header">
          <div className="label-group">
            <span className="tech-tag">GOVERNANCE PROTOCOL</span>
            <h2 className="display-title">
              {isNational ? "NATIONAL JURISDICTION" : `${activeRegion.fr.toUpperCase()} AUTHORITY`}
            </h2>
          </div>
          <div className="status-box">
            <div className="pulse-dot"></div>
            <span>LIVE DATA FEED</span>
          </div>
        </div>

        <div className="gov-grid">
          <AnimatePresence mode="wait">
            {cards.map(card => (
              <motion.div 
                key={`${card.id}-${activeRegion?.fr || 'national'}`} 
                className={`gov-card ${card.highlight ? 'accent' : ''}`}
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
              >
                <div className="gov-num">{card.id}</div>
                <div className="gov-content">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Governance;