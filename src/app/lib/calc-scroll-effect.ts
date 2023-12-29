type CalcScrollEffectParams = {
  start: number;
  end: number;
  part?: { start: number; end: number };
  currentYOffset: number;
  scrollHeight: number;
};

export function calcScrollEffect({
  start,
  end,
  currentYOffset,
  scrollHeight,
  part,
}: CalcScrollEffectParams) {
  const scrollRatio = currentYOffset / scrollHeight;

  let rv;

  if (part) {
    const partScrollStart = part.start * scrollHeight;
    const partScrollEnd = part.end * scrollHeight;
    const partScrollHeight = partScrollEnd - partScrollStart;

    console.log(
      "Caculate Scroll Effect Values",
      "partStart",
      partScrollStart,
      "partEnd",
      partScrollEnd,
      "partScroll",
      partScrollHeight,
      "currentYOffset",
      currentYOffset
    );

    if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
      const partScrollRatio =
        (currentYOffset - partScrollStart) / partScrollHeight;
      rv = start + partScrollRatio * (end - start);
    } else if (currentYOffset < partScrollStart) {
      rv = start;
    } else if (currentYOffset > partScrollEnd) {
      rv = end;
    } else {
      throw Error("Error");
    }
  } else {
    rv = start + scrollRatio * (end - start);
  }
  return rv;
}
