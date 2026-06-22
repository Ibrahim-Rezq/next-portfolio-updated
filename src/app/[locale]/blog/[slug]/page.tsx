import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { getPost } from "@/lib/blog";
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
  return {
    title: post.title,
    description: post.excerpt,
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

  return (
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
  );
}
