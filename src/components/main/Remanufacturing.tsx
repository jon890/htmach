import { MessageType } from "@/app/[locale]/layout";
import MainMessage from "@/components/main/MainMessage";
import { calcScrollEffect } from "@/lib/calc-scroll-effect";
import classnames from "@/lib/classnames";
import Image from "next/image";

export default function Remanufacturing({
  scrollRatio,
  scrollHeight,
  totalScrollHeight,
  translation,
}: {
  scrollRatio: number;
  scrollHeight: number;
  totalScrollHeight: number;
} & MessageType) {
  return (
    <>
      <Image
        src="/images/bg-pump-remanufacturing.jpg"
        alt="bg-pump-engineering"
        height="1024"
        width="1024"
        className={classnames(
          "fixed top-0 w-full object-cover",
          false ? "h-[calc(100vh-192px)]" : "h-full",
        )}
        style={
          scrollRatio <= 0.1
            ? {
                opacity: calcScrollEffect({
                  startValue: 0,
                  endValue: 0.5,
                  partScroll: { start: -0.05, end: 0.05 },
                  scrollHeight,
                  totalScrollHeight,
                }),
              }
            : {
                opacity: calcScrollEffect({
                  startValue: 0.5,
                  endValue: 0,
                  partScroll: { start: 0.15, end: 0.2 },
                  scrollHeight,
                  totalScrollHeight,
                }),
              }
        }
      />
      <MainMessage
        style={
          scrollRatio <= 0
            ? {}
            : scrollRatio <= 0.05
              ? {
                  opacity: calcScrollEffect({
                    startValue: 0,
                    endValue: 1,
                    partScroll: { start: 0, end: 0.05 },
                    scrollHeight,
                    totalScrollHeight,
                  }),
                  transform: `translate3d(0, ${calcScrollEffect({
                    startValue: 20,
                    endValue: 0,
                    partScroll: { start: 0, end: 0.05 },
                    scrollHeight,
                    totalScrollHeight,
                  })}%, 0)`,
                }
              : {
                  opacity: calcScrollEffect({
                    startValue: 1,
                    endValue: 0,
                    partScroll: { start: 0.05, end: 0.1 },
                    scrollHeight,

                    totalScrollHeight,
                  }),
                  transform: `translate3d(0, ${calcScrollEffect({
                    startValue: 0,
                    endValue: -20,
                    partScroll: { start: 0.05, end: 0.1 },
                    scrollHeight,
                    totalScrollHeight,
                  })}%, 0)`,
                }
        }
      >
        <br />
        <h1 className="max-w-[1000px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-center text-7xl font-semibold leading-relaxed text-transparent">
          {translation.Home.subTitle2}
        </h1>
        <br />
        <p className="max-w-[1000px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-center text-5xl font-semibold leading-relaxed text-transparent">
          {translation.Home.remanufacturing}
        </p>
      </MainMessage>

      <MainMessage
        style={
          scrollRatio <= 0
            ? {}
            : scrollRatio <= 0.15
              ? {
                  opacity:
                    calcScrollEffect({
                      startValue: 0,
                      endValue: 1,
                      partScroll: { start: 0.1, end: 0.15 },
                      scrollHeight,
                      totalScrollHeight,
                    }) + "",

                  transform: `translate3d(0, ${calcScrollEffect({
                    startValue: 20,
                    endValue: 0,
                    partScroll: { start: 0.1, end: 0.15 },
                    scrollHeight,
                    totalScrollHeight,
                  })}%, 0)`,
                }
              : {
                  opacity:
                    calcScrollEffect({
                      startValue: 1,
                      endValue: 0,
                      partScroll: { start: 0.15, end: 0.2 },
                      scrollHeight,
                      totalScrollHeight,
                    }) + "",

                  transform: `translate3d(0, ${calcScrollEffect({
                    startValue: 0,
                    endValue: -20,
                    partScroll: { start: 0.15, end: 0.25 },
                    scrollHeight,
                    totalScrollHeight,
                  })}%, 0)`,
                }
        }
      >
        <p className="max-w-[1000px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-center text-5xl font-semibold leading-relaxed text-transparent">
          {translation.Home["remanufacturing.desc"]}
        </p>
      </MainMessage>
    </>
  );
}
