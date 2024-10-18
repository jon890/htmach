import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export default function DividerY({ className }: Props) {
  return <div className={cn("h-full w-px", className)} />;
}
