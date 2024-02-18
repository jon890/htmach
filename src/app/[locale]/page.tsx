import ScrollSection from "@/components/ScrollSection";
import { getMessages } from "./get-messages";
import { LocaleParmas } from "./layout";
import Image from "next/image";
import InViewHelper from "@/components/InViewHelper";

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

      <InViewHelper
        anyClass="transition duration-1000 opacity-0"
        inClass="opacity-100"
        outClass="translate-y-[1rem]"
      >
        <h1 className="mt-32 text-5xl font-bold">{t.Home.subTitle2}</h1>
      </InViewHelper>

      <section className="grid grid-cols-2 gap-10 px-32 pb-32 pt-12">
        <article className="flex flex-col gap-4">
          <InViewHelper
            anyClass="transition duration-1000 opacity-0"
            inClass="opacity-100"
            outClass="translate-y-[1rem]"
          >
            <Image
              src="/images/bg-pump-remanufacturing.jpg"
              alt="bg-pump-engineering"
              height="500"
              width="500"
              className="rounded-xl"
            />
          </InViewHelper>

          <InViewHelper
            anyClass="transition duration-1000 opacity-0"
            inClass="opacity-100"
            outClass="translate-y-[1rem]"
          >
            <p className="max-w-[500px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-3xl font-semibold leading-relaxed text-transparent">
              {t.Home.remanufacturing}
            </p>
          </InViewHelper>

          <InViewHelper
            anyClass="transition duration-1000 opacity-0"
            inClass="opacity-100"
            outClass="translate-y-[1rem]"
          >
            <p
              className="max-w-[500px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-xl font-semibold leading-relaxed text-transparent"
              dangerouslySetInnerHTML={{
                __html: t.Home["remanufacturing.desc"],
              }}
            />
          </InViewHelper>
        </article>

        <article className="flex flex-col gap-4">
          <InViewHelper
            anyClass="transition duration-1000 opacity-0"
            inClass="opacity-100"
            outClass="translate-y-[1rem]"
          >
            <Image
              src="/images/bg-pump-engineering.jpg"
              alt="bg-pump-engineering"
              height="500"
              width="500"
              className="rounded-xl"
            />
          </InViewHelper>

          <InViewHelper
            anyClass="transition duration-1000 opacity-0"
            inClass="opacity-100"
            outClass="translate-y-[1rem]"
          >
            <p className="max-w-[500px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-3xl font-semibold leading-relaxed text-transparent">
              {t.Home.pumpEngineering}
            </p>
          </InViewHelper>

          <InViewHelper
            anyClass="transition duration-1000 opacity-0"
            inClass="opacity-100"
            outClass="translate-y-[1rem]"
          >
            <p
              className="max-w-[500px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-xl font-semibold leading-relaxed text-transparent"
              dangerouslySetInnerHTML={{
                __html: t.Home["pumpEngineering.desc"],
              }}
            />
          </InViewHelper>
        </article>
      </section>
      {/* <ScrollSection locale={locale} translation={t} /> */}
    </>
  );
}
