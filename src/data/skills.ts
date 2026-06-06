import type { Localized } from "@/i18n/types";

export interface SkillCategory {
  category: Localized<string>;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: { en: "Languages", ar: "اللغات" },
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: { en: "Frameworks", ar: "أطر العمل" },
    skills: ["React", "Next.js", "React Native", "Tailwind CSS", "ShadCN/UI"],
  },
  {
    category: { en: "State & Data", ar: "الحالة والبيانات" },
    skills: ["Context API", "Redux", "Prisma", "Supabase"],
  },
  {
    category: { en: "Backend", ar: "الخلفية" },
    skills: ["Node.js", "Express.js", "REST APIs", "Strapi", "Django"],
  },
  {
    category: { en: "Tools", ar: "الأدوات" },
    skills: ["Git", "GitHub", "Vercel", "VS Code", "Claude Code"],
  },
];
