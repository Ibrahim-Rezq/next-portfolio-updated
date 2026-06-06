"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "next-intl";
import { dirFor, type Locale } from "@/i18n/types";

export function LocaleTransition({ children }: { children: React.ReactNode }) {
  const locale = useLocale() as Locale;
  const dir = dirFor(locale);
  const enter = dir === "rtl" ? 28 : -28;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={locale}
        initial={{ opacity: 0, x: enter }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -enter }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
