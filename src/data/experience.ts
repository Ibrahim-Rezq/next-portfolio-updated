import type { Localized } from "@/i18n/types";

export interface ExperienceEntry {
  role: Localized<string>;
  company: Localized<string>;
  period: Localized<string>;
  description: Localized<string>;
  tech: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: { en: "Full-Stack Developer", ar: "مطوّر full-stack" },
    company: {
      en: "Islamic Educational Institution",
      ar: "مؤسسة تعليمية إسلامية",
    },
    period: { en: "2023 – Present", ar: "2023 – حتى الآن" },
    description: {
      en: "Built a student progress tracking platform with weekly performance monitoring. Developed a Telegram scraper for collecting assignments and lecture data. Created Excel data-processing tools for student reports, and a daily tracking dashboard for supervisors.",
      ar: "بنيت منصّة لمتابعة تقدّم الطلاب مع رصد أسبوعي للأداء. طوّرت أداة لجمع الواجبات وبيانات المحاضرات من تيليجرام، وأدوات لمعالجة بيانات Excel لتقارير الطلاب، ولوحة متابعة يومية للمشرفين.",
    },
    tech: ["Next.js", "React Native", "Express.js", "Telegram Bot API"],
  },
  {
    role: { en: "Full-Stack Developer", ar: "مطوّر full-stack" },
    company: { en: "AFDV Marketing", ar: "AFDV Marketing" },
    period: { en: "Jan 2023 – Jul 2023", ar: "يناير 2023 – يوليو 2023" },
    description: {
      en: "Built a full-stack e-commerce platform with a Next.js frontend and Django backend. Converted Figma mockups into responsive production UIs, developed a custom internal CMS, and led the frontend architecture.",
      ar: "بنيت منصّة تجارة إلكترونية متكاملة بواجهة Next.js وخلفية Django. حوّلت تصاميم Figma إلى واجهات إنتاجية متجاوبة، وطوّرت نظام إدارة محتوى داخلياً، وقُدت معمارية الواجهة الأمامية.",
    },
    tech: ["Next.js", "React", "Django", "Python"],
  },
  {
    role: { en: "Freelance React Developer", ar: "مطوّر React مستقل" },
    company: { en: "Upwork", ar: "Upwork" },
    period: { en: "Apr 2022 – Present", ar: "أبريل 2022 – حتى الآن" },
    description: {
      en: "I build dashboards, internal tools, and web apps for clients in the Next.js and React ecosystem. Some projects are purely frontend, converting designs into clean responsive UIs. Others are full builds where I handle the backend too. Either way the goal is the same: ship something solid that does the job.",
      ar: "ببني لوحات تحكم وأدوات داخلية وتطبيقات ويب للعملاء في بيئة Next.js وReact. في مشاريع frontend بحتة بحوّل فيها التصاميم لواجهات نظيفة ومتجاوبة. وفي مشاريع كاملة باتكفّل فيها بالخلفية كمان. في الحالتين الهدف واحد: أطلّع حاجة متينة بتعمل اللي المفروض تعمله.",
    },
    tech: ["React", "Next.js", "JavaScript", "HTML/CSS"],
  },
];
