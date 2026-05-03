"use client";

import { Award, Sparkles, Stethoscope, Users } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import Reveal from "./Reveal";

type Props = { dict: Dictionary };

export default function TrustStrip({ dict }: Props) {
  /* Replace with real numbers before client review */
  const items = [
    { icon: Sparkles, label: dict.trust.years, caption: dict.trust.yearsCaption },
    { icon: Users, label: dict.trust.clients, caption: dict.trust.clientsCaption },
    {
      icon: Stethoscope,
      label: dict.trust.certified,
      caption: dict.trust.certifiedCaption,
    },
    { icon: Award, label: dict.trust.products, caption: dict.trust.productsCaption },
  ];

  return (
    <section className="border-b border-line">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-10 lg:py-12">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {items.map((it, i) => (
            <Reveal as="li" key={it.label} delay={i * 80} className="min-w-0">
              <div className="flex items-start gap-4 min-w-0">
                <it.icon
                  size={22}
                  strokeWidth={1.25}
                  className="text-forest mt-0.5 shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="font-serif text-[1.3rem] leading-snug text-ink break-words hyphens-auto">
                    {it.label}
                  </div>
                  <div className="text-[11px] tracking-[0.18em] uppercase text-ink-muted mt-2 break-words">
                    {it.caption}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
