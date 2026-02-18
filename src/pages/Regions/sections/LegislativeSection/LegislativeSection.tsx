import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LegislativeSection.css';

interface LegislativeProps {
  activeRegion: { fr: string; ar: string } | null;
}

// Coordinate generator for hemicycle seating
const generateArcPoints = (centerX: number, centerY: number, radius: number, totalDots: number, rows: number, startAngle: number) => {
  const points = [];
  const dotsPerRow = Math.ceil(totalDots / rows);
  const angleSpread = 140; 
  
  for (let r = 0; r < rows; r++) {
    const currentRadius = radius + (r * 18);
    for (let i = 0; i < dotsPerRow; i++) {
      if (points.length >= totalDots) break;
      const angle = startAngle + (i * (angleSpread / (dotsPerRow - 1)));
      const rad = (angle * Math.PI) / 180;
      points.push({
        x: centerX + currentRadius * Math.cos(rad),
        y: centerY + currentRadius * Math.sin(rad)
      });
    }
  }
  return points;
};

const LegislativeSection: React.FC<LegislativeProps> = ({ activeRegion }) => {
  const isNational = !activeRegion;

  return (
    <div className="legislative-wrapper">
      <div className="legis-container">
        <AnimatePresence mode="wait">
          <motion.div 
            key={isNational ? 'federal' : activeRegion?.fr}
            className="legis-grid"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          >
            {/* LEFT SIDE: SPECIFICATIONS */}
            <div className="legis-info">
              <span className="legis-meta-tag">LEGISLATIVE_ARCHIVE // v2.6</span>
              <h2 className="legis-main-title">
                {isNational ? "Federal Bicameralism" : `${activeRegion?.fr} Sovereign Branch`}
              </h2>

              <div className="blueprint-stack">
                {isNational ? (
                  <>
                    <div className="blueprint-item gold">
                      <div className="bp-header">
                        <span className="bp-count">100</span>
                        <h4>The National Council</h4>
                      </div>
                      <p>Elected via national "Flat-Vote." Focuses on federal departments, national budget, and sovereign legislation.</p>
                    </div>
                    <div className="blueprint-item red">
                      <div className="bp-header">
                        <span className="bp-count">48</span>
                        <h4>The Council of Regions</h4>
                      </div>
                      <p>Upper House with 2 members per governorate. Ensures no federal law violates regional economic parity.</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="blueprint-item red">
                      <div className="bp-header">
                        <span className="bp-count">24</span>
                        <h4>Regional Parliament</h4>
                      </div>
                      <p>Tailors governance to local geography, manages regional assets and governorate-level budgets.</p>
                    </div>
                    <div className="blueprint-item white pulse-border">
                      <div className="bp-header">
                        <span className="bp-count">12</span>
                        <h4>Citizen Oversight Council</h4>
                      </div>
                      <p>The Swiss-style "Emergency Brake." Randomly selected citizens empowered to trigger referendums.</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* RIGHT SIDE: THE SCHEMATIC */}
            <div className="legis-visual-stage">
              <svg viewBox="0 0 500 500" className="legislative-schematic">
                {isNational ? (
                  <g>
                    {/* TOP BODY: NATIONAL COUNCIL (100) */}
                    <g className="chamber-group">
                      <rect x="235" y="40" width="30" height="15" fill="#FFD700" rx="1" />
                      <text x="250" y="32" textAnchor="middle" className="label-tiny" fill="#FFD700">PRESIDENT_NC</text>
                      {generateArcPoints(250, 60, 60, 100, 4, 20).map((p, i) => (
                        <circle key={`nc-${i}`} cx={p.x} cy={p.y} r="3.2" fill="#FFD700" />
                      ))}
                    </g>

                    {/* BOTTOM BODY: COUNCIL OF REGIONS (48) */}
                    <g className="chamber-group">
                      <rect x="235" y="445" width="30" height="15" fill="var(--tunisia-red)" rx="1" />
                      <text x="250" y="475" textAnchor="middle" className="label-tiny" fill="var(--tunisia-red)">PRESIDENT_CR</text>
                      {generateArcPoints(250, 440, 60, 48, 2, 200).map((p, i) => (
                        <circle key={`cr-${i}`} cx={p.x} cy={p.y} r="4.5" fill="var(--tunisia-red)" />
                      ))}
                    </g>
                    <line x1="150" y1="250" x2="350" y2="250" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="8" />
                  </g>
                ) : (
                  <g>
                    {/* REGIONAL PARLIAMENT */}
                    <g className="chamber-group">
                      <rect x="235" y="80" width="30" height="15" fill="var(--tunisia-red)" rx="1" />
                      <text x="250" y="70" textAnchor="middle" className="label-tiny" fill="var(--tunisia-red)">REGIONAL_SPEAKER</text>
                      {generateArcPoints(250, 100, 80, 24, 2, 20).map((p, i) => (
                        <circle key={`reg-${i}`} cx={p.x} cy={p.y} r="6" fill="var(--tunisia-red)" />
                      ))}
                    </g>

                    {/* CITIZEN OVERSIGHT JURY */}
                    <g className="oversight-group">
                      <text x="250" y="335" textAnchor="middle" className="label-tiny" fill="#fff" opacity="0.6">CITIZEN_JURY_BENCH</text>
                      {[...Array(12)].map((_, i) => (
                        <rect key={`cite-${i}`} x={125 + (i * 22)} y={350} width="14" height="14" fill="#fff" opacity="0.9" />
                      ))}
                    </g>
                  </g>
                )}
              </svg>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LegislativeSection;