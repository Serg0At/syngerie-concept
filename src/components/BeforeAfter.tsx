"use client";

import { useMemo, useState } from "react";
import type { Dictionary } from "@/lib/i18n";
import Reveal from "./Reveal";

type Props = { dict: Dictionary };

type Category = "all" | "botox" | "fillers" | "skin";

/* Replace with real client photos */
const SAMPLES: {
  category: Exclude<Category, "all">;
  before: string;
  after: string;
}[] = [
  {
    category: "botox",
    before:
      "https://images.unsplash.com/photo-1611077544809-2d6dec1f3066?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1614108557041-3eef8a91d2d2?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "fillers",
    before:
      "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1554519515-242161756769?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "skin",
    before:
      "https://images.unsplash.com/photo-1595348020949-87cdfbb44174?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1620577617460-2cba5fbf3b8a?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "fillers",
    before:
      "https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "botox",
    before:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1521252659862-eec69941b071?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "skin",
    before:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
];

export default function BeforeAfter({ dict }: Props) {
  const [active, setActive] = useState<Category>("all");

  const filtered = useMemo(
    () =>
      active === "all" ? SAMPLES : SAMPLES.filter((s) => s.category === active),
    [active]
  );

  const filters: { key: Category; label: string }[] = [
    { key: "all", label: dict.results.filters.all },
    { key: "botox", label: dict.results.filters.botox },
    { key: "fillers", label: dict.results.filters.fillers },
    { key: "skin", label: dict.results.filters.skin },
  ];

  return (
    <section
      id="results"
      className="border-b border-line scroll-mt-24"
      aria-labelledby="results-title"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 items-end gap-y-10 lg:gap-x-12">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-[11px] tracking-[0.32em] uppercase text-forest">
                {dict.results.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h2
                id="results-title"
                className="font-serif text-[clamp(2rem,3.4vw,3rem)] leading-[1.1] mt-5 max-w-[18ch]"
              >
                {dict.results.title}
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-[1.02rem] leading-relaxed text-ink-soft max-w-[52ch]">
                {dict.results.subtitle}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex flex-wrap gap-2 lg:justify-end">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-4 py-2 rounded-full text-[12px] tracking-[0.18em] uppercase border transition-colors ${
                  active === f.key
                    ? "bg-ink text-cream border-ink"
                    : "border-line text-ink-soft hover:border-ink hover:text-ink"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pair, i) => (
            <Reveal key={`${pair.category}-${i}`} delay={i * 60}>
              <article className="group">
                <div className="grid grid-cols-2 gap-1 bg-[#e9e3d6] aspect-[5/3] overflow-hidden">
                  <figure className="relative">
                    <img
                      src={pair.before}
                      alt="Before"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <figcaption className="absolute top-3 left-3 text-[10px] tracking-[0.22em] uppercase bg-cream/85 text-ink px-2 py-1">
                      {dict.results.labels.before}
                    </figcaption>
                  </figure>
                  <figure className="relative">
                    <img
                      src={pair.after}
                      alt="After"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <figcaption className="absolute top-3 left-3 text-[10px] tracking-[0.22em] uppercase bg-ink text-cream px-2 py-1">
                      {dict.results.labels.after}
                    </figcaption>
                  </figure>
                </div>
                <div className="mt-3 text-[11px] tracking-[0.22em] uppercase text-ink-muted">
                  {pair.category}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
