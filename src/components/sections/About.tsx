"use client";

import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/shared/Logo";
import { DiamondLattice } from "@/components/patterns/DiamondLattice";
import { StarDecoration } from "@/components/patterns/StarDecoration";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function About() {
  const t = useTranslations("about");
  const tHero = useTranslations("hero");

  return (
    <section className="ia-pattern-bg">
      <div className="mx-auto max-w-[760px] px-5 py-16 sm:px-7 md:py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={fadeInUp} className="eyebrow">
            {t("eyebrow")}
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="mt-2 text-[clamp(30px,5vw,40px)] font-extrabold tracking-[-0.02em] text-text-heading"
          >
            {t("title")}
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="mt-6 flex items-center gap-4 rounded-lg border border-brand-border bg-surface-card p-4 shadow-[var(--shadow-sm)]"
          >
            <span className="inline-flex size-14 items-center justify-center rounded-full bg-bg-alt">
              <Logo size={36} />
            </span>
            <div>
              <div className="font-display text-base font-bold text-text-heading">
                Ibrahim Amin
              </div>
              <div className="text-sm text-text-muted">{tHero("eyebrow")}</div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="brand-prose mt-8">
            {(t.raw("bio") as string[]).map((para) => (
              <p key={para}>{para}</p>
            ))}
          </motion.div>
        </motion.div>

        <DiamondLattice className="my-10" />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="flex items-center gap-2 text-xl font-bold text-text-heading">
            <GraduationCap className="size-5 text-gold-500" />
            {t("educationTitle")}
          </h2>
          <p className="mt-3 text-text-strong">{t("education")}</p>
        </motion.div>

        <DiamondLattice className="my-10" />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="text-xl font-bold text-text-heading">
            {t("certificatesTitle")}
          </h2>
          <ul className="mt-4 space-y-3">
            {(t.raw("certificates") as string[]).map((cert) => (
              <li
                key={cert}
                className="flex items-start gap-3 text-text-strong"
              >
                <StarDecoration size={16} className="mt-1 shrink-0" />
                <span>{cert}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-text-muted">{t("note")}</p>
        </motion.div>

        <Link
          href="/"
          className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-text-heading transition-colors hover:text-gold-600"
        >
          <ArrowLeft className="size-4 rtl:rotate-180" />
          {t("backHome")}
        </Link>
      </div>
    </section>
  );
}
