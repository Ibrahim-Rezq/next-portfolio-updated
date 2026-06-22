import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
// import { Analytics } from "@vercel/analytics/next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { dirFor, type Locale } from "@/i18n/types";
import { fontVariables } from "@/lib/fonts";
import { SITE_URL } from "@/lib/siteConfig";
import { Providers } from "@/providers/providers";
import { SkipLink } from "@/components/shared/SkipLink";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { LocaleTransition } from "@/components/shared/LocaleTransition";
import "../globals.css";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ibrahim Amin",
  url: SITE_URL,
  jobTitle: "Full-Stack Developer",
  knowsAbout: ["Next.js", "React", "TypeScript", "Node.js", "Express"],
  nationality: { "@type": "Country", name: "Egypt" },
  sameAs: [
    "https://github.com/Ibrahim-Rezq",
    "https://linkedin.com/in/ibrahimamin391",
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  const localeUrl = `${SITE_URL}/${locale}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Ibrahim Amin — Next.js & React Developer",
      template: "%s | Ibrahim Amin",
    },
    description: t("tagline"),
    manifest: "/site.webmanifest",
    applicationName: "Ibrahim Amin",
    authors: [{ name: "Ibrahim Amin" }],
    keywords: [
      "Ibrahim Amin",
      "Next.js developer",
      "React developer",
      "full-stack developer",
      "Egypt",
      "إبراهيم أمين",
      "مطوّر Next.js",
      "مطوّر React",
      "تطوير ويب",
      "مصر",
    ],
    alternates: {
      canonical: localeUrl,
      languages: {
        en: `${SITE_URL}/en`,
        ar: `${SITE_URL}/ar`,
        "x-default": `${SITE_URL}/en`,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      ],
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      type: "website",
      url: localeUrl,
      siteName: "Ibrahim Amin",
      title: "Ibrahim Amin — Next.js & React Developer",
      description:
        "I build web apps with Next.js and React. Full-stack developer based in Egypt, focused on clean code and solving real problems.",
      locale: locale === "ar" ? "ar_EG" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Ibrahim Amin — Next.js & React Developer",
      description:
        "I build web apps with Next.js and React. Full-stack developer based in Egypt, focused on clean code and solving real problems.",
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FEF8EC" },
    { media: "(prefers-color-scheme: dark)", color: "#134E52" },
  ],
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={dirFor(locale as Locale)}
      className={`${fontVariables} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <SkipLink />
            <Navbar />
            <main id="main" className="flex-1">
              <LocaleTransition>{children}</LocaleTransition>
            </main>
            <Footer />
            <CommandPalette />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
