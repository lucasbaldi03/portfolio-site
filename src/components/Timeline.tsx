"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/content";
import GlassCard from "./ui/GlassCard";

export default function Timeline() {
  return (
    <section id="trajetoria" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="mb-16 max-w-2xl">
          <div className="text-[11px] uppercase tracking-widest text-accent">
            Trajetória
          </div>
          <h2 className="mt-3 text-4xl md:text-5xl editorial tracking-tight leading-[1] text-white">
            Ao longo da minha{" "}
            <span className="font-serif-italic text-accent">carreira</span>
          </h2>
          <p className="mt-4 text-white/60">
            5 empresas, 10 anos, papéis de designer a coordenador. Cada linha
            aqui é um projeto que me trouxe até aqui.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, i) => {
              const isRight = i % 2 === 1;
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-8 ${
                    isRight ? "md:direction-rtl" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-4 -translate-x-1/2 z-10">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        exp.current
                          ? "bg-accent border-accent shadow-[0_0_20px_rgba(168,255,92,0.7)]"
                          : "bg-black border-white/40"
                      }`}
                    />
                  </div>

                  <div
                    className={`pl-12 md:pl-0 ${
                      isRight ? "md:col-start-2" : ""
                    }`}
                  >
                    <GlassCard padding="lg" className="relative">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <div className="text-xs text-white/50 font-mono">
                            {exp.period}
                          </div>
                          <div className="mt-1.5 text-xl text-white font-medium">
                            {exp.company}
                          </div>
                          <div className="text-accent text-sm mt-0.5">
                            {exp.role}
                          </div>
                        </div>
                        {exp.current && (
                          <div className="text-[10px] uppercase tracking-widest text-accent bg-accent/10 border border-accent/30 rounded-full px-2 py-1">
                            Atual
                          </div>
                        )}
                      </div>
                      <p className="mt-4 text-sm text-white/70 leading-relaxed">
                        {exp.summary}
                      </p>
                      <ul className="mt-4 space-y-1.5">
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-sm text-white/60"
                          >
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/70 flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      {exp.aiTools && exp.aiTools.length > 0 && (
                        <div className="mt-5 rounded-xl border border-accent/25 bg-accent/[0.05] p-3.5">
                          <div className="text-[10px] uppercase tracking-[0.2em] text-accent flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-accent shadow-[0_0_8px_rgba(168,255,92,0.9)]" />
                            Stack de IA
                          </div>
                          <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {exp.aiTools.map((t) => (
                              <span
                                key={t}
                                className="text-[11px] font-medium text-accent-soft bg-accent/10 border border-accent/40 rounded-md px-2.5 py-1"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {exp.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] uppercase tracking-wider text-white/60 border border-white/10 rounded-full px-2.5 py-1"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
