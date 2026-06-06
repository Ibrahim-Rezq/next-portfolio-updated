"use client";

import { useTranslations } from "next-intl";
import { Info } from "lucide-react";

export function LangFallbackBanner() {
  const t = useTranslations("blog");

  return (
    <div className="mx-auto mb-8 max-w-[var(--measure)] px-5 sm:px-7">
      <div className="flex items-start gap-3 rounded-lg border border-gold-500/40 bg-gold-500/8 px-4 py-3 text-sm text-gold-600 dark:text-gold-300">
        <Info className="mt-0.5 size-4 shrink-0" />
        <span>{t("langFallback")}</span>
      </div>
    </div>
  );
}
