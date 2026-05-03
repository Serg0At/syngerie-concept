"use client";

import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { INSTAGRAM_URL } from "@/lib/i18n";
import Reveal from "./Reveal";

type Props = { dict: Dictionary };

export default function Hero({ dict }: Props) {
  return (
    <section
      id="top"
      className="relative border-b border-line"
      aria-label="Hero"
    >
      <div className="grid lg:grid-cols-2 min-h-[88vh]">
        <div className="flex flex-col justify-center px-6 lg:px-16 xl:px-24 py-20 lg:py-32 order-2 lg:order-1">
          <Reveal>
            <span className="text-[11px] tracking-[0.32em] uppercase text-forest">
              Cosmetology &nbsp;·&nbsp; Aesthetics &nbsp;·&nbsp; Yerevan
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-serif text-[clamp(2.6rem,5vw,4.6rem)] leading-[1.04] mt-7 max-w-[18ch]">
              {dict.hero.title}
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-7 text-[1.05rem] leading-relaxed text-ink-soft max-w-[44ch]">
              {dict.hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-ink text-cream text-[12px] tracking-[0.22em] uppercase hover:bg-forest transition-colors"
              >
                {dict.hero.ctaPrimary}
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-ink text-ink text-[12px] tracking-[0.22em] uppercase hover:bg-ink hover:text-cream transition-colors"
              >
                {dict.hero.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="relative order-1 lg:order-2 min-h-[58vh] lg:min-h-full overflow-hidden bg-[#e9e3d6]">
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=80"
            alt="Close-up of a calm facial treatment in a bright clinical room"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-ink/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
