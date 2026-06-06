"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LivingGeometry } from "@/components/patterns/LivingGeometry";
import { useTranslations } from "next-intl";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { CV_PATH } from "@/data/socials";

export function Hero() {
  const t = useTranslations("hero");
  const tStats = useTranslations();

  return (
    <section className="ia-pattern-bg relative overflow-hidden">
      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1120px] items-center px-5 py-20 sm:px-7 md:py-24">
        {/* Living geometry — the spark */}
        <div
          className="pointer-events-none absolute inset-y-0 end-0 hidden w-1/2 items-center justify-center md:flex"
          aria-hidden
        >
          <LivingGeometry className="pointer-events-auto aspect-square w-[min(82%,440px)]" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-[640px]"
        >
          <motion.span
            variants={fadeInUp}
            className="eyebrow inline-flex items-center gap-2"
          >
            <Sparkle className="size-3.5 text-gold-500" />
            {t("eyebrow")}
          </motion.span>

          <motion.p
            variants={fadeInUp}
            className="mt-5 font-display text-lg font-medium text-text-muted"
          >
            {t("greeting")}
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="mt-2 text-[clamp(34px,6vw,56px)] leading-[1.05] font-extrabold tracking-[-0.025em] text-text-heading"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-5 max-w-[34rem] text-lg leading-relaxed text-text-strong"
          >
            {t("tagline")}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
            <a href="#work">
              <Button size="brand-lg" data-icon="inline-end">
                {t("viewWork")}
                <ArrowRight className="rtl:rotate-180" />
              </Button>
            </a>
            <a href={CV_PATH} download>
              <Button variant="gold" size="brand-lg" data-icon="inline-end">
                {t("downloadCV")}
                <Download />
              </Button>
            </a>
          </motion.div>

          <motion.dl
            variants={fadeInUp}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-5"
          >
            {(
              tStats.raw("stats") as Array<{ value: string; label: string }>
            ).map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-extrabold text-text-heading">
                  {s.value}
                </dd>
                <p className="mt-0.5 text-[13px] text-text-muted">{s.label}</p>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
