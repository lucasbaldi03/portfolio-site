import { ReactNode } from "react";
import clsx from "@/lib/clsx";

type Props = {
  children: ReactNode;
  className?: string;
  strong?: boolean;
  dark?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
};

const paddingMap = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8 md:p-10",
} as const;

export default function GlassCard({
  children,
  className,
  strong,
  dark,
  padding = "md",
}: Props) {
  const base = dark ? "glass-dark" : strong ? "glass-strong" : "glass";
  return (
    <div
      className={clsx(
        base,
        "rounded-2xl relative noise-overlay overflow-hidden",
        paddingMap[padding],
        className,
      )}
    >
      {children}
    </div>
  );
}
