"use client";

import { useRef, useState } from "react";
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
  const [isModalClosing, setIsModalClosing] = useState(false);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);
  const dragStateRef = useRef({
    isPointerDown: false,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
    moved: false,
  });

  const modalAnimationDuration = 320;
  const dragThreshold = 5;
  const mapScaleMultiplier = 1.45;

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
      setIsModalClosing(false);
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      setActiveRegion(region);
      setHoveredRegion(null); // Hide tooltip when modal opens
    }
  };

  const handleClickOutside = () => {
    if (!activeRegion) {
      return;
    }

    if (isModalClosing) {
      return;
    }

    setIsModalClosing(true);
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveRegion(null);
      setIsModalClosing(false);
      closeTimeoutRef.current = null;
    }, modalAnimationDuration);
  };

  const handleMapPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) {
      return;
    }

    dragStateRef.current = {
      isPointerDown: true,
      startX: e.clientX,
      startY: e.clientY,
      originX: panPosition.x,
      originY: panPosition.y,
      moved: false,
    };
    setIsDragging(false);
  };

  const handleMapPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStateRef.current.isPointerDown) {
      return;
    }

    const deltaX = e.clientX - dragStateRef.current.startX;
    const deltaY = e.clientY - dragStateRef.current.startY;
    const viewportWidth = e.currentTarget.clientWidth;
    const viewportHeight = e.currentTarget.clientHeight;
    const scaledWidth = viewportWidth * mapScaleMultiplier;
    const scaledHeight = viewportHeight * mapScaleMultiplier;
    const maxPanX = Math.max(0, (scaledWidth - viewportWidth) / 2);
    const maxPanY = Math.max(0, (scaledHeight - viewportHeight) / 2);

    const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

    if (!dragStateRef.current.moved && Math.hypot(deltaX, deltaY) > dragThreshold) {
      dragStateRef.current.moved = true;
      setIsDragging(true);
    }

    if (dragStateRef.current.moved) {
      setPanPosition({
        x: clamp(dragStateRef.current.originX + deltaX, -maxPanX, maxPanX),
        y: clamp(dragStateRef.current.originY + deltaY, -maxPanY, maxPanY),
      });
    }
  };

  const endMapPointerDrag = () => {
    if (!dragStateRef.current.isPointerDown) {
      return;
    }

    dragStateRef.current.isPointerDown = false;

    window.setTimeout(() => {
      setIsDragging(false);
    }, 0);
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
          <div className="fixed top-24 left-1/2 z-60 w-[min(90vw,42rem)] -translate-x-1/2">
            <div
              className="relative rounded-lg bg-white p-6 shadow-2xl border-l-4"
              style={{
                borderLeftColor: (rawMapSVG[activeRegion] as RegionData).activeColor,
                animation: `${isModalClosing ? "mapFadeOutDown" : "mapFadeInUp"} ${modalAnimationDuration}ms cubic-bezier(0.22, 1, 0.36, 1) both`,
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
        <div
          className="relative h-[85vh] overflow-hidden select-none"
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
          onPointerDown={handleMapPointerDown}
          onPointerMove={handleMapPointerMove}
          onPointerUp={endMapPointerDrag}
          onPointerCancel={endMapPointerDrag}>
          <div
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(calc(-50% + ${panPosition.x}px), calc(-50% + ${panPosition.y}px))`,
              width: "145%",
              height: "145%",
            }}>
            <svg width="911" height="1413" viewBox="0 0 911 1413" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain" style={{ pointerEvents: isDragging ? "none" : "auto" }}>
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
                        onClick={() => {
                          if (!isDragging) {
                            handlePathClick(regionKey as RegionKey);
                          }
                        }}
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
      </div>

      <style jsx>{`
        @keyframes mapFadeInUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes mapFadeOutDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(18px);
          }
        }
      `}</style>
    </div>
  );
}
