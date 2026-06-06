"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const t = useTranslations("nav");

  // resolvedTheme is undefined until mounted → renders Moon on server & first
  // client paint, avoiding a hydration mismatch without a mounted flag.
  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon-lg"
      aria-label={t("toggleTheme")}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="border border-border bg-surface-card text-text-heading hover:bg-gold-500/14 hover:text-gold-600"
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}
