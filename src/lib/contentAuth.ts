import type { NextRequest } from "next/server";

export function isAuthenticated(req: NextRequest): boolean {
  const apiKey = process.env.CONTENT_API_KEY;
  if (!apiKey) return false;
  return req.headers.get("X-Content-Api-Key") === apiKey;
}
