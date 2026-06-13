"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CommentModal from "./comment-modal";
import { useLanguage } from "@/context/LanguageContext";

const footerLinks = [
  {
    titleKey: "eksplorasi",
    items: [
      { labelKey: "home", href: "#home" },
      { labelKey: "history", href: "/history" },
      { labelKey: "dishes", href: "#tradition-dishes" },
      { labelKey: "geography", href: "/geography" },
      { labelKey: "spices", href: "#herbs" },
    ],
  },
];

const contactItems = [
  {
    label: "@jejakrasa_maknatoba",
    href: "https://www.instagram.com/jejakrasa_maknatoba?igsh=M2w4Y2JpMDY2ZXgz",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.5" cy="6.5" r="1" />
      </svg>
    ),
  },
  {
    label: "+62 87719042511",
    href: "tel:+6287719042511",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
        <path d="M6.5 4.5h3l1.3 4-2 1.8c.9 1.8 2.4 3.3 4.2 4.2l1.8-2 4 1.3v3c0 .8-.6 1.5-1.4 1.5C10.9 18.3 5.7 13.1 5.5 5.9c0-.8.7-1.4 1.5-1.4Z" />
      </svg>
    ),
  },
  {
    label: "jejakrasa.maknatoba",
    href: "mailto:hello@jejakrasa.id",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="m5.5 7.5 6.5 5 6.5-5" />
      </svg>
    ),
  },
];

export function Footer() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <CommentModal open={open} onClose={() => setOpen(false)} />
      <footer className="bg-[#2C2424] font-(--font-poppins) text-[#FFFDF0]">
        <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_1fr_1fr_1fr]">
            <section className="space-y-5">
              <div className="flex items-center">
                <Image src="/icon/icon-footer.png" alt="Jejak Rasa Makna Toba" width={160} height={160} className="h-12 w-auto" />
              </div>

              <p className="max-w-xs text-xs leading-6 text-[#FFFDF0]/90">
                {t("footerDesc")}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#D98F2D]">{t("eksplorasi")}</h2>
              <div className="mt-5 space-y-3 text-sm text-[#FFFDF0]/92">
                {footerLinks[0].items.map((item) => (
                  <Link key={item.labelKey} href={item.href} className="block transition-opacity hover:opacity-75">
                    {t(item.labelKey)}
                  </Link>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#D98F2D]">{t("hubungiKami")}</h2>
              <div className="mt-5 space-y-3 text-sm text-[#FFFDF0]/92">
                {contactItems.map((item) => (
                  <a key={item.label} href={item.href} className="flex items-start gap-2 transition-opacity hover:opacity-75">
                    <span className="mt-0.5 text-[#FFFDF0]">{item.icon}</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#D98F2D]">Newsletter</h2>
              <p className="mt-5 max-w-xs text-sm leading-6 text-[#FFFDF0]/92">
                {t("dapatkanArtikel")}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#D98F2D]">{t("komentar")}</h2>
              <p className="mt-5 text-sm leading-6 text-[#FFFDF0]/92">{t("berikanKomentar")}</p>
              <div className="mt-4">
                <label className="sr-only" htmlFor="footer-comment">
                  {t("komentar")}
                </label>
                <button
                  id="footer-comment"
                  type="button"
                  onClick={() => setOpen(true)}
                  className="h-10 w-full rounded-full border border-white/10 bg-white/10 px-4 text-left text-sm text-[#FFFDF0] outline-none placeholder:text-[#FFFDF0]/45">
                  {t("klikKomentar")}
                </button>
              </div>
            </section>
          </div>

          <div className="mt-10 flex items-center justify-end">
            <span className="text-sm italic text-[#FFFDF0]/70">Horas!</span>
          </div>
        </div>
      </footer>
    </>
  );
}
