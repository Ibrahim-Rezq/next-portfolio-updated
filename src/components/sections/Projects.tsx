"use client";

import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/shared/icons";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  AnimatedSection,
  AnimatedItem,
} from "@/components/shared/AnimatedSection";
import { StarDecoration } from "@/components/patterns/StarDecoration";
import { Tag } from "@/components/shared/Tag";
import { Badge } from "@/components/ui/badge";
import { useLocale, useTranslations } from "next-intl";
import { type Locale } from "@/i18n/types";
import { projects } from "@/data/projects";

export function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale() as Locale;

  return (
    <section
      id="work"
      className="scroll-mt-20 border-y border-brand-border bg-bg-alt py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-7">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        <AnimatedSection className="mt-10 grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <AnimatedItem
              key={p.name}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-brand-border bg-surface-card p-6 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-[var(--shadow-gold)]"
            >
              <StarDecoration
                size={30}
                className="absolute top-3.5 end-3.5 opacity-[0.16] transition-opacity duration-300 group-hover:opacity-30"
              />

              <div className="flex items-center justify-between">
                <Badge variant={p.tone}>{p.kind[locale]}</Badge>
              </div>

              <h3 className="mt-3.5 text-xl font-bold text-text-heading">
                {p.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-strong">
                {p.description[locale]}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-4 pt-1">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-text-heading transition-colors hover:text-gold-600"
                  >
                    <GithubIcon className="size-4" />
                    {t("viewSource")}
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-text-heading transition-colors hover:text-gold-600"
                  >
                    <ExternalLink className="size-4" />
                    {t("liveDemo")}
                  </a>
                )}
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
