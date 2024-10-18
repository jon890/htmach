import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  textClassName?: string;
};

export default function LogoImage({ textClassName }: Props) {
  return (
    <Link
      href=""
      className="mr-auto flex flex-row items-center justify-center gap-2 text-3xl font-bold"
    >
      <Image
        src="/images/logo/htm_logo.png"
        width="45"
        height="40"
        alt="htm_logo"
      />
      <span className={cn("text-white", textClassName)}>HTM</span>
    </Link>
  );
}
