"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { dishes as traditionDishes } from "@/data/tradition-dishes";
import { dailyDishes } from "@/data/daily-dishes";

const herbs = [{ name: "Andaliman" }, { name: "Kecombrang" }, { name: "Asam Gelugur" }, { name: "Asam Jungga" }, { name: "Asam Cikala" }, { name: "Bawang Batak / Lokio" }];

const navigationItems = [
  { label: "Beranda", href: "/" },
  { label: "Sejarah", href: "/history" },
  { label: "Hidangan", href: "#hidangan" },
  { label: "Rempah", href: "#herbs" },
  { label: "Geografi", href: "/geography" },
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
  const [activeMenu, setActiveMenu] = useState<"Sejarah" | "Hidangan" | "Rempah" | "Geografi" | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const router = useRouter();

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
    title: item.title,
    href: `/tradition-dishes/${item.slug}`,
  }));
  const dailyDishLinks = dailyDishes.map((item) => ({
    title: item.title,
    href: `/daily-dishes/${item.slug}`,
  }));

  // Refs and position states for desktop mega menu alignment
  const sejarahRef = useRef<HTMLButtonElement>(null);
  const hidanganRef = useRef<HTMLButtonElement>(null);
  const rempahRef = useRef<HTMLButtonElement>(null);
  const geografiRef = useRef<HTMLButtonElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  const [sejarahLeftOffset, setSejarahLeftOffset] = useState<number | null>(null);
  const [hidanganLeftOffset, setHidanganLeftOffset] = useState<number | null>(null);
  const [rempahLeftOffset, setRempahLeftOffset] = useState<number | null>(null);
  const [geografiLeftOffset, setGeografiLeftOffset] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (menu: "Sejarah" | "Hidangan" | "Rempah" | "Geografi") => {
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

  useEffect(() => {
    const updatePositions = () => {
      if (
        sejarahRef.current &&
        hidanganRef.current &&
        rempahRef.current &&
        geografiRef.current &&
        modalContainerRef.current
      ) {
        const modalRect = modalContainerRef.current.getBoundingClientRect();
        const sejarahRect = sejarahRef.current.getBoundingClientRect();
        const hidanganRect = hidanganRef.current.getBoundingClientRect();
        const rempahRect = rempahRef.current.getBoundingClientRect();
        const geografiRect = geografiRef.current.getBoundingClientRect();

        setSejarahLeftOffset(sejarahRect.left - modalRect.left);
        setHidanganLeftOffset(hidanganRect.left - modalRect.left);
        setRempahLeftOffset(rempahRect.left - modalRect.left);
        setGeografiLeftOffset(geografiRect.left - modalRect.left);
      }
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    const timeout = setTimeout(updatePositions, 100);

    return () => {
      window.removeEventListener("resize", updatePositions);
      clearTimeout(timeout);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeMenu]);

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
                  {item.label}
                </Link>
              );
            }

            const isSejarah = item.label === "Sejarah";
            const isHidangan = item.label === "Hidangan";
            const isRempah = item.label === "Rempah";
            const isGeografi = item.label === "Geografi";

            let ref;
            if (isSejarah) ref = sejarahRef;
            else if (isHidangan) ref = hidanganRef;
            else if (isRempah) ref = rempahRef;
            else ref = geografiRef;

            return (
              <button
                key={item.label}
                ref={ref}
                type="button"
                onMouseEnter={() => handleMouseEnter(item.label as "Sejarah" | "Hidangan" | "Rempah" | "Geografi")}
                onMouseLeave={handleMouseLeave}
                onClick={(e) => {
                  e.currentTarget.blur();
                  setActiveMenu(activeMenu === item.label ? null : (item.label as "Sejarah" | "Hidangan" | "Rempah" | "Geografi"));
                }}
                className="cursor-pointer text-sm font-medium tracking-wide transition-opacity hover:opacity-75 focus-visible:outline-none"
                style={{ color: "#8F1C1D" }}
                aria-haspopup="true"
                aria-expanded={activeMenu === item.label}>
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Shared Mega Menu Dropdown */}
        <div
          ref={modalContainerRef}
          onMouseEnter={handleModalMouseEnter}
          onMouseLeave={handleModalMouseLeave}
          className={`absolute left-1/2 top-[calc(100%+0.5rem)] z-50 w-[92vw] max-w-5xl -translate-x-1/2 transition-all duration-200 hidden md:block ${activeMenu ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-2"
            }`}
        >
          <div className="rounded-[28px] border border-black/10 bg-white px-8 py-7 shadow-[0_18px_60px_rgba(0,0,0,0.12)] relative">
            {/* Ghost layout for auto-height sizing */}
            <div className="grid gap-8 grid-cols-4 opacity-0 pointer-events-none">
              {/* Kolom 1: Sejarah */}
              <div className="w-[160px]">
                <p className="mb-2 font-roboto-light text-[10px]">Jelajahi Sejarah</p>
                <div className="font-roboto-medium l text-[12px] leading-[20px]">Sejarah dan Makna</div>
              </div>
              {/* Kolom 2: Hidangan */}
              <div className="w-[160px]">
                <p className="mb-2 font-roboto-light text-[10px]">Jelajahi Hidangan</p>
                <div className="grid gap-2 mb-6">
                  {traditionalDishLinks.map((dish) => (
                    <div key={dish.title} className="font-roboto-medium text-[14px] leading-[20px]">{dish.title}</div>
                  ))}
                </div>
                <div className="grid gap-2">
                  {dailyDishLinks.map((dish) => (
                    <div key={dish.title} className="font-roboto-medium text-[14px] leading-[20px]">{dish.title}</div>
                  ))}
                </div>
              </div>
              {/* Kolom 3: Rempah */}
              <div className="w-[160px]">
                <p className="mb-2 font-roboto-light text-[10px]">Jelajahi Rempah-rempah</p>
                <div className="grid gap-2">
                  {herbs.map((herb) => (
                    <div key={herb.name} className="font-medium font-roboto-medium text-[10px] lg:text-[14px] leading-[20px]">{herb.name}</div>
                  ))}
                </div>
              </div>
              {/* Kolom 4: Geografi */}
              <div className="w-[160px]">
                <p className="mb-2 font-roboto-light text-[10px]">Jelajahi Geografi</p>
                <div className="font-medium font-roboto-medium text-[14px] leading-[20px]">Geografi</div>
              </div>
            </div>

            {/* Sejarah Column */}
            <div
              className="absolute top-7 transition-all duration-200"
              style={{
                left: sejarahLeftOffset !== null ? `${sejarahLeftOffset}px` : "10%",
                width: "160px",
              }}
            >
              <p className="mb-2 font-roboto-thin text-[10px] text-[#8F1C1D]">
                Jelajahi Sejarah
              </p>
              <Link
                href="/history"
                onClick={() => setActiveMenu(null)}
                className="font-roboto-medium text-[14px] leading-[20px] text-[#B02627] transition-colors hover:text-[#6f1617]"
              >
                Sejarah dan Makna
              </Link>
            </div>

            {/* Hidangan Column */}
            <div
              className="absolute top-7 transition-all duration-200"
              style={{
                left: hidanganLeftOffset !== null ? `${hidanganLeftOffset}px` : "32%",
                width: "160px",
              }}
            >
              <p className="mb-2 font-roboto-thin text-[10px] text-[#8F1C1D]">
                Jelajahi Hidangan
              </p>
              <div className="grid gap-2 mb-6">
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
              <div className="grid gap-2">
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

            {/* Rempah Column */}
            <div
              className="absolute top-7 transition-all duration-200"
              style={{
                left: rempahLeftOffset !== null ? `${rempahLeftOffset}px` : "55%",
                width: "160px",
              }}
            >
              <p className="mb-2 font-roboto-thin text-[10px] text-[#8F1C1D]">
                Jelajahi Rempah-rempah
              </p>
              <div className="grid gap-2">
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

            {/* Geografi Column */}
            <div
              className="absolute top-7 transition-all duration-200"
              style={{
                left: geografiLeftOffset !== null ? `${geografiLeftOffset}px` : "78%",
                width: "160px",
              }}
            >
              <p className="mb-2 font-roboto-thin text-[10px] text-[#8F1C1D]">
                Jelajahi Geografi
              </p>
              <Link
                href="/geography"
                onClick={() => setActiveMenu(null)}
                className="font-medium font-roboto-medium text-[14px] leading-[20px] text-[#B02627] transition-colors hover:text-[#6f1617]"
              >
                Geografi
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-[#8F1C1D]">
          <Link href="/" aria-label="Website icon" className="hidden items-center justify-center transition-opacity hover:opacity-75 sm:inline-flex">
            <GlobeIcon />
          </Link>

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
            Beranda
          </Link>

          {/* Sejarah dan Makna */}
          <Link
            href="/history"
            onClick={() => setMenuOpen(false)}
            className="rounded-xl px-3 py-2 text-sm font-medium tracking-wide transition-colors hover:bg-[#8F1C1D]/5"
            style={{ color: "#8F1C1D" }}>
            Sejarah dan Makna
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
            Rempah-rempah
          </Link>

          {/* Geografi */}
          <Link
            href="/geography"
            onClick={() => setMenuOpen(false)}
            className="rounded-xl px-3 py-2 text-sm font-medium tracking-wide transition-colors hover:bg-[#8F1C1D]/5"
            style={{ color: "#8F1C1D" }}>
            Geografi
          </Link>
        </nav>
      </div>
    </header>
  );
}
