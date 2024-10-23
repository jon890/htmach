"use client";

import { useTranslation } from "@/app/i18n/client";
import { getCurrentMenu } from "@/constants/menu.const";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

type Props = {
  hiddenInMobile?: boolean;
};

export default function HTMBreadcrumb({ hiddenInMobile }: Props) {
  const pathname = usePathname();
  const { t, i18n } = useTranslation({ namespace: "menu" });
  const currentMenu = getCurrentMenu(pathname, i18n.language);

  if (
    !currentMenu ||
    !currentMenu.breadcrumb ||
    currentMenu.breadcrumb.length === 0
  )
    return null;

  return (
    <div className="w-full">
      <div className="z-20 w-full border-y border-box_border px-5 py-4">
        <Breadcrumb className="container">
          <BreadcrumbList className="gap-3">
            {currentMenu.breadcrumb?.map((item, index) => (
              <Fragment key={index}>
                <BreadcrumbItem className="text-sm font-semibold text-[#555555] lg:text-base">
                  <BreadcrumbLink asChild>
                    <Link href={item.href}>{t(item.langKey)}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                {index !== (currentMenu.breadcrumb?.length ?? 0) - 1 && (
                  <BreadcrumbSeparator />
                )}
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
