"use client";

import { useEffect, useState } from "react";

function getDimension() {
  if (typeof window === "undefined") {
    return { width: 0, height: 0 };
  }

  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
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

  return { dimension };
}
