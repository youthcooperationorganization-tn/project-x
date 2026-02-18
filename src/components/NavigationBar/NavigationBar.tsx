import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import './NavigationBar.css';

const NavigationBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`nav-frame ${scrolled ? 'nav-scrolled' : ''}`}>
      {/* Top Disclaimer Bar */}
      <div className="nav-disclaimer">
        <div className="disclaimer-content">
          <span className="disclaimer-tag">CIVIL INITIATIVE</span>
          <p className="disclaimer-text">
            This is an initiative by citizens of Tunisia. It is a private proposal and does not 
            reflect the Government of Tunisia or any of its official components.
          </p>
        </div>
      </div>

      <div className="nav-container">
        {/* Elegant Linear Logo Lockup */}
        <Link to="/" className="nav-logo-group">
          <span className="logo-main">PROJECT X</span>
          <span className="logo-divider">/</span>
          <span className="logo-side">TUNISIA</span>
          <span className="nav-logo-pulse"></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links-wrapper">
          <Link to="/constitution" className={`nav-link ${isActive('/constitution') ? 'active' : ''}`}>Federal Constitution</Link>
          <Link to="/acts" className={`nav-link ${isActive('/acts') ? 'active' : ''}`}>The Acts</Link>
          <Link to="/regions" className={`nav-link ${isActive('/regions') ? 'active' : ''}`}>Regions</Link>
          <Link to="/boards" className={`nav-link ${isActive('/boards') ? 'active' : ''}`}>Boards</Link>
          <button className="nav-cta-btn">Join the Initiative</button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'CLOSE' : 'SYSTEM MENU'}
        </button>
      </div>

      {/* Mobile System Overlay */}
      {isOpen && (
        <div className="mobile-overlay">
          <div className="mobile-stack">
            <Link to="/constitution" className={`mobile-link ${isActive('/constitution') ? 'active' : ''}`}>Federal Constitution</Link>
            <Link to="/acts" className={`mobile-link ${isActive('/acts') ? 'active' : ''}`}>The Acts</Link>
            <Link to="/regions" className={`mobile-link ${isActive('/regions') ? 'active' : ''}`}>Regions</Link>
            <div className="mobile-cta-section">
              <button className="nav-cta-btn w-full">Join the Initiative</button>
            </div>
            {/* Disclaimer also repeated in mobile menu for clarity */}
            <div className="mobile-disclaimer">
              Non-Governmental / Citizen Proposal
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;