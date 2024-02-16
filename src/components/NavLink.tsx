"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, i18n } from "../i18n-config";

export default function NavLink({
  text,
  href,
  preparingMessage,
}: {
  text: string;
  href: string;
  preparingMessage?: string;
}) {
  const pathname = usePathname();
  const currentLocale =
    (pathname.split("/").filter((it) => it !== "")[0] as Locale) ??
    i18n.defaultLocale;

  // console.log(currentLocale);

  return (
    <Link
      href={href !== "#" ? `/${currentLocale}/${href}` : href}
      className="ml-4 font-semibold"
      onClick={() => {
        if (href === "#" && preparingMessage) {
          alert(preparingMessage);
        }
      }}
    >
      {text}
    </Link>
  );
}
