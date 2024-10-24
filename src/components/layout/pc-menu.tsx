"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HTM_VISIBLE_MENU } from "@/constants/menu.const";
import { useTranslation } from "@/app/i18n/client";
import { LocaleType } from "@/types/locale-type";
import DividerX from "../common/divider-x";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  onChangeVisibleMenu?: (visible: boolean) => void;
  locale: LocaleType;
};

export default function PcMenu({ onChangeVisibleMenu, locale }: Props) {
  const { t } = useTranslation({ locale, namespace: "menu" });
  const [visibleMenu, setVisibleMenu] = useState(false);
  const router = useRouter();

  function showMenu() {
    setVisibleMenu(true);
    onChangeVisibleMenu?.(true);
  }

  function hideMenu() {
    setVisibleMenu(false);
    onChangeVisibleMenu?.(false);
  }

  function movePage(
    event: React.SyntheticEvent<HTMLAnchorElement>,
    url: string,
  ) {
    event.preventDefault();
    setVisibleMenu(false);
    router.push(url);
  }

  return (
    <>
      <ul
        className="z-20 flex flex-row justify-center gap-8 text-lg"
        onMouseEnter={() => showMenu()}
        onMouseLeave={() => hideMenu()}
      >
        {HTM_VISIBLE_MENU.map(({ langKey }) => (
          <li key={langKey}>
            <button
              className={cn(
                "hover:border-text-blue-500 border-b-2 border-transparent py-[37px] transition-colors hover:text-blue-500",
              )}
            >
              {t(langKey)}
            </button>
          </li>
        ))}
      </ul>

      <div
        className={cn(
          "absolute left-0 w-full bg-white shadow-xl transition-opacity duration-300",
          visibleMenu ? "top-[100px] opacity-100" : "-top-[2000px] opacity-0",
        )}
        onMouseEnter={() => showMenu()}
        onMouseLeave={() => hideMenu()}
      >
        <DividerX className="bg-[#EEEEEE]" />

        <div className="container flex h-full w-full flex-row justify-between gap-5 px-10 pb-10 pt-6 container:px-0">
          {HTM_VISIBLE_MENU.map(({ langKey, children }, index) => (
            <div key={langKey + index} className="flex-1">
              <div className="flex flex-row items-center justify-start gap-1">
                <span className="text-base font-bold text-[#9d8e8e]">
                  {t(langKey)}
                </span>
                <ChevronRightIcon className="size-[10px] text-[#AAAAAA]" />
              </div>

              <div className="mt-3 w-full rounded-md border">
                <ul
                  className={cn(
                    "w-full px-9 py-6 *:mt-2 *:py-1.5 *:text-center *:text-[18px] *:font-semibold",
                  )}
                >
                  {children
                    ?.filter((it) => it.visible)
                    .sort((a, b) => a.order - b.order)
                    .map((secondMenu, index) => (
                      <li key={langKey + index}>
                        <Link
                          className="transition-colors hover:font-bold hover:text-blue-500 active:font-bold active:text-blue-500"
                          href={`/${locale}${secondMenu.link}`}
                          onClick={(event) => movePage(event, secondMenu.link)}
                        >
                          {t(secondMenu.langKey)}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
