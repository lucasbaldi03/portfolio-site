"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ModeToggle from "./ui/ModeToggle";

export default function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 100], [0, 0.6]);

  return (
    <motion.nav
      style={{ backgroundColor: `rgba(5, 7, 10, ${bg.get()})` }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 py-4"
    >
      <div className="glass-strong rounded-full pl-5 pr-2 py-2 flex items-center gap-6 max-w-[720px] w-full">
        <a href="#top" className="flex items-center gap-2 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(168,255,92,0.9)] animate-pulse" />
          Lucas Baldi
        </a>
        <div className="hidden md:flex items-center gap-5 text-xs text-white/60 flex-1">
          <a href="#trajetoria" className="hover:text-white transition-colors">
            Trajetória
          </a>
          <a href="#portfolio" className="hover:text-white transition-colors">
            Portfólio
          </a>
          <a href="#contato" className="hover:text-white transition-colors">
            Contato
          </a>
        </div>
        <div className="ml-auto md:ml-0">
          <ModeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
