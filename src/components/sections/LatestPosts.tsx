"use client";

import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  AnimatedSection,
  AnimatedItem,
} from "@/components/shared/AnimatedSection";
import { PostCard } from "@/components/blog/PostCard";
import type { PostMeta } from "@/lib/blog";
import type { Locale } from "@/i18n/types";

interface LatestPostsProps {
  posts: PostMeta[];
}

export function LatestPosts({ posts }: LatestPostsProps) {
  const t = useTranslations("latestPosts");
  const locale = useLocale() as Locale;

  if (posts.length === 0) return null;

  return (
    <section id="writing" className="ia-pattern-bg scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-7">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        <AnimatedSection className="mt-10 grid gap-5 sm:grid-cols-2">
          {posts.map((post) => (
            <AnimatedItem key={post.slug}>
              <PostCard post={post} locale={locale} />
            </AnimatedItem>
          ))}
        </AnimatedSection>

        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 transition-colors hover:text-gold-600 dark:text-teal-300"
          >
            {t("viewAll")}
            <ArrowRight className="size-3.5 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
