import React from 'react';
import './Pillars.css';

/**
 * Project X: Pillars Component
 * Focus: Legislative Reports & Horizontal A4 Aesthetic
 */

const Pillars: React.FC = () => {
  const reports = [
    { id: '01', title: 'E-Gov 2.0 Act' },
    { id: '02', title: 'Merit-Based-Direct-Democracy ACT' },
    { id: '03', title: 'Free Entreprise Act' },
    { id: '04', title: 'Judicial Independence & Rapid Execution Act' }
  ];

  return (
    <section className="pillars-section bg-industrial-white">
      <div className="pillars-container">
        <div className="section-header-compact">
          <h2 className="header-title">The Pillars</h2>
          <div className="header-divider"></div>
          <span className="header-meta">BATCH_01_REPORTS</span>
        </div>

        <div className="compact-horizontal-wrap">
          {reports.map((act) => (
            <div key={act.id} className="mini-report">
              <div className="mini-report-header">
                <span className="mini-id">ACT_{act.id}</span>
                <div className="mini-seal"></div>
              </div>
              
              <div className="mini-content">
                <h3 className="mini-title">{act.title}</h3>
                <div className="mini-lines">
                  <div className="line-long"></div>
                  <div className="line-short"></div>
                  <div className="line-long"></div>
                </div>
              </div>

              <div className="mini-footer">
                <span>CONFIDENTIAL</span>
                <span className="view-link">OPEN →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;