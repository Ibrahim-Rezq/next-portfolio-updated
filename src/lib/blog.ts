import readingTime from "reading-time";
import { put } from "@vercel/blob";
import type { Locale } from "@/i18n/types";
import { sql } from "@/lib/db";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
  availableLocales: Locale[];
  lang: Locale;
  coverImage?: string;
}

export interface Post extends PostMeta {
  content: string;
  isFallback: boolean;
}

export interface PostRow {
  slug: string;
  lang: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  date: string;
  cover_image: string | null;
}

// ─── Read functions (used by pages) ──────────────────────────────────────────

export async function getAllPosts(locale: Locale): Promise<PostMeta[]> {
  try {
    const rows = (await sql`
      SELECT slug, lang, title, excerpt, content, tags, date, cover_image
      FROM posts
      WHERE lang = ${locale}
      ORDER BY date DESC
    `) as PostRow[];

    return rows.map((row) => ({
      slug: row.slug,
      title: row.title,
      date: String(row.date),
      excerpt: row.excerpt,
      tags: row.tags ?? [],
      readingTime: readingTime(row.content).text,
      // Listing query filters by one locale; cross-locale count not needed for the list view.
      availableLocales: [row.lang as Locale],
      lang: row.lang as Locale,
      coverImage: row.cover_image ?? undefined,
    }));
  } catch (err) {
    console.error("[blog.getAllPosts]", err);
    return [];
  }
}

export async function getPost(
  slug: string,
  locale: Locale,
): Promise<Post | null> {
  try {
    const localeRows = (await sql`
      SELECT lang FROM posts WHERE slug = ${slug} ORDER BY lang
    `) as { lang: string }[];

    if (localeRows.length === 0) return null;

    const availableLocales = localeRows.map((r) => r.lang as Locale);

    const exactRows = (await sql`
      SELECT slug, lang, title, excerpt, content, tags, date, cover_image
      FROM posts WHERE slug = ${slug} AND lang = ${locale}
    `) as PostRow[];

    let row: PostRow;
    let isFallback = false;

    if (exactRows.length > 0) {
      row = exactRows[0];
    } else {
      const fallback = availableLocales[0];
      const fallbackRows = (await sql`
        SELECT slug, lang, title, excerpt, content, tags, date, cover_image
        FROM posts WHERE slug = ${slug} AND lang = ${fallback}
      `) as PostRow[];
      if (fallbackRows.length === 0) return null;
      row = fallbackRows[0];
      isFallback = true;
    }

    return {
      slug: row.slug,
      title: row.title,
      date: String(row.date),
      excerpt: row.excerpt,
      tags: row.tags ?? [],
      readingTime: readingTime(row.content).text,
      availableLocales,
      lang: row.lang as Locale,
      coverImage: row.cover_image ?? undefined,
      content: row.content,
      isFallback,
    };
  } catch (err) {
    console.error("[blog.getPost] slug=%s locale=%s", slug, locale, err);
    return null;
  }
}

// ─── Service functions (used by the content API routes) ──────────────────────

export async function listPosts(): Promise<
  { slug: string; title: string; lang: Locale }[]
> {
  const rows = (await sql`
    SELECT slug, title, lang FROM posts ORDER BY date DESC
  `) as { slug: string; title: string; lang: string }[];
  return rows.map((r) => ({ ...r, lang: r.lang as Locale }));
}

export interface CreatePostInput {
  slug: string;
  lang: Locale;
  title: string;
  excerpt: string;
  tags: string[];
  content: string;
  date: string;
  coverImage?: string;
  coverImageMime?: string;
}

/** Returns `"conflict"` if (slug, lang) already exists, `"created"` on success. */
export async function createPost(
  input: CreatePostInput,
): Promise<"created" | "conflict"> {
  const {
    slug,
    lang,
    title,
    excerpt,
    tags,
    content,
    date,
    coverImage,
    coverImageMime,
  } = input;

  const existing = (await sql`
    SELECT id FROM posts WHERE slug = ${slug} AND lang = ${lang}
  `) as { id: string }[];
  if (existing.length > 0) return "conflict";

  const coverImageUrl =
    coverImage && coverImageMime
      ? await uploadCover(slug, lang, coverImage, coverImageMime)
      : null;

  await sql`
    INSERT INTO posts (slug, lang, title, excerpt, tags, content, date, cover_image)
    VALUES (${slug}, ${lang}, ${title}, ${excerpt}, ${tags}, ${content}, ${date}, ${coverImageUrl})
  `;

  return "created";
}

export interface UpdatePostInput {
  lang: Locale;
  title?: string;
  excerpt?: string;
  tags?: string[];
  content?: string;
  date?: string;
  coverImage?: string;
  coverImageMime?: string;
}

/** Returns `"not_found"` if (slug, lang) does not exist, `"updated"` on success. */
export async function updatePost(
  slug: string,
  input: UpdatePostInput,
): Promise<"updated" | "not_found"> {
  const { lang, coverImage, coverImageMime } = input;

  const rows = (await sql`
    SELECT slug, lang, title, excerpt, content, tags, date, cover_image
    FROM posts WHERE slug = ${slug} AND lang = ${lang}
  `) as PostRow[];
  if (rows.length === 0) return "not_found";

  const current = rows[0];

  const coverImageUrl =
    coverImage && coverImageMime
      ? await uploadCover(slug, lang, coverImage, coverImageMime)
      : current.cover_image;

  await sql`
    UPDATE posts SET
      title       = ${input.title ?? current.title},
      excerpt     = ${input.excerpt ?? current.excerpt},
      tags        = ${input.tags ?? current.tags},
      content     = ${input.content ?? current.content},
      date        = ${input.date ?? current.date},
      cover_image = ${coverImageUrl},
      updated_at  = now()
    WHERE slug = ${slug} AND lang = ${lang}
  `;

  return "updated";
}

// ─── Private helpers ─────────────────────────────────────────────────────────

async function uploadCover(
  slug: string,
  lang: Locale,
  base64: string,
  mime: string,
): Promise<string> {
  const buffer = Buffer.from(base64, "base64");
  const ext = mime.split("/")[1] || "bin";
  const { url } = await put(`covers/${slug}-${lang}.${ext}`, buffer, {
    access: "public",
  });
  return url;
}
