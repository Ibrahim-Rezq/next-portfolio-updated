import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { About } from "@/components/sections/About";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about");
  return {
    title: t("title"),
    description: "About Ibrahim Amin — Next.js & React developer from Egypt.",
  };
}

export default function AboutPage() {
  return <About />;
}
