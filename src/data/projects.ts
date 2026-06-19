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
      en: "A full-stack app for collecting and organizing quotes. Passwordless login, Server Actions with Prisma, dark and light themes, and full English/Arabic support.",
      ar: "تطبيق متكامل لجمع الاقتباسات وتنظيمها. تسجيل دخول من غير باسوورد، وServer Actions مع Prisma، ومظهر فاتح وداكن، ودعم كامل للعربي والإنجليزي.",
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
      en: "A personal site with a blog built in. Kept it minimal on purpose so the work is what stands out.",
      ar: "موقع شخصي مع مدوّنة جواه. خليته بسيط عن قصد عشان الشغل هو اللي يبان.",
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
      en: "A team project where I led the frontend of an e-commerce app. My part was the component structure and state management, plus keeping the shopping flow simple.",
      ar: "مشروع جماعي قُدت فيه واجهة تطبيق تجارة إلكترونية. نصيبي كان بنية المكوّنات وإدارة الحالة، وإني أخلي تجربة الشرا بسيطة.",
    },
    tech: ["React", "JavaScript", "REST API"],
    github: "https://github.com/Ibrahim-Rezq",
    live: null,
  },
];
