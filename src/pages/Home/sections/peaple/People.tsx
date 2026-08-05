import React from 'react';
import { useLanguage } from '../../../../store/LanguageProvider';
import './People.css';

const People: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="people-section bg-flag-red">
      <div className="people-container">
        <div className="aesthetic-grid">
          <div className="text-content">
            <div className="protocol-chip">{t.home.people.chip}</div>
            <h2 className="display-title text-white">
              {t.home.people.titleLine1} <br />
              {t.home.people.titleLine2}
            </h2>
            <div className="manifesto-box border-white/30">
              <p className="manifesto-bold text-white">{t.home.people.manifestoBold}</p>
              <p className="manifesto-light text-white/90">{t.home.people.manifestoLight}</p>
            </div>
          </div>

          <div className="visual-content">
            <div className="node-display border-white/20">
              <span className="node-main-num text-white">24</span>
              <span className="node-label text-white/70 uppercase">{t.home.people.sovereignNodes}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-watermark">{t.home.people.watermark}</div>
    </section>
  );
};

export default People;
