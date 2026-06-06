# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio for Ibrahim Amin (Next.js & React developer, Egypt). Single-page marketing site (`/`) plus `/about` and `/blog` routes. Warm, handcrafted, **bilingual EN/AR** with Islamic-geometric motifs. Built from a brand design system: teal `#134E52`, gold `#C4943F`, cream `#FEF8EC`, on a 60/30/10 color ratio.

## Commands

Package manager is **pnpm** (Next.js 16, React 19, Turbopack).

```bash
pnpm install
pnpm dev        # dev server, http://localhost:3000
pnpm build      # production build
pnpm start      # serve the production build
pnpm lint       # eslint (next core-web-vitals + typescript flat config)
pnpm format     # prettier --write .
```

There is **no test setup** in this repo. Husky pre-commit runs `lint-staged` (eslint + prettier on staged files only). Commit-msg hook enforces conventional commits via commitlint.

## Architecture

**Path alias:** `@/*` → `src/*`.

### i18n — next-intl with URL-based routing (the central cross-cutting concern)

Localization is **server-side** with next-intl v4. Locale is part of the URL: `/en/...` and `/ar/...`.

- **`src/i18n/routing.ts`** — locale list (`["en", "ar"]`) and defaultLocale (`"en"`)
- **`src/i18n/navigation.ts`** — locale-aware `Link`, `useRouter`, `usePathname`, `redirect` (import these instead of `next/link`/`next/navigation`)
- **`src/i18n/request.ts`** — server-side next-intl config; loads the correct JSON message file per request
- **`src/i18n/types.ts`** — `Locale` type, `Localized<T>`, `dirFor()`, plus the `IntlMessages` global augmentation for type-safe `t("key")` calls
- **`src/proxy.ts`** — next-intl middleware (file is `proxy.ts` not `middleware.ts` — Next.js 16 renamed it)
- **`src/messages/en.json` / `src/messages/ar.json`** — UI string dictionaries. Both files must stay in sync with the keys.

**In Server Components:** `const t = await getTranslations("namespace")` then `t("key")`.  
**In Client Components:** `const t = useTranslations("namespace")` then `t("key")`.  
**Locale value:** `const locale = useLocale() as Locale` (safe cast because routing guarantees it).  
**Locale toggle:** `useRouter().replace(pathname, { locale: next })` — changes the URL prefix, no localStorage.

**RTL:** `<html lang dir>` is set server-side in `[locale]/layout.tsx`. Use Tailwind logical utilities (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`, `rtl:`) everywhere — never raw left/right.

Adding a string: add the key to `en.json`, `ar.json`, and the TypeScript shape is inferred automatically from `en.json` (via the `IntlMessages` augmentation in `types.ts`).

### Route structure

```
src/app/
  layout.tsx           ← Minimal root passthrough (required by Next.js)
  not-found.tsx        ← Bare HTML fallback (no providers)
  [locale]/
    layout.tsx         ← Real layout: sets <html lang dir>, NextIntlClientProvider, Providers
    page.tsx           ← Home (sections stack)
    about/page.tsx
    blog/
      page.tsx         ← Post listing
      [slug]/
        page.tsx       ← Single post (MDXRemote)
        not-found.tsx
    opengraph-image.tsx
```

### Content vs. UI strings

- **UI chrome** (nav, buttons, section headings, a11y labels) → `src/messages/*.json`
- **Section content** (experience, projects, skills, socials) → `src/data/*.ts` as typed arrays with `Localized<string>` for bilingual fields. Access with `entry.field[locale]`.
- **CV path** and social links → `src/data/socials.ts` (`CV_PATH`).

### Providers & layout

`[locale]/layout.tsx` composes: `NextIntlClientProvider` → `ThemeProvider` (next-themes, class strategy, `defaultTheme="light"`, system disabled) → `MotionConfig reducedMotion="user"`. The persistent `Navbar`, `Footer`, `CommandPalette` (⌘K) wrap all pages.

### Styling — Tailwind v4 + brand tokens

- **No `tailwind.config.ts`** — Tailwind v4 is configured entirely in `src/app/globals.css` (`@import "tailwindcss"`, `@theme inline { ... }`).
- Brand tokens are CSS custom properties in `:root` / `.dark` (e.g. `--teal-700`, `--gold-500`, `--text-heading`). They are exposed to Tailwind via `@theme inline`, giving utilities like `text-text-heading`, `bg-cream`, `text-gold-500`. **Prefer these brand utilities over raw hex.**
- Reusable design classes in `globals.css`: `.eyebrow` (uppercase label), `.ia-pattern-bg` / `.ia-pattern-bg--teal` (tessellation backgrounds), `.brand-prose` (About page prose), `.blog-prose` (blog MDX prose). Use them instead of re-deriving styles.

### UI components — shadcn (Base UI), restyled

shadcn configured (`components.json`, style `base-nova`, Base UI under the hood, lucide icons). Primitives in `src/components/ui/`. Restyled to the brand — notably `button.tsx` has custom variant `gold` and size `brand-lg`. When adding shadcn components, restyle to tokens.

### Component layering

- `components/sections/*` — page sections (Hero, Experience, Projects, Skills, Contact, About). Client components (use next-intl + framer-motion).
- `components/layout/*` — Navbar, Footer, MobileMenu, CommandPalette, ThemeToggle, LocaleToggle.
- `components/blog/*` — PostCard, PostHeader, MDXComponents, LangFallbackBanner.
- `components/patterns/*` — Islamic-geometry SVG: `LivingGeometry` (cursor-following hero), `DiamondLattice`, `StarDecoration`.
- `components/shared/*` — Cross-cutting: `AnimatedSection`/`AnimatedItem` (scroll-stagger wrappers), `SectionHeading`, `Tag`, `Logo`, `SkipLink`, `LocaleTransition`.

### Animation

Variants centralized in `src/lib/animations.ts` (`fadeInUp`, `fadeInLeft`, `staggerContainer`, `staggerFast`, `viewportOnce`). Reuse these. For scroll reveals: `<AnimatedSection>` + `<AnimatedItem>`. All motion respects `prefers-reduced-motion` via global `MotionConfig`.

### Blog system

Blog posts live in `src/content/blog/[slug]/[locale].mdx`:

```
src/content/blog/
  my-post/
    en.mdx   ← English version (present = EN available)
    ar.mdx   ← Arabic version (present = AR available)
```

A post with only `en.mdx` is EN-only. If a user visits the AR route for an EN-only post, `getPost()` returns the EN content with `isFallback: true` and `<LangFallbackBanner>` appears.

**Frontmatter schema:**

```yaml
---
title: "Post title in the file's language"
date: "2026-01-15"
excerpt: "Short description."
tags: ["Tag1", "Tag2"]
published: true
---
```

**`src/lib/blog.ts`** — server-only utilities:

- `getAllPosts(locale)` — reads all slug dirs, finds `[locale].mdx`, filters `published: true`, sorts by date desc
- `getPost(slug, locale)` — reads locale file, falls back to other locale if missing

**MDX rendering:** `next-mdx-remote/rsc` (Server Component). Plugins: `remark-gfm`, `rehype-slug`, `rehype-autolink-headings`, `rehype-pretty-code` (theme: "vesper"). Custom component overrides in `src/components/blog/MDXComponents.tsx`.

## Conventions

- File naming: components are `PascalCase.tsx`; `lib/`, `data/`, `messages/`, `providers/` are `kebab-case.ts(x)`.
- Prettier: 2-space, double quotes, semicolons, trailing commas, 80-col, always-parens arrows.
- TypeScript is strict. Per global rules: **never use `any`** — prefer explicit interfaces, `unknown` as last resort. Document any necessary `as` casts.
- Class merging: `cn()` from `@/lib/utils` (clsx + tailwind-merge).
- Import `Link`, `useRouter`, `usePathname` from `@/i18n/navigation` — never from `next/link` or `next/navigation` directly (they're locale-unaware).
