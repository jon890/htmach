"use client";

import { useTranslation } from "@/app/i18n/client";
import InViewHelper from "@/components/InViewHelper";
import { FONT_ONETWOTHREE_RF } from "@/lib/font-lib";
import { cn } from "@/lib/utils";

export default function MainCarouselContent() {
  const { t } = useTranslation({ namespace: "home" });

  return (
    <div
      className={cn(
        "container relative flex h-full flex-col justify-center px-4",
        "items-center text-center drop-shadow-lg",
        "lg:items-end lg:text-end",
        FONT_ONETWOTHREE_RF.className,
      )}
    >
      <InViewHelper anyClass="space-y-10 text-center text-black">
        <h1 className="mb-2 mt-48 text-3xl text-blue-500 sm:text-4xl md:text-5xl lg:mt-0 xl:text-6xl">
          {t("title")}
        </h1>
        <h2 className="text-base leading-normal sm:text-lg md:text-xl xl:text-2xl">
          {t("subTitle")}
        </h2>
      </InViewHelper>
    </div>
  );
}
