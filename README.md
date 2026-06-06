# Ibrahim Amin — Portfolio

Personal portfolio for Ibrahim Amin, a Next.js & React developer from Egypt.
Warm, handcrafted, bilingual (EN/AR) with subtle Islamic-geometric motifs.

Built from the brand design system (Claude Design handoff) — teal `#134E52`,
gold `#C4943F`, cream `#FEF8EC`, 60/30/10 ratio.

## Stack

- **Next.js 16** (App Router) + **TypeScript** + **Turbopack**
- **Tailwind CSS v4** with brand tokens in `src/app/globals.css`
- **shadcn/ui** (Base UI) — restyled to the brand
- **framer-motion** — animations (respects `prefers-reduced-motion`)
- **next-themes** — dark mode
- Self-paced i18n via a lightweight `LocaleProvider` (client EN/AR toggle + RTL)

## Distinctive features

- **Living-geometry hero** — an eight-pointed-star girih motif that self-draws
  on load and follows the cursor (`components/patterns/LivingGeometry.tsx`).
- **⌘K command palette** — navigation, theme, language, CV, and socials
  (`components/layout/CommandPalette.tsx`).
- **Lattice timeline** — Experience rendered on a gold diamond-lattice strand
  with star nodes that fill in on scroll (`components/sections/Experience.tsx`).
- **Animated RTL flip** — the EN/AR toggle mirrors the layout with a slide+fade
  transition (`components/shared/LocaleTransition.tsx`).

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm lint
```

## Content

- Section content: `src/data/*` (experience, projects, skills, socials)
- UI strings (EN/AR): `src/messages/{en,ar}.ts`
- CV: `public/Ibrahim-Amin-CV.pdf`
- Brand assets: `public/` (logo, favicons) and `public/patterns/` (star, lattice, tessellation)

## Notes / TODO

- Arabic copy is hand-written in the brand voice — give it a review pass.
- The blog (`/blog`, MDX) is a planned fast-follow, not in this build.
