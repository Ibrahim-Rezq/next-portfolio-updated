import en from "@/messages/en.json";

// next-intl type augmentation — gives autocompletion on t("key")
type Messages = typeof en;
declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends Messages {}
}

export type Locale = "en" | "ar";

export const LOCALES: Locale[] = ["en", "ar"];
export const DEFAULT_LOCALE: Locale = "en";

/** A value available in both languages. */
export type Localized<T> = Record<Locale, T>;

export const dirFor = (locale: Locale): "ltr" | "rtl" =>
  locale === "ar" ? "rtl" : "ltr";
