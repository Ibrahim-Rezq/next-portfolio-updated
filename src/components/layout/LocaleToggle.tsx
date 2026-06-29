"use client";

import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { useLocaleToggle } from "@/hooks/useLocaleToggle";
import type { Locale } from "@/i18n/types";

export function LocaleToggle() {
  const locale = useLocale() as Locale;
  const t = useTranslations("nav");
  const toggle = useLocaleToggle();

  return (
    <Button
      variant="ghost"
      size="icon-lg"
      aria-label={t("toggleLanguage")}
      onClick={toggle}
      className="border border-border bg-surface-card font-display text-[13px] font-bold text-text-heading hover:bg-gold-500/14 hover:text-gold-600"
    >
      {locale === "en" ? "ع" : "EN"}
    </Button>
  );
}
