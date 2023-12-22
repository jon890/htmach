"use client";

import { useEffect, useState } from "react";

function getDimension() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function getScrollY() {
  const { scrollY } = window;
  return scrollY;
}

export default function useWindow() {
  const [dimension, setDimension] = useState(getDimension());
  const [scrollY, setScrollY] = useState(getScrollY());

  useEffect(() => {
    function handleResize() {
      setDimension(getDimension());
    }

    function handleScroll() {
      setScrollY(getScrollY());
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { dimension, scrollY };
}
