import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  size?: number;
  className?: string;
};

/**
 * Small inline SVG flags for the language switcher.
 * Aspect ratio 3:2 across all three so they line up neatly.
 * `am` → Armenia, `ru` → Russia, `en` → United Kingdom.
 */
export default function Flag({ locale, size = 22, className = "" }: Props) {
  const w = size;
  const h = Math.round(size * (2 / 3));
  const common = `inline-block shrink-0 rounded-[2px] overflow-hidden ${className}`;

  if (locale === "am") {
    return (
      <svg
        width={w}
        height={h}
        viewBox="0 0 30 20"
        className={common}
        aria-hidden="true"
      >
        <rect width="30" height="20" fill="#0033A0" />
        <rect width="30" height="6.667" fill="#D90012" />
        <rect y="13.333" width="30" height="6.667" fill="#F2A800" />
      </svg>
    );
  }

  if (locale === "ru") {
    return (
      <svg
        width={w}
        height={h}
        viewBox="0 0 30 20"
        className={common}
        aria-hidden="true"
      >
        <rect width="30" height="20" fill="#FFFFFF" />
        <rect y="6.667" width="30" height="6.667" fill="#0039A6" />
        <rect y="13.333" width="30" height="6.667" fill="#D52B1E" />
      </svg>
    );
  }

  // English → Union Jack (simplified, geometrically correct).
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 60 40"
      className={common}
      aria-hidden="true"
    >
      <rect width="60" height="40" fill="#012169" />
      {/* White St Andrew + St Patrick saltire */}
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFFFFF" strokeWidth="8" />
      {/* Red St Patrick saltire (offset) */}
      <path
        d="M0,0 L60,40 M60,0 L0,40"
        stroke="#C8102E"
        strokeWidth="4"
        strokeDasharray="0"
        clipPath="url(#uk-saltire-clip)"
      />
      {/* White St George cross border */}
      <path d="M30,0 V40 M0,20 H60" stroke="#FFFFFF" strokeWidth="10" />
      {/* Red St George cross */}
      <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="6" />
      <defs>
        <clipPath id="uk-saltire-clip">
          <polygon points="0,0 30,0 60,40 30,40" />
          <polygon points="60,0 30,0 0,40 30,40" />
        </clipPath>
      </defs>
    </svg>
  );
}
