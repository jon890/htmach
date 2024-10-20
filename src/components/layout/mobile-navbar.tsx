"use client";

import useScrollHeight from "@/hooks/use-scroll-height";
import { cn } from "@/lib/utils";
import Link from "next/link";
import LogoImage from "../common/logo-image";
import MobileMenu from "./mobile-menu";

export default function MobileNavBar() {
  const { isTop } = useScrollHeight();

  return (
    <nav
      className={cn(
        "fixed top-0 z-20 h-[80px] w-full px-5 text-black shadow-lg",
        isTop ? "bg-white/50 backdrop-blur" : "bg-white",
      )}
    >
      <div className="flex h-full items-center font-bold">
        <LogoImage
          textClassName="bg-gradient-to-r from-blue-500 via-gray-500 to-black bg-clip-text text-transparent"
          linkClassName="mr-auto flex flex-none items-center justify-center"
        />

        <MobileMenu />
      </div>
    </nav>
  );
}
