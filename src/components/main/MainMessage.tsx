import { CSSProperties, ForwardedRef, forwardRef } from "react";

export default forwardRef(function MainMessage(
  { children, style }: { children: React.ReactNode; style?: CSSProperties },
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      className="fixed left-0 top-[35vh] flex w-full flex-col items-center justify-center opacity-0"
      ref={ref}
      style={style ?? {}}
    >
      {children}
    </div>
  );
});
