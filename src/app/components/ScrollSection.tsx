"use client";

import { useEffect, useRef } from "react";
import useWindowDimensions from "../hooks/useWindow";

export default function ScrollSection({ id }: { id: number }) {
  const { dimension } = useWindowDimensions();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  let canvasImages: HTMLImageElement[] = [];
  let scrollHeight = 0;

  function initCanvasImages() {
    for (let i = 0; i < 300; i++) {
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
  }, []);

  function setLayout() {
    scrollHeight = dimension.height * 5;

    if (containerRef?.current) {
      containerRef.current.style.height = `${scrollHeight}px`;
    }

    const heightRatio = dimension.height / 1080;
    if (canvasRef?.current) {
      canvasRef.current.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
    }
  }

  let rafState = false;
  let rafId = 0;
  function handleScroll() {
    console.log("scrollY", window.scrollY);

    if (!rafState) {
      rafId = requestAnimationFrame(loop);
      rafState = true;
    }
  }

  let acc = 0.1;
  let delayedYOffset = 0;
  function loop() {
    delayedYOffset = delayedYOffset + (scrollY - delayedYOffset) * acc;

    const sequence = Math.round(calcValues([0, 299], scrollY));

    console.log("sequence", sequence);
    console.log("scrollY", scrollY);

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

  function calcValues(
    [start, end]: [start: number, end: number],
    currentYOffset: number
  ) {
    const scrollRatio = currentYOffset / scrollHeight;

    let rv;
    rv = start + scrollRatio * (end - start);

    return rv;
  }

  //   console.log("height", dimension.height);
  //   console.log("scrollY", scrollY);

  return (
    <section
      className="scroll-section pt-[50vh] relative"
      id={`scroll-section-${id}`}
      ref={containerRef}
    >
      <h1 className="relative -top-[10vh] text-3xl text-center font-bold z-10">
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

      <MainMessage>
        <p className="font-bold text-center">
          회전체 기기의 모든 것, HTM이 함께 합니다.
        </p>
      </MainMessage>

      {/* <MainMessage>
        <p>
          회전체 기기의 제제조 업무를 기반으로 고객의 요구에 부합할 수 있는
          최선의 결과를 위해 노력합니다.
        </p>
      </MainMessage> */}
    </section>
  );
}

function MainMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed left-0 w-full flex items-center justify-center top-[35vh] h-12, text-3xl opacity-0">
      {children}
    </div>
  );
}
