"use client";

import useWindowSize from "@/hooks/use-window-size";
import PcNavBar from "./pc-navbar";
import { LocaleType } from "@/types/locale-type";

type Props = {
  locale: LocaleType;
};

export default function NavBar({ locale }: Props) {
  const { isMobile } = useWindowSize();

  if (isMobile === undefined) return null;

  if (isMobile) {
    return <div>Mobile</div>;
  }

  return <PcNavBar locale={locale} />;
}
