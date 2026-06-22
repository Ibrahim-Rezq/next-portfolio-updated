import { type NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAuthenticated } from "@/lib/contentAuth";
import { updatePost, type UpdatePostInput } from "@/lib/blog";
import { LOCALES, type Locale } from "@/i18n/types";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { lang } = body;
  if (!lang || !LOCALES.includes(lang as Locale)) {
    return NextResponse.json(
      { error: `lang is required and must be one of: ${LOCALES.join(", ")}` },
      { status: 400 },
    );
  }

  const { slug } = await params;

  const input: UpdatePostInput = {
    lang: lang as Locale,
    title: body.title as string | undefined,
    excerpt: body.excerpt as string | undefined,
    tags: Array.isArray(body.tags) ? (body.tags as string[]) : undefined,
    content: body.content as string | undefined,
    date: body.date as string | undefined,
    coverImage: body.coverImage as string | undefined,
    coverImageMime: body.coverImageMime as string | undefined,
  };

  try {
    const result = await updatePost(slug, input);
    if (result === "not_found") {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    for (const loc of LOCALES) {
      revalidatePath(`/${loc}/blog`);
      revalidatePath(`/${loc}/blog/${slug}`);
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[PATCH /api/content/posts/%s]", slug, err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
