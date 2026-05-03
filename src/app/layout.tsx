import type { Metadata } from "next";
import {
  Inter,
  Noto_Sans_Armenian,
  Noto_Serif_Armenian,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-playfair",
});

const notoArmenianSerif = Noto_Serif_Armenian({
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-armenian-serif",
});

const notoArmenianSans = Noto_Sans_Armenian({
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-armenian-sans",
});

export const metadata: Metadata = {
  title: "Synergie — Cosmetology & Aesthetics, Yerevan",
  description:
    "Premium cosmetology in the heart of Yerevan. European brands, certified specialists, real results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${notoArmenianSerif.variable} ${notoArmenianSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
