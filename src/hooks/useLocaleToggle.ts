"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/types";

export function useLocaleToggle() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  return () => {
    const next: Locale = locale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: next });
  };
}
