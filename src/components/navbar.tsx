"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { label: "Beranda", href: "/" },
  { label: "Sejarah", href: "/history" },
  { label: "Hidangan", href: "#tradition-dishes" },
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
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const visibleNavigationItems = isHomePage ? navigationItems : navigationItems.filter((item) => item.label !== "Hidangan" && item.label !== "Rempah");

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image src="/icon/logo-jejak-rasa.png" alt="Jejak Rasa Makna Toba" width={140} height={44} priority className="h-10 w-auto" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex font-(--font-roboto)">
          {visibleNavigationItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium tracking-wide transition-opacity hover:opacity-75" style={{ color: "#8F1C1D" }}>
              {item.label}
            </Link>
          ))}
        </nav>

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

      <div className={`border-t border-black/5 bg-white px-4 pb-4 pt-2 md:hidden ${menuOpen ? "block" : "hidden"}`}>
        <nav aria-label="Mobile primary" className="mx-auto flex w-full max-w-7xl flex-col gap-2">
          {visibleNavigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-medium tracking-wide transition-colors hover:bg-[#8F1C1D]/5"
              style={{ color: "#8F1C1D" }}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
