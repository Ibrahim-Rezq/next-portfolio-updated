import type { Localized } from "@/i18n/types";

export type BadgeTone = "teal" | "gold" | "sage";

export interface Project {
  name: string;
  kind: Localized<string>;
  tone: BadgeTone;
  description: Localized<string>;
  tech: string[];
  github: string | null;
  live: string | null;
}

export const projects: Project[] = [
  {
    name: "Quote Vault",
    kind: { en: "Full-stack", ar: "متكامل" },
    tone: "gold",
    description: {
      en: "A full-stack app for organizing quotes with multi-language support. Passwordless auth, Server Actions with Prisma ORM, dark/light mode, and English/Arabic support.",
      ar: "تطبيق متكامل لتنظيم الاقتباسات مع دعم متعدّد اللغات. تسجيل دخول بدون كلمة مرور، وServer Actions مع Prisma، ووضع داكن/فاتح، ودعم العربية والإنجليزية.",
    },
    tech: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    github: "https://github.com/Ibrahim-Rezq",
    live: null,
  },
  {
    name: "Personal Portfolio & Blog",
    kind: { en: "Web", ar: "ويب" },
    tone: "teal",
    description: {
      en: "A personal site with an integrated blog. Minimal, clean, and built to showcase work.",
      ar: "موقع شخصي مع مدوّنة مدمجة. بسيط ونظيف، ومبني لعرض الأعمال.",
    },
    tech: ["TypeScript", "Next.js", "Contentful CMS"],
    github: "https://github.com/Ibrahim-Rezq",
    live: "https://ibrahim-rezq.vercel.app",
  },
  {
    name: "E-commerce Frontend",
    kind: { en: "Frontend", ar: "واجهة" },
    tone: "sage",
    description: {
      en: "A team project leading the frontend of an e-commerce app. Focused on component structure, state management, and a clean shopping experience.",
      ar: "مشروع جماعي قُدت فيه واجهة تطبيق تجارة إلكترونية. ركّزت على بنية المكوّنات وإدارة الحالة وتجربة تسوّق نظيفة.",
    },
    tech: ["React", "JavaScript", "REST API"],
    github: "https://github.com/Ibrahim-Rezq",
    live: null,
  },
];
