"use client";

import {
  ArrowUpRight,
  Droplet,
  Flame,
  Leaf,
  Sparkles,
  Syringe,
  Zap,
} from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { INSTAGRAM_URL } from "@/lib/i18n";
import Reveal from "./Reveal";

type Props = { dict: Dictionary };

const ICONS = [Syringe, Droplet, Sparkles, Leaf, Zap, Flame];

export default function Services({ dict }: Props) {
  return (
    <section
      id="services"
      className="border-b border-line scroll-mt-24"
      aria-labelledby="services-title"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-y-10 lg:gap-x-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-[11px] tracking-[0.32em] uppercase text-forest">
                {dict.services.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h2
                id="services-title"
                className="font-serif text-[clamp(2rem,3.4vw,3rem)] leading-[1.1] mt-5 max-w-[18ch]"
              >
                {dict.services.title}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <Reveal delay={200}>
              <p className="text-[1.02rem] leading-relaxed text-ink-soft max-w-[52ch]">
                {dict.services.subtitle}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
          {dict.services.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={item.name} delay={i * 70}>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full p-8 lg:p-10 border-r border-b border-line bg-cream hover:bg-[#f3efe6] transition-colors"
                >
                  <Icon
                    size={26}
                    strokeWidth={1.25}
                    className="text-forest"
                  />
                  <h3 className="font-serif text-[1.65rem] mt-8 text-ink">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                    {item.desc}
                  </p>
                  <div className="mt-auto pt-10 flex items-end justify-between">
                    <div className="text-[12px] tracking-[0.18em] uppercase text-ink-muted">
                      {dict.services.from}{" "}
                      <span className="font-serif text-[1.2rem] tracking-normal text-ink ml-1 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[12px] tracking-[0.22em] uppercase text-ink group-hover:text-forest transition-colors">
                      {dict.services.learnMore}
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
