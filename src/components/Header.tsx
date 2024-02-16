import NavLink from "@/components/NavLink";
import LanguageSelect from "./LanguageSelect";
import Link from "next/link";
import { getMessages } from "@/app/[locale]/get-messages";

const Links = [
  { langKey: "madyn", link: "madyn", order: 2, visible: true },
  { langKey: "company-introduce", link: "#", order: 1, visible: true },
  { langKey: "business-area", link: "#", order: 3, visible: false },
  { langKey: "technilogy-status", link: "#", order: 4, visible: false },
  { langKey: "performance-cases", link: "#", order: 5, visible: true },
  { langKey: "help", link: "#", order: 6, visible: true },
] as const;

export default async function Header({ locale }: { locale: "en" | "ko" }) {
  const t = await getMessages(locale);

  return (
    <header className="bg-navColor sticky left-0 top-0 z-20 h-12 w-full py-10">
      <nav className="mx-auto flex h-full max-w-[1000px] items-center">
        <Link
          href="/"
          className="mr-auto bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-3xl font-bold text-transparent"
        >
          HTM
        </Link>
        {Links.filter((link) => link.visible)
          .sort((a, b) => a.order - b.order)
          .map(({ langKey, link }) => (
            <NavLink
              text={t.Menu[langKey]}
              href={link}
              key={langKey}
              preparingMessage={t.Common.preparing}
            />
          ))}

        <LanguageSelect />
      </nav>
    </header>
  );
}
