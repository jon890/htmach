import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";

export default createMiddleware({
  defaultLocale: "ko",
  localePrefix,
  locales,
});

export const config = {
  matcher: ["/", "/(ko|en)/:path"],
};
