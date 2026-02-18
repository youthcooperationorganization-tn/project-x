import React from 'react';
import './JudicialPower.css';

/**
 * Project X: Judicial Power Component
 * Aesthetic: Technical Blueprint / Balanced Symmetry
 */

const JudicialPower: React.FC = () => {
  return (
    <section className="jud-section">
      <div className="jud-container">
        <div className="jud-header">
          <div className="jud-meta-line">
            <span className="jud-protocol">PROTOCOL_04</span>
            <span className="jud-status">SYSTEM_ACTIVE</span>
          </div>
          <h2 className="jud-title">THE INDEPENDENT <br/><span className="outline">FIREWALL</span></h2>
        </div>

        <div className="jud-main-grid">
          {/* Federal Pillar */}
          <div className="jud-card fed-card">
            <div className="card-header">
              <div className="card-number">01</div>
              <div className="card-type">FEDERAL_SUPREME_CORE</div>
            </div>
            <div className="card-body">
              <h3>High Federal Court</h3>
              <p>
                The supreme authority for the Union. It holds the exclusive mandate to 
                arbitrate disputes between regions and ensure that local legislation 
                never compromises the Confederal Protocol.
              </p>
              <div className="jud-specs">
                <div className="spec-item"><span>+</span> CONSTITUTIONAL ARBITRATION</div>
                <div className="spec-item"><span>+</span> INTER-REGIONAL DISPUTES</div>
                <div className="spec-item"><span>+</span> UNION SECURITY APPEALS</div>
              </div>
            </div>
          </div>

          {/* Regional Pillar */}
          <div className="jud-card reg-card">
            <div className="card-header">
              <div className="card-number">24</div>
              <div className="card-type">REGIONAL_CHARTER_NODES</div>
            </div>
            <div className="card-body">
              <h3>Regional Judiciary</h3>
              <p>
                Twenty-four fully independent judicial systems. Each node possesses 
                absolute jurisdiction over its civil, criminal, and administrative laws, 
                as defined by the specific Regional Charter.
              </p>
              <div className="jud-specs">
                <div className="spec-item"><span>+</span> LOCAL CIVIL & CRIMINAL CODES</div>
                <div className="spec-item"><span>+</span> CHARTER RIGHTS PROTECTION</div>
                <div className="spec-item"><span>+</span> ADMINISTRATIVE JUSTICE</div>
              </div>
            </div>
          </div>
        </div>

        <div className="jud-footer">
          <div className="guarantee-box">
            <span className="guarantee-label">INDEPENDENCE_GUARANTEE</span>
            <p>
              Judicial members are appointed for life, funded through a <strong>protected percentage of GDP</strong>. 
              This financial firewall prevents coercion from the Executive or Legislative branches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JudicialPower;