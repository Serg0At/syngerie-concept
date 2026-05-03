"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import Reveal from "./Reveal";

type Props = { dict: Dictionary };

export default function Faq({ dict }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="border-b border-line scroll-mt-24"
      aria-labelledby="faq-title"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-x-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-[11px] tracking-[0.32em] uppercase text-forest">
                {dict.faq.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h2
                id="faq-title"
                className="font-serif text-[clamp(2rem,3.4vw,3rem)] leading-[1.1] mt-5 max-w-[16ch]"
              >
                {dict.faq.title}
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul>
              {dict.faq.items.map((it, i) => {
                const isOpen = open === i;
                return (
                  <Reveal as="li" key={it.q} delay={i * 60}>
                    <div className="border-t border-line">
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-6 py-7 text-left"
                      >
                        <span className="font-serif text-[1.3rem] leading-snug text-ink">
                          {it.q}
                        </span>
                        <span
                          className={`shrink-0 w-9 h-9 border border-ink/20 flex items-center justify-center transition-all ${
                            isOpen ? "bg-ink text-cream rotate-45 border-ink" : ""
                          }`}
                        >
                          <Plus size={16} strokeWidth={1.25} />
                        </span>
                      </button>
                      <div
                        className="grid transition-all duration-500 ease-out"
                        style={{
                          gridTemplateRows: isOpen ? "1fr" : "0fr",
                        }}
                      >
                        <div className="overflow-hidden">
                          <p className="pb-7 pr-12 text-[1rem] leading-[1.85] text-ink-soft max-w-[60ch]">
                            {it.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
              <div className="border-t border-line" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
