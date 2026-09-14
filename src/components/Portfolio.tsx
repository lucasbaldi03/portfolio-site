"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";
import GlassCard from "./ui/GlassCard";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-14 flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-widest text-accent">
              Portfólio
            </div>
            <h2 className="mt-3 text-4xl md:text-5xl editorial tracking-tight leading-[1] text-white">
              Cases que{" "}
              <span className="font-serif-italic text-accent">deixei</span> a
              marca.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/60">
            Uma seleção de projetos que atravessam gaming, saúde, finanças e
            entretenimento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <GlassCard
      padding="none"
      className="group h-full flex flex-col transition-all hover:border-accent/40 hover:shadow-[0_20px_60px_-20px_rgba(168,255,92,0.35)]"
    >
      <div
        className="aspect-[4/3] relative overflow-hidden rounded-t-2xl bg-neutral-900"
        style={{
          backgroundImage: `url(${project.cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-1.5">
          <span className="text-[10px] uppercase tracking-widest text-white/90 glass-dark px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
            <ArrowUpRight size={14} className="text-black" />
          </div>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="text-xs text-accent">{project.client}</div>
        <h3 className="mt-1 text-lg text-white font-medium leading-snug">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-white/60 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        {project.links && project.links.length > 0 && (
          <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-2">
            {project.links.slice(0, 2).map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-wider text-white/70 hover:text-accent transition-colors flex items-center gap-1"
              >
                {l.label} <ArrowUpRight size={11} />
              </a>
            ))}
          </div>
        )}
      </div>
    </GlassCard>
  );
}
