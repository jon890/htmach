import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  linkClassName?: string;
  textClassName?: string;

  /**
   * 로고를 링크로 사용할지 여부
   */
  isLink?: boolean;
};

export default function LogoImage({
  linkClassName,
  textClassName,
  isLink = true,
}: Props) {
  return isLink ? (
    <Link
      href="/"
      className={cn(
        "mr-auto flex flex-row items-center justify-center gap-2 text-3xl font-bold",
        linkClassName,
      )}
    >
      <Image
        src="/images/logo/htm_logo.png"
        width="45"
        height="40"
        alt="htm_logo"
      />
      <span className={cn("text-white", textClassName)}>HTM</span>
    </Link>
  ) : (
    <div className="mr-auto flex flex-row items-center justify-center gap-2 text-3xl font-bold">
      <Image
        src="/images/logo/htm_logo.png"
        width="45"
        height="40"
        alt="htm_logo"
      />
      <span className={cn("text-white", textClassName)}>HTM</span>
    </div>
  );
}
