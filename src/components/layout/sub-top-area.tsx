import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  className?: string;
  imageSrc: string;
  title: string;
};

/**
 * 상세 페이지 상단 영역
 */
export default function SubTopArea({ className, imageSrc, title }: Props) {
  return (
    <section className={cn("relative hidden w-full lg:block", className)}>
      <Image
        src={imageSrc}
        width={0}
        height={0}
        sizes="100vw"
        alt="bg_sub_top_area"
        className={cn("h-[200px] w-full object-cover")}
      />
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold text-white drop-shadow-lg lg:text-[40px]">
        {title}
      </p>
    </section>
  );
}
