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
    <header className="w-full h-12 py-10 sticky top-0 left-0 z-10 backdrop-blur-lg saturate-100 bg-black">
      <nav className="max-w-[1000px] h-full flex items-center mx-auto">
        <a
          href="/"
          className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500 font-bold text-3xl mr-auto"
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
    <a href={href} className="ml-4 text-white font-semibold">
      {text}
    </a>
  );
}
