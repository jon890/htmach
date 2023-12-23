"use client";

import useWindowDimensions from "@/app/hooks/useWindow";
import React, { ForwardedRef, RefObject, useEffect, useRef } from "react";
import { calcScrollEffect } from "../lib/calc-scroll-effect";

export default function ScrollSection({ id }: { id: number }) {
  const { dimension } = useWindowDimensions();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const mainMessage1Ref = useRef<HTMLDivElement>(null);
  const mainMessage2Ref = useRef<HTMLDivElement>(null);

  const totalImages = 300;
  let canvasImages: HTMLImageElement[] = [];
  let scrollHeight = 0; // 전체 스크롤 길이

  function initCanvasImages() {
    for (let i = 0; i < totalImages; i++) {
      const imageElem = new Image();
      imageElem.src = `/videos/001/IMG_${6726 + i}.JPG`;
      canvasImages.push(imageElem);
    }
  }

  useEffect(() => {
    initCanvasImages();
    setLayout();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [canvasRef, containerRef]);

  function setLayout() {
    scrollHeight = dimension.height * 5;

    if (containerRef?.current) {
      containerRef.current.style.height = `${scrollHeight}px`;
    }

    const heightRatio = dimension.height / 1080;
    if (canvasRef?.current) {
      canvasRef.current.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
      canvasRef.current.getContext("2d")?.drawImage(canvasImages[0], 0, 0);
    }
  }

  let rafState = false;
  let rafId = 0;
  function handleScroll() {
    scrollLoop();

    // 비디오를 부드럽게
    if (!rafState) {
      rafId = requestAnimationFrame(loop);
      rafState = true;
    }
  }

  function scrollLoop() {
    playAnimation();
  }

  function playAnimation() {
    const currentYOffset = scrollY;
    const scrollRatio = scrollY / scrollHeight;

    console.log("scrollRatio", scrollRatio);

    if (scrollRatio <= 0.22) {
      if (mainMessage1Ref?.current) {
        mainMessage1Ref.current.style.opacity =
          calcScrollEffect({
            start: 0,
            end: 1,
            part: { start: 0.1, end: 0.2 },
            currentYOffset,
            scrollHeight,
          }) + "";

        mainMessage1Ref.current.style.transform = `translate3d(0, ${calcScrollEffect(
          {
            start: 20,
            end: 0,
            part: { start: 0.1, end: 0.2 },
            currentYOffset,
            scrollHeight,
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
            scrollHeight,
          }) + "";

        mainMessage1Ref.current.style.transform = `translate3d(0, ${calcScrollEffect(
          {
            start: 0,
            end: -20,
            part: { start: 0.25, end: 0.3 },
            currentYOffset,
            scrollHeight,
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
              scrollHeight,
            }) + "";

          mainMessage2Ref.current.style.transform = `translate3d(0, ${calcScrollEffect(
            {
              start: 20,
              end: 0,
              part: { start: 0.3, end: 0.4 },
              currentYOffset,
              scrollHeight,
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
              scrollHeight,
            }) + "";

          mainMessage2Ref.current.style.transform = `translate3d(0, ${calcScrollEffect(
            {
              start: 0,
              end: -20,
              part: { start: 0.45, end: 0.5 },
              currentYOffset,
              scrollHeight,
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

    const sequence = Math.round(
      calcScrollEffect({
        start: 0,
        end: totalImages - 1,
        currentYOffset: scrollY,
        scrollHeight,
      })
    );
    if (canvasImages[sequence] && canvasRef?.current) {
      canvasRef?.current
        .getContext("2d")
        ?.drawImage(canvasImages[sequence], 0, 0);
    }
    rafId = requestAnimationFrame(loop);

    if (Math.abs(scrollY - delayedYOffset) < 1) {
      cancelAnimationFrame(rafId);
      rafState = false;
    }
  }

  return (
    <section
      className="scroll-section pt-[50vh] relative"
      id={`scroll-section-${id}`}
      ref={containerRef}
    >
      <h1 className="relative -top-[10vh] text-5xl text-center font-bold z-10">
        HTM
      </h1>
      <h2 className="relative -top-[5vh] text-3xl text-center font-semibold z-10">
        High Turbo Machinery
      </h2>

      <div className="fixed left-0 w-full top-0 h-full">
        <canvas
          id={`video-canvas-${id}`}
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
    </section>
  );
}

const MainMessage = React.forwardRef(function MainMessage(
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
