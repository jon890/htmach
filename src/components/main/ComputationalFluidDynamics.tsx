import { MessageType } from "@/app/[locale]/layout";
import MainMessage from "@/components/main/MainMessage";
import { calcScrollEffect } from "@/lib/calc-scroll-effect";
import classnames from "@/lib/classnames";
import Image from "next/image";

export default function ComputationalFluidDynamics({
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
        src="/images/bg-computational-fluid-dynamics.jpg"
        alt="bg-business-overview"
        height="1024"
        width="1024"
        className={classnames(
          "fixed top-0 w-full object-cover",
          false ? "h-[calc(100vh-192px)]" : "h-full",
        )}
        style={
          scrollRatio <= 0.45
            ? {
                opacity: calcScrollEffect({
                  startValue: 0,
                  endValue: 0.5,
                  partScroll: { start: 0.35, end: 0.45 },
                  scrollHeight,
                  totalScrollHeight,
                }),
              }
            : {
                opacity: calcScrollEffect({
                  startValue: 0.5,
                  endValue: 0,
                  partScroll: { start: 0.55, end: 0.6 },
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
            : scrollRatio <= 0.45
              ? {
                  opacity: calcScrollEffect({
                    startValue: 0,
                    endValue: 1,
                    partScroll: { start: 0.4, end: 0.45 },
                    scrollHeight,
                    totalScrollHeight,
                  }),
                  transform: `translate3d(0, ${calcScrollEffect({
                    startValue: 20,
                    endValue: 0,
                    partScroll: { start: 0.4, end: 0.45 },
                    scrollHeight,
                    totalScrollHeight,
                  })}%, 0)`,
                }
              : {
                  opacity: calcScrollEffect({
                    startValue: 1,
                    endValue: 0,
                    partScroll: { start: 0.45, end: 0.5 },
                    scrollHeight,

                    totalScrollHeight,
                  }),
                  transform: `translate3d(0, ${calcScrollEffect({
                    startValue: 0,
                    endValue: -20,
                    partScroll: { start: 0.45, end: 0.5 },
                    scrollHeight,
                    totalScrollHeight,
                  })}%, 0)`,
                }
        }
      >
        <h1 className="max-w-[1000px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-center text-7xl font-semibold leading-relaxed text-transparent">
          {translation.Home.cfd}
        </h1>
      </MainMessage>

      <MainMessage
        style={
          scrollRatio <= 0
            ? {}
            : scrollRatio <= 0.55
              ? {
                  opacity:
                    calcScrollEffect({
                      startValue: 0,
                      endValue: 1,
                      partScroll: { start: 0.5, end: 0.55 },
                      scrollHeight,
                      totalScrollHeight,
                    }) + "",

                  transform: `translate3d(0, ${calcScrollEffect({
                    startValue: 20,
                    endValue: 0,
                    partScroll: { start: 0.5, end: 0.55 },
                    scrollHeight,
                    totalScrollHeight,
                  })}%, 0)`,
                }
              : {
                  opacity:
                    calcScrollEffect({
                      startValue: 1,
                      endValue: 0,
                      partScroll: { start: 0.55, end: 0.6 },
                      scrollHeight,
                      totalScrollHeight,
                    }) + "",

                  transform: `translate3d(0, ${calcScrollEffect({
                    startValue: 0,
                    endValue: -20,
                    partScroll: { start: 0.55, end: 0.6 },
                    scrollHeight,
                    totalScrollHeight,
                  })}%, 0)`,
                }
        }
      >
        <p
          className="max-w-[1000px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-center text-5xl font-semibold leading-relaxed text-transparent"
          dangerouslySetInnerHTML={{ __html: translation.Home["cfd.desc"] }}
        ></p>
      </MainMessage>
    </>
  );
}
