"use client";

import { useTranslation } from "@/app/i18n/client";
import { HTM_VISIBLE_MENU } from "@/constants/menu.const";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DividerX from "../common/divider-x";
import LogoImage from "../common/logo-image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";
import Link from "next/link";

export default function MobileMenu() {
  const { t } = useTranslation({ namespace: "menu" });
  const router = useRouter();
  const [open, setOpen] = useState(false);

  function movePage(event: React.SyntheticEvent, url: string) {
    event.preventDefault();
    setOpen(false);
    router.push(url);
  }

  const [searchKeyword, setSearchKeyword] = useState<string>("");

  function search() {
    if (searchKeyword === "") {
      alert("검색어를 입력하세요.");
      return;
    }

    setOpen(false);
    router.push("/search?keyword=" + searchKeyword);
  }

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="ml-2 cursor-pointer rounded-2xl border-2 border-[#BBBBBB] p-1.5">
        <Image
          src="/images/icons/icon_sitemap.png"
          width="34"
          height="34"
          alt="icon_menu"
        />
      </DrawerTrigger>

      <DrawerContent className="h-full w-4/5 max-w-[500px] pt-10">
        <div className="w-full overflow-y-auto">
          <div className="flex flex-row items-center gap-3 pl-7">
            <LogoImage textClassName="bg-gradient-to-r from-blue-500 via-gray-500 to-black bg-clip-text text-transparent" />

            <DrawerClose className="ml-auto mr-4 flex-none p-1">
              <X className="size-6 text-black" />
            </DrawerClose>
          </div>

          <DividerX className="mt-6 border-[#BBBBBB]" />

          <div className="relative my-5 flex w-full items-center">
            <input
              type="text"
              placeholder="검색어를 입력해주세요"
              className={cn(
                "mx-6 w-full rounded-[36px] border-2 border-[#BBBBBB] py-3 pl-5 text-black",
                "placeholder:text-sm placeholder:font-bold placeholder:text-[#AAAAAA]",
              )}
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  search();
                }
              }}
            />
            <div className="absolute right-0 mr-10">
              <MagnifyingGlassIcon
                className={cn("size-7 cursor-pointer")}
                onClick={() => search()}
              />
            </div>
          </div>

          <DividerX className="border-[#BBBBBB]" />

          <Accordion type="single" collapsible className="w-full">
            {HTM_VISIBLE_MENU.map((menu, index) => (
              <AccordionItem key={menu.langKey} value={menu.langKey}>
                <AccordionTrigger className="mx-6 text-xl font-bold">
                  {t(menu.langKey)}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="bg-[#F8F8F8] px-6 py-8">
                    {menu.children
                      ?.filter((secondMenu) => secondMenu.visible)
                      .sort((a, b) => a.order - b.order)
                      .map((secondMenu) =>
                        secondMenu.link ? (
                          <li
                            key={secondMenu.link}
                            className={cn(
                              "py-3 text-[18px] font-semibold text-[#333333]",
                            )}
                            onClick={(event) =>
                              movePage(event, secondMenu.link)
                            }
                          >
                            <Link href={secondMenu.link}>
                              {t(secondMenu.langKey)}
                            </Link>
                          </li>
                        ) : (
                          <li
                            key={secondMenu.link}
                            className={cn(
                              "py-3 text-[18px] font-semibold text-[#333333]",
                            )}
                          >
                            {t(secondMenu.langKey)}
                          </li>
                        ),
                      )}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
