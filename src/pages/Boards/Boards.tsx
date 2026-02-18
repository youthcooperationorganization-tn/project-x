import React from 'react';
import './Boards.css';

/**
 * Project X: National Judicial Board
 * Aesthetic: A4 Horizontal with Dutch Ribbon Strips
 * Update: Replaced Security Board with Anti-Corruption Board (Black Ribbon)
 */

const Boards: React.FC = () => {
  const superInstitutions = [
    { id: 'NJB_01', name: 'Digital Governance Authority', focus: 'AI-Gov & E-Dinar Oversight', color: '#00D1FF' }, 
    { id: 'NJB_02', name: 'Economic Development Board', focus: 'VC, Startups & Free Enterprise', color: '#FFD700' }, 
    { id: 'NJB_03', name: 'Government Efficiency Board', focus: 'Lean Gov & AI Redundancy Audits', color: '#808080' }, 
    { id: 'NJB_04', name: 'Judicial Execution Agency', focus: 'Rapid Enforcement & Fast Courts', color: '#7000FF' }, 
    { id: 'NJB_05', name: 'Anti-Corruption Board', focus: 'Zero-Tolerance Audits & Asset Recovery', color: '#000000' }, // BLACK for Anti-Corruption
    { id: 'NJB_06', name: 'Green Transition Board', focus: 'Urban Beauty & Energy Policy', color: '#00A859' }, 
    { id: 'NJB_07', name: 'National Health Board', focus: 'Healthcare Infrastructure & Quality', color: '#E70013' }, // RED for Health
    { id: 'NJB_08', name: 'Federal Transition Board', focus: 'Coordination of 24 Governorates', color: '#FF6B00' }  
  ];

  return (
    <div className="boards-scroll-wrapper bg-industrial-white">
      <div className="boards-container">
        {/* HEADER */}
        <header className="section-header-compact">
          <h2 className="header-title">National Judicial Board</h2>
          <div className="header-divider"></div>
          <span className="header-meta">EXECUTIVE_INSTITUTIONS_2026</span>
        </header>

        {/* BOARDS GRID */}
        <div className="boards-grid">
          {superInstitutions.map((board) => (
            <div key={board.id} className="mini-report board-card">
              <div className="ribbon-strip" style={{ backgroundColor: board.color }}></div>
              
              <div className="mini-report-header">
                <span className="mini-id">{board.id}</span>
                <div className="mini-seal board-seal"></div>
              </div>
              
              <div className="mini-content">
                <h3 className="mini-title"> {board.name} </h3>
                <div className="board-focus-tag"> PRIMARY_FOCUS: {board.focus} </div>
                <div className="mini-lines">
                  <div className="line-long"></div>
                  <div className="line-short"></div>
                  <div className="line-long"></div>
                </div>
              </div>

              <div className="mini-footer">
                <span>DRAFT_1</span>
                <span className="view-link">DIRECTIVES →</span>
              </div>
            </div>
          ))}
        </div>

        {/* REGIONAL OVERSIGHT SECTION */}
        <header className="section-header-compact" style={{ marginTop: '100px' }}>
          <h2 className="header-title">Regional Councils</h2>
          <div className="header-divider"></div>
          <span className="header-meta">LOCAL_ACCOUNTABILITY_OFFICES</span>
        </header>

        <div className="boards-grid">
          <div className="mini-report board-card">
            <div className="ribbon-strip" style={{ backgroundColor: '#FFFFFF', border: '1px solid #ddd' }}></div>
            <div className="mini-report-header">
              <span className="mini-id">COUNCIL_MASTER</span>
              <div className="mini-seal board-seal"></div>
            </div>
            <div className="mini-content">
              <h3 className="mini-title"> Citizen Oversight Council </h3>
              <div className="board-focus-tag"> PRIMARY_FOCUS: Regional Budget Audits & Direct Democracy </div>
              <p className="regional-note">Standardized framework deployed across 24 Governorates.</p>
              <div className="mini-lines">
                <div className="line-long"></div>
                <div className="line-short"></div>
              </div>
            </div>
            <div className="mini-footer">
              <span>DRAFT_1</span>
              <span className="view-link">LOCAL_MAP →</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="compact-footer">
        <div className="footer-line"></div>
        <div className="footer-meta-row">
          <div className="f-brand">PROJECT_X // NATIONAL_JUDICIAL_BOARD</div>
          <div className="f-copy">© 2026 FEDERAL GOV. SYSTEM_SYNC: OK</div>
        </div>
      </footer>
    </div>
  );
};

export default Boards;