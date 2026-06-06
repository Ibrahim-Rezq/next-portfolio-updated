"use client";

import { useTranslations } from "next-intl";

export function SkipLink() {
  const t = useTranslations("a11y");
  return (
    <a
      href="#main"
      className="sr-only rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50"
    >
      {t("skipToContent")}
    </a>
  );
}
