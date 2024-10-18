"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HTM_VISIBLE_MENU } from "@/constants/menu.const";

type Props = {
  onChangeVisibleMenu?: (visible: boolean) => void;
};

export default function PcMenu({ onChangeVisibleMenu }: Props) {
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
        {HTM_VISIBLE_MENU.map(({ langKey, link }) => (
          <li key={langKey}>
            <button
              className={cn(
                "hover:border-text-blue-500 border-b-2 border-transparent py-[37px] transition-colors hover:text-blue-500",
              )}
            >
              {langKey}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
