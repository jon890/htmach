export default function classnames(...cls: string[]) {
  return cls.filter((c) => c !== "").join(" ");
}
