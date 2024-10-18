import { useTranslation } from "@/app/i18n";
import DividerX from "@/components/common/divider-x";
import DividerY from "@/components/common/divider-y";
import LogoImage from "@/components/common/logo-image";
import { cn } from "@/lib/utils";
import { LocaleType } from "@/types/locale-type";

type Props = {
  locale: LocaleType;
};

// TODO : HTM 대표 색상으로 수정
export default async function Footer({ locale }: Props) {
  const { t } = await useTranslation({ locale, namespace: "footer" });

  return (
    <footer className="w-full bg-[#212B4E] py-10 lg:py-7">
      <div className="container px-8 lg:px-4 container:px-0">
        <div
          className={cn(
            "flex flex-col items-center justify-between gap-10",
            "pc lg:flex-row lg:gap-12",
          )}
        >
          <LogoImage isLink={false} />
        </div>

        <DividerX className="my-6 hidden bg-white bg-opacity-30 lg:block" />

        <div className="mt-8 flex flex-col text-center lg:mt-0 lg:text-start">
          <p className="text-sm text-[#A0A8C2] lg:text-base">{t("address")}</p>

          <div
            className={cn(
              "flex flex-row flex-wrap items-center justify-center text-sm text-[#A0A8C2]",
              "pc lg:items-center lg:justify-start lg:text-base",
            )}
          >
            <p>TEL : {t("tel")}</p>
            <DividerY className="mx-3 mt-1 h-[13px] bg-[#A0A8C2] lg:mt-0" />
            <p>FAX : {t("fax")}</p>
            <DividerY className="mx-3 mt-1 h-[13px] bg-[#A0A8C2] lg:mt-0" />
            <p>Email : {t("email")}</p>
          </div>

          <p className="mt-3 text-sm text-[#677195] lg:text-base">
            {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
