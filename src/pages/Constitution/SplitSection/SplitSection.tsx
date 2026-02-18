import React from 'react';
import './SplitSection.css';

/**
 * Project X: The 1+24 Constitutional Architecture
 * Focus: Single Federal Core + 24 Regional Charter Engines
 */

const SplitSection: React.FC = () => {
  return (
    <section className="split-section">
      <div className="split-container">
        
        <div className="split-header-block">
          <div className="protocol-tab">PROTOCOL_01 // SYSTEM_ARCHITECTURE</div>
          <h2 className="split-main-title">THE 1+24 <br/><span className="outline">STRUCTURE</span></h2>
          <p className="split-description">
            A singular Federal Constitution governing the Union, supported by 
            twenty-four independent Regional Charters defining local law.
          </p>
        </div>

        <div className="split-grid-structure">
          {/* Federal Side: The Singular Core */}
          <div className="split-region-box federal-core">
            <div className="region-head">
              <span className="region-index">01</span>
              <span className="region-type">MASTER_PROTOCOL</span>
            </div>
            <div className="region-body">
              <h3>Federal Constitution</h3>
              <p>The supreme legal framework. It establishes the Union’s existence, international status, and the non-negotiable rights of all citizens.</p>
              
              <div className="feature-grid">
                <div className="feature-cell"><span>/</span> SUPREME_UNION_LAW</div>
                <div className="feature-cell"><span>/</span> BORDER_INTEGRITY</div>
                <div className="feature-cell"><span>/</span> INTER-REGION_PEACE</div>
                <div className="feature-cell"><span>/</span> GLOBAL_RECOGNITION</div>
              </div>
            </div>
          </div>

          {/* Regional Side: The 24 Satellites */}
          <div className="split-region-box regional-satellites">
            <div className="region-head">
              <span className="region-index">24</span>
              <span className="region-type">OPERATIONAL_ENGINES</span>
            </div>
            <div className="region-body">
              <h3>Regional Charters</h3>
              <p>Twenty-four unique "Mini-Constitutions." Each Region authors its own Charter to define its specific civil, economic, and administrative life.</p>
              
              <div className="feature-grid">
                <div className="feature-cell"><span>/</span> LOCAL_CIVIL_CODES</div>
                <div className="feature-cell"><span>/</span> REGIONAL_TAXATION</div>
                <div className="feature-cell"><span>/</span> RESOURCE_AUTONOMY</div>
                <div className="feature-cell"><span>/</span> CUSTOM_GOVERNANCE</div>
              </div>
            </div>
          </div>
        </div>

        {/* The Action Bar */}
        <div className="split-action-area">
          <a href="/drafts/federal-constitution" className="constitution-btn">
            <span className="btn-label">OFFICIAL_DRAFT</span>
            <span className="btn-text">READ THE FEDERAL CONSTITUTION</span>
            <span className="btn-arrow">→</span>
          </a>
        </div>

        <div className="split-footer-line">
          <div className="status-indicator">
            <span className="pulse"></span> 24_REGIONS_CONNECTED
          </div>
          <div className="legal-meta">REF: ART_01_SEC_04 // DECENTRALIZED_STABILITY</div>
        </div>

      </div>
    </section>
  );
};

export default SplitSection;