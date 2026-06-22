-- Run this once in the Neon query runner (Vercel dashboard → Storage → your DB → Query)

CREATE TABLE posts (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug        TEXT NOT NULL,
  lang        VARCHAR(2) NOT NULL CHECK (lang IN ('en', 'ar')),
  title       TEXT NOT NULL,
  excerpt     TEXT NOT NULL,
  content     TEXT NOT NULL,
  tags        TEXT[] NOT NULL DEFAULT '{}',
  date        DATE NOT NULL,
  cover_image TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT posts_slug_lang_key UNIQUE (slug, lang)
);
