"use client";

export default function NavLink({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="ml-4 font-semibold text-white"
      onClick={() => {
        if (href === "#") {
          alert("준비 중 입니다.");
        }
      }}
    >
      {text}
    </a>
  );
}
