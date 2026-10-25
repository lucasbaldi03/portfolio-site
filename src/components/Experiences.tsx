"use client";

import { motion } from "framer-motion";
import { education, experiences } from "@/lib/content";
import SectionLabel from "./SectionLabel";

type Row = { cols: [string, string, string, string]; current?: boolean };

export default function Experiences() {
  const work: Row[] = experiences.map((e) => ({
    cols: [e.period, e.company, e.role, e.tags.slice(0, 2).join(" · ")],
    current: e.current,
  }));
  const school: Row[] = education.map((e) => ({
    cols: [e.status, e.school, e.degree, ""],
  }));

  return (
    <section id="experiencias" className="px-4 md:px-6 pt-24 md:pt-36 scroll-mt-16">
      <SectionLabel>Experiências</SectionLabel>
      <Table rows={work} />

      <SectionLabel className="mt-20">Formação</SectionLabel>
      <Table rows={school} />
    </section>
  );
}

function Table({ rows }: { rows: Row[] }) {
  return (
    <div className="mt-8">
      {rows.map((r, i) => (
        <div key={i} className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-line origin-left"
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            className="group grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-1 py-4 md:py-5 text-[15px] md:text-lg hover:text-accent transition-colors"
          >
            <span className="flex items-center gap-2">
              {r.current && <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />}
              {r.cols[0]}
            </span>
            <span className="font-medium">{r.cols[1]}</span>
            <span className="text-muted group-hover:text-accent md:text-fg">{r.cols[2]}</span>
            <span className="text-muted group-hover:text-accent">{r.cols[3]}</span>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
