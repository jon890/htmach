import InViewHelper from "@/components/InViewHelper";
import Image from "next/image";
import { useTranslation } from "@/app/i18n";
import MainImages from "./main-images";
import { LocaleType } from "@/types/locale-type";

type Props = {
  params: { locale: LocaleType };
};

export default async function Home({ params: { locale } }: Props) {
  const { t } = await useTranslation(locale, "translation");

  return (
    <>
      <section className="top-[80px] h-[calc(100vh-80px)] w-full overflow-hidden">
        <div className="absolute bottom-[10vh] z-10 w-full">
          <InViewHelper anyClass="space-y-10 text-center text-black">
            <h1 className="text-5xl font-bold">{t("Home.title")}</h1>
            <h2 className="text-lg font-semibold">{t("Home.subTitle")}</h2>
          </InViewHelper>
        </div>

        <MainImages />
      </section>

      <InViewHelper>
        <h1 className="mt-32 text-5xl font-bold text-blue-500">
          {t("Home.subTitle2")}
        </h1>
      </InViewHelper>

      <section className="grid grid-cols-2 gap-10 px-32 pb-32 pt-12">
        <article className="flex flex-col gap-4">
          <InViewHelper>
            <Image
              src="/images/bg-pump-engineering.jpg"
              alt="bg-pump-engineering"
              height="500"
              width="500"
              className="rounded-xl"
            />
          </InViewHelper>

          <InViewHelper>
            <p className="max-w-[500px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-3xl font-semibold leading-relaxed text-transparent">
              {t("Home.pumpEngineering")}
            </p>
          </InViewHelper>

          <InViewHelper>
            <p
              className="max-w-[500px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-xl font-semibold leading-relaxed text-transparent"
              dangerouslySetInnerHTML={{
                __html: t("Home.pumpEngineering.desc"),
              }}
            />
          </InViewHelper>
        </article>

        <article className="flex flex-col gap-4">
          <InViewHelper>
            <Image
              src="/images/bg-computational-fluid-dynamics.jpg"
              alt="bg-pump-engineering"
              height="500"
              width="500"
              className="rounded-xl"
            />
          </InViewHelper>

          <InViewHelper>
            <p className="max-w-[500px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-3xl font-semibold leading-relaxed text-transparent">
              {t("Home.cfd")}
            </p>
          </InViewHelper>

          <InViewHelper>
            <p
              className="max-w-[500px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-xl font-semibold leading-relaxed text-transparent"
              dangerouslySetInnerHTML={{
                __html: t("Home.cfd.desc"),
              }}
            />
          </InViewHelper>
        </article>

        <article className="flex flex-col gap-4">
          <InViewHelper>
            <Image
              src="/images/bg-rotor-dynamics-analysis.jpg"
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
              {t("Home.rotorDynamicsAnalaysis")}
            </p>
          </InViewHelper>

          <InViewHelper>
            <p
              className="max-w-[500px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-xl font-semibold leading-relaxed text-transparent"
              dangerouslySetInnerHTML={{
                __html: t("Home.rotorDynamicsAnalaysis.desc"),
              }}
            />
          </InViewHelper>
        </article>

        <article className="flex flex-col gap-4">
          <InViewHelper>
            <Image
              src="/images/bg-people-computational-fluid-dynamics.jpg"
              alt="bg-pump-engineering"
              height="500"
              width="500"
              className="rounded-xl"
            />
          </InViewHelper>

          <InViewHelper>
            <p className="max-w-[500px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-3xl font-semibold leading-relaxed text-transparent">
              {t("Home.structuralAnalysis")}
            </p>
          </InViewHelper>

          <InViewHelper>
            <p
              className="max-w-[500px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-xl font-semibold leading-relaxed text-transparent"
              dangerouslySetInnerHTML={{
                __html: t("Home.structuralAnalysis.desc"),
              }}
            />
          </InViewHelper>
        </article>
      </section>
    </>
  );
}
