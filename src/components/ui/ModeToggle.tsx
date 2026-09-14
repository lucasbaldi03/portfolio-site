"use client";

import { motion } from "framer-motion";
import { Briefcase, Sparkles } from "lucide-react";
import { useMode } from "@/lib/mode";
import clsx from "@/lib/clsx";

export default function ModeToggle() {
  const { mode, setMode } = useMode();

  const options = [
    { key: "prof" as const, label: "Profissional", icon: Briefcase },
    { key: "pessoal" as const, label: "Pessoal", icon: Sparkles },
  ];

  return (
    <div className="glass-strong rounded-full p-1 flex items-center gap-1 relative">
      {options.map((o) => {
        const active = mode === o.key;
        const Icon = o.icon;
        return (
          <button
            key={o.key}
            onClick={() => setMode(o.key)}
            className="relative px-4 md:px-5 py-2 rounded-full text-sm font-medium z-10 flex items-center gap-2"
          >
            {active && (
              <motion.span
                layoutId="mode-pill"
                className="absolute inset-0 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                style={{
                  boxShadow: "0 8px 30px -8px rgba(168,255,92,0.7)",
                }}
              />
            )}
            <span
              className={clsx(
                "relative z-10 flex items-center gap-2 transition-colors",
                active ? "text-black" : "text-white/70",
              )}
            >
              <Icon size={15} />
              <span className="hidden sm:inline">{o.label}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
