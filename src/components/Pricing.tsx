"use client";

import type { Dictionary } from "@/lib/i18n";
import { INSTAGRAM_URL } from "@/lib/i18n";
import Reveal from "./Reveal";

type Props = { dict: Dictionary };

export default function Pricing({ dict }: Props) {
  return (
    <section
      id="pricing"
      className="border-b border-line scroll-mt-24"
      aria-labelledby="pricing-title"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 items-end gap-y-8 lg:gap-x-12">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-[11px] tracking-[0.32em] uppercase text-forest">
                {dict.pricing.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h2
                id="pricing-title"
                className="font-serif text-[clamp(2rem,3.4vw,3rem)] leading-[1.1] mt-5 max-w-[18ch]"
              >
                {dict.pricing.title}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <p className="text-[1rem] leading-relaxed text-ink-soft max-w-[52ch]">
                {dict.pricing.subtitle}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mt-16 overflow-x-auto">
            <table className="w-full text-left border-t border-line">
              <thead>
                <tr className="text-[11px] tracking-[0.22em] uppercase text-ink-muted">
                  <th className="py-4 pr-4 font-normal">{dict.pricing.headers.service}</th>
                  <th className="py-4 px-4 font-normal text-right">
                    {dict.pricing.headers.price}
                  </th>
                  <th className="py-4 pl-4 font-normal text-right hidden sm:table-cell">
                    {dict.pricing.headers.duration}
                  </th>
                </tr>
              </thead>
              <tbody>
                {dict.pricing.rows.map((row) => (
                  <tr key={row.service} className="border-t border-line">
                    <td className="py-5 pr-4 text-[1rem] text-ink">
                      {row.service}
                    </td>
                    <td className="py-5 px-4 text-right font-serif text-[1.2rem] text-ink whitespace-nowrap">
                      {row.price}
                    </td>
                    <td className="py-5 pl-4 text-right text-[0.95rem] text-ink-soft hidden sm:table-cell whitespace-nowrap">
                      {row.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <div className="mt-12 flex justify-end">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-4 border border-ink text-ink text-[12px] tracking-[0.22em] uppercase hover:bg-ink hover:text-cream transition-colors"
          >
            {dict.contact.bigCta}
          </a>
        </div>
      </div>
    </section>
  );
}
