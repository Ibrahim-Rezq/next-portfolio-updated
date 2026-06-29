"use client";

import { Languages, LayoutDashboard, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  AnimatedSection,
  AnimatedItem,
} from "@/components/shared/AnimatedSection";
import { StarDecoration } from "@/components/patterns/StarDecoration";
import type { ComponentType } from "react";

interface ServiceCard {
  id: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

export function Services() {
  const t = useTranslations("services");

  const cards: ServiceCard[] = [
    {
      id: "dashboard",
      icon: LayoutDashboard,
      title: t("card1.title"),
      desc: t("card1.desc"),
    },
    {
      id: "tool",
      icon: Wrench,
      title: t("card2.title"),
      desc: t("card2.desc"),
    },
    {
      id: "bilingual",
      icon: Languages,
      title: t("card3.title"),
      desc: t("card3.desc"),
    },
  ];

  return (
    <section
      id="services"
      className="scroll-mt-20 border-y border-brand-border bg-bg-alt py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-7">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        <AnimatedSection className="mt-10 grid gap-5 sm:grid-cols-3">
          {cards.map(({ id, icon: Icon, title, desc }) => (
            <AnimatedItem
              key={id}
              className="group relative flex flex-col rounded-lg border border-brand-border bg-surface-card p-6 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-[var(--shadow-gold)]"
            >
              <StarDecoration
                size={30}
                className="absolute top-3.5 end-3.5 opacity-[0.16] transition-opacity duration-300 group-hover:opacity-30"
              />
              <Icon className="size-8 text-gold-500" />
              <h3 className="mt-4 text-lg font-bold text-text-heading">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-strong">
                {desc}
              </p>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
