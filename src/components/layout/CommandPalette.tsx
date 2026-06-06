"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLocale, useTranslations } from "next-intl";
import {
  BookOpen,
  Download,
  Home,
  Languages,
  LayoutGrid,
  Mail,
  MoonStar,
  User,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { usePathname, useRouter } from "@/i18n/navigation";
import { type Locale } from "@/i18n/types";
import { CV_PATH, socials } from "@/data/socials";

/** Open the palette from anywhere: window.dispatchEvent(new Event("ia:command")). */
export const OPEN_COMMAND_EVENT = "ia:command";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();
  const locale = useLocale() as Locale;
  const t = useTranslations("command");
  const tNav = useTranslations("nav");

  const toggleLocale = () => {
    const next: Locale = locale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: next });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    const onOpen = () => setOpen(true);
    document.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_COMMAND_EVENT, onOpen);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_COMMAND_EVENT, onOpen);
    };
  }, []);

  const run = (action: () => void) => () => {
    setOpen(false);
    action();
  };

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title={tNav("commandHint")}
      description={t("placeholder")}
      className="font-mono"
    >
      <CommandInput placeholder={t("placeholder")} />
      <CommandList>
        <CommandEmpty>{t("empty")}</CommandEmpty>

        <CommandGroup heading={t("groupNav")}>
          <CommandItem onSelect={run(() => router.push("/"))}>
            <Home />
            <span>{t("goHome")}</span>
          </CommandItem>
          <CommandItem onSelect={run(() => router.push("/about"))}>
            <User />
            <span>{t("goAbout")}</span>
          </CommandItem>
          <CommandItem onSelect={run(() => router.push("/blog"))}>
            <BookOpen />
            <span>{t("goBlog")}</span>
          </CommandItem>
          <CommandItem onSelect={run(() => router.push("/#work"))}>
            <LayoutGrid />
            <span>{t("goWork")}</span>
          </CommandItem>
          <CommandItem onSelect={run(() => router.push("/#contact"))}>
            <Mail />
            <span>{t("goContact")}</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading={t("groupActions")}>
          <CommandItem
            onSelect={run(() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark"),
            )}
          >
            <MoonStar />
            <span>{t("toggleTheme")}</span>
          </CommandItem>
          <CommandItem onSelect={run(toggleLocale)}>
            <Languages />
            <span>{t("toggleLanguage")}</span>
          </CommandItem>
          <CommandItem onSelect={run(() => window.open(CV_PATH, "_blank"))}>
            <Download />
            <span>{t("downloadCV")}</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading={t("groupSocial")}>
          {socials.map((s) => (
            <CommandItem
              key={s.id}
              onSelect={run(() => window.open(s.href, "_blank"))}
            >
              <s.icon />
              <span>{s.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
