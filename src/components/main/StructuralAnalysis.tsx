import MainMessage from "@/components/main/MainMessage";
import { calcScrollEffect } from "@/lib/calc-scroll-effect";
import classnames from "@/lib/classnames";
import Image from "next/image";

export default function StructuralAnalysis({
  scrollRatio,
  scrollHeight,
  totalScrollHeight,
}: {
  scrollRatio: number;
  scrollHeight: number;
  totalScrollHeight: number;
}) {
  return (
    <>
      <Image
        src="/images/bg-people-computational-fluid-dynamics.jpg"
        alt="bg-business-overview"
        height="1024"
        width="1024"
        className={classnames(
          "fixed top-0 w-full object-cover",
          false ? "h-[calc(100vh-192px)]" : "h-full",
        )}
        style={
          scrollRatio <= 0.65
            ? {
                opacity: calcScrollEffect({
                  startValue: 0,
                  endValue: 0.5,
                  partScroll: { start: 0.55, end: 0.65 },
                  scrollHeight,
                  totalScrollHeight,
                }),
              }
            : {
                opacity: calcScrollEffect({
                  startValue: 0.5,
                  endValue: 0,
                  partScroll: { start: 0.75, end: 0.8 },
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
            : scrollRatio <= 0.65
              ? {
                  opacity: calcScrollEffect({
                    startValue: 0,
                    endValue: 1,
                    partScroll: { start: 0.6, end: 0.65 },
                    scrollHeight,
                    totalScrollHeight,
                  }),
                  transform: `translate3d(0, ${calcScrollEffect({
                    startValue: 20,
                    endValue: 0,
                    partScroll: { start: 0.6, end: 0.65 },
                    scrollHeight,
                    totalScrollHeight,
                  })}%, 0)`,
                }
              : {
                  opacity: calcScrollEffect({
                    startValue: 1,
                    endValue: 0,
                    partScroll: { start: 0.65, end: 0.7 },
                    scrollHeight,

                    totalScrollHeight,
                  }),
                  transform: `translate3d(0, ${calcScrollEffect({
                    startValue: 0,
                    endValue: -20,
                    partScroll: { start: 0.65, end: 0.7 },
                    scrollHeight,
                    totalScrollHeight,
                  })}%, 0)`,
                }
        }
      >
        <h1 className="max-w-[1000px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-center text-7xl font-semibold leading-relaxed text-transparent">
          4. 구조 해석
        </h1>
      </MainMessage>

      <MainMessage
        style={
          scrollRatio <= 0
            ? {}
            : scrollRatio <= 0.75
              ? {
                  opacity:
                    calcScrollEffect({
                      startValue: 0,
                      endValue: 1,
                      partScroll: { start: 0.7, end: 0.75 },
                      scrollHeight,
                      totalScrollHeight,
                    }) + "",

                  transform: `translate3d(0, ${calcScrollEffect({
                    startValue: 20,
                    endValue: 0,
                    partScroll: { start: 0.7, end: 0.75 },
                    scrollHeight,
                    totalScrollHeight,
                  })}%, 0)`,
                }
              : {
                  opacity:
                    calcScrollEffect({
                      startValue: 1,
                      endValue: 0,
                      partScroll: { start: 0.75, end: 0.8 },
                      scrollHeight,
                      totalScrollHeight,
                    }) + "",

                  transform: `translate3d(0, ${calcScrollEffect({
                    startValue: 0,
                    endValue: -20,
                    partScroll: { start: 0.75, end: 0.8 },
                    scrollHeight,
                    totalScrollHeight,
                  })}%, 0)`,
                }
        }
      >
        <p className="max-w-[1000px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-center text-5xl font-semibold leading-relaxed text-transparent">
          로터의 강건성을 확보하기 위한
          <br />
          구조해석(CAE) 역량을 보유하고 있습니다.
        </p>
      </MainMessage>
    </>
  );
}
