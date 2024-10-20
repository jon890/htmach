"use client";

import { useTranslation } from "@/app/i18n/client";
import { MAIN_BUSINESS_ITEMS } from "@/constants/main-business.const";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PlusIcon } from "./plus-icon";
import InViewHelper from "@/components/InViewHelper";

export default function MobileMainBusiness() {
  const { t } = useTranslation({ namespace: "home" });

  const [selectedCode, setSelectedCode] = useState<string>(
    MAIN_BUSINESS_ITEMS[0].code,
  );

  return (
    <InViewHelper>
      <div className="mt-5 flex flex-col gap-4">
        {MAIN_BUSINESS_ITEMS.map((item) => (
          <div
            key={item.code}
            className={cn(
              "relative w-full rounded-xl transition-all duration-500",
              selectedCode === item.code
                ? ""
                : "flex h-[160px] flex-row items-center justify-between px-12",
            )}
            style={
              selectedCode === item.code
                ? { height: item.mobileHeight + "px" }
                : {}
            }
          >
            <Image
              src={item.image}
              width={0}
              height={0}
              sizes="100vw"
              quality={100}
              priority
              className="absolute left-0 top-0 h-full w-full rounded-xl object-cover"
              alt="bg_main_business"
            />

            {selectedCode === item.code ? (
              <div className="absolute bottom-0 left-0 w-full rounded-bl-xl rounded-tr-3xl bg-white px-8 py-10">
                <h3 className="text-center text-xl font-bold">
                  {t(item.title)}
                </h3>
                <p className="mt-5 text-center text-[15px] font-medium">
                  {t(item.subTitle)}
                </p>

                <div className="mt-5 flex flex-col gap-[10px]">
                  {item.links.map((link) => (
                    <Link
                      key={link.href}
                      className={cn(
                        "flex flex-row items-center justify-between gap-1 border-2 px-4 py-2 text-[15px] font-bold text-blue-500",
                      )}
                      href={link.href}
                    >
                      {t(link.text)}
                      <Image
                        src="/images/icons/icon_right_arrow.png"
                        width="14"
                        height="14"
                        alt="right_arrow"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <PlusIcon onClick={() => setSelectedCode(item.code)} />
                <h3 className="z-10 max-w-[66%] text-end text-xl font-bold text-white">
                  {t(item.title)}
                </h3>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 -z-10 h-2/3 w-full bg-[#F4F7FF]"></div>
    </InViewHelper>
  );
}
