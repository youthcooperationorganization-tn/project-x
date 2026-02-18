import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { geoMercator, geoPath, geoCentroid } from 'd3-geo';
import './MapSection.css';

interface Governorate {
  fr: string;
  ar: string;
}

interface MapSectionProps {
  onRegionHover: (region: Governorate | null) => void;
  onRegionClick: (region: Governorate | null) => void;
  activeRegion: Governorate | null;
  selectedRegion: Governorate | null;
}

const MapSection: React.FC<MapSectionProps> = ({ 
  onRegionHover, onRegionClick, activeRegion, selectedRegion 
}) => {
  const [geoData, setGeoData] = useState<any>(null);

  useEffect(() => {
    fetch('/tunisia.geojson')
      .then(res => res.json())
      .then(setGeoData)
      .catch(err => console.error("GeoJSON Error:", err));
  }, []);

  const { projection, pathGenerator } = useMemo(() => {
    if (!geoData) return { projection: null, pathGenerator: null };
    // Increased padding in fitExtent [[left, top], [right, bottom]] to prevent clipping
    const proj = geoMercator().fitExtent([[40, 40], [460, 760]], geoData);
    return { projection: proj, pathGenerator: geoPath().projection(proj) };
  }, [geoData]);

  if (!geoData || !pathGenerator || !projection) {
    return <div className="loading">SYNCING INTERFACE...</div>;
  }

  return (
    <div className="map-section-container">
      <div className="sov-hud">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRegion?.fr || selectedRegion?.fr || 'default'}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="big-title">{activeRegion?.fr || selectedRegion?.fr || "TUNISIA"}</h1>
            <h2 className="red-subtitle">{activeRegion?.ar || selectedRegion?.ar || "تونس"}</h2>
          </motion.div>
        </AnimatePresence>
        <div className="hud-line" />
        <p className="hud-status">
          {selectedRegion ? `DATABASE LOCKED // ${selectedRegion.fr}` : activeRegion ? `SCANNING // ${activeRegion.fr}` : "SYSTEM READY // STANDBY"}
        </p>
      </div>

      <div className="map-wrapper" onClick={() => onRegionClick(null)}>
        <svg 
          viewBox="0 0 500 800" 
          className="sov-svg"
          onClick={(e) => e.stopPropagation()} // Prevents resetting when clicking map elements
        >
          {/* Transparent background to capture clicks outside regions */}
          <rect width="500" height="800" fill="transparent" onClick={() => onRegionClick(null)} />
          
          {geoData.features.map((feature: any, i: number) => {
            const centroid = projection(geoCentroid(feature));
            const gouv = { 
              fr: feature.properties.gouv_fr, 
              ar: feature.properties.gouv_ar 
            };
            const isSelected = selectedRegion?.fr === gouv.fr;
            const isHovered = activeRegion?.fr === gouv.fr;

            return (
              <g 
                key={i} 
                onClick={(e) => { e.stopPropagation(); onRegionClick(gouv); }}
                className="region-group"
              >
                <motion.path
                  d={pathGenerator(feature) || ""}
                  className="region-path"
                  animate={{ 
                    fill: isSelected || isHovered ? "#E70013" : "#1a1a1a",
                    stroke: isSelected || isHovered ? "#FFFFFF" : "#333333",
                    strokeWidth: isSelected || isHovered ? 1.5 : 0.5
                  }}
                  onMouseEnter={() => onRegionHover(gouv)}
                  onMouseLeave={() => onRegionHover(null)}
                />
                {centroid && (isSelected || isHovered) && (
                  <motion.text
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    x={centroid[0]}
                    y={centroid[1]}
                    className="map-label"
                  >
                    {gouv.fr}
                  </motion.text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default MapSection;