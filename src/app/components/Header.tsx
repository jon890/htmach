const Links = [
  "MADYN",
  "기업소개",
  "사업분야",
  "기술현황",
  "실적/사례",
  "고객센터",
];

export default function Header() {
  return (
    <header className="sticky left-0 top-0 z-20 h-12 w-full bg-black py-10 saturate-100 backdrop-blur-lg">
      <nav className="mx-auto flex h-full max-w-[1000px] items-center">
        <a
          href="/"
          className="mr-auto bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-3xl font-bold text-transparent"
        >
          HTM
        </a>
        {Links.map((link) => (
          <NavLink text={link} href="#" key={link} />
        ))}
      </nav>
    </header>
  );
}

function NavLink({ text, href }: { text: string; href: string }) {
  return (
    <a href={href} className="ml-4 font-semibold text-white">
      {text}
    </a>
  );
}
