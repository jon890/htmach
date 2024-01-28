import MainMessage from "@/components/main/MainMessage";
import { calcScrollEffect } from "@/lib/calc-scroll-effect";
import classnames from "@/lib/classnames";
import Image from "next/image";

export default function RotorDynamicsAnalysis({
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
        src="/images/bg-pump-engineering.jpg"
        alt="bg-business-overview"
        height="1024"
        width="1024"
        className={classnames(
          "fixed top-0 w-full object-cover",
          scrollRatio > 0.9 ? "h-[calc(100vh-192px)]" : "h-full",
        )}
        style={
          scrollRatio <= 0.85
            ? {
                opacity: calcScrollEffect({
                  startValue: 0,
                  endValue: 0.5,
                  partScroll: { start: 0.75, end: 0.85 },
                  scrollHeight,
                  totalScrollHeight,
                }),
              }
            : {
                opacity: calcScrollEffect({
                  startValue: 0.5,
                  endValue: 0,
                  partScroll: { start: 0.85, end: 1 },
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
            : scrollRatio <= 0.85
              ? {
                  opacity: calcScrollEffect({
                    startValue: 0,
                    endValue: 1,
                    partScroll: { start: 0.8, end: 0.85 },
                    scrollHeight,
                    totalScrollHeight,
                  }),
                  transform: `translate3d(0, ${calcScrollEffect({
                    startValue: 20,
                    endValue: 0,
                    partScroll: { start: 0.8, end: 0.85 },
                    scrollHeight,
                    totalScrollHeight,
                  })}%, 0)`,
                }
              : {
                  opacity: calcScrollEffect({
                    startValue: 1,
                    endValue: 0,
                    partScroll: { start: 0.85, end: 0.9 },
                    scrollHeight,

                    totalScrollHeight,
                  }),
                  transform: `translate3d(0, ${calcScrollEffect({
                    startValue: 0,
                    endValue: -20,
                    partScroll: { start: 0.85, end: 0.9 },
                    scrollHeight,
                    totalScrollHeight,
                  })}%, 0)`,
                }
        }
      >
        <h1 className="max-w-[1000px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-center text-7xl font-semibold leading-relaxed text-transparent">
          5. 축계 해석
        </h1>
      </MainMessage>

      <MainMessage
        style={
          scrollRatio <= 0
            ? {}
            : scrollRatio <= 0.95
              ? {
                  opacity:
                    calcScrollEffect({
                      startValue: 0,
                      endValue: 1,
                      partScroll: { start: 0.9, end: 0.95 },
                      scrollHeight,
                      totalScrollHeight,
                    }) + "",

                  transform: `translate3d(0, ${calcScrollEffect({
                    startValue: 20,
                    endValue: 0,
                    partScroll: { start: 0.9, end: 0.95 },
                    scrollHeight,
                    totalScrollHeight,
                  })}%, 0)`,
                }
              : {
                  opacity:
                    calcScrollEffect({
                      startValue: 1,
                      endValue: 0,
                      partScroll: { start: 0.95, end: 1 },
                      scrollHeight,
                      totalScrollHeight,
                    }) + "",

                  transform: `translate3d(0, ${calcScrollEffect({
                    startValue: 0,
                    endValue: -20,
                    partScroll: { start: 0.95, end: 1 },
                    scrollHeight,
                    totalScrollHeight,
                  })}%, 0)`,
                }
        }
      >
        <p className="max-w-[1000px] bg-gradient-to-b from-black to-slate-800 bg-clip-text text-center text-5xl font-semibold leading-relaxed text-transparent">
          축계의 안정성을 확보하기 위한
          <br />
          회전체 동역학을 통해 안정성을
          <br />
          확보한 설계를 구축합니다.
        </p>
      </MainMessage>
    </>
  );
}
