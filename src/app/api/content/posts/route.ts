import { type NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAuthenticated } from "@/lib/contentAuth";
import { listPosts, createPost, type CreatePostInput } from "@/lib/blog";
import { LOCALES, type Locale } from "@/i18n/types";

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const posts = await listPosts();
    return NextResponse.json({ posts });
  } catch (err) {
    console.error("[GET /api/content/posts]", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { slug, lang, title, excerpt, content, date } = body;
  if (!slug || !lang || !title || !excerpt || !content || !date) {
    return NextResponse.json(
      {
        error:
          "Missing required fields: slug, lang, title, excerpt, content, date",
      },
      { status: 400 },
    );
  }
  if (!LOCALES.includes(lang as Locale)) {
    return NextResponse.json(
      { error: `lang must be one of: ${LOCALES.join(", ")}` },
      { status: 400 },
    );
  }

  const input: CreatePostInput = {
    slug: slug as string,
    lang: lang as Locale,
    title: title as string,
    excerpt: excerpt as string,
    tags: Array.isArray(body.tags) ? (body.tags as string[]) : [],
    content: content as string,
    date: date as string,
    coverImage: body.coverImage as string | undefined,
    coverImageMime: body.coverImageMime as string | undefined,
  };

  try {
    const result = await createPost(input);
    if (result === "conflict") {
      return NextResponse.json(
        { error: "Slug already exists" },
        { status: 409 },
      );
    }
    for (const loc of LOCALES) {
      revalidatePath(`/${loc}/blog`);
      revalidatePath(`/${loc}/blog/${input.slug}`);
    }
    return NextResponse.json(
      { success: true, url: `/${input.lang}/blog/${input.slug}` },
      { status: 201 },
    );
  } catch (err) {
    console.error("[POST /api/content/posts]", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
