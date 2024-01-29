export default function classnames(...cls: (string | undefined)[]) {
  return cls.filter((c) => c && c !== "").join(" ");
}
