import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { useLanguage } from '../../store/LanguageProvider';
import type { Language } from '../../i18n/types';
import './NavigationBar.css';

const NavigationBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const isActive = (path: string) => location.pathname === path;

  const LanguageSelector = ({ className = '' }: { className?: string }) => (
    <div className={`lang-select-container ${className}`}>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="lang-select"
        aria-label="Select Language"
      >
        <option value="EN">EN</option>
        <option value="FR">FR</option>
        <option value="AR">AR</option>
      </select>
    </div>
  );

  return (
    <nav className={`nav-frame ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-disclaimer">
        <div className="disclaimer-content">
          <span className="disclaimer-tag">{t.nav.disclaimerTag}</span>
          <p className="disclaimer-text">{t.nav.disclaimerText}</p>
        </div>
      </div>

      <div className="nav-container">
        <Link to="/" className="nav-logo-group">
          <span className="logo-main">PROJECT X</span>
          <span className="logo-divider">/</span>
          <span className="logo-side">TUNISIA</span>
          <span className="nav-logo-pulse"></span>
        </Link>

        <div className="nav-links-wrapper">
          <Link to="/constitution" className={`nav-link ${isActive('/constitution') ? 'active' : ''}`}>
            {t.nav.constitution}
          </Link>
          <Link to="/acts" className={`nav-link ${isActive('/acts') ? 'active' : ''}`}>
            {t.nav.acts}
          </Link>
          <Link to="/regions" className={`nav-link ${isActive('/regions') ? 'active' : ''}`}>
            {t.nav.regions}
          </Link>
          <Link to="/boards" className={`nav-link ${isActive('/boards') ? 'active' : ''}`}>
            {t.nav.boards}
          </Link>

          <LanguageSelector />

          <button className="nav-cta-btn">{t.nav.joinInitiative}</button>
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? t.nav.close : t.nav.systemMenu}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-overlay">
          <div className="mobile-stack">
            <Link to="/constitution" className={`mobile-link ${isActive('/constitution') ? 'active' : ''}`}>
              {t.nav.constitution}
            </Link>
            <Link to="/acts" className={`mobile-link ${isActive('/acts') ? 'active' : ''}`}>
              {t.nav.acts}
            </Link>
            <Link to="/regions" className={`mobile-link ${isActive('/regions') ? 'active' : ''}`}>
              {t.nav.regions}
            </Link>
            <Link to="/boards" className={`mobile-link ${isActive('/boards') ? 'active' : ''}`}>
              {t.nav.boards}
            </Link>

            <div className="mobile-lang-section">
              <LanguageSelector className="w-full" />
            </div>

            <div className="mobile-cta-section">
              <button className="nav-cta-btn w-full">{t.nav.joinInitiative}</button>
            </div>

            <div className="mobile-disclaimer">{t.nav.mobileDisclaimer}</div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
