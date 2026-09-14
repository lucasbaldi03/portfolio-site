"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import clsx from "@/lib/clsx";

type Variant = "primary" | "ghost" | "outline";

type Props = Omit<HTMLMotionProps<"button">, "children"> & {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
};

export default function GlassButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: Props) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  } as const;

  const variants: Record<Variant, string> = {
    primary:
      "bg-accent text-black font-medium hover:brightness-110 shadow-[0_10px_40px_-12px_rgba(168,255,92,0.7)]",
    ghost: "glass text-white hover:bg-white/10",
    outline:
      "border border-white/20 text-white hover:bg-white/5 backdrop-blur-md",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={clsx(
        "inline-flex items-center gap-2 rounded-full transition-colors",
        sizes[size],
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
