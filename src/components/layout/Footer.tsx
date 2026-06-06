"use client";

import { useTranslations } from "next-intl";
import { Logo } from "@/components/shared/Logo";
import { socials } from "@/data/socials";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="ia-pattern-bg relative bg-teal-900 text-cream">
      <div className="mx-auto max-w-[1120px] px-5 py-11 sm:px-7">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-cream">
              <Logo size={28} />
            </span>
            <div>
              <div className="font-display text-[15px] font-bold">
                Ibrahim Amin
              </div>
              <div className="text-[13px] text-cream/65">{t("tagline")}</div>
            </div>
          </div>

          <div className="flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                aria-label={s.label}
                target={s.id === "email" ? undefined : "_blank"}
                rel={s.id === "email" ? undefined : "noopener noreferrer"}
                className="inline-flex size-10 items-center justify-center rounded-sm bg-cream/8 text-cream transition-colors hover:bg-gold-500 hover:text-charcoal"
              >
                <s.icon className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-cream/15 pt-5 text-[13px] text-cream/60">
          <span>{t("copyright")}</span>
          <span>{t("builtWith")}</span>
        </div>
      </div>
    </footer>
  );
}
