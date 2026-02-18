import React from 'react';
import './Acts.css';
import Footer from '../../components/Footer/Footer';

/**
 * Project X: Acts Ledger
 * Status: DRAFT_1
 * Updates: Split Crowdfunding/VC, Renamed E-Gov 2.0, Added Free Enterprise Act
 */

const Acts: React.FC = () => {
  const categories = [
    {
      label: "CORE_GOVERNANCE_&_LIBERTY",
      acts: [
        { id: '01', title: "People's Initiative Act", status: 'DRAFT_1' },
        { id: '02', title: "Merit-Based Direct Democracy Act", status: 'DRAFT_1' },
        { id: '03', title: "Free Enterprise Act", status: 'DRAFT_1' },
        { id: '04', title: "Government Efficiency Board Act", status: 'DRAFT_1' },
        { id: '05', title: "High-Official Salary & Anti-Corruption Act", status: 'DRAFT_1' }
      ]
    },
    {
      label: "DIGITAL_SYSTEMS_&_FINANCE",
      acts: [
        { id: '06', title: "E-Dinar 2.0 & Sovereign Payment Act", status: 'DRAFT_1' },
        { id: '07', title: "E-Gov 2.0 Act", status: 'DRAFT_1' },
        { id: '08', title: "Startup Act 3.0", status: 'DRAFT_1' },
        { id: '09', title: "Crowdfunding 2.0 Act", status: 'DRAFT_1' },
        { id: '10', title: "Sovereign VC Act", status: 'DRAFT_1' },
        { id: '11', title: "Neo-Banking & Financial Innovation", status: 'DRAFT_1' }
      ]
    },
    {
      label: "SOVEREIGNTY_&_JUSTICE",
      acts: [
        { id: '12', title: "Tunisia First Policy", status: 'DRAFT_1' },
        { id: '13', title: "Judicial Independence & Rapid Execution Act", status: 'DRAFT_1' },
        { id: '14', title: "National Security & Transparency Act", status: 'DRAFT_1' },
        { id: '15', title: "Defence Innovation & Sovereignty Act", status: 'DRAFT_1' },
        { id: '16', title: "E-VISA System Program", status: 'DRAFT_1' }
      ]
    },
    {
      label: "RESOURCES_&_INFRA",
      acts: [
        { id: '17', title: "Energy & Water Liberalization Act", status: 'DRAFT_1' },
        { id: '18', title: "Green Tunisia & Urban Beauty Act", status: 'DRAFT_1' },
        { id: '19', title: "National Health Act", status: 'DRAFT_1' },
        { id: '20', title: "Import Oversight & Sovereignty Act", status: 'DRAFT_1' },
        { id: '21', title: "Open Research Act", status: 'DRAFT_1' }
      ]
    }
  ];

  return (
    <div className="acts-scroll-wrapper bg-industrial-white">
      <div className="acts-container">
        {/* HEADER */}
        <header className="section-header-compact">
          <h2 className="header-title">The Acts</h2>
          <div className="header-divider"></div>
          <span className="header-meta">LEGISLATIVE_INDEX_2026</span>
        </header>

        {/* CATEGORIES */}
        {categories.map((group, idx) => (
          <div key={idx} className="category-block">
            <div className="category-tag-row">
              <span className="group-label">{group.label}</span>
              <div className="group-line"></div>
            </div>

            <div className="compact-horizontal-wrap">
              {group.acts.map((act) => (
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
                    <span>{act.status}</span>
                    <span className="view-link">OPEN →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
          <Footer />
    </div>
  );
};

export default Acts;