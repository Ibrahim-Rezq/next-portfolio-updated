import {
  Plus_Jakarta_Sans,
  DM_Sans,
  JetBrains_Mono,
  Cairo,
  Tajawal,
} from "next/font/google";

/** Display & headings — Plus Jakarta Sans (warm, slightly rounded). */
export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["400", "600", "700", "800"],
});

/** Body — DM Sans (clean, friendly). */
export const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

/** Code & mono UI accents — JetBrains Mono. */
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

/** Arabic headings + body — Cairo (geometric, pairs with Jakarta). */
export const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
  weight: ["400", "600", "700", "800"],
});

/** Arabic soft alternative — Tajawal. */
export const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-tajawal",
});

/** All font CSS variables, ready to drop on <html>. */
export const fontVariables = [
  plusJakarta.variable,
  dmSans.variable,
  jetbrainsMono.variable,
  cairo.variable,
  tajawal.variable,
].join(" ");
