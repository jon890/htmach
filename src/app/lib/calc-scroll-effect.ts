type CalcScrollEffectParams = {
  start: number;
  end: number;
  part?: { start: number; end: number };
  scrollHeight: number;
  totalScrollHeight: number;
};

export function calcScrollEffect({
  start,
  end,
  part,
  scrollHeight,
  totalScrollHeight,
}: CalcScrollEffectParams) {
  const scrollRatio = scrollHeight / totalScrollHeight;

  let rv;

  if (part) {
    const partScrollStart = part.start * totalScrollHeight;
    const partScrollEnd = part.end * totalScrollHeight;
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
      rv = start + partScrollRatio * (end - start);
    } else if (scrollHeight < partScrollStart) {
      rv = start;
    } else if (scrollHeight > partScrollEnd) {
      rv = end;
    } else {
      throw Error("Error");
    }
  } else {
    rv = start + scrollRatio * (end - start);
  }
  return rv;
}
