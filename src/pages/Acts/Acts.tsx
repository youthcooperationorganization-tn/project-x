import React from 'react';
import './Acts.css';
import Footer from '../../components/Footer/Footer';
import { useLanguage } from '../../store/LanguageProvider';

const Acts: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="acts-scroll-wrapper bg-industrial-white">
      <div className="acts-container">
        <header className="section-header-compact">
          <h2 className="header-title">{t.acts.title}</h2>
          <div className="header-divider"></div>
          <span className="header-meta">{t.acts.meta}</span>
        </header>

        {t.acts.categories.map((group, idx) => (
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
                    <span>{t.common.draft}</span>
                    <span className="view-link">{t.common.open}</span>
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
