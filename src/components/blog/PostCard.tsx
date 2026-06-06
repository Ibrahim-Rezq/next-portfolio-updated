"use client";

import { ArrowRight, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Tag } from "@/components/shared/Tag";
import { StarDecoration } from "@/components/patterns/StarDecoration";
import type { PostMeta } from "@/lib/blog";
import type { Locale } from "@/i18n/types";

interface PostCardProps {
  post: PostMeta;
  locale: Locale;
}

export function PostCard({ post, locale }: PostCardProps) {
  const t = useTranslations("blog");

  const formattedDate = new Intl.DateTimeFormat(
    locale === "ar" ? "ar-EG" : "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  ).format(new Date(post.date));

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-brand-border bg-surface-card p-6 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-[var(--shadow-gold)]"
    >
      <StarDecoration
        size={30}
        className="absolute top-3.5 end-3.5 opacity-[0.16] transition-opacity duration-300 group-hover:opacity-30"
      />

      <div className="flex flex-wrap gap-2">
        {post.tags.slice(0, 3).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <h3 className="mt-3.5 text-xl font-bold leading-snug text-text-heading">
        {post.title}
      </h3>

      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-strong">
        {post.excerpt}
      </p>

      <div className="mt-4 flex items-center gap-4 text-xs text-text-muted">
        <time dateTime={post.date}>{formattedDate}</time>
        <span className="flex items-center gap-1">
          <Clock className="size-3" />
          {post.readingTime}
        </span>
      </div>

      <div className="mt-5 flex items-center gap-1.5 pt-1 text-sm font-medium text-teal-700 transition-colors group-hover:text-gold-600 dark:text-teal-300">
        {t("readMore")}
        <ArrowRight className="size-3.5 rtl:rotate-180" />
      </div>
    </Link>
  );
}
