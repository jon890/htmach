const Links = ["기업소개", "사업분야", "기술현황", "실적/사례", "고객센터"];

export default function Header() {
  return (
    <header className="w-full h-12 py-4 fixed top-0 left-0 z-10">
      <nav className="py-4 max-w-[1000px] h-full flex items-center mx-auto backdrop-blur-lg saturate-100">
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
    <a href={href} className="ml-4">
      {text}
    </a>
  );
}
