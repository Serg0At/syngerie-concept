"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import Reveal from "./Reveal";

type Props = { dict: Dictionary };

const PORTRAITS = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80",
];

const CARD_WIDTH = 260; // px — also drives the scroll step

export default function Specialists({ dict }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const node = trackRef.current;
    if (!node) return;
    node.scrollBy({ left: dir * (CARD_WIDTH + 24), behavior: "smooth" });
  };

  return (
    <section
      className="border-b border-line scroll-mt-24"
      aria-labelledby="specialists-title"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-[11px] tracking-[0.32em] uppercase text-forest">
                {dict.specialists.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h2
                id="specialists-title"
                className="font-serif text-[clamp(2rem,3.4vw,3rem)] leading-[1.1] mt-5 max-w-[18ch]"
              >
                {dict.specialists.title}
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-end gap-6">
            <Reveal delay={200}>
              <p className="text-[1.02rem] leading-relaxed text-ink-soft max-w-[52ch]">
                {dict.specialists.subtitle}
              </p>
            </Reveal>

            <Reveal delay={280}>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => scrollByCard(-1)}
                  aria-label="Previous specialist"
                  className="w-11 h-11 border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-cream hover:border-ink transition-colors"
                >
                  <ChevronLeft size={18} strokeWidth={1.25} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByCard(1)}
                  aria-label="Next specialist"
                  className="w-11 h-11 border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-cream hover:border-ink transition-colors"
                >
                  <ChevronRight size={18} strokeWidth={1.25} />
                </button>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={120}>
          <div
            ref={trackRef}
            className="mt-16 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 -mx-6 px-6 lg:-mx-10 lg:px-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {dict.specialists.members.map((m, i) => (
              <article
                key={m.name}
                className="snap-start shrink-0 w-[240px] sm:w-[260px]"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#e9e3d6]">
                  <img
                    src={PORTRAITS[i] ?? PORTRAITS[0]}
                    alt={`Portrait of ${m.name}`}
                    className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <h3 className="font-serif text-[1.2rem] leading-tight mt-5 text-ink">
                  {m.name}
                </h3>
                <div className="mt-1 text-[10.5px] tracking-[0.22em] uppercase text-forest">
                  {m.title}
                </div>
                <p className="mt-3 text-[0.85rem] leading-relaxed text-ink-soft">
                  {m.bio}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
