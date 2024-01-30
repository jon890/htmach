import { getMessages } from "@/app/[locale]/get-messages";
import { MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
export default async function Footer({ locale }: { locale: "en" | "ko" }) {
  const t = await getMessages(locale);

  return (
    <footer className="flex w-full flex-col items-center justify-center space-y-5 bg-black py-10 text-white">
      <p className="flex flex-row space-x-2">
        <MapIcon className="h-6 w-6" />
        <span>{t.Footer.address}</span>
      </p>

      <p className="flex flex-row space-x-2">
        <PhoneIcon className="h-6 w-6" />
        <span>{t.Footer.email}</span>
      </p>

      <p>{t.Footer.rights}</p>
    </footer>
  );
}
