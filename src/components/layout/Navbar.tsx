"use client";

import { Download, Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { LocaleToggle } from "@/components/layout/LocaleToggle";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { OPEN_COMMAND_EVENT } from "@/components/layout/CommandPalette";
import { CV_PATH } from "@/data/socials";

export interface NavLink {
  href: string;
  label: string;
}

export function Navbar() {
  const t = useTranslations("nav");

  const links: NavLink[] = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/blog", label: t("blog") },
    { href: "/#work", label: t("work") },
    { href: "/#contact", label: t("contact") },
  ];

  const openCommand = () => window.dispatchEvent(new Event(OPEN_COMMAND_EVENT));

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-[color-mix(in_srgb,var(--bg-base)_86%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-5 sm:px-7">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Ibrahim Amin — home"
        >
          <Logo size={32} priority />
          <span className="font-display text-base font-bold whitespace-nowrap text-text-heading">
            Ibrahim Amin
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-sm px-3 py-2 text-sm font-medium text-text-strong transition-colors hover:text-gold-600"
            >
              {l.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={openCommand}
            aria-label={t("commandHint")}
            className="ms-1 inline-flex items-center gap-2 rounded-sm border border-border bg-surface-card px-2.5 py-1.5 text-xs text-text-muted transition-colors hover:text-gold-600"
          >
            <Search className="size-3.5" />
            <kbd className="font-mono text-[11px]">⌘K</kbd>
          </button>

          <span className="mx-1 flex items-center gap-1.5">
            <LocaleToggle />
            <ThemeToggle />
          </span>

          <a href={CV_PATH} download className="ms-1">
            <Button size="brand-lg" data-icon="inline-end">
              {t("downloadCV")}
              <Download />
            </Button>
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-1.5 md:hidden">
          <ThemeToggle />
          <MobileMenu links={links} />
        </div>
      </div>
    </header>
  );
}
