"use client";

import useWindowDimensions from "@/hooks/useWindow";
import { calcScrollEffect } from "@/lib/calc-scroll-effect";
import { ForwardedRef, forwardRef, useEffect, useRef } from "react";

export default function ScrollSection() {
  const { dimension } = useWindowDimensions();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const mainMessage1Ref = useRef<HTMLDivElement>(null);
  const mainMessage2Ref = useRef<HTMLDivElement>(null);

  const prevHeight = dimension.height;
  let totalScrollHeight = 0;

  useEffect(() => {
    setContainerHeight();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [canvasRef, containerRef, handleScroll, setContainerHeight]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function setContainerHeight() {
    totalScrollHeight = dimension.height * 5 - prevHeight;

    if (containerRef?.current) {
      containerRef.current.style.height = `${totalScrollHeight}px`;
    }
  }

  let rafState = false;
  let rafId = 0;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleScroll() {
    playAnimation();

    // 비디오를 부드럽게
    if (!rafState) {
      rafId = requestAnimationFrame(loop);
      rafState = true;
    }
  }

  function playAnimation() {
    const currentYOffset = scrollY - prevHeight;
    const scrollRatio = currentYOffset / totalScrollHeight;

    console.log("scrollRatio", scrollRatio);

    if (scrollRatio <= 0.22) {
      if (mainMessage1Ref?.current) {
        mainMessage1Ref.current.style.opacity =
          calcScrollEffect({
            start: 0,
            end: 1,
            part: { start: 0.1, end: 0.2 },
            currentYOffset,
            scrollHeight: totalScrollHeight,
          }) + "";

        mainMessage1Ref.current.style.transform = `translate3d(0, ${calcScrollEffect(
          {
            start: 20,
            end: 0,
            part: { start: 0.1, end: 0.2 },
            currentYOffset,
            scrollHeight: totalScrollHeight,
          }
        )}%, 0)`;
      }
    } else {
      if (mainMessage1Ref?.current) {
        mainMessage1Ref.current.style.opacity =
          calcScrollEffect({
            start: 1,
            end: 0,
            part: { start: 0.25, end: 0.3 },
            currentYOffset,
            scrollHeight: totalScrollHeight,
          }) + "";

        mainMessage1Ref.current.style.transform = `translate3d(0, ${calcScrollEffect(
          {
            start: 0,
            end: -20,
            part: { start: 0.25, end: 0.3 },
            currentYOffset,
            scrollHeight: totalScrollHeight,
          }
        )}%, 0)`;
      }

      if (scrollRatio <= 0.42) {
        if (mainMessage2Ref?.current) {
          mainMessage2Ref.current.style.opacity =
            calcScrollEffect({
              start: 0,
              end: 1,
              part: { start: 0.3, end: 0.4 },
              currentYOffset,
              scrollHeight: totalScrollHeight,
            }) + "";

          mainMessage2Ref.current.style.transform = `translate3d(0, ${calcScrollEffect(
            {
              start: 20,
              end: 0,
              part: { start: 0.3, end: 0.4 },
              currentYOffset,
              scrollHeight: totalScrollHeight,
            }
          )}%, 0)`;
        }
      } else {
        if (mainMessage2Ref?.current) {
          mainMessage2Ref.current.style.opacity =
            calcScrollEffect({
              start: 1,
              end: 0,
              part: { start: 0.45, end: 0.5 },
              currentYOffset,
              scrollHeight: totalScrollHeight,
            }) + "";

          mainMessage2Ref.current.style.transform = `translate3d(0, ${calcScrollEffect(
            {
              start: 0,
              end: -20,
              part: { start: 0.45, end: 0.5 },
              currentYOffset,
              scrollHeight: totalScrollHeight,
            }
          )}%, 0)`;
        }
      }
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

  return (
    <section className="pt-[50vh] relative" ref={containerRef}>
      <div className="fixed left-0 w-full top-0 h-full">
        <canvas
          width="1920"
          height="1080"
          ref={canvasRef}
          className="absolute top-1/2 left-1/2"
        />
      </div>

      <MainMessage ref={mainMessage1Ref}>
        <p className="font-bold text-center">
          회전체 기기의 모든 것, HTM이 함께 합니다.
        </p>
      </MainMessage>

      <MainMessage ref={mainMessage2Ref}>
        <p className="font-semibold text-center max-w-screen-sm leading-10">
          회전체 기기의 제제조 업무를 기반으로 고객의 요구에 부합할 수 있는
          최선의 결과를 위해 노력합니다.
        </p>
      </MainMessage>

      <h1>사업분야</h1>

      <article>
        <h2>재제조</h2>
        <p>
          펌프 One-Stop 재제조 서비스를 통한 로터에 대한 설계, 역설계 연구
          역량을 보유하고 있습니다.
        </p>
      </article>

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
  { children }: { children: React.ReactNode },
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      className="fixed left-0 w-full flex items-center justify-center top-[35vh] h-12, text-3xl opacity-0"
      ref={ref}
    >
      {children}
    </div>
  );
});
