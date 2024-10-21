"use client";

import classnames from "@/lib/classnames";
import { ReactNode } from "react";
import { InView } from "react-intersection-observer";

/**
 * 해당 엘리먼트가 클라이언트의 뷰(화면)에 나타났을 때
 * 사용할 클래스를 지정할 수 있는 컴포넌트
 *
 * 나타났을 때 애니메이션을 지정하는데 사용한다
 */
export default function InViewHelper({
  children,
  anyClass = "",
  inClass = "",
  outClass = "",
}: {
  children: ReactNode;
  anyClass?: string;
  inClass?: string;
  outClass?: string;
}) {
  return (
    <InView triggerOnce={false} threshold={0.5} rootMargin="80px">
      {({ inView, ref, entry }) => (
        <div
          ref={ref}
          className={classnames(
            anyClass,
            "opacity-0 transition duration-1000",
            inView
              ? `${inClass} opacity-100`
              : `${outClass} translate-y-[1rem]`,
          )}
        >
          {children}
        </div>
      )}
    </InView>
  );
}
