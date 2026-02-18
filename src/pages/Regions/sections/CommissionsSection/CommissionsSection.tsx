import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CommissionsSection.css';

interface CommissionsProps {
  activeRegion: { fr: string; ar: string } | null;
}

const CommissionsSection: React.FC<CommissionsProps> = ({ activeRegion }) => {
  const isNational = !activeRegion;
  const memberCount = isNational ? 7 : 5;
  const regionName = activeRegion?.fr || "National";

  return (
    <div className="commissions-wrapper-white">
      <div className="commis-high-fidelity-grid">
        
        {/* LEFT: ADMINISTRATIVE DATA */}
        <div className="commis-text-side">
          <header className="commis-info-header">
            <div className="tag-group">
              <span className="id-badge">UNIT_0{isNational ? '1' : '2'}</span>
              <span className="status-badge">ACTIVE_BOARD</span>
            </div>
            <h2 className="commis-display-title">
              {isNational ? "Federal Executive" : `${regionName} Commission`}
            </h2>
            <h3 className="commis-display-ar">
              {isNational ? "الهيئة التنفيذية الوطنية" : `الهيئة التنفيذية ب${activeRegion?.ar}`}
            </h3>
          </header>

          <div className="commis-mandate-box">
            <h4 className="mandate-header">Operational Mandate</h4>
            <p className="mandate-body">
              {isNational 
                ? "Unified executive authority over federal departments, strategic national reserves, and sovereign digital infrastructure."
                : `Local executive management for the ${regionName} governorate, focusing on regional growth and district-level economic planning.`}
            </p>
            <div className="stat-row">
              <div className="stat-item">
                <span className="stat-val">{memberCount}</span>
                <span className="stat-label">COUNCIL_QUORUM</span>
              </div>
              <div className="stat-item">
                <span className="stat-val">2026</span>
                <span className="stat-label">FISCAL_YEAR</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: HIGH FIDELITY SVG REPRESENTATION */}
        <div className="commis-visual-side">
          <div className="svg-elevation-card">
            <svg viewBox="0 0 400 400" className="council-depth-svg">
              {/* Floor Shadow */}
              <ellipse cx="200" cy="280" rx="150" ry="20" fill="rgba(0,0,0,0.03)" />

              {/* High Fidelity Table Base */}
              <path d="M50,220 Q200,180 350,220 L330,250 Q200,210 70,250 Z" fill="#ffffff" stroke="#111" strokeWidth="1.5" />
              <path d="M70,250 Q200,210 330,250" fill="none" stroke="#111" strokeWidth="0.5" strokeDasharray="2,2" />

              {/* Seating Arrangement */}
              <AnimatePresence mode="wait">
                {[...Array(memberCount)].map((_, i) => {
                  const span = 260; 
                  const xPos = 70 + (i * (span / (memberCount - 1)));
                  const yPos = 210 + Math.pow((i - (memberCount-1)/2), 2) * 2;

                  return (
                    <motion.g 
                      key={`${regionName}-${i}`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      {/* Detailed Seat representation */}
                      <rect x={xPos - 10} y={yPos - 25} width="20" height="25" rx="1" fill="#fff" stroke="#111" strokeWidth="1.5" />
                      <rect x={xPos - 10} y={yPos - 25} width="20" height="4" fill="#111" />
                      <text x={xPos} y={yPos - 32} textAnchor="middle" fontSize="8" fontWeight="bold" fill="#000">0{i+1}</text>
                    </motion.g>
                  );
                })}
              </AnimatePresence>

              {/* CENTER COMMAND ICON (Replacing the Plus Sign) */}
              <g transform="translate(185, 185)">
                <circle cx="15" cy="15" r="18" fill="none" stroke="#dcdcdc" strokeWidth="1" strokeDasharray="2,2" />
                <path d="M15,2 L15,28 M2,15 L28,15" stroke="#111" strokeWidth="0.5" opacity="0.3" />
                {/* Strategic Diamond */}
                <path d="M15,8 L22,15 L15,22 L8,15 Z" fill="var(--tunisia-red)" />
                <circle cx="15" cy="15" r="3" fill="#fff" />
              </g>
              
              <text x="200" y="165" textAnchor="middle" fontSize="7" letterSpacing="2" fontWeight="900" fill="#111">COMMAND_ORIGIN</text>
            </svg>
            <div className="card-caption">SYSTEM_SCHEMATIC // BOARD_SEATING_CHART</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CommissionsSection;