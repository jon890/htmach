import NavLink from "@/components/NavLink";
import { useTranslations } from "next-intl";

const Links = [
  { langKey: "madyn", link: "/madyn" },
  { langKey: "company-introduce", link: "#" },
  { langKey: "business-area", link: "#" },
  { langKey: "technilogy-status", link: "#" },
  { langKey: "performance-cases", link: "#" },
  { langKey: "help", link: "#" },
];

export default function Header() {
  const t = useTranslations();

  return (
    <header className="sticky left-0 top-0 z-20 h-12 w-full bg-navColor py-10">
      <nav className="mx-auto flex h-full max-w-[1000px] items-center">
        <a
          href="/"
          className="mr-auto bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-3xl font-bold text-transparent"
        >
          HTM
        </a>
        {Links.map(({ langKey, link }) => (
          <NavLink text={t(`Menu.${langKey}`)} href={link} key={langKey} />
        ))}
      </nav>
    </header>
  );
}
