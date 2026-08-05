import React from 'react';
import { useLanguage } from '../../../../store/LanguageProvider';
import './Pillars.css';

const Pillars: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="pillars-section bg-industrial-white">
      <div className="pillars-container">
        <div className="section-header-compact">
          <h2 className="header-title">{t.home.pillars.title}</h2>
          <div className="header-divider"></div>
          <span className="header-meta">{t.home.pillars.meta}</span>
        </div>

        <div className="compact-horizontal-wrap">
          {t.home.pillars.reports.map((act) => (
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
                <span>{t.common.confidential}</span>
                <span className="view-link">{t.common.open}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
