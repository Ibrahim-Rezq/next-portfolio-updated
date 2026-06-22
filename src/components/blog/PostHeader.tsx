"use client";

import { Clock } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Post } from "@/lib/blog";
import { LOCALES, type Locale } from "@/i18n/types";

const LANG_LABELS: Record<Locale, string> = { en: "English", ar: "العربية" };

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

      <div className="mt-5 flex flex-wrap items-center justify-between gap-y-3">
        <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
          <time dateTime={post.date}>
            {t("postedOn")} {formattedDate}
          </time>
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5" />
            {post.readingTime}
          </span>
        </div>

        {post.availableLocales.length > 1 && (
          <div className="flex items-center gap-2">
            {LOCALES.filter((l) => post.availableLocales.includes(l)).map(
              (l) => (
                <Link
                  key={l}
                  href={`/blog/${post.slug}`}
                  locale={l}
                  className={cn(
                    "rounded-full border px-3 py-0.5 text-xs font-medium transition-colors",
                    locale === l
                      ? "border-teal-600/70 bg-teal-600/10 text-teal-700 dark:border-teal-400/70 dark:text-teal-300"
                      : "border-brand-border text-text-muted hover:border-gold-500/40 hover:text-gold-600",
                  )}
                >
                  {LANG_LABELS[l]}
                </Link>
              ),
            )}
          </div>
        )}
      </div>
    </header>
  );
}
