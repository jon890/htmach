"use client";

import LinkWithLocale from "./LinkWithLocale";

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
    <LinkWithLocale
      href={href}
      className="ml-4 font-semibold"
      onClick={() => {
        if (href === "#" && preparingMessage) {
          alert(preparingMessage);
        }
      }}
    >
      {text}
    </LinkWithLocale>
  );
}
