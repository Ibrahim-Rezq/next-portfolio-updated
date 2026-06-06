"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import { useTranslations } from "next-intl";
import { EMAIL, socials } from "@/data/socials";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="ia-pattern-bg scroll-mt-20 border-t border-brand-border bg-bg-alt py-20 md:py-28"
    >
      <div className="mx-auto max-w-[720px] px-5 text-center sm:px-7">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} center />

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-4 max-w-prose text-base leading-relaxed text-text-strong"
        >
          {t("message")}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 flex justify-center"
        >
          <a href={`mailto:${EMAIL}`}>
            <Button size="brand-lg" data-icon="inline-start">
              <Mail />
              {t("sendEmail")}
            </Button>
          </a>
        </motion.div>

        <p className="mt-10 text-xs tracking-wide text-text-muted uppercase">
          {t("elsewhere")}
        </p>
        <div className="mt-4 flex justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.id}
              href={s.href}
              aria-label={s.label}
              target={s.id === "email" ? undefined : "_blank"}
              rel={s.id === "email" ? undefined : "noopener noreferrer"}
              className="inline-flex size-11 items-center justify-center rounded-sm border border-brand-border bg-surface-card text-text-heading transition-colors hover:border-gold-500/40 hover:text-gold-600"
            >
              <s.icon className="size-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
