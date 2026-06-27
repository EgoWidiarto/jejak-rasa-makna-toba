"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { dishes as traditionDishes } from "@/data/tradition-dishes";
import { dailyDishes } from "@/data/daily-dishes";
import { useLanguage } from "@/context/LanguageContext";

const herbs = [{ name: "Andaliman" }, { name: "Kecombrang" }, { name: "Asam Gelugur" }, { name: "Asam Jungga" }, { name: "Asam Cikala" }, { name: "Bawang Batak / Lokio" }];

const navigationItems = [
  { label: "Beranda", labelKey: "home", href: "/" },
  { label: "Sejarah", labelKey: "history", href: "/history" },
  { label: "Hidangan", labelKey: "dishes", href: "#hidangan" },
  { label: "Rempah", labelKey: "spices", href: "#herbs" },
  { label: "Geografis", labelKey: "geography", href: "/geography" },
];


function GlobeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="1.75">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.7 4 5.9 4 9s-1.5 6.3-4 9c-2.5-2.7-4-5.9-4-9s1.5-6.3 4-9Z" />
      <path d="M5.5 7.5c2 1 4.1 1.5 6.5 1.5s4.5-.5 6.5-1.5" />
      <path d="M5.5 16.5c2-1 4.1-1.5 6.5-1.5s4.5.5 6.5 1.5" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"Sejarah" | "Hidangan" | "Rempah" | "Geografis" | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const router = useRouter();
  const { language, toggleLanguage, t } = useLanguage();

  const [selectedHerb, setSelectedHerb] = useState<string | null>(() => {
    try {
      if (typeof window === "undefined") return null;
      return sessionStorage.getItem("selectedHerb");
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      if (typeof window !== "undefined") sessionStorage.removeItem("selectedHerb");
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleHerbClick = (herbName: string) => {
    sessionStorage.setItem("selectedHerb", herbName);
    setActiveMenu(null);
    router.push("#herbs");
  };

  const traditionalDishLinks = traditionDishes.map((item) => ({
    title: language === 'en' && (item as { titleEn?: string }).titleEn ? (item as { titleEn?: string }).titleEn : item.title,
    href: `/tradition-dishes/${item.slug}`,
  }));
  const dailyDishLinks = dailyDishes.map((item) => ({
    title: language === 'en' && (item as { titleEn?: string }).titleEn ? (item as { titleEn?: string }).titleEn : item.title,
    href: `/daily-dishes/${item.slug}`,
  }));

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (menu: "Sejarah" | "Hidangan" | "Rempah" | "Geografis") => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleModalMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleModalMouseLeave = () => {
    handleMouseLeave();
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-sm">
      {/* Backdrop */}
      <div
        className={`absolute top-full left-0 right-0 h-screen transition-opacity duration-300 ${activeMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.45)", zIndex: 40 }}
        onClick={() => setActiveMenu(null)}
      />

      <div className="relative z-50 mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image src="/icon/logo-jejak-rasa.png" alt="Jejak Rasa Makna Toba" width={140} height={44} priority className="h-10 w-auto" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:gap-12 lg:gap-24 xl:gap-28 font-(--font-roboto) md:flex">
          {navigationItems.map((item) => {
            if (item.label === "Beranda") {
              return (
                <Link key={item.label} href={item.href} className="text-sm font-medium tracking-wide transition-opacity hover:opacity-75" style={{ color: "#8F1C1D" }}>
                  {t(item.labelKey)}
                </Link>
              );
            }

            const menuLabel = item.label as "Sejarah" | "Hidangan" | "Rempah" | "Geografis";

            return (
              <div
                key={item.label}
                className="relative py-2"
                onMouseEnter={() => {
                  if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
                    handleMouseEnter(menuLabel);
                  }
                }}
                onMouseLeave={() => {
                  if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
                    handleMouseLeave();
                  }
                }}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.currentTarget.blur();
                    setActiveMenu(activeMenu === menuLabel ? null : menuLabel);
                  }}
                  className="cursor-pointer text-sm font-medium tracking-wide transition-opacity hover:opacity-75 focus-visible:outline-none"
                  style={{ color: "#8F1C1D" }}
                  aria-haspopup="true"
                  aria-expanded={activeMenu === menuLabel}>
                  {t(item.labelKey)}
                </button>

                {/* Dropdown Card */}
                <div
                  onMouseEnter={handleModalMouseEnter}
                  onMouseLeave={handleModalMouseLeave}
                  className={`absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 z-50 rounded-[24px] border border-black/10 bg-white px-6 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-200 ${
                    activeMenu === menuLabel
                      ? "opacity-100 translate-y-0 pointer-events-auto visible"
                      : "opacity-0 -translate-y-2 pointer-events-none invisible"
                  }`}
                >
                  {menuLabel === "Sejarah" && (
                    <div className="w-[180px] flex flex-col gap-1">
                      <p className="mb-2 font-roboto-thin text-[10px] text-[#8F1C1D] tracking-wider uppercase">
                        {t("jelajahiSejarah")}
                      </p>
                      <Link
                        href="/history"
                        onClick={() => setActiveMenu(null)}
                        className="font-roboto-medium text-[14px] leading-[20px] text-[#B02627] transition-colors hover:text-[#6f1617]"
                      >
                        {t("sejarahDanMakna")}
                      </Link>
                    </div>
                  )}

                  {menuLabel === "Hidangan" && (
                    <div className="w-[360px] grid grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1">
                        <p className="mb-2 font-roboto-thin text-[10px] text-[#8F1C1D] tracking-wider uppercase">
                          {t("hidanganTradisional")}
                        </p>
                        <div className="flex flex-col gap-2">
                          {traditionalDishLinks.map((dish) => (
                            <Link
                              key={dish.title}
                              href={dish.href}
                              onClick={() => setActiveMenu(null)}
                              className="font-roboto-medium text-[14px] leading-[20px] text-[#B02627] transition-colors hover:text-[#6f1617]"
                            >
                              {dish.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="mb-2 font-roboto-thin text-[10px] text-[#8F1C1D] tracking-wider uppercase">
                          {t("hidanganHarian")}
                        </p>
                        <div className="flex flex-col gap-2">
                          {dailyDishLinks.map((dish) => (
                            <Link
                              key={dish.title}
                              href={dish.href}
                              onClick={() => setActiveMenu(null)}
                              className="font-roboto-medium text-[14px] leading-[20px] text-[#B02627] transition-colors hover:text-[#6f1617]"
                            >
                              {dish.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {menuLabel === "Rempah" && (
                    <div className="w-[180px] flex flex-col gap-1">
                      <p className="mb-2 font-roboto-thin text-[10px] text-[#8F1C1D] tracking-wider uppercase">
                        {t("jelajahiRempah")}
                      </p>
                      <div className="flex flex-col gap-2">
                        {herbs.map((herb) => (
                          <button
                            key={herb.name}
                            onClick={() => handleHerbClick(herb.name)}
                            className="text-left font-medium font-roboto-medium text-[14px] leading-[20px] text-[#B02627] transition-colors hover:text-[#6f1617] cursor-pointer"
                          >
                            {herb.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {menuLabel === "Geografis" && (
                    <div className="w-[180px] flex flex-col gap-1">
                      <p className="mb-2 font-roboto-thin text-[10px] text-[#8F1C1D] tracking-wider uppercase">
                        {t("jelajahiGeografis")}
                      </p>
                      <Link
                        href="/geography"
                        onClick={() => setActiveMenu(null)}
                        className="font-medium font-roboto-medium text-[14px] leading-[20px] text-[#B02627] transition-colors hover:text-[#6f1617]"
                      >
                        {t("geography")}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 text-[#8F1C1D]">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className="flex items-center justify-center transition-opacity hover:opacity-75 cursor-pointer text-[#8F1C1D] hover:bg-[#8F1C1D]/5 p-1.5 rounded-lg border border-[#8F1C1D]/10"
          >
            <GlobeIcon />
            <span className="text-xs font-semibold ml-1.5 select-none font-sans uppercase">
              {language}
            </span>
          </button>

          <button
            type="button"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex items-center justify-center rounded-full border border-[#8F1C1D]/15 p-2 transition-colors hover:bg-[#8F1C1D]/5 md:hidden">
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`border-t border-black/5 bg-white px-4 pb-4 pt-2 md:hidden max-h-[calc(100vh-80px)] overflow-y-auto ${menuOpen ? "block" : "hidden"}`}>
        <nav aria-label="Mobile primary" className="mx-auto flex w-full max-w-7xl flex-col gap-1">
          {/* Beranda */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="rounded-xl px-3 py-2 text-sm font-medium tracking-wide transition-colors hover:bg-[#8F1C1D]/5"
            style={{ color: "#8F1C1D" }}>
            {t("home")}
          </Link>

          {/* Sejarah dan Makna */}
          <Link
            href="/history"
            onClick={() => setMenuOpen(false)}
            className="rounded-xl px-3 py-2 text-sm font-medium tracking-wide transition-colors hover:bg-[#8F1C1D]/5"
            style={{ color: "#8F1C1D" }}>
            {t("sejarahDanMakna")}
          </Link>

          {/* Traditional Dishes */}
          {traditionalDishLinks.map((dish) => (
            <Link
              key={dish.title}
              href={dish.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-medium tracking-wide transition-colors hover:bg-[#8F1C1D]/5"
              style={{ color: "#8F1C1D" }}>
              {dish.title}
            </Link>
          ))}

          {/* Daily Dishes */}
          {dailyDishLinks.map((dish) => (
            <Link
              key={dish.title}
              href={dish.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-medium tracking-wide transition-colors hover:bg-[#8F1C1D]/5"
              style={{ color: "#8F1C1D" }}>
              {dish.title}
            </Link>
          ))}
          {/* Rempah-rempah */}
          <Link
            href="#herbs"
            onClick={() => setMenuOpen(false)}
            className="rounded-xl px-3 py-2 text-sm font-medium tracking-wide transition-colors hover:bg-[#8F1C1D]/5"
            style={{ color: "#8F1C1D" }}>
            {t("spices")}
          </Link>

          {/* Geografis */}
          <Link
            href="/geography"
            onClick={() => setMenuOpen(false)}
            className="rounded-xl px-3 py-2 text-sm font-medium tracking-wide transition-colors hover:bg-[#8F1C1D]/5"
            style={{ color: "#8F1C1D" }}>
            {t("geography")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
