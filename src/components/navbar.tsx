import Image from "next/image";
import Link from "next/link";

const navigationItems = [
  { label: "Beranda", href: "#home" },
  { label: "Sejarah", href: "#history" },
  { label: "Hidangan", href: "#course" },
  { label: "Rempah", href: "#spices" },
  { label: "Geografi", href: "#geography" },
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

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-3 items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center justify-self-start">
          <Image src="/icon/logo-jejak-rasa.png" alt="Jejak Rasa Makna Toba" width={180} height={55} priority className="h-12 w-auto" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center justify-center gap-8 md:flex justify-self-center font-(--font-roboto)">
          {navigationItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium tracking-wide transition-opacity hover:opacity-75" style={{ color: "#8F1C1D" }}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-self-end text-[#8F1C1D]">
          <Link href="#home" aria-label="Website icon" className="inline-flex items-center justify-center transition-opacity hover:opacity-75">
            <GlobeIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}
