"use client";

import { motion } from "framer-motion";
import clsx from "@/lib/clsx";

// Linha fina que se desenha + rótulo "↳ TEXTO"
export default function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("relative", className)}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="h-px bg-fg/30 origin-left"
      />
      <div className="label mt-3 flex items-center gap-2">
        <span className="text-accent text-base leading-none">↳</span>
        {children}
      </div>
    </div>
  );
}
