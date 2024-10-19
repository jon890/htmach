import { useTranslation } from "@/app/i18n";
import InViewHelper from "@/components/InViewHelper";
import MainCarousel from "@/components/main/carousel/main-carousel";
import { LocaleType } from "@/types/locale-type";
import Image from "next/image";

type Props = {
  params: { locale: LocaleType };
};

export default async function Home({ params: { locale } }: Props) {
  const { t } = await useTranslation({ locale, namespace: "home" });

  return (
    <>
      <MainCarousel />

      <InViewHelper>
        <h1 className="mt-32 text-5xl font-bold text-blue-500">
          {t("subTitle2")}
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
              {t("pumpEngineering")}
            </p>
          </InViewHelper>

          <InViewHelper>
            <p
              className="max-w-[500px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-xl font-semibold leading-relaxed text-transparent"
              dangerouslySetInnerHTML={{
                __html: t("pumpEngineering.desc"),
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
              {t("cfd")}
            </p>
          </InViewHelper>

          <InViewHelper>
            <p
              className="max-w-[500px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-xl font-semibold leading-relaxed text-transparent"
              dangerouslySetInnerHTML={{
                __html: t("desc"),
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
              {t("rotorDynamicsAnalaysis")}
            </p>
          </InViewHelper>

          <InViewHelper>
            <p
              className="max-w-[500px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-xl font-semibold leading-relaxed text-transparent"
              dangerouslySetInnerHTML={{
                __html: t("rotorDynamicsAnalaysis.desc"),
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
              {t("structuralAnalysis")}
            </p>
          </InViewHelper>

          <InViewHelper>
            <p
              className="max-w-[500px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-xl font-semibold leading-relaxed text-transparent"
              dangerouslySetInnerHTML={{
                __html: t("structuralAnalysis.desc"),
              }}
            />
          </InViewHelper>
        </article>
      </section>
    </>
  );
}
