"use client";

import useWindow from "@/hooks/useWindow";
import PcNavBar from "./pc-navbar";

export default function NavBar() {
  const { isMobile } = useWindow();

  if (isMobile === undefined) return null;

  if (isMobile) {
    return <div>Mobile</div>;
  }

  return <PcNavBar />;
}
