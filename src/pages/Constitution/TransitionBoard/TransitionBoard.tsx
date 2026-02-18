import React from 'react';
import './TransitionBoard.css';

/**
 * Project X: Transition Board Component
 * Logic: Bridge Protocol - No Control, Pure Facilitation.
 */

const TransitionBoard: React.FC = () => {
  const criteria = [
    { 
      code: 'CRIT_01', 
      label: 'FEDERAL_COURT_STABILITY', 
      desc: 'The High Federal Court must be fully staffed, funded, and possess the technical infrastructure to arbitrate constitutional disputes immediately upon handover.' 
    },
    { 
      code: 'CRIT_02', 
      label: 'PARLIAMENTARY_RATIFICATION', 
      desc: 'The Federal Parliament must have successfully concluded its first seating with a quorum and established its internal rules of procedure.' 
    },
    { 
      code: 'CRIT_03', 
      label: 'REGIONAL_NODE_ACTIVATION', 
      desc: 'At least 24 Regional Charters must be locally ratified and their respective Regional Commissions ready to assume executive duties.' 
    }
  ];

  return (
    <section className="trans-section">
      <div className="trans-container">
        
        <div className="trans-header-block">
          <div className="protocol-badge">FACILITATION_PROTOCOL_v1.0</div>
          <h2 className="trans-title">THE TRANSITION BOARD</h2>
          <p className="trans-mission-statement">
            The Board is a **non-governing bridge**. Its sole legal purpose is the creation of the new system and the formal handover of authority. **No existing institution is dissolved until the new institution is verified as fully operational.**
          </p>
        </div>

        <div className="trans-content-grid">
          {/* Left: The Process Logic */}
          <div className="trans-logic-flow">
            <h3 className="sub-heading">THE HOT-SWAP ARCHITECTURE</h3>
            <div className="flow-steps">
              <div className="flow-item">
                <div className="flow-marker">01</div>
                <div className="flow-text">
                  <h4>INSTITUTIONAL CONTINUITY</h4>
                  <p>Old ministries and parliaments remain active and responsible for daily stability during the drafting phase.</p>
                </div>
              </div>
              <div className="flow-item">
                <div className="flow-marker">02</div>
                <div className="flow-text">
                  <h4>FUNCTIONAL OVERLAP</h4>
                  <p>The new Federal and Regional bodies are built in parallel. For a period of 90 days, both systems coexist to ensure zero service interruption.</p>
                </div>
              </div>
              <div className="flow-item">
                <div className="flow-marker">03</div>
                <div className="flow-text">
                  <h4>TOTAL HANDOVER</h4>
                  <p>Upon meeting all criteria, the Board executes a single legal act: the dissolution of the old and the immediate activation of the new.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Criteria for Success */}
          <div className="trans-criteria-box">
            <h3 className="sub-heading">MANDATORY HANDOVER CRITERIA</h3>
            <div className="criteria-items">
              {criteria.map((item, i) => (
                <div key={i} className="large-crit-card">
                  <div className="crit-top">
                    <span className="crit-code">{item.code}</span>
                    <span className="crit-tag">MANDATORY</span>
                  </div>
                  <h4>{item.label}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="trans-footer-warning">
          <p>WARNING: FAILURE TO MEET ANY CRITERION DELAYS HANDOVER. THE BOARD CANNOT ASSUME EXECUTIVE POWER UNDER ANY CIRCUMSTANCES.</p>
        </div>

      </div>
    </section>
  );
};

export default TransitionBoard;