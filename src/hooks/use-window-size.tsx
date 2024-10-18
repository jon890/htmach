"use client";

import { useEffect, useState } from "react";

// TODO 요런 라이브러리르 정리하여 fos-ui로 배포해보자
export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
    isMobile?: boolean;
    scrollbarWidth?: number;
  }>({
    width: undefined,
    height: undefined,
    isMobile: undefined,
    scrollbarWidth: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 1024,
        scrollbarWidth: window.innerWidth - document.body.clientWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
