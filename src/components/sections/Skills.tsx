"use client";

import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  AnimatedSection,
  AnimatedItem,
} from "@/components/shared/AnimatedSection";
import { useLocale, useTranslations } from "next-intl";
import { type Locale } from "@/i18n/types";
import { skills } from "@/data/skills";

export function Skills() {
  const t = useTranslations("skills");
  const locale = useLocale() as Locale;

  return (
    <section id="skills" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-7">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        <AnimatedSection className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <AnimatedItem key={group.category.en}>
              <h3 className="text-base font-semibold text-text-heading">
                {group.category[locale]}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-teal-700/30 bg-surface-card px-3 py-1.5 text-[13px] font-medium text-teal-700 dark:border-teal-500/30 dark:text-teal-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
