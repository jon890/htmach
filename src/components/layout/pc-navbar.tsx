import useScrollHeight from "@/hooks/use-scroll-height";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import LogoImage from "../common/logo-image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function PcNavBar() {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const { isTop } = useScrollHeight();
  const [searchKeyword, setSearchKeyword] = useState("");
  const router = useRouter();

  function search() {
    if (searchKeyword.length === 0) {
      alert("검색어를 입력하세요");
      return;
    }

    setSearchKeyword("");
    router.push(`/search?keyword=${searchKeyword}`);
  }

  return (
    <nav
      className={cn(
        "fixed top-0 z-20 h-[100px] w-full bg-white px-4 text-black",
        isTop ? "backdrop-blur" : "!bg-white shadow-md",
      )}
    >
      <div className="just-center container flex h-full flex-row items-center font-bold">
        <LogoImage textClassName="bg-gradient-to-r from-blue-500 via-gray-500 to-black bg-clip-text text-transparent" />

        {/* PC MENU */}

        <div
          className={cn(
            "ml-32 flex flex-row items-center justify-center gap-3 bg-white px-4 py-3",
            "rounded-[30px] border-2 border-[#BBBBBB]",
          )}
        >
          <input
            id="search_input"
            type="text"
            placeholder="검색어를 입력해주세요"
            className="pl-2 outline-none placeholder:text-sm placeholder:font-bold placeholder:text-[#AAAAAA]"
            onChange={(e) => setSearchKeyword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                search();
              }
            }}
          />
          <MagnifyingGlassIcon
            className={cn("size-7 cursor-pointer")}
            onClick={() => search()}
          />
        </div>
      </div>
    </nav>
  );
}
