"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  AnimatedSection,
  AnimatedItem,
} from "@/components/shared/AnimatedSection";
import { StarDecoration } from "@/components/patterns/StarDecoration";
import { Tag } from "@/components/shared/Tag";
import { useLocale, useTranslations } from "next-intl";
import { type Locale } from "@/i18n/types";
import { fadeInLeft, viewportOnce } from "@/lib/animations";
import { experience } from "@/data/experience";

export function Experience() {
  const t = useTranslations("experience");
  const locale = useLocale() as Locale;

  return (
    <section id="experience" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-7">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        <div className="relative mt-12">
          {/* The gold lattice strand */}
          <span
            aria-hidden
            className="absolute top-4 bottom-6 start-[15px] w-px bg-gradient-to-b from-gold-500/60 via-gold-500/30 to-transparent md:start-[19px]"
          />

          <AnimatedSection>
            <ol className="space-y-9">
              {experience.map((entry, i) => (
                <li
                  key={`${entry.company.en}-${i}`}
                  className="grid grid-cols-[32px_1fr] gap-x-4 md:grid-cols-[40px_1fr] md:gap-x-6"
                >
                  {/* Star node — outline that fills to solid gold on scroll-in */}
                  <div className="relative flex justify-center pt-1">
                    <span className="relative inline-flex size-8 items-center justify-center rounded-full bg-bg-base">
                      <StarDecoration
                        outline
                        size={26}
                        className="absolute opacity-40"
                      />
                      <motion.span
                        initial={{ opacity: 0, scale: 0.4 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inline-flex"
                      >
                        <StarDecoration size={18} />
                      </motion.span>
                    </span>
                  </div>

                  {/* Role card */}
                  <AnimatedItem
                    variants={fadeInLeft}
                    className="rounded-lg border border-brand-border bg-surface-card p-5 shadow-[var(--shadow-sm)] sm:p-6"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h3 className="text-lg font-bold text-text-heading">
                        {entry.role[locale]}
                      </h3>
                      <span className="font-mono text-xs text-text-muted">
                        {entry.period[locale]}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm font-medium text-gold-600 dark:text-gold-300">
                      {entry.company[locale]}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-text-strong">
                      {entry.description[locale]}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {entry.tech.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>
                  </AnimatedItem>
                </li>
              ))}
            </ol>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
