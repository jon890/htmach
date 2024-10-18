import { getMessages } from "@/lib/get-messages";
import { cn } from "@/lib/utils";
import { LocaleType } from "@/types/locale-type";
import DividerX from "@/components/common/divider-x";
import DividerY from "@/components/common/divider-y";
import LogoImage from "@/components/common/logo-image";

type Props = {
  locale: LocaleType;
};

// TODO : HTM 대표 색상으로 수정
export default async function Footer({ locale }: Props) {
  const t = await getMessages(locale);

  return (
    <footer className="mt-20 w-full bg-[#212B4E] py-10 lg:py-7">
      <div className="container px-8 lg:px-4 container:px-0">
        <div
          className={cn(
            "flex flex-col items-center justify-between gap-10",
            "pc lg:flex-row lg:gap-12",
          )}
        >
          <LogoImage />
        </div>

        <DividerX className="my-6 hidden bg-white bg-opacity-30 lg:block" />

        <div className="mt-8 flex flex-col text-center lg:mt-0 lg:text-start">
          <p className="text-sm text-[#A0A8C2] lg:text-base">
            {t.Footer.address}
          </p>

          <div
            className={cn(
              "flex flex-row flex-wrap items-center justify-center text-sm text-[#A0A8C2]",
              "pc lg:items-center lg:justify-start lg:text-base",
            )}
          >
            <p>TEL : {t.Footer.tel}</p>
            <DividerY className="mx-3 mt-1 h-[13px] bg-[#A0A8C2] lg:mt-0" />
            <p>FAX : {t.Footer.fax}</p>
            <DividerY className="mx-3 mt-1 h-[13px] bg-[#A0A8C2] lg:mt-0" />
            <p>Email : {t.Footer.email}</p>
          </div>

          <p className="mt-3 text-sm text-[#677195] lg:text-base">
            {t.Footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
