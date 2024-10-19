"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  onClick?: () => void;
};

export function PlusIcon({ onClick }: Props) {
  return (
    <button
      className={cn(
        "flex items-center justify-center",
        "bottom-10 size-14 rounded-full",
        "absolute left-1/2 -translate-x-1/2",
        "bg-black bg-opacity-30",
        // HOVER_CLASSNAME,
      )}
      onClick={() => onClick?.()}
    >
      <Image
        src="/images/icons/icon_plus.png"
        width="18"
        height="27"
        alt="plus_icon"
      />
    </button>
  );
}
