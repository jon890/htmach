"use client";

import { useTranslation } from "@/app/i18n/client";
import InViewHelper from "@/components/in-view-helper";
import useWindowSize from "@/hooks/use-window-size";
import { cn } from "@/lib/utils";
import PcMainBusiness from "./pc-main-business";
import MobileMainBusiness from "./mobile-main-business";

export default function MainBusiness() {
  const { t } = useTranslation({ namespace: "home" });
  const { width } = useWindowSize();
  const isMobile = width ? width < 1280 : undefined;

  if (isMobile === undefined) return null;

  return (
    <section
      className={cn(
        "container relative z-10 mb-40 mt-[60px] px-4 lg:mt-20 container:px-0",
      )}
    >
      <InViewHelper
        anyClass={cn(
          "flex flex-row items-end justify-center gap-5 lg:justify-start",
        )}
      >
        <div className="text-center lg:text-start">
          <span
            className={cn("font-bold", "pc lg:text-4xl", "mobile text-3xl")}
          >
            <h1 className="mt-32 text-5xl font-bold text-blue-500"></h1>
            <span className="text-blue-500">
              {" "}
              {t("business_introduce_prefix")}
            </span>
            {t("business_introduce_suffix")}
          </span>
        </div>

        <span className={cn("hidden font-semibold", "lg:inline lg:text-lg")}>
          {t("business_introduce_desc")}
        </span>
      </InViewHelper>

      {isMobile ? <MobileMainBusiness /> : <PcMainBusiness />}
    </section>
  );
}
