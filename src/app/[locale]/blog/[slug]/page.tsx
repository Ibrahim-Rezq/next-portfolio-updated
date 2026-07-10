import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { getPost } from "@/lib/blog";
import { SITE_URL } from "@/lib/siteConfig";
import { PostHeader } from "@/components/blog/PostHeader";
import { LangFallbackBanner } from "@/components/blog/LangFallbackBanner";
import { mdxComponents } from "@/components/blog/MDXComponents";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import {
  AnimatedSection,
  AnimatedItem,
} from "@/components/shared/AnimatedSection";
import type { Pluggable } from "unified";
import type { Locale } from "@/i18n/types";

// ISR: cached pages refresh periodically so date-scheduled posts go live
// without a request; immediate publishes still revalidate via the content API.
export const revalidate = 900;

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm] as Pluggable[],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
      [rehypePrettyCode, { theme: "vesper" }],
    ] as Pluggable[],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getPost(slug, locale as Locale);
  if (!post) return {};

  // Fallback copies canonicalize to the real-language URL so search engines
  // index only the original, not the duplicate under the other locale prefix.
  const canonicalLocale = post.isFallback ? post.lang : locale;
  const xDefault = post.availableLocales.includes("en")
    ? "en"
    : post.availableLocales[0];
  const languages = Object.fromEntries([
    ...post.availableLocales.map((l) => [l, `${SITE_URL}/${l}/blog/${slug}`]),
    ["x-default", `${SITE_URL}/${xDefault}/blog/${slug}`],
  ]) as Record<string, string>;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: "Ibrahim Amin" }],
    alternates: {
      canonical: `${SITE_URL}/${canonicalLocale}/blog/${slug}`,
      languages,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/${locale}/blog/${slug}`,
      publishedTime: post.date,
      authors: ["Ibrahim Amin"],
      locale: locale === "ar" ? "ar_EG" : "en_US",
      ...(post.coverImage && { images: [{ url: post.coverImage }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      ...(post.coverImage && { images: [post.coverImage] }),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const post = await getPost(slug, locale as Locale);

  if (!post) notFound();

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: post.lang,
    url: `${SITE_URL}/${locale}/blog/${slug}`,
    ...(post.coverImage && { image: post.coverImage }),
    author: {
      "@type": "Person",
      name: "Ibrahim Amin",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <AnimatedSection>
        <AnimatedItem>
          <PostHeader post={post} />
          {post.isFallback && <LangFallbackBanner />}
        </AnimatedItem>

        <AnimatedItem>
          <article className="blog-prose mx-auto max-w-[var(--measure)] px-5 pb-20 sm:px-7">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={mdxOptions}
            />
          </article>
        </AnimatedItem>

        <AnimatedItem>
          <div className="mx-auto max-w-[var(--measure)] px-5 pb-16 sm:px-7">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-heading transition-colors hover:text-gold-600"
            >
              <ArrowLeft className="size-4 rtl:rotate-180" />
              {t("backToAll")}
            </Link>
          </div>
        </AnimatedItem>
      </AnimatedSection>
    </>
  );
}
