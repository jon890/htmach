"use client";

import { HTM_VISIBLE_MENU } from "@/constants/menu.const";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { useTranslation } from "@/app/i18n/client";
import { Fragment } from "react";
import Link from "next/link";

type Props = {
  hiddenInMobile?: boolean;
};

export default function HTMBreadcrumb({ hiddenInMobile }: Props) {
  const pathname = usePathname();
  const { t, i18n } = useTranslation({ namespace: "menu" });

  const currentMenu = HTM_VISIBLE_MENU.find(
    (it) => `/${i18n.language}${it.link}` === pathname,
  );

  if (!currentMenu) return null;

  const breadcrumbItems = [
    {
      href: "/",
      langKey: "home",
    },

    ...(currentMenu.children?.map((children) => ({
      href: children.link,
      langKey: children.langKey,
    })) ?? []),
  ];

  return (
    <div className="w-full">
      <div className="border-box_border z-20 w-full border-y px-5 py-4">
        <Breadcrumb className="container">
          <BreadcrumbList className="gap-3">
            {breadcrumbItems.map((item, index) => (
              <Fragment key={index}>
                <BreadcrumbItem className="text-sm font-semibold text-[#555555] lg:text-base">
                  <BreadcrumbLink asChild>
                    <Link href={item.href}>{t(item.langKey)}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                {index !== breadcrumbItems.length - 1 && (
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
