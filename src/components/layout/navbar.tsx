"use client";

import useWindowSize from "@/hooks/use-window-size";
import { LocaleType } from "@/types/locale-type";
import MobileNavBar from "./mobile-navbar";
import PcNavBar from "./pc-navbar";

type Props = {
  locale: LocaleType;
};

export default function NavBar({ locale }: Props) {
  const { isMobile } = useWindowSize();

  if (isMobile === undefined) return null;

  if (isMobile) {
    return <MobileNavBar />;
  }

  return <PcNavBar locale={locale} />;
}
