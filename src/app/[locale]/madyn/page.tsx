import { useTranslation } from "@/app/i18n";
import InViewHelper from "@/components/in-view-helper";
import { cn } from "@/lib/utils";
import { LocaleType } from "@/types/locale-type";
import Image from "next/image";
import MadynFeatureCarousel from "./madyn-feature-carousel";

type Props = {
  params: {
    locale: LocaleType;
  };
};

export default async function MadynPage({ params: { locale } }: Props) {
  const { t } = await useTranslation({ locale, namespace: "madyn" });

  return (
    <section className="flex w-full flex-col items-center justify-center bg-black pt-40 text-white">
      <article className="container flex flex-col justify-center gap-4 px-10 container:px-0">
        <InViewHelper anyClass="text-3xl font-bold text-center">
          <h1>MADYN 2000</h1>
        </InViewHelper>

        <InViewHelper anyClass="text-5xl font-semibold text-center">
          <p>로터 다이나믹스 해석 소프트웨어</p>
        </InViewHelper>

        <div className="mt-16 flex flex-1 items-center justify-center">
          <Image
            className="w-full object-cover"
            src="/images/madyn/img_madyn1.png"
            width="0"
            height="0"
            sizes="100vw"
            alt="img_madyn"
          />
        </div>

        <InViewHelper anyClass="mx-auto mt-8">
          {/* todo active, hover 정의 */}
          <button
            className={cn(
              "flex w-[160px] flex-row items-center justify-center gap-1 rounded-2xl px-4 py-4 text-lg font-medium",
              "active:bg-blue-60 bg-blue-500 transition-colors hover:bg-blue-600",
            )}
          >
            <span>{t("inquery")}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
              />
            </svg>
          </button>
        </InViewHelper>
      </article>

      <article className="container mt-40 flex flex-col justify-center gap-4 px-10 container:px-0">
        <InViewHelper anyClass="text-5xl font-bold text-start">
          <h2>MADYN 2000 핵심 기능</h2>
        </InViewHelper>

        <MadynFeatureCarousel />
      </article>

      <article className="container mt-60 flex flex-col justify-center gap-4 px-10 container:px-0">
        <InViewHelper>
          <h2 className="text-5xl font-semibold">{t("title2")}</h2>
        </InViewHelper>

        <InViewHelper>
          <p className="mt-10 text-lg font-medium leading-8">{t("desc2")}</p>
        </InViewHelper>

        <InViewHelper>
          <ul className="mt-10 space-y-4 *:flex *:flex-row *:space-x-2 *:text-base">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                />
              </svg>
              <span>{t("property1")}</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                />
              </svg>
              <span>{t("property2")}</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <span>{t("property3")}</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                />
              </svg>
              <span>{t("property4")}</span>
            </li>
          </ul>
        </InViewHelper>
      </article>

      <article className="container mt-60 flex flex-row justify-center gap-4 px-10 container:px-0">
        <InViewHelper>
          <h2 className="min-w-[250px] text-3xl font-semibold">
            {t("title3")}
          </h2>
        </InViewHelper>

        <InViewHelper>
          <ul className="grid list-none grid-cols-3 gap-10 *:bg-gradient-to-r *:from-indigo-500 *:to-pink-500 *:bg-clip-text *:text-3xl *:font-bold *:text-transparent">
            <li>{t("keyword1")}</li>
            <li>{t("keyword2")}</li>
            <li>{t("keyword3")}</li>
            <li>{t("keyword4")}</li>
            <li>{t("keyword5")}</li>
            <li>{t("keyword6")}</li>
          </ul>
        </InViewHelper>
      </article>

      <article className="container mb-60 mt-60 flex flex-row justify-center gap-4 px-10 container:px-0">
        <InViewHelper>
          <ul className="grid list-none grid-cols-3 gap-10 *:bg-gradient-to-r *:from-indigo-500 *:to-pink-500 *:bg-clip-text *:text-3xl *:font-bold *:text-transparent">
            <li>{t("keyword1")}</li>
            <li>{t("keyword2")}</li>
            <li>{t("keyword3")}</li>
            <li>{t("keyword4")}</li>
            <li>{t("keyword5")}</li>
            <li>{t("keyword6")}</li>
          </ul>
        </InViewHelper>

        <InViewHelper>
          <h2 className="min-w-[250px] text-3xl font-semibold">
            {t("title4")}
          </h2>
        </InViewHelper>
      </article>
    </section>
  );
}
