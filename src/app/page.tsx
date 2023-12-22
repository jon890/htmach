import Header from "./components/Header";
import ScrollSection from "./components/ScrollSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <Header />

      <ScrollSection id={1} />
    </main>
  );
}
