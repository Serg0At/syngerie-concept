"use client";

import type { Dictionary } from "@/lib/i18n";
import Reveal from "./Reveal";

type Props = { dict: Dictionary };

export default function About({ dict }: Props) {
  return (
    <section
      id="about"
      className="border-b border-line scroll-mt-24"
      aria-labelledby="about-title"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col">
            <Reveal>
              <span className="block text-[11px] tracking-[0.32em] uppercase text-forest">
                {dict.about.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={120} className="mt-5">
              <h2
                id="about-title"
                className="font-serif text-[clamp(2rem,3.4vw,3rem)] leading-[1.1] max-w-[18ch] m-0"
              >
                {dict.about.title}
              </h2>
            </Reveal>
            <Reveal delay={220} className="mt-9">
              <p className="text-[1.02rem] leading-[1.85] text-ink-soft max-w-[52ch] m-0">
                {dict.about.p1}
              </p>
            </Reveal>
            <Reveal delay={320} className="mt-6">
              <p className="text-[1.02rem] leading-[1.85] text-ink-soft max-w-[52ch] m-0">
                {dict.about.p2}
              </p>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <div className="relative aspect-[4/5] bg-[#e9e3d6] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                alt="Minimalist clinic interior with warm natural light"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
