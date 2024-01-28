import NavLink from "./NavLink";

const Links = [
  { title: "MADYN", link: "madyn" },
  { title: "기업소개", link: "#" },
  { title: "사업분야", link: "#" },
  { title: "기술현황", link: "#" },
  { title: "실적/사례", link: "#" },
  { title: "고객센터", link: "#" },
];

export default function Header() {
  return (
    <header className="sticky left-0 top-0 z-20 h-12 w-full bg-navColor py-10">
      <nav className="mx-auto flex h-full max-w-[1000px] items-center">
        <a
          href="/"
          className="mr-auto bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-3xl font-bold text-transparent"
        >
          HTM
        </a>
        {Links.map(({ title, link }) => (
          <NavLink text={title} href={link} key={link} />
        ))}
      </nav>
    </header>
  );
}
