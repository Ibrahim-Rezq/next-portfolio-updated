import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/siteConfig";
import type { Locale } from "@/i18n/types";

const staticRoutes = ["", "/about", "/blog"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locales = routing.locales;

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.flatMap((path) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${SITE_URL}/${l}${path}`]),
        ) as Record<string, string>,
      },
    })),
  );

  const postsByLocale = await Promise.all(
    locales.map((locale) => getAllPosts(locale as Locale)),
  );

  const bySlug = new Map<string, { locales: Locale[]; lastModified: Date }>();
  for (const post of postsByLocale.flat()) {
    const entry = bySlug.get(post.slug) ?? {
      locales: [],
      lastModified: new Date(post.date),
    };
    entry.locales.push(post.lang);
    const postDate = new Date(post.date);
    if (postDate > entry.lastModified) entry.lastModified = postDate;
    bySlug.set(post.slug, entry);
  }

  const blogEntries: MetadataRoute.Sitemap = [...bySlug.entries()].flatMap(
    ([slug, { locales: postLocales, lastModified }]) =>
      postLocales.map((locale) => ({
        url: `${SITE_URL}/${locale}/blog/${slug}`,
        lastModified,
        alternates: {
          languages: Object.fromEntries(
            postLocales.map((l) => [l, `${SITE_URL}/${l}/blog/${slug}`]),
          ) as Record<string, string>,
        },
      })),
  );

  return [...staticEntries, ...blogEntries];
}
