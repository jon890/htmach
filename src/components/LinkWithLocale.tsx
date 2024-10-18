"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEventHandler } from "react";
import { i18n } from "../i18n-config";
import { LocaleType } from "@/types/locale-type";

export default function LinkWithLocale({
  children,
  href,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  href: string;
  className?: string;
  onClick?: MouseEventHandler;
}) {
  const pathname = usePathname();
  const currentLocale =
    (pathname.split("/").filter((it) => it !== "")[0] as LocaleType) ??
    i18n.defaultLocale;

  return (
    <Link
      href={href !== "#" ? `/${currentLocale}/${href}` : href}
      className={className}
      onClick={(e) => onClick?.(e)}
    >
      {children}
    </Link>
  );
}
