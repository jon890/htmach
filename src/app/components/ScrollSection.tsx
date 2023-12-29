"use client";

import useWindowDimensions from "@/hooks/useWindow";
import { calcScrollEffect } from "@/lib/calc-scroll-effect";
import classnames from "@/lib/classnames";
import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";

export default function ScrollSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const { dimension } = useWindowDimensions();
  const [totalScrollHeight, setTotalScrollHeight] = useState(0);
  const prevHeight = dimension.height;

  const [{ height: scrollHeight, ratio: scrollRatio }, setScroll] = useState<{
    height: number;
    ratio: number;
  }>({
    height: typeof window !== "undefined" ? window.scrollY - prevHeight : -1,
    ratio:
      typeof window !== "undefined"
        ? (window.scrollY - prevHeight) / totalScrollHeight
        : -1,
  });

  // window.onLoad
  useEffect(() => {
    setTotalScrollHeight(dimension.height * 4 - prevHeight);

    const image = new Image();
    image.src = "/images/bg-business-overview.jpg";
    image.onload = function () {
      if (canvasRef?.current) {
        const heightRatio = dimension.height / 1080;
        canvasRef.current.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
        canvasRef.current.getContext("2d")?.drawImage(image, 0, 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dimension.height, prevHeight, canvasRef, containerRef, handleScroll]);

  let rafState = false;
  let rafId = 0;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleScroll() {
    setScroll((prev) => ({
      ...prev,
      height: scrollY - prevHeight,
      ratio: (scrollY - prevHeight) / totalScrollHeight,
    }));

    // 비디오를 부드럽게
    if (!rafState) {
      rafId = requestAnimationFrame(loop);
      rafState = true;
    }
  }

  let acc = 0.1;
  let delayedYOffset = 0;
  function loop() {
    delayedYOffset = delayedYOffset + (scrollY - delayedYOffset) * acc;

    rafId = requestAnimationFrame(loop);

    if (Math.abs(scrollY - delayedYOffset) < 1) {
      cancelAnimationFrame(rafId);
      rafState = false;
    }
  }

  console.log(totalScrollHeight, scrollHeight, scrollRatio);

  return (
    <section
      className="relative w-full pt-[50vh]"
      style={{ height: totalScrollHeight }}
      ref={containerRef}
    >
      <div className={classnames("top-0 h-full fixed left-0 w-full")}>
        <canvas
          className="absolute top-1/2 left-1/2"
          width="1000"
          height="1000"
          ref={canvasRef}
          style={
            scrollRatio <= 0.5
              ? {
                  opacity: calcScrollEffect({
                    start: 0,
                    end: 0.5,
                    part: { start: 0, end: 0.1 },
                    scrollHeight,
                    totalScrollHeight,
                  }),
                }
              : {
                  opacity: calcScrollEffect({
                    start: 0.5,
                    end: 0,
                    part: { start: 0.9, end: 1 },
                    scrollHeight,
                    totalScrollHeight,
                  }),
                }
          }
        />
      </div>

      <MainMessage
        style={
          scrollRatio <= 0
            ? {}
            : scrollRatio <= 0.22
            ? {
                opacity: calcScrollEffect({
                  start: 0,
                  end: 1,
                  part: { start: 0.1, end: 0.2 },
                  scrollHeight,
                  totalScrollHeight,
                }),
                transform: `translate3d(0, ${calcScrollEffect({
                  start: 20,
                  end: 0,
                  part: { start: 0.1, end: 0.2 },
                  scrollHeight,
                  totalScrollHeight,
                })}%, 0)`,
              }
            : {
                opacity: calcScrollEffect({
                  start: 1,
                  end: 0,
                  part: { start: 0.25, end: 0.3 },
                  scrollHeight,

                  totalScrollHeight,
                }),
                transform: `translate3d(0, ${calcScrollEffect({
                  start: 0,
                  end: -20,
                  part: { start: 0.25, end: 0.3 },
                  scrollHeight,
                  totalScrollHeight,
                })}%, 0)`,
              }
        }
      >
        <h1 className="font-bold text-center text-5xl">사업 분야 소개</h1>
        <br />
        <p className="font-bold text-center">재제조</p>
      </MainMessage>

      <MainMessage
        style={
          scrollRatio <= 0
            ? {}
            : scrollRatio <= 0.42
            ? {
                opacity:
                  calcScrollEffect({
                    start: 0,
                    end: 1,
                    part: { start: 0.3, end: 0.4 },
                    scrollHeight,
                    totalScrollHeight,
                  }) + "",

                transform: `translate3d(0, ${calcScrollEffect({
                  start: 20,
                  end: 0,
                  part: { start: 0.3, end: 0.4 },
                  scrollHeight,
                  totalScrollHeight,
                })}%, 0)`,
              }
            : {
                opacity:
                  calcScrollEffect({
                    start: 1,
                    end: 0,
                    part: { start: 0.45, end: 0.5 },
                    scrollHeight,
                    totalScrollHeight,
                  }) + "",

                transform: `translate3d(0, ${calcScrollEffect({
                  start: 0,
                  end: -20,
                  part: { start: 0.45, end: 0.5 },
                  scrollHeight,
                  totalScrollHeight,
                })}%, 0)`,
              }
        }
      >
        <p className="font-semibold text-center max-w-screen-sm leading-10">
          펌프 One-Stop 재제조 서비스를 통한 <br />
          로터에 대한 설계, 역설계 연구 역량을 <br /> 보유하고 있습니다.
        </p>
      </MainMessage>

      {/* <article>
        <h2>설계</h2>
        <p>
          펌프, 터빈, 압축기 로터에 대한 설계, 역설계 연구 역량을 기반으로 수준
          높은 설계를 구현합니다.
        </p>
      </article>

      <article>
        <h2>유동해석</h2>
        <p>전산유체역학(CFD)를 통해 로터의 효율, 성능을 예측합니다.</p>
      </article>

      <article>
        <h2>구조해석</h2>
        <p>
          로터의 강건성을 확보하기 위한 구조해석(CAE) 역량을 보유하고 있습니다.
        </p>
      </article>

      <article>
        <h2>축계 해석</h2>
        <p>
          축계의 안정성을 확보하기 위한 회전체 동역학을 통해 안정성을 확보한
          설계를 구축합니다.
        </p>
      </article> */}
    </section>
  );
}

const MainMessage = forwardRef(function MainMessage(
  { children, style }: { children: React.ReactNode; style?: CSSProperties },
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      className="fixed left-0 w-full flex flex-col items-center justify-center top-[35vh] h-12, text-3xl opacity-0"
      ref={ref}
      style={style ?? {}}
    >
      {children}
    </div>
  );
});
