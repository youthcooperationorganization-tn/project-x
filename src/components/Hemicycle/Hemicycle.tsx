import React, { useState } from 'react';
import './Hemicycle.css';

/**
 * Project X: Legislative Hemicycle (Standalone Component)
 * Philosophy: Perfect 180-degree arcs representing sovereign seats.
 * Geometry: Inner Arc (48 Regions), Outer Arc (100 Efficiency Chamber).
 */

const Hemicycle: React.FC = () => {
  const [activeSeat, setActiveSeat] = useState<{id: string, group: string} | null>(null);

  // Math helper for perfect 180-degree distribution
  const getPoints = (count: number, radius: number) => {
    const points = [];
    const angleStep = 180 / (count - 1);
    const centerX = 500;
    const centerY = 500;

    for (let i = 0; i < count; i++) {
      const angle = (180 - i * angleStep) * (Math.PI / 180);
      const x = centerX + radius * Math.cos(angle);
      const y = centerY - radius * Math.sin(angle);
      points.push({ x, y, id: i + 1 });
    }
    return points;
  };

  const councilPoints = getPoints(48, 280);
  const efficiencyPoints = getPoints(100, 400);

  return (
    <div className="hemicycle-engine">
      <div className="hemicycle-telemetry">
        <div className="t-block">
          <span className="t-label">LEGISLATIVE_FOCUS</span>
          <h2 className="t-value">{activeSeat ? `SEAT_${activeSeat.id}_${activeSeat.group}` : 'FEDERAL_HEMICYCLE'}</h2>
        </div>
        <div className="t-block" style={{ textAlign: 'center' }}>
          <span className="t-label">STRUCTURE</span>
          <h2 className="t-value">180°_SOVEREIGN_ARC</h2>
        </div>
        <div className="t-block" style={{ textAlign: 'right' }}>
          <span className="t-label">CAPACITY</span>
          <h2 className="t-value">148_DELEGATES</h2>
        </div>
      </div>

      <div className="hemicycle-visual-core">
        <svg viewBox="0 0 1000 600" className="hemicycle-svg-element">
          {/* Inner Arc: Council of Regions */}
          <g className="arc-group">
            {councilPoints.map((p) => (
              <circle
                key={`reg-${p.id}`}
                cx={p.x}
                cy={p.y}
                r="6"
                className={`seat ${activeSeat?.id === `reg-${p.id}` ? 'active' : ''}`}
                onMouseEnter={() => setActiveSeat({ id: `reg-${p.id}`, group: 'COUNCIL_OF_REGIONS' })}
                onMouseLeave={() => setActiveSeat(null)}
              />
            ))}
          </g>

          {/* Outer Arc: Efficiency Chamber */}
          <g className="arc-group">
            {efficiencyPoints.map((p) => (
              <circle
                key={`eff-${p.id}`}
                cx={p.x}
                cy={p.y}
                r="4.5"
                className={`seat efficiency ${activeSeat?.id === `eff-${p.id}` ? 'active' : ''}`}
                onMouseEnter={() => setActiveSeat({ id: `eff-${p.id}`, group: 'EFFICIENCY_CHAMBER' })}
                onMouseLeave={() => setActiveSeat(null)}
              />
            ))}
          </g>

          {/* The Podium / Execution Point */}
          <g className="podium-set">
            <rect x="440" y="500" width="120" height="4" fill="#000" />
            <text x="500" y="540" textAnchor="middle" className="podium-text">NATIONAL_JUDICIAL_BOARD_PODIUM</text>
          </g>
        </svg>
      </div>

      <div className="hemicycle-footer">
        <div className="legend-strip">
          <div className="l-item"><span className="l-dot black"></span> COUNCIL_OF_REGIONS (48)</div>
          <div className="l-item"><span className="l-dot gray"></span> EFFICIENCY_CHAMBER (100)</div>
        </div>
      </div>
    </div>
  );
};

export default Hemicycle;