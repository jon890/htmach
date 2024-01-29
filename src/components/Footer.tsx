import { MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="flex w-full flex-col items-center justify-center space-y-5 bg-black py-10 text-white">
      <p className="flex flex-row space-x-2">
        <MapIcon className="h-6 w-6" />
        <span>{t("address")}</span>
      </p>

      <p className="flex flex-row space-x-2">
        <PhoneIcon className="h-6 w-6" />
        <span>{t("email")}</span>
      </p>

      <p>Copyright &#169; 2023 HTM. All Rights Reserved.</p>
    </footer>
  );
}
