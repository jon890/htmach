import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export default function DividerX({ className }: Props) {
  return <div className={cn("h-px w-full", className)} />;
}
