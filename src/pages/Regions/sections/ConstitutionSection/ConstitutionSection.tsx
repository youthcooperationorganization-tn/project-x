import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ConstitutionSection.css';

interface ConstitutionProps {
  activeRegion: { fr: string; ar: string } | null;
}

const ConstitutionSection: React.FC<ConstitutionProps> = ({ activeRegion }) => {
  const isNational = !activeRegion;
  const regionName = activeRegion?.fr || "Tunisia";
  const regionNameAr = activeRegion?.ar || "الجمهورية التونسية";

  return (
    <div className="constitution-archive-wrapper">
      <div className="archive-layout">
        
        <div className="archive-info">
          <span className="archive-tag">OFFICIAL_LEGISLATIVE_ARCHIVE</span>
          <h2 className="archive-title">
            {isNational ? "National Constitution" : "Regional Constitution"}
          </h2>
          <h3 className="archive-subtitle">
            {isNational ? "Sovereign State of Tunisia" : `Jurisdiction: ${regionName}`}
          </h3>
          <div className="archive-divider"></div>
          <p className="archive-desc">
            Authorized digital representation of the physical ledger. 
            All amendments are timestamped and synchronized via the national node.
          </p>
        </div>

        <div className="archive-visual">
          <AnimatePresence mode="wait">
            <motion.div 
              key={regionName}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mini-paper-doc"
            >
              {/* OFFICIAL FLAG HEADER */}
              <div className="paper-flag-header">
                <div className="tunisia-flag-mini">
                  <div className="white-circle">
                    <div className="crescent"></div>
                    <div className="star"></div>
                  </div>
                </div>
              </div>

              <div className="paper-body-centered">
                <span className="paper-id-top">PROTOCOL_REF: {isNational ? "TN-001" : `TN-REG-${regionName.substring(0,3)}`}</span>
                
                <div className="centered-content">
                  <h4 className="doc-main-title">
                    {isNational ? "CONSTITUTION" : "REGIONAL CHARTER"}
                  </h4>
                  <div className="title-underline"></div>
                  <h5 className="doc-sub-title">OF {regionName.toUpperCase()}</h5>
                  <h6 className="doc-ar-title-center">{regionNameAr}</h6>
                  
                  <div className="formal-lines">
                    <div className="line-long"></div>
                    <div className="line-mid"></div>
                    <div className="line-long"></div>
                    <div className="line-short"></div>
                  </div>
                </div>
              </div>

              <div className="paper-footer-official">
                <div className="seal-watermark"></div>
                <div className="footer-meta">
                  <div className="tiny-barcode"></div>
                  <span className="date-stamp">FEBRUARY 2026</span>
                </div>
                <div className="official-stamp-red">
                  {isNational ? "FEDERAL" : "VALIDATED"}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default ConstitutionSection;