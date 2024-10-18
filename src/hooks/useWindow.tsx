"use client";

import { useEffect, useState } from "react";

function getDimension() {
  if (typeof window === "undefined") {
    return {
      width: undefined,
      height: undefined,
      isMobile: undefined,
      scrollbarWidth: undefined,
    };
  }

  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
    isMobile: width < 1024,
    scrollbarWidth: width - document.body.clientWidth,
  };
}

export default function useWindow() {
  const [dimension, setDimension] = useState(getDimension());

  useEffect(() => {
    function handleResize() {
      setDimension(getDimension());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { dimension, isMobile: dimension.isMobile };
}
