"use client";

import { Clock } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Badge } from "@/components/ui/badge";
import type { Post } from "@/lib/blog";
import type { Locale } from "@/i18n/types";

export function PostHeader({ post }: { post: Post }) {
  const t = useTranslations("blog");
  const locale = useLocale() as Locale;

  const formattedDate = new Intl.DateTimeFormat(
    locale === "ar" ? "ar-EG" : "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  ).format(new Date(post.date));

  return (
    <header className="mx-auto max-w-[var(--measure)] px-5 pt-16 pb-8 sm:px-7 md:pt-24">
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="teal">
            {tag}
          </Badge>
        ))}
      </div>

      <h1 className="mt-4 text-[clamp(28px,4.5vw,42px)] font-extrabold leading-tight tracking-[-0.02em] text-text-heading">
        {post.title}
      </h1>

      <p className="mt-3 text-lg leading-relaxed text-text-muted">
        {post.excerpt}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-text-muted">
        <time dateTime={post.date}>
          {t("postedOn")} {formattedDate}
        </time>
        <span className="flex items-center gap-1.5">
          <Clock className="size-3.5" />
          {post.readingTime}
        </span>
      </div>
    </header>
  );
}
