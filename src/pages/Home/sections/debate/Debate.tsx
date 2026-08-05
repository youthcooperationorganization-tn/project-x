import React, { useState } from 'react';
import { useLanguage } from '../../../../store/LanguageProvider';
import './Debate.css';

const TextAlign = {
  center: 'center' as const,
};

const Debate: React.FC = () => {
  const [theme, setTheme] = useState<'none' | 'discord' | 'reddit'>('none');
  const { t } = useLanguage();

  return (
    <section className={`debate-section theme-${theme}`}>
      <div className="debate-container">
        <div className="debate-box">
          <h2 className="debate-title" style={{ textAlign: TextAlign.center }}>
            {t.home.debate.title}
          </h2>
          <p className="debate-desc" style={{ textAlign: TextAlign.center }}>
            {t.home.debate.description}
          </p>

          <div className="community-btn-grid">
            <a
              href="https://discord.gg/PdEqHTMkNn"
              className="community-btn-industrial"
              onMouseEnter={() => setTheme('discord')}
              onMouseLeave={() => setTheme('none')}
            >
              <span className="btn-meta">UPLINK_01</span>
              <span className="btn-text">{t.home.debate.discord}</span>
            </a>

            <a
              href="https://www.reddit.com/r/ReformTunisia/"
              className="community-btn-industrial"
              onMouseEnter={() => setTheme('reddit')}
              onMouseLeave={() => setTheme('none')}
            >
              <span className="btn-meta">UPLINK_02</span>
              <span className="btn-text">{t.home.debate.reddit}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Debate;
