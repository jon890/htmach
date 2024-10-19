"use client";

import { useTranslation } from "@/app/i18n/client";
import { MAIN_BUSINESS_ITEMS } from "@/constants/main-business.const";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PlusIcon } from "./plus-icon";
import InViewHelper from "@/components/InViewHelper";

export default function PcMainBusiness() {
  const { t } = useTranslation({ namespace: "home" });

  const [selectedCode, setSelectedCode] = useState<string>(
    MAIN_BUSINESS_ITEMS[0].code,
  );

  return (
    <InViewHelper anyClass={cn("mt-10 flex h-[500px] flex-row gap-4")}>
      {MAIN_BUSINESS_ITEMS.map((item) => (
        <div
          key={item.code}
          className={cn(
            "relative rounded-[20px] transition-all duration-500",
            selectedCode === item.code ? "w-[900px]" : "flex-1",
          )}
        >
          <Image
            src={item.image}
            width={0}
            height={0}
            sizes="100vw"
            quality={100}
            priority
            className="absolute left-0 top-0 -z-10 h-full w-full rounded-xl object-cover"
            alt="bg_main_business"
          />

          {selectedCode == item.code ? (
            <div className="absolute bottom-0 left-0 w-3/4 rounded-bl-xl rounded-tr-3xl bg-white px-12 py-12">
              <p className="text-2xl font-bold">{t(item.title)}</p>
              <p className="mt-5 text-base font-medium">{t(item.subTitle)}</p>

              <div className="mt-12 flex flex-row flex-wrap gap-[10px]">
                {item.links &&
                  item.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "flex flex-row items-center justify-between border-2",
                        "gap-1 px-4 py-[10px] text-base font-bold text-blue-500",
                      )}
                    >
                      {t(link.text)}
                      <Image
                        src="/images/icons/icon_right_arrow.png"
                        width="14"
                        height="14"
                        alt="icon_right_arrow"
                      />
                    </Link>
                  ))}
              </div>
            </div>
          ) : (
            <p
              className={cn(
                "w-full text-end text-2xl font-bold text-white",
                "absolute left-1/2 top-1/3 origin-center -translate-x-1/2 -translate-y-1/3 rotate-[270deg]",
              )}
            >
              {t(item.title)}
            </p>
          )}

          {selectedCode !== item.code && (
            <PlusIcon onClick={() => setSelectedCode(item.code)} />
          )}
        </div>
      ))}
    </InViewHelper>
  );
}
