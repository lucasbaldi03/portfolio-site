"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { profile, personal } from "@/lib/content";
import { useMode } from "@/lib/mode";
import BigName from "./BigName";

export default function Hero() {
  const { mode } = useMode();
  const isProf = mode === "prof";

  const tagline = isProf
    ? "Marketing, design e estratégia com IA. Do roteiro à ativação, conectando marcas a resultados."
    : `${personal.headline} ${personal.subhead}`;

  return (
    <section id="top" className="relative pt-24 md:pt-28 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col items-center text-center"
      >
        <div className="flex items-center gap-2 text-xs">
          <span>De {profile.hometown}, SP</span>
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent text-accent-ink">
            <MapPin size={13} strokeWidth={2.5} />
          </span>
          <span>para o Brasil</span>
        </div>

        <div className="mt-6 w-full grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          <span className="label text-[10px] justify-self-start md:justify-self-center text-muted">
            Desde 2016
          </span>
          <motion.p
            key={mode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="label max-w-[34ch] leading-snug text-[12px] md:text-[14px]"
          >
            {tagline}
          </motion.p>
          <span className="label text-[10px] justify-self-end md:justify-self-center text-muted">
            10+ anos
          </span>
        </div>

        <a
          href="#contato"
          className="label mt-5 text-[12px] underline underline-offset-4 decoration-accent decoration-2 hover:text-accent transition-colors"
        >
          Vamos criar juntos
        </a>
      </motion.div>

      <BigName className="mt-14 md:mt-24" delay={0.2} />
    </section>
  );
}
