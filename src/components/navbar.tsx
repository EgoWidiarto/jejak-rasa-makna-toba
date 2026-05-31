"use client";

import { useState, useEffect } from "react";
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

function formatDishList(items: typeof traditionDishes) {
  return items.map((item) => ({
    title: item.title,
    href: `/daily-dishes/${encodeURIComponent(item.title)}`,
  }));
}

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
    // Remove the consumed session key. We intentionally avoid calling setState
    // inside this effect to prevent cascading renders (state already read
    // synchronously in the initializer).
    try {
      if (typeof window !== "undefined") sessionStorage.removeItem("selectedHerb");
    } catch {
      /* ignore */
    }
  }, []);

  const handleHerbClick = (herbName: string) => {
    sessionStorage.setItem("selectedHerb", herbName);
    router.push("#herbs");
  };
  const traditionalDishLinks = formatDishList(traditionDishes).map((item) => ({
    ...item,
    href: `/tradition-dishes/${encodeURIComponent(item.title)}`,
  }));
  const dailyDishLinks = formatDishList(dailyDishes);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image src="/icon/logo-jejak-rasa.png" alt="Jejak Rasa Makna Toba" width={140} height={44} priority className="h-10 w-auto" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 font-(--font-roboto) md:flex">
          {navigationItems.map((item) => {
            if (item.label === "Hidangan") {
              return (
                <div key={item.label} className="group relative">
                  <button type="button" className="cursor-pointer text-sm font-medium tracking-wide transition-opacity hover:opacity-75" style={{ color: "#8F1C1D" }} aria-haspopup="true" aria-expanded="false">
                    {item.label}
                  </button>

                  <div className="invisible absolute left-1/2 top-[calc(100%+1.75rem)] z-50 w-[92vw] max-w-5xl -translate-x-1/2 cursor-pointer opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-[28px] border border-black/10 bg-white px-8 py-7 shadow-[0_18px_60px_rgba(0,0,0,0.12)]">
                      <div className="grid gap-8 lg:grid-cols-2">
                        <div>
                          <div>
                            <p className="mb-4 text-xs font-medium text-[#8F1C1D]" style={{ fontFamily: "var(--font-roboto-medium)" }}>
                              Jelajahi Hidangan
                            </p>
                            <div className="grid gap-2 mb-6">
                              {traditionalDishLinks.map((dish) => (
                                <Link key={dish.title} href={dish.href} className="text-sm leading-5 text-[#B02627] font-medium transition-colors hover:text-[#6f1617]" style={{ fontFamily: "var(--font-roboto-medium)" }}>
                                  {dish.title}
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div>
                            <div className="grid gap-2">
                              {dailyDishLinks.map((dish) => (
                                <Link key={dish.title} href={dish.href} className="text-sm leading-5 text-[#B02627] font-medium transition-colors hover:text-[#6f1617]" style={{ fontFamily: "var(--font-roboto-medium)" }}>
                                  {dish.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="mb-4 text-xs font-medium text-[#8F1C1D]" style={{ fontFamily: "var(--font-roboto-medium)" }}>
                            Jelajahi Rempah-rempah
                          </p>
                          <div className="grid gap-2">
                            {herbs.map((herb) => (
                              <button
                                key={herb.name}
                                onClick={() => handleHerbClick(herb.name)}
                                className="text-left text-sm leading-5 text-[#B02627] font-medium transition-colors hover:text-[#6f1617] cursor-pointer"
                                style={{ fontFamily: "var(--font-roboto-medium)" }}>
                                {herb.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (item.label === "Rempah") {
              return (
                <div key={item.label} className="group relative">
                  <button type="button" className="cursor-pointer text-sm font-medium tracking-wide transition-opacity hover:opacity-75" style={{ color: "#8F1C1D" }} aria-haspopup="true" aria-expanded="false">
                    {item.label}
                  </button>

                  <div className="invisible absolute left-1/2 top-[calc(100%+1.75rem)] z-50 w-[92vw] max-w-5xl -translate-x-1/2 cursor-pointer opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-[28px] border border-black/10 bg-white px-8 py-7 shadow-[0_18px_60px_rgba(0,0,0,0.12)]">
                      <div className="grid gap-8 lg:grid-cols-2">
                        <div>
                          <div>
                            <p className="mb-4 text-xs font-medium text-[#8F1C1D]" style={{ fontFamily: "var(--font-roboto-medium)" }}>
                              Jelajahi Hidangan
                            </p>
                            <div className="grid gap-2 mb-6">
                              {traditionalDishLinks.map((dish) => (
                                <Link key={dish.title} href={dish.href} className="text-sm leading-5 text-[#B02627] font-medium transition-colors hover:text-[#6f1617]" style={{ fontFamily: "var(--font-roboto-medium)" }}>
                                  {dish.title}
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div>
                            <div className="grid gap-2">
                              {dailyDishLinks.map((dish) => (
                                <Link key={dish.title} href={dish.href} className="text-sm leading-5 text-[#B02627] font-medium transition-colors hover:text-[#6f1617]" style={{ fontFamily: "var(--font-roboto-medium)" }}>
                                  {dish.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="mb-4 text-xs font-medium text-[#8F1C1D]" style={{ fontFamily: "var(--font-roboto-medium)" }}>
                            Jelajahi Rempah-rempah
                          </p>
                          <div className="grid gap-2">
                            {herbs.map((herb) => (
                              <button
                                key={herb.name}
                                onClick={() => handleHerbClick(herb.name)}
                                className="text-left text-sm leading-5 text-[#B02627] font-medium transition-colors hover:text-[#6f1617] cursor-pointer"
                                style={{ fontFamily: "var(--font-roboto-medium)" }}>
                                {herb.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link key={item.label} href={item.href} className="text-sm font-medium tracking-wide transition-opacity hover:opacity-75" style={{ color: "#8F1C1D" }}>
                {item.label}
              </Link>
            );
          })}
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
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-medium tracking-wide transition-colors hover:bg-[#8F1C1D]/5"
              style={{ color: "#8F1C1D" }}>
              {item.label}
            </Link>
          ))}

          <div className="rounded-2xl border border-black/10 bg-white px-3 py-3">
            <p className="px-1 pb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B02627]">Hidangan</p>

            <div className="grid gap-3">
              <div>
                <p className="px-1 pb-1 text-xs font-semibold text-[#8F1C1D]">Traditional</p>
                <div className="grid gap-1">
                  {traditionalDishLinks.map((item) => (
                    <Link key={item.title} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-2 py-1.5 text-sm text-[#8F1C1D] transition-colors hover:bg-[#8F1C1D]/5">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="px-1 pb-1 text-xs font-semibold text-[#8F1C1D]">Daily</p>
                <div className="grid gap-1">
                  {dailyDishLinks.map((item) => (
                    <Link key={item.title} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-2 py-1.5 text-sm text-[#8F1C1D] transition-colors hover:bg-[#8F1C1D]/5">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
