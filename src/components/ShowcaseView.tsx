"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { groupProjects, type Showcase } from "@/lib/content";
import Header from "./Header";
import Footer from "./Footer";
import SectionLabel from "./SectionLabel";
import { ProjectCard } from "./Projects";

const pad = (n: number) => String(n).padStart(2, "0");
const ease = [0.22, 1, 0.36, 1] as const;

// Vitrine de uma empresa: os cases dela numa grade de quatro
export default function ShowcaseView({ showcase: s }: { showcase: Showcase }) {
  const list = groupProjects(s.slug);
  const top = s.highlights ? list.slice(0, s.highlights) : [];
  const rest = list.slice(top.length);

  return (
    <main className="relative min-h-screen">
      <Header />

      <section className="px-4 md:px-6 pt-24 md:pt-28">
        <Link
          href="/#projetos"
          className="label text-[12px] inline-flex items-center gap-1.5 underline underline-offset-4 decoration-accent decoration-2 hover:text-accent"
        >
          <ArrowLeft size={14} /> Voltar pros projetos
        </Link>

        <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h1 className="font-display uppercase text-[15vw] md:text-[8vw] leading-[0.95]">
            <span className="block overflow-hidden pt-[0.14em] -mt-[0.14em]">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease }}
              >
                {s.title}
              </motion.span>
            </span>
          </h1>

          <dl className="grid grid-cols-3 gap-6 text-[13px] shrink-0">
            <Meta k="Período" v={s.period} />
            <Meta k="Cargo" v={s.role} />
            <Meta k="Cases" v={s.soon ? "Em breve" : pad(list.length)} />
          </dl>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease }}
          className="mt-10 h-px bg-fg/30 origin-left"
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 md:max-w-[75%] space-y-4 text-lg md:text-xl leading-relaxed"
        >
          {s.intro.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </motion.div>

        {s.links && s.links.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 md:max-w-[560px]"
          >
            <div className="label mb-3">
              Redes e imprensa <span className="text-accent">↴</span>
            </div>
            <ul>
              {s.links.map((l) => (
                <li key={l.url} className="border-t border-line last:border-b">
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-6 py-3 hover:text-accent transition-colors"
                  >
                    {l.label} <ArrowUpRight size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </section>

      {s.soon && list.length === 0 && (
        <section className="px-4 md:px-6 mt-16">
          <SectionLabel>Cases / 00</SectionLabel>
          <div className="mt-5 max-w-[1170px] border border-dashed border-fg/30 py-20 md:py-28 flex flex-col items-center justify-center gap-3 text-center">
            <span className="tag bg-accent text-accent-ink">Em breve</span>
            <p className="font-display uppercase text-[9vw] md:text-[3.2vw] leading-[1.05]">
              Projetos anexados
            </p>
          </div>
        </section>
      )}

      {top.length > 0 && (
        <section className="px-4 md:px-6 mt-16">
          <SectionLabel>Destaques / {pad(top.length)}</SectionLabel>
          <div
            className={`mt-5 grid gap-2 md:gap-3 max-w-[1170px] ${
              top.length === 4 ? "grid-cols-2 md:grid-cols-4" : "md:grid-cols-3"
            }`}
          >
            {top.map((p, i) => (
              <ProjectCard
                key={p.slug}
                slug={p.slug}
                title={p.title}
                cover={p.cover}
                category={p.category}
                year={p.year}
                index={i}
                className="w-full"
                sizes={top.length === 4 ? "(min-width: 768px) 288px, 50vw" : "(min-width: 768px) 390px, 100vw"}
                titleClass={top.length === 4 ? "text-[5vw] sm:text-xl" : "text-[9vw] md:text-2xl"}
                priority
                compact={top.length === 4}
              />
            ))}
          </div>
        </section>
      )}

      {rest.length > 0 && (
      <section className="px-4 md:px-6 mt-16">
        <SectionLabel>{top.length > 0 ? "Mais ações" : "Cases"} / {pad(rest.length)}</SectionLabel>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 max-w-[1170px]">
          {rest.map((p, i) => (
            <ProjectCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              cover={p.cover}
              category={p.category}
              year={p.year}
              index={top.length + i}
              className="w-full"
              sizes="(min-width: 768px) 288px, 50vw"
              titleClass="text-[5vw] sm:text-lg"
              priority
              compact
            />
          ))}
        </div>
      </section>
      )}

      <Footer />
    </main>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="label text-[10px] text-muted">{k}</dt>
      <dd className="mt-1 font-medium">{v}</dd>
    </div>
  );
}
