"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Download, Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/Logo";
import { LocaleToggle } from "@/components/layout/LocaleToggle";
import { dirFor, type Locale } from "@/i18n/types";
import { CV_PATH } from "@/data/socials";
import type { NavLink } from "@/components/layout/Navbar";

export function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const locale = useLocale() as Locale;
  const t = useTranslations("nav");
  const dir = dirFor(locale);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label={t("openMenu")}
        className="inline-flex size-9 items-center justify-center rounded-sm border border-border bg-surface-card text-text-heading transition-colors hover:bg-gold-500/14 hover:text-gold-600"
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side={dir === "rtl" ? "left" : "right"} className="gap-0">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2.5">
            <Logo size={28} />
            <span className="font-display text-base font-bold text-text-heading">
              Ibrahim Amin
            </span>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1 px-4 py-2">
          {links.map((l) => (
            <SheetClose
              key={l.href}
              render={
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-text-strong transition-colors hover:bg-gold-500/10 hover:text-gold-600"
                >
                  {l.label}
                </Link>
              }
            />
          ))}
        </nav>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-border p-4">
          <LocaleToggle />
          <a href={CV_PATH} download onClick={() => setOpen(false)}>
            <Button size="brand-lg" data-icon="inline-end">
              {t("downloadCV")}
              <Download />
            </Button>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
