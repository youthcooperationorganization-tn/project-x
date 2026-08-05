import React from 'react';
import { useTranslation } from '../../../../hooks/useTranslation';
import AnimatedCounter from '../../../../components/AnimatedCounter';
import './Vision.css';

const Vision: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="vision-section hero-bg-dots">
      <div className="vision-container">
        <span className="industrial-tag">{t.home.vision.tag}</span>

        <h1 className="hero-title">
          {t.home.vision.titleLine1} <br />
          <span className="hero-italic">{t.home.vision.titleLine2}</span>
        </h1>

        <div className="hero-footer-grid">
          <div className="hero-text-block">
            <p className="hero-lead">{t.home.vision.lead}</p>
            <p className="hero-sub">{t.home.vision.sub}</p>
          </div>

          <div className="hero-actions">
            <button className="btn-solid">{t.home.vision.joinInitiative}</button>
            <button className="btn-glass">{t.home.vision.theActs}</button>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-block">
            <AnimatedCounter target={150000} suffix="+" />
            <p className="stat-label">{t.home.vision.stats.peopleJoinedLabel}</p>
          </div>

          <div className="stat-block">
            <AnimatedCounter target={50} suffix="+" />
            <p className="stat-label">{t.home.vision.stats.policiesChangedLabel}</p>
          </div>

          <div className="stat-block">
            <AnimatedCounter target={1000000} suffix="+" />
            <p className="stat-label">{t.home.vision.stats.onlineModificationsLabel}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;