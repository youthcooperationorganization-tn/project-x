import React from 'react';
import { motion } from 'framer-motion';
import './MinistriesSection.css';

interface MinistriesProps {
  activeRegion: { fr: string; ar: string } | null;
}

const MinistriesSection: React.FC<MinistriesProps> = ({ activeRegion }) => {
  const isNational = !activeRegion;
  const regionNameFr = activeRegion?.fr || "";
  const regionNameAr = activeRegion?.ar || "";
  
  const departments = [
    { id: "01", name: "Economy & Finance", label: "VALORIZATION", color: "#FFD700", ar: "الاقتصاد والمالية", desc: "Optimizes regional business environments, manages local E-Dinar liquidity, and directs sovereign venture capital into local industry." },
    { id: "02", name: "Education & Scientific Research", label: "INTELLECT", color: "#00FFFF", ar: "التَّعْلِيم والبحث العلمي", desc: "Coordinates local R&D hubs and ensures that regional school curricula are synchronized with the national AI-readiness pipeline." },
    { id: "03", name: "Justice", label: "INTEGRITY", color: "#800080", ar: "العدل", desc: "Upholds the constitutional legal backbone at the local level. Operates the regional 'Fast Court' for commercial and civil disputes." },
    { id: "04", name: "Infrastructure & Environment", label: "VITALITY", color: "#008000", ar: "البنية التحتية والبيئة", desc: "Manages regional solar grids, water desalination projects, and high-speed rail connectivity within the governorate." },
    { id: "05", name: "Health & Social Well-being", label: "BIOLOGY", color: "#E70013", ar: "الصحة والرفاه الاجتماعي", desc: "Oversees regional bio-tech clinics and AI-diagnostic centers, ensuring a lean and efficient social safety net for all citizens." },
    { id: "06", name: "Interior & Governance", label: "SECURITY", color: "#000000", ar: "الداخلية والحوكمة", desc: "Synchronizes local Citizen Oversight Councils and manages decentralized security protocols for the region." },
    { id: "07", name: "Foreign Affairs & Trade", label: "SOVEREIGNTY", color: "#444444", ar: "الشؤون الخارجية والتجارة", desc: "Promotes regional exports and manages partnerships with global scientific talent looking to settle within the jurisdiction." }
  ];

  return (
    <div className="ministries-unbound-container">
      <div className="ministry-content-wrapper">
        
        <header className="pillar-header-v2">
          <div className="pillar-meta-top">
            <span className="tech-code">GOVERNANCE_STRUCTURE // 2026</span>
            <span className="ar-tag-large">
              {isNational ? "الهيكل التنفيذي الاتحادي" : `حكومة ${regionNameAr} الجهوية`}
            </span>
          </div>
          <h1 className="pillar-display-title">
            {isNational ? "Federal Departments" : `${regionNameFr} Regional Government`}
          </h1>
          <div className="pillar-accent-line"></div>
        </header>

        <div className="pillar-scroll-stack">
          {departments.map((dept) => (
            <motion.div 
              key={dept.id} 
              className="pillar-entry"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="entry-identity">
                <div className="entry-id-badge" style={{ borderColor: dept.color }}>
                  {dept.id}
                </div>
                <div className="entry-titles">
                  <div className="entry-en-row">
                    <h2 className="entry-name-en">
                        {isNational ? `Federal Department of ${dept.name}` : `${regionNameFr} Regional Government Department of ${dept.name}`}
                    </h2>
                    <span className="entry-keyword-tag">{dept.label}</span>
                  </div>
                  <h3 className="entry-name-ar">
                    {isNational ? `الوزارة الاتحادية لـ${dept.ar}` : `الإدارة الجهوية بـ${regionNameAr} لـ${dept.ar}`}
                  </h3>
                </div>
              </div>
              
              <div className="entry-body">
                <p className="entry-description">{dept.desc}</p>
                <div className="entry-status-bar">
                  <span className="status-indicator">CONCEPT: STRATEGIC_PILLAR</span>
                  <span className="system-path">PATH: {isNational ? "FEDERAL_CORE" : `${regionNameFr.toUpperCase()}_NODE`} / {dept.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <footer className="ministry-end-cap">
          <div className="end-line"></div>
          <p className="end-text">ADMINISTRATIVE_PILLARS_END</p>
        </footer>
      </div>
    </div>
  );
};

export default MinistriesSection;