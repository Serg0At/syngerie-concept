"use client";

import { useEffect, useState } from "react";
import { dictionaries, type Locale } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import About from "@/components/About";
import BeforeAfter from "@/components/BeforeAfter";
import Specialists from "@/components/Specialists";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const STORAGE_KEY = "synergie:locale";

/**
 * Map a BCP 47 language tag to one of our supported locales.
 * Armenian has the language code `hy` (Hayeren) — we expose it as `am`.
 * Anything we don't ship → English.
 */
function matchSupportedLocale(tag: string): Locale | null {
  const code = tag.toLowerCase().split("-")[0];
  if (code === "hy") return "am";
  if (code === "ru") return "ru";
  if (code === "en") return "en";
  return null;
}

function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return "en";
  const tags =
    navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];
  for (const tag of tags) {
    const matched = matchSupportedLocale(tag);
    if (matched) return matched;
  }
  return "en";
}

export default function HomePage() {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved && saved in dictionaries) {
        // User explicitly chose a language earlier — honor it.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLocaleState(saved);
        return;
      }
    } catch {
      /* ignore */
    }
    // No saved preference — pick from browser, defaulting to English.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocaleState(detectBrowserLocale());
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.setAttribute("lang", l === "am" ? "hy" : l);
    } catch {
      /* ignore */
    }
  };

  const dict = dictionaries[locale];

  return (
    <>
      <Nav dict={dict} locale={locale} setLocale={setLocale} />
      <main className="flex-1">
        <Hero dict={dict} />
        <TrustStrip dict={dict} />
        <Services dict={dict} />
        <About dict={dict} />
        <Pricing dict={dict} />
        <BeforeAfter dict={dict} />
        <Testimonials dict={dict} />
        <Specialists dict={dict} />
        <Faq dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
