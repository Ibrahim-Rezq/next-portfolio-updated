import { ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function BlogPostNotFound() {
  const t = await getTranslations("blog");

  return (
    <div className="flex min-h-[60svh] flex-col items-center justify-center px-5 py-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-3xl font-bold text-text-heading">
        Post not found
      </h1>
      <p className="mt-3 text-text-muted">
        This post may have been removed or the URL is incorrect.
      </p>
      <Link
        href="/blog"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal-700 underline underline-offset-3 hover:text-gold-500"
      >
        <ArrowLeft className="size-4 rtl:rotate-180" />
        {t("backToAll")}
      </Link>
    </div>
  );
}
