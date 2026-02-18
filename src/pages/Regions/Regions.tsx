import React, { useState } from 'react';
import './Regions.css';
import MapSection from './sections/MapSection/MapSection';
import ConstitutionSection from './sections/ConstitutionSection/ConstitutionSection';
import LegislativeSection from './sections/LegislativeSection/LegislativeSection';
import CommissionsSection from './sections/CommissionsSection/CommissionsSection';
import MinistriesSection from './sections/MinistriesSection/MinistriesSection';

const Regions: React.FC = () => {
  const [hovered, setHovered] = useState<any>(null);
  const [selected, setSelected] = useState<any>(null);

  const activeDisplay = selected || hovered;

  return (
    <div className="regions-page">
      {/* TIER 1: MAP */}
      <section className="snap-section">
        <MapSection 
          activeRegion={hovered} 
          selectedRegion={selected} 
          onRegionHover={setHovered} 
          onRegionClick={setSelected} 
        />
        <div className="scroll-indicator">
          <span className="tech-font">CONSTITUTIONAL_ARCHIVE</span>
          <div className="pulse-arrow">▼</div>
        </div>
      </section>

      {/* TIER 2: CONSTITUTION */}
      <section className="snap-section bg-industrial-white">
        <ConstitutionSection activeRegion={activeDisplay} />
        <div className="scroll-indicator dark-hint">
          <span className="tech-font">LEGISLATIVE_STRUCTURE</span>
          <div className="pulse-arrow">▼</div>
        </div>
      </section>

      {/* TIER 3: LEGISLATIVE */}
      <section className="snap-section">
        <LegislativeSection activeRegion={activeDisplay} />
        <div className="scroll-indicator">
          <span className="tech-font">COMMISSION_DIRECTORATE</span>
          <div className="pulse-arrow">▼</div>
        </div>
      </section>

      {/* TIER 4: COMMISSIONS */}
      <section className="snap-section bg-industrial-white content-overflow">
        <CommissionsSection activeRegion={activeDisplay} />
        <div className="scroll-indicator dark-hint">
          <span className="tech-font">FEDERAL_DEPARTMENTS</span>
          <div className="pulse-arrow">▼</div>
        </div>
      </section>

      {/* TIER 5: MINISTRIES */}
      <section className="snap-section bg-industrial-white content-overflow">
        <MinistriesSection activeRegion={activeDisplay} />
      </section>
    </div>
  );
};

export default Regions;