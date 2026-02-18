import React from 'react';
import './ExecutivePower.css';

/**
 * Project X: Executive Power Component
 * Focus: 7-Member Federal Commission & 5-Member Regional Commission
 */

const ExecutivePower: React.FC = () => {
  return (
    <section className="executive-section">
      <div className="exec-container">
        <div className="exec-header">
          <span className="exec-tag">BRANCH_03: EXECUTIVE</span>
          <h2 className="exec-title">PLURAL <br/>COMMISSIONS.</h2>
        </div>

        <div className="exec-grid">
          {/* Federal Commission: 7 Members */}
          <div className="exec-card federal-exec">
            <div className="card-top-meta">
              <span className="unit-count">07 MEMBERS</span>
              <span className="rotation-badge">ANNUAL_ROTATION</span>
            </div>
            
            <h3>Federal Commission</h3>
            <p className="exec-desc">
              Appointed by the Federal Parliament. Comprised of 7 members representing 
              the major parties. A 4-year mandate where **one member rotates out every year** to ensure institutional memory and fresh perspective.
            </p>

            <div className="rotation-visual">
              <div className="member-slots">
                {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="slot active"></div>)}
                <div className="slot rotating"></div>
              </div>
              <span className="rotation-label">1 MEMBER REPLACED ANNUALLY</span>
            </div>
          </div>

          {/* Regional Commission: 5 Members */}
          <div className="exec-card regional-exec">
            <div className="card-top-meta">
              <span className="unit-count">05 MEMBERS</span>
              <span className="node-badge">LOCAL_EXECUTION</span>
            </div>

            <h3>Regional Commission</h3>
            <p className="exec-desc">
              The executive arm of the Sovereign Node. These 5 members are responsible 
              for the immediate implementation of Regional Charter laws and 
              local public services.
            </p>

            <div className="exec-features">
              <div className="feature">Direct Accountability</div>
              <div className="feature">Charter Implementation</div>
              <div className="feature">Regional Services</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Technical Overlay */}
      <div className="exec-overlay">ROTATION_MATRIX_v1.0</div>
    </section>
  );
};

export default ExecutivePower;