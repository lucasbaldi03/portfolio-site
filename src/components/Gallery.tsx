"use client";

import { ReactNode, useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionLabel from "./SectionLabel";

// No desktop a seção fica presa na tela e a rolagem vertical anda os cards
// pro lado. No celular vira um carrossel nativo com snap.
export default function Gallery({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!track.current) return;
      const desktop = window.matchMedia("(min-width: 768px)").matches;
      setDistance(
        desktop ? Math.max(0, track.current.scrollWidth - window.innerWidth) : 0,
      );
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [children]);

  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <section
      id={id}
      ref={section}
      className="relative mt-16 md:mt-0 scroll-mt-16"
      style={{ height: distance ? `calc(100vh + ${distance}px)` : undefined }}
    >
      <div className="md:sticky md:top-0 md:h-screen flex flex-col md:justify-center md:overflow-hidden">
        <SectionLabel className="px-4 md:px-6 mb-5">{label}</SectionLabel>
        <motion.div
          ref={track}
          style={{ x: distance ? x : 0 }}
          className="flex gap-3 px-4 md:px-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar md:w-max"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
