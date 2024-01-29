type CalcScrollEffectParams = {
  startValue: number;
  endValue: number;
  partScroll?: { start: number; end: number };
  scrollHeight: number;
  totalScrollHeight: number;
};

export function calcScrollEffect({
  startValue,
  endValue,
  partScroll,
  scrollHeight,
  totalScrollHeight,
}: CalcScrollEffectParams) {
  const scrollRatio = scrollHeight / totalScrollHeight;

  let rv;

  if (partScroll) {
    const partScrollStart = partScroll.start * totalScrollHeight;
    const partScrollEnd = partScroll.end * totalScrollHeight;
    const partScrollHeight = partScrollEnd - partScrollStart;

    // console.log(
    //   "Caculate Scroll Effect Values",
    //   "partStart",
    //   partScrollStart,
    //   "partEnd",
    //   partScrollEnd,
    //   "partScroll",
    //   partScrollHeight,
    //   "scrollHeight",
    //   scrollHeight,
    //   "totalScrollHeight",
    //   totalScrollHeight
    // );

    if (scrollHeight >= partScrollStart && scrollHeight <= partScrollEnd) {
      const partScrollRatio =
        (scrollHeight - partScrollStart) / partScrollHeight;
      rv = startValue + partScrollRatio * (endValue - startValue);
    } else if (scrollHeight < partScrollStart) {
      rv = startValue;
    } else if (scrollHeight > partScrollEnd) {
      rv = endValue;
    } else {
      throw Error("Error");
    }
  } else {
    rv = startValue + scrollRatio * (endValue - startValue);
  }
  return rv;
}
