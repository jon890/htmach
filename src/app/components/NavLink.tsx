"use client";

import { Link } from "../../navigation";

export default function NavLink({
  text,
  href,
  preparingMessage,
}: {
  text: string;
  href: string;
  preparingMessage?: string;
}) {
  return (
    <Link
      href={href}
      className="ml-4 font-semibold text-white"
      onClick={() => {
        if (href === "#" && preparingMessage) {
          alert(preparingMessage);
        }
      }}
    >
      {text}
    </Link>
  );
}
