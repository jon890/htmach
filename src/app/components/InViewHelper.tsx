"use client";

import { InView } from "react-intersection-observer";

export default function InViewHelper({
  children,
  inClass,
  outClass,
}: {
  children: React.ReactNode;
  inClass?: string;
  outClass?: string;
}) {
  return (
    <InView triggerOnce threshold={1}>
      {({ inView, ref, entry }) => (
        <div ref={ref} className={inView ? inClass : outClass}>
          {children}
        </div>
      )}
    </InView>
  );
}
