import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { dirFor, type Locale } from "@/i18n/types";
import { fontVariables } from "@/lib/fonts";
import { Providers } from "@/providers/providers";
import { SkipLink } from "@/components/shared/SkipLink";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { LocaleTransition } from "@/components/shared/LocaleTransition";
import "../globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibrahim-rezq.vercel.app";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("hero");
  return {
    metadataBase: new URL(siteUrl),
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
    ],
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
      url: siteUrl,
      siteName: "Ibrahim Amin",
      title: "Ibrahim Amin — Next.js & React Developer",
      description:
        "I build web apps with Next.js and React. Full-stack developer based in Egypt, focused on clean code and solving real problems.",
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
