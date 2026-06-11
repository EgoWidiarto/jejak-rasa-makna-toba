"use client";

import Link from "next/link";
import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { rawMapSVG } from "@/data/map-svg";
import { useLanguage } from "@/context/LanguageContext";

interface RegionData {
  baseColor: string;
  activeColor: string;
  label: string;
  description: string;
  zone: string[];
}

export function LocationMap() {
  const { t } = useLanguage();
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStateRef = useRef({
    isPointerDown: false,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
    moved: false,
  });

  const dragThreshold = 5;
  const mapScaleMultiplier = 2;
  const tobaPinPosition = { x: 450, y: 650 };

  const handleMapPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
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

  const handleMapPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
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

  return (
    <section id="location" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[28px]">
        {/* PERUBAHAN DI SINI: Menggunakan h-[70vh] min-h-[420px] max-h-[700px] dan membuang lg:h-191.75 */}
        <div
          className="relative w-full h-[70vh] min-h-[420px] max-h-[700px] overflow-hidden rounded-3xl bg-[#ffffff] select-none"
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
          onPointerDown={handleMapPointerDown}
          onPointerMove={handleMapPointerMove}
          onPointerUp={endMapPointerDrag}
          onPointerCancel={endMapPointerDrag}>
          <div
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(calc(-50% + ${panPosition.x}px), calc(-50% + ${panPosition.y}px))`,
              width: "190%",
              height: "190%",
            }}>
            <svg
              width="911"
              height="1413"
              viewBox="0 0 911 1413"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full object-contain opacity-65 saturate-75 brightness-95 contrast-90"
              style={{ pointerEvents: isDragging ? "none" : "auto" }}>
              {Object.entries(rawMapSVG).map(([regionKey, regionData]) => {
                const region = regionData as RegionData;

                return (
                  <g key={regionKey} className={regionKey}>
                    {region.zone.map((pathData, index) => (
                      <path key={`${regionKey}-${index}`} d={pathData} fill={region.baseColor} />
                    ))}
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-0" style={{ transform: `translate(calc(-50% + ${panPosition.x}px), calc(-50% + ${panPosition.y}px))`, width: "190%", height: "190%" }}>
            <svg width="911" height="1413" viewBox="0 0 911 1413" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full overflow-visible object-contain">
              <g transform={`translate(${tobaPinPosition.x - 72} ${tobaPinPosition.y - 148})`}>
                <g filter="url(#filter0_d_523_2979)">
                  <path
                    d="M48.1914 62.024C48.1914 55.9767 50.6705 50.1771 55.0833 45.901C59.496 41.6249 65.4811 39.2227 71.7217 39.2227C77.9623 39.2227 83.9473 41.6249 88.3601 45.901C92.7729 50.1771 95.2519 55.9767 95.2519 62.024C95.2519 68.0712 92.7729 73.8708 88.3601 78.1469C83.9473 82.423 77.9623 84.8252 71.7217 84.8252C65.4811 84.8252 59.496 82.423 55.0833 78.1469C50.6705 73.8708 48.1914 68.0712 48.1914 62.024Z"
                    fill="#B02627"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.1645 54.1461C13.3688 40.0426 19.9999 26.893 30.7423 17.3061C41.4847 7.71911 55.5535 2.39523 70.1576 2.39062H73.2853C87.8894 2.39523 101.958 7.71911 112.701 17.3061C123.443 26.893 130.074 40.0426 131.278 54.1461C132.615 69.8923 127.598 85.5273 117.283 97.7632L82.5816 138.89C81.2663 140.45 79.6096 141.707 77.7314 142.57C75.8531 143.433 73.8003 143.881 71.7215 143.881C69.6427 143.881 67.5898 143.433 65.7116 142.57C63.8333 141.707 62.1766 140.45 60.8613 138.89L26.1669 97.7632C15.8495 85.5283 10.8302 69.8933 12.1645 54.1461ZM71.7215 28.6998C62.6006 28.6998 53.8532 32.2108 47.4038 38.4605C40.9543 44.7101 37.3311 53.1865 37.3311 62.0248C37.3311 70.8631 40.9543 79.3395 47.4038 85.5891C53.8532 91.8387 62.6006 95.3498 71.7215 95.3498C80.8424 95.3498 89.5897 91.8387 96.0391 85.5891C102.489 79.3395 106.112 70.8631 106.112 62.0248C106.112 53.1865 102.489 44.7101 96.0391 38.4605C89.5897 32.2108 80.8424 28.6998 71.7215 28.6998Z"
                    fill="#B02627"
                  />
                </g>
              </g>
              <defs>
                <filter id="filter0_d_523_2979" x="0" y="0" width="143.443" height="165.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="9.5625" />
                  <feGaussianBlur stdDeviation="5.97656" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_523_2979" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_523_2979" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>

          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/12 via-transparent to-black/5" />

          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-5 text-center sm:px-10 lg:px-14">
            <div className="pointer-events-auto max-w-xl p-0 lg:max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-[#2C2424] [font-family:var(--font-roboto)] sm:text-5xl">{t("letakGeografis")}</h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#2C2424] [font-family:var(--font-poppins)] sm:text-base lg:max-w-3xl">
                {t("mapDesc")}
              </p>

              <div className="mt-7 flex justify-center">
                <Link
                  href="/geography"
                  className="pointer-events-auto inline-flex items-center gap-2 rounded-[15px] bg-[#D9D9D9]/80 px-5 py-2.5 text-sm font-normal text-[#B02627] [font-family:var(--font-poppins)] transition-opacity hover:opacity-80">
                  {t("lihatPeta")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
