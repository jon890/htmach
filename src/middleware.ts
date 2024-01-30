import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";

export const locales = ["en", "ko"];
const defaultLocale = "ko";

function getLocale(request: NextRequest) {
  const languages = new Negotiator({
    headers: {
      "accept-language": request.headers.get("accept-language") ?? "ko;q=0.5",
    },
  }).languages();

  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  console.log("pathname", pathname);

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /ko/products
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|images|videos|favicon.ico).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
