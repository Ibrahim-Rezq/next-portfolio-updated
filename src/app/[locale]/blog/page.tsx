import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/siteConfig";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  AnimatedSection,
  AnimatedItem,
} from "@/components/shared/AnimatedSection";
import { PostCard } from "@/components/blog/PostCard";
import type { Locale } from "@/i18n/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const description =
    locale === "ar"
      ? "مقالات عن Next.js و React وتطوير الويب."
      : "Writing about Next.js, React, and building for the web.";

  return {
    title: t("title"),
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/blog`,
      languages: {
        en: `${SITE_URL}/en/blog`,
        ar: `${SITE_URL}/ar/blog`,
        "x-default": `${SITE_URL}/en/blog`,
      },
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const posts = await getAllPosts(locale as Locale);

  return (
    <section className="ia-pattern-bg min-h-[60svh] py-20 md:py-28">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-7">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        {posts.length === 0 ? (
          <p className="mt-12 text-text-muted">{t("noPosts")}</p>
        ) : (
          <AnimatedSection className="mt-10 grid gap-5 sm:grid-cols-2">
            {posts.map((post) => (
              <AnimatedItem key={post.slug}>
                <PostCard post={post} locale={locale as Locale} />
              </AnimatedItem>
            ))}
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
