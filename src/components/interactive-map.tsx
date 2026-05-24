"use client";

import { useState } from "react";
import { rawMapSVG } from "@/data/map-svg";

interface RegionData {
  baseColor: string;
  activeColor: string;
  label: string;
  description: string;
  zone: string[];
}

type RegionKey = keyof typeof rawMapSVG;

interface TooltipPosition {
  x: number;
  y: number;
}

interface InteractiveMapProps {
  fullBleed?: boolean;
}

export default function InteractiveMap({ fullBleed = true }: InteractiveMapProps) {
  const [activeRegion, setActiveRegion] = useState<RegionKey | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<RegionKey | null>(null);
  const [tooltipPos, setTooltipPos] = useState<TooltipPosition>({ x: 0, y: 0 });

  const isInteractiveRegion = (region: RegionKey): boolean => {
    return region !== "other";
  };

  const handlePathHover = (region: RegionKey, e: React.MouseEvent) => {
    if (isInteractiveRegion(region)) {
      setHoveredRegion(region);
      // Position tooltip near cursor with offset
      setTooltipPos({
        x: e.clientX + 10,
        y: e.clientY + 10,
      });
    }
  };

  const handlePathMove = (e: React.MouseEvent) => {
    // Update tooltip position as mouse moves
    if (hoveredRegion) {
      setTooltipPos({
        x: e.clientX + 10,
        y: e.clientY + 10,
      });
    }
  };

  const handlePathLeave = () => {
    setHoveredRegion(null);
  };

  const handlePathClick = (region: RegionKey) => {
    if (isInteractiveRegion(region)) {
      setActiveRegion(region);
      setHoveredRegion(null); // Hide tooltip when modal opens
    }
  };

  const handleClickOutside = () => {
    setActiveRegion(null);
  };

  const getCurrentColor = (region: RegionKey): string => {
    const regionData = rawMapSVG[region];
    if (!regionData) return "#D1DBDD";

    // Show activeColor if clicked, or if hovered (when not clicked)
    if (activeRegion === region || hoveredRegion === region) {
      return regionData.activeColor || regionData.baseColor;
    }
    return regionData.baseColor;
  };

  return (
    <div className="w-full flex flex-col gap-4 relative">
      {/* Tooltip on Hover */}
      {hoveredRegion && rawMapSVG[hoveredRegion] && (
        <div
          className="fixed bg-gray-900 text-white px-3 py-2 rounded shadow-lg text-xs pointer-events-none z-40 whitespace-nowrap"
          style={{
            left: `${tooltipPos.x}px`,
            top: `${tooltipPos.y}px`,
          }}>
          {(rawMapSVG[hoveredRegion] as RegionData).label}
        </div>
      )}

      {/* Modal Backdrop & Dialog Box */}
      {activeRegion && rawMapSVG[activeRegion] && (
        <>
          {/* Modal Dialog */}
          <div className="fixed top-24 left-1/2 z-50 w-[min(90vw,42rem)] -translate-x-1/2">
            <div
              className="relative rounded-lg bg-white p-6 shadow-2xl border-l-4"
              style={{
                borderLeftColor: (rawMapSVG[activeRegion] as RegionData).activeColor,
              }}>
              <button onClick={handleClickOutside} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold">
                ×
              </button>
              <h3 className="text-2xl font-bold text-black mb-3 [font-family:var(--font-roboto)] pr-8">{(rawMapSVG[activeRegion] as RegionData).label}</h3>
              <p className="text-sm leading-relaxed text-[#2C2424] [font-family:var(--font-poppins)]" style={{ textAlign: "justify" }}>
                {(rawMapSVG[activeRegion] as RegionData).description}
              </p>
            </div>
          </div>
        </>
      )}

      {/* Interactive Map SVG */}
      <div className={fullBleed ? "w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]" : "w-full relative"} style={fullBleed ? { transform: "skewY(-2deg)" } : undefined}>
        <svg width="911" height="1413" viewBox="0 0 911 1413" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[85vh] object-contain">
          {/* Render all regions */}
          {Object.entries(rawMapSVG).map(([regionKey, regionData]) => {
            const region = regionData as RegionData;
            return (
              <g key={regionKey} className={regionKey}>
                {/* Render all zones for this region */}
                {region.zone.map((pathData, index) => (
                  <path
                    key={`${regionKey}-${index}`}
                    d={pathData}
                    fill={getCurrentColor(regionKey as RegionKey)}
                    className={isInteractiveRegion(regionKey as RegionKey) ? "cursor-pointer transition-all duration-200 hover:opacity-80" : "cursor-default"}
                    onMouseEnter={(e) => handlePathHover(regionKey as RegionKey, e)}
                    onMouseMove={handlePathMove}
                    onMouseLeave={handlePathLeave}
                    onClick={() => handlePathClick(regionKey as RegionKey)}
                    style={{
                      transition: "fill 0.2s ease-in-out",
                    }}
                  />
                ))}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
