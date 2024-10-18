import Image from "next/image";
import LinkWithLocale from "../LinkWithLocale";

type Props = {};

export default function LogoImage({}: Props) {
  return (
    <LinkWithLocale
      href="/"
      className="mr-auto flex flex-row items-center justify-center gap-2 text-3xl font-bold"
    >
      <Image
        src="/images/logo/htm_logo.png"
        width="45"
        height="40"
        alt="htm_logo"
      />
      <span className="text-white">HTM</span>
    </LinkWithLocale>
  );
}
