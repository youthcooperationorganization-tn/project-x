import React from 'react';
import './LegislativePower.css';

/**
 * Project X: Legislative Power Component
 * Focus: International Diplomacy vs. Local Sovereignty
 */

const LegislativePower: React.FC = () => {
  return (
    <section className="legislative-section">
      <div className="leg-container">
        <div className="leg-header">
          <span className="leg-tag">BRANCH_02 // LEGISLATIVE_ENGINE</span>
          <h2 className="leg-title">THE DUAL <br/>PARLIAMENT.</h2>
        </div>

        <div className="leg-grid">
          {/* Federal Chamber */}
          <div className="leg-card">
            <div className="leg-card-head">
              <span className="leg-index">01</span>
              <span className="leg-label">FEDERAL_UNIT</span>
            </div>
            <div className="leg-card-body">
              <h3>Union Assembly</h3>
              <p>
                The central legislative pillar managing the Confederation's 
                external presence and internal market standards.
              </p>
              <div className="leg-data-grid">
                <div className="leg-data-item">International Treaties</div>
                <div className="leg-data-item">Confederal Defense</div>
                <div className="leg-data-item">Monetary Policy</div>
                <div className="leg-data-item">Internal Market Standards</div>
                <div className="leg-data-item">Federal Taxation</div>
                <div className="leg-data-item">Macro-Infrastructure</div>
              </div>
            </div>
          </div>

          {/* Regional Chambers */}
          <div className="leg-card">
            <div className="leg-card-head">
              <span className="leg-index">24</span>
              <span className="leg-label">REGIONAL_NODES</span>
            </div>
            <div className="leg-card-body">
              <h3>Sovereign Assemblies</h3>
              <p>
                Independent parliaments within each node. They hold absolute 
                authority over regional life and resource management.
              </p>
              <div className="leg-data-grid">
                <div className="leg-data-item">Localized Civil Codes</div>
                <div className="leg-data-item">Resource Management</div>
                <div className="leg-data-item">Regional Development</div>
                <div className="leg-data-item">Education & Healthcare</div>
                <div className="leg-data-item">Public Safety & Police</div>
                <div className="leg-data-item">Land & Property Law</div>
              </div>
            </div>
          </div>
        </div>

        <div className="leg-handover-box">
          <div className="handover-meta">CONTINUITY_PROTOCOL</div>
          <p>
            Legislative authority is transferred by the <strong>Transition Board</strong> only upon the verification of a functional quorum in the Federal Assembly and the ratification of all 24 Regional Charters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegislativePower;