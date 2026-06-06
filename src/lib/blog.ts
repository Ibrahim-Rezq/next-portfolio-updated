import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Locale } from "@/i18n/types";

const CONTENT_DIR = path.join(process.cwd(), "src/content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
  published: boolean;
  availableLocales: Locale[];
}

export interface Post extends PostMeta {
  content: string;
  locale: Locale;
  isFallback: boolean;
}

const FALLBACK_ORDER: Record<Locale, Locale> = { en: "ar", ar: "en" };

function getAvailableLocales(slug: string): Locale[] {
  const dir = path.join(CONTENT_DIR, slug);
  if (!fs.existsSync(dir)) return [];
  return (["en", "ar"] as Locale[]).filter((l) =>
    fs.existsSync(path.join(dir, `${l}.mdx`)),
  );
}

function parseMeta(slug: string, locale: Locale): PostMeta | null {
  const filePath = path.join(CONTENT_DIR, slug, `${locale}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  if (!data.published) return null;

  // gray-matter returns data as Record<string, unknown>.
  // Shapes proven correct by the frontmatter schema documented in CLAUDE.md.
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    tags: (data.tags as string[]) ?? [],
    readingTime: readingTime(content).text,
    published: Boolean(data.published),
    availableLocales: getAvailableLocales(slug),
  };
}

export async function getAllPosts(locale: Locale): Promise<PostMeta[]> {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const slugs = fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  return slugs
    .map((slug) => parseMeta(slug, locale))
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(
  slug: string,
  locale: Locale,
): Promise<Post | null> {
  const dir = path.join(CONTENT_DIR, slug);
  if (!fs.existsSync(dir)) return null;

  let resolvedLocale = locale;
  let isFallback = false;

  let filePath = path.join(dir, `${locale}.mdx`);
  if (!fs.existsSync(filePath)) {
    const fallback = FALLBACK_ORDER[locale];
    filePath = path.join(dir, `${fallback}.mdx`);
    if (!fs.existsSync(filePath)) return null;
    resolvedLocale = fallback;
    isFallback = true;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  // gray-matter returns data as Record<string, unknown>.
  // Shapes proven correct by the frontmatter schema documented in CLAUDE.md.
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    tags: (data.tags as string[]) ?? [],
    readingTime: readingTime(content).text,
    published: Boolean(data.published),
    availableLocales: getAvailableLocales(slug),
    content,
    locale: resolvedLocale,
    isFallback,
  };
}
