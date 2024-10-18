"use client";

import useWindowDimensions from "@/hooks/useWindow";
import { useEffect, useRef, useState } from "react";
import ComputationalFluidDynamics from "./main/ComputationalFluidDynamics";
import PumpEngineering from "./main/PumpEngineering";
import Remanufacturing from "./main/Remanufacturing";
import RotorDynamicsAnalysis from "./main/RotorDynamicsAnalysis";
import StructuralAnalysis from "./main/StructuralAnalysis";
import { LocaleParmas, MessageType } from "@/app/[locale]/layout";

export default function ScrollSection({
  locale,
  translation,
}: LocaleParmas & MessageType) {
  const containerRef = useRef<HTMLElement>(null);

  const { dimension } = useWindowDimensions();
  const [totalScrollHeight, setTotalScrollHeight] = useState(0);
  const prevHeight = dimension.height ?? 0;

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
    setTotalScrollHeight(dimension.height ?? 0 * 10 - prevHeight);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dimension, prevHeight, containerRef, handleScroll]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleScroll() {
    setScroll((prev) => ({
      ...prev,
      height: scrollY - prevHeight,
      ratio: (scrollY - prevHeight) / totalScrollHeight,
    }));
  }

  // console.log(totalScrollHeight, scrollHeight, scrollRatio);

  return (
    <section
      className="relative w-full pt-[50vh]"
      style={{ height: totalScrollHeight }}
      ref={containerRef}
    >
      <Remanufacturing
        scrollHeight={scrollHeight}
        scrollRatio={scrollRatio}
        totalScrollHeight={totalScrollHeight}
        translation={translation}
      />

      <PumpEngineering
        scrollHeight={scrollHeight}
        scrollRatio={scrollRatio}
        totalScrollHeight={totalScrollHeight}
        translation={translation}
      />

      <ComputationalFluidDynamics
        scrollHeight={scrollHeight}
        scrollRatio={scrollRatio}
        totalScrollHeight={totalScrollHeight}
        translation={translation}
      />

      <StructuralAnalysis
        scrollHeight={scrollHeight}
        scrollRatio={scrollRatio}
        totalScrollHeight={totalScrollHeight}
        translation={translation}
      />

      <RotorDynamicsAnalysis
        scrollHeight={scrollHeight}
        scrollRatio={scrollRatio}
        totalScrollHeight={totalScrollHeight}
        translation={translation}
      />
    </section>
  );
}
