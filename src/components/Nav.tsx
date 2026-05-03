"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { LOCALES, WHATSAPP_URL } from "@/lib/i18n";
import SynergieMark from "./SynergieMark";
import Flag from "./Flag";

const LOCALE_LABELS: Record<Locale, string> = {
  am: "Հայերեն",
  ru: "Русский",
  en: "English",
};

type Props = {
  dict: Dictionary;
  locale: Locale;
  setLocale: (l: Locale) => void;
};

export default function Nav({ dict, locale, setLocale }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { href: string; label: string }[] = [
    { href: "#services", label: dict.nav.services },
    { href: "#about", label: dict.nav.about },
    { href: "#results", label: dict.nav.results },
    { href: "#pricing", label: dict.nav.pricing },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "backdrop-blur bg-cream/85 border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 text-ink hover:text-forest transition-colors"
          aria-label="Synergie home"
        >
          <SynergieMark size={26} className="text-forest" />
          <span className="font-serif text-[1.35rem] tracking-[0.32em] uppercase">
            Synergie
          </span>
        </a>

        <nav className="hidden xl:flex items-center gap-7 min-w-0">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] tracking-[0.12em] uppercase whitespace-nowrap text-ink-soft hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LocaleSwitcher locale={locale} setLocale={setLocale} />
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-ink text-cream text-[12px] tracking-[0.16em] uppercase whitespace-nowrap hover:bg-forest transition-colors"
          >
            {dict.nav.book}
          </a>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="xl:hidden p-2 -mr-2 text-ink"
            aria-label="Open menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden border-t border-line bg-cream">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-[14px] tracking-[0.18em] uppercase text-ink"
              >
                {l.label}
              </a>
            ))}

            <div className="pt-3 border-t border-line md:hidden">
              <LocaleSwitcher locale={locale} setLocale={setLocale} />
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-5 py-3 bg-ink text-cream text-[12px] tracking-[0.22em] uppercase"
            >
              {dict.nav.book}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function LocaleSwitcher({
  locale,
  setLocale,
}: {
  locale: Locale;
  setLocale: (l: Locale) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open ? "true" : "false"}
        aria-label={`Change language — current: ${LOCALE_LABELS[locale]}`}
        className="inline-flex items-center gap-2 px-3 py-2 border border-ink/15 text-ink hover:border-ink transition-colors"
      >
        <Flag locale={locale} size={22} />
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          aria-label="Language"
          className="absolute left-0 top-[calc(100%+4px)] border border-ink/15 bg-cream shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] py-1 z-10 whitespace-nowrap"
        >
          {LOCALES.map((l) => {
            const isCurrent = locale === l;
            return (
              <button
                key={l}
                type="button"
                aria-current={isCurrent ? "true" : undefined}
                aria-label={LOCALE_LABELS[l]}
                onClick={() => {
                  setLocale(l);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                  isCurrent
                    ? "bg-ink text-cream"
                    : "text-ink-soft hover:bg-[#efeadc] hover:text-ink"
                }`}
              >
                <Flag locale={l} size={22} />
                <span className="text-[13px]">{LOCALE_LABELS[l]}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
