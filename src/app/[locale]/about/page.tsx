import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SITE_URL } from "@/lib/siteConfig";
import { About } from "@/components/sections/About";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const description =
    locale === "ar"
      ? "عن إبراهيم أمين — مطوّر Next.js و React من مصر."
      : "About Ibrahim Amin — Next.js & React developer from Egypt.";

  return {
    title: t("title"),
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/about`,
      languages: {
        en: `${SITE_URL}/en/about`,
        ar: `${SITE_URL}/ar/about`,
        "x-default": `${SITE_URL}/en/about`,
      },
    },
  };
}

export default function AboutPage() {
  return <About />;
}
