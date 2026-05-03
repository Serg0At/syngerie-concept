"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import Reveal from "./Reveal";

type Props = { dict: Dictionary };

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export default function Testimonials({ dict }: Props) {
  const items = dict.testimonials.items;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % items.length),
      7000
    );
    return () => clearInterval(id);
  }, [items.length]);

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const current = items[index];

  return (
    <section
      className="border-b border-line bg-[#f3efe6]"
      aria-labelledby="testimonials-title"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-x-12">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="text-[11px] tracking-[0.32em] uppercase text-forest">
                {dict.testimonials.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h2
                id="testimonials-title"
                className="font-serif text-[clamp(2rem,3.4vw,3rem)] leading-[1.1] mt-5 max-w-[16ch]"
              >
                {dict.testimonials.title}
              </h2>
            </Reveal>

            <div className="mt-10 flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-11 h-11 border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-cream hover:border-ink transition-colors"
              >
                <ChevronLeft size={18} strokeWidth={1.25} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-11 h-11 border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-cream hover:border-ink transition-colors"
              >
                <ChevronRight size={18} strokeWidth={1.25} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={150}>
              <div className="relative">
                <Quote
                  size={48}
                  strokeWidth={1}
                  className="text-forest/30 -ml-1"
                />
                <blockquote
                  key={index}
                  className="font-serif text-[clamp(1.5rem,2.4vw,2.2rem)] leading-[1.35] text-ink mt-6 max-w-[58ch]"
                >
                  “{current.quote}”
                </blockquote>
                <div className="mt-10 flex items-center gap-4">
                  <div
                    aria-hidden="true"
                    className="w-14 h-14 rounded-full bg-forest text-cream flex items-center justify-center font-serif text-[1.1rem] tracking-wide shrink-0"
                  >
                    {initials(current.name)}
                  </div>
                  <div>
                    <div className="text-[14px] text-ink">{current.name}</div>
                    <div className="text-[11px] tracking-[0.22em] uppercase text-ink-muted mt-1">
                      {current.treatment}
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex gap-1.5">
                  {items.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className={`h-[2px] transition-all ${
                        i === index ? "w-10 bg-ink" : "w-5 bg-ink/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
