"use client";

import type { Dictionary } from "@/lib/i18n";
import { INSTAGRAM_URL } from "@/lib/i18n";
import SynergieMark from "./SynergieMark";

function InstagramGlyph({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

type Props = { dict: Dictionary };

export default function Footer({ dict }: Props) {
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <a
              href="#top"
              className="inline-flex items-center gap-3 text-cream hover:opacity-80 transition-opacity"
              aria-label="Synergie home"
            >
              <SynergieMark size={28} className="text-cream" />
              <span className="font-serif text-[1.5rem] tracking-[0.32em] uppercase">
                Synergie
              </span>
            </a>
            <p className="mt-6 text-[1rem] text-cream/70 max-w-[36ch]">
              {dict.footer.tagline}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Synergie on Instagram"
                className="w-11 h-11 border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-ink transition-colors"
              >
                <InstagramGlyph size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[11px] tracking-[0.22em] uppercase text-cream/50">
              {dict.nav.contact}
            </div>
            <ul className="mt-5 space-y-2 text-[0.95rem]">
              <li>{dict.contact.address}</li>
              <li>
                <a
                  href={`tel:${dict.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-cream/70 transition-colors"
                >
                  {dict.contact.phone}
                </a>
              </li>
              {dict.contact.hours.map((h) => (
                <li key={h} className="text-cream/70">
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[11px] tracking-[0.22em] uppercase text-cream/50">
              {dict.nav.services}
            </div>
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-[0.95rem]">
              {dict.services.items.map((s) => (
                <li key={s.name} className="min-w-0">
                  <a
                    href="#services"
                    className="block hover:text-cream/70 transition-colors"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-cream/50">
          <div>{dict.footer.rights}</div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {dict.footer.legal.map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="hover:text-cream transition-colors uppercase tracking-[0.18em] text-[11px]"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 text-center text-[10px] tracking-[0.22em] uppercase text-cream/30">
          {dict.footer.concept}
        </div>
      </div>
    </footer>
  );
}
