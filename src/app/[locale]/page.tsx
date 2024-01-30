import ScrollSection from "@/components/ScrollSection";
import { getMessages } from "./get-messages";
import { LocaleParmas } from "./layout";

export default async function Home({
  params: { locale },
}: {
  params: LocaleParmas;
}) {
  const t = await getMessages(locale);

  return (
    <>
      <section className="top-[80px] h-[calc(100vh-80px)] w-full overflow-hidden">
        <div className="absolute bottom-[10vh] z-10 w-full space-y-10 text-center text-white">
          <h1 className="text-5xl font-bold">{t.Home.title}</h1>
          <h2 className="text-lg font-semibold">{t.Home.subTitle}</h2>
        </div>
        <video
          id="main-video"
          src="/videos/bg-main.mp4"
          preload="none"
          muted
          playsInline
          loop
          autoPlay
          className="absolute h-[calc(100vh-80px)] w-full object-cover"
        />
      </section>

      <ScrollSection locale={locale} translation={t} />
    </>
  );
}
