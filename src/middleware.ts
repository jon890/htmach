import acceptLanguage from "accept-language";
import {
  I18NEXT_COOKIE_NAME,
  languages,
  fallbackLng,
} from "./app/i18n/settings";
import { NextRequest, NextResponse } from "next/server";

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)",
  ],
};

export function middleware(req: NextRequest) {
  let lng;
  if (req.cookies.has(I18NEXT_COOKIE_NAME)) {
    lng = acceptLanguage.get(req.cookies.get(I18NEXT_COOKIE_NAME)?.value);
  }
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  // Redirect if locale in path is not supported
  if (
    !languages.some((locale) =>
      req.nextUrl.pathname.startsWith(`/${locale}`),
    ) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url),
    );
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer") || "");
    const localeInReferer = acceptLanguage.get(refererUrl.pathname);
    const response = NextResponse.next();
    if (localeInReferer) {
      response.cookies.set(I18NEXT_COOKIE_NAME, localeInReferer);
    }
    return response;
  }

  return NextResponse.next();
}
