"use client";

import { calcScrollEffect } from "@/lib/calc-scroll-effect";
import classnames from "@/lib/classnames";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function MainImages() {
  const tick = 16; // ms
  const loop = 8000; // ms
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(timer, tick);
  }, []);

  const timer = useCallback(() => {
    setTime((prev) => {
      if (prev < loop * 4) {
        return prev + tick;
      } else {
        return 0;
      }
    });
  }, []);

  return (
    <div className="absolute flex h-[calc(100vh-80px)] w-full items-center justify-center">
      <Image
        src="/images/main/main1.jpg"
        width={800}
        height={800}
        alt="main1"
        className={classnames("h-full w-full object-cover opacity-50 blur-sm", {
          hidden: time > loop,
        })}
        style={
          time < 1000
            ? {
                transform: `scale(${calcScrollEffect({
                  startValue: 1.3,
                  endValue: 1.0,
                  scrollHeight: time,
                  totalScrollHeight: 1000,
                })})`,
                opacity: `${calcScrollEffect({
                  startValue: 0,
                  endValue: 0.5,
                  scrollHeight: time,
                  totalScrollHeight: 1000,
                })}`,
              }
            : {}
        }
      />
      <Image
        src="/images/main/main2.png"
        width={800}
        height={800}
        alt="main2"
        className={classnames("h-full w-full object-cover opacity-50 blur-sm", {
          hidden: time < loop || time > loop * 2,
        })}
        style={
          time > loop && time < loop + 1000
            ? {
                transform: `scale(${calcScrollEffect({
                  startValue: 1.3,
                  endValue: 1.0,
                  scrollHeight: time - loop,
                  totalScrollHeight: 1000,
                })})`,
                opacity: `${calcScrollEffect({
                  startValue: 0,
                  endValue: 0.5,
                  scrollHeight: time - loop,
                  totalScrollHeight: 1000,
                })}`,
              }
            : {}
        }
      />
      <Image
        src="/images/main/main3.png"
        width={800}
        height={800}
        alt="main3"
        className={classnames("h-full w-full object-cover opacity-50 blur-sm", {
          hidden: time < loop * 2 || time > loop * 3,
        })}
        style={
          time > loop * 2 && time < loop * 2 + 1000
            ? {
                transform: `scale(${calcScrollEffect({
                  startValue: 1.3,
                  endValue: 1.0,
                  scrollHeight: time - loop * 2,
                  totalScrollHeight: 1000,
                })})`,
                opacity: `${calcScrollEffect({
                  startValue: 0,
                  endValue: 0.5,
                  scrollHeight: time - loop * 2,
                  totalScrollHeight: 1000,
                })}`,
              }
            : {}
        }
      />
      <Image
        src="/images/main/main4.png"
        width={800}
        height={800}
        alt="main1"
        className={classnames("h-full w-full object-cover opacity-50 blur-sm", {
          hidden: time < loop * 3,
        })}
        style={
          time > loop * 3 && time < loop * 3 + 1000
            ? {
                transform: `scale(${calcScrollEffect({
                  startValue: 1.3,
                  endValue: 1.0,
                  scrollHeight: time - loop * 3,
                  totalScrollHeight: 1000,
                })})`,
                opacity: `${calcScrollEffect({
                  startValue: 0,
                  endValue: 0.5,
                  scrollHeight: time - loop * 3,
                  totalScrollHeight: 1000,
                })}`,
              }
            : {}
        }
      />
    </div>
  );
}
