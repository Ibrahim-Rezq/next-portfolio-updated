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
  const slugs = [...new Set(postsByLocale.flat().map((post) => post.slug))];

  const blogEntries: MetadataRoute.Sitemap = slugs.flatMap((slug) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}/blog/${slug}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${SITE_URL}/${l}/blog/${slug}`]),
        ) as Record<string, string>,
      },
    })),
  );

  return [...staticEntries, ...blogEntries];
}
