import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except for:
    // - _next (Next.js internals)
    // - api (API routes)
    // - Static files (images, fonts, etc.)
    "/((?!_next|api|.*\\..*).*)",
  ],
};
