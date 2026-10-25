"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { groupProjects, projects, showcases } from "@/lib/content";
import ArticleBody from "./ArticleBody";
import Header from "./Header";
import Footer from "./Footer";
import SectionLabel from "./SectionLabel";

const pad = (n: number) => String(n).padStart(2, "0");
const ease = [0.22, 1, 0.36, 1] as const;

export default function ProjectView({ index }: { index: number }) {
  const p = projects[index];
  // dentro de uma vitrine, o "próximo" e o "voltar" ficam na vitrine
  const showcase = p.group ? showcases.find((s) => s.slug === p.group) : undefined;
  const siblings = showcase ? groupProjects(showcase.slug) : projects.filter((x) => !x.group);
  const pos = siblings.findIndex((x) => x.slug === p.slug);
  const nextPos = (pos + 1) % siblings.length;
  const next = siblings[nextPos];
  const backHref = showcase ? `/projetos/${showcase.slug}` : "/#projetos";

  return (
    <main className="relative min-h-screen">
      <Header />

      <section className="px-4 md:px-6 pt-24 md:pt-28">
        <Link
          href={backHref}
          className="label text-[12px] inline-flex items-center gap-1.5 underline underline-offset-4 decoration-accent decoration-2 hover:text-accent"
        >
          <ArrowLeft size={14} /> {showcase ? `Voltar pra ${showcase.title}` : "Voltar pros projetos"}
        </Link>

        <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h1
            className={`font-display uppercase leading-[1.15] md:leading-[0.95] md:whitespace-nowrap ${
              // título longo encolhe pra caber numa linha só no desktop
              p.title.length > 14 ? "text-[11vw] md:text-[5vw]" : "text-[15vw] md:text-[8vw]"
            }`}
          >
            <span className="block overflow-hidden pt-[0.14em] -mt-[0.14em]">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease }}
              >
                {p.title}
              </motion.span>
            </span>
          </h1>

          <dl className="grid grid-cols-3 gap-6 text-[13px] shrink-0">
            <Meta k="Ano" v={p.year} />
            <Meta k="Serviço" v={p.category} />
            <Meta k="Cliente" v={p.client} />
          </dl>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease }}
          className="mt-10 h-px bg-fg/30 origin-left"
        />

        {p.article ? (
          <ArticleBody article={p.article} links={p.links} />
        ) : (
          <>
            <div className="mt-8 grid md:grid-cols-2 gap-10">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-lg md:text-xl leading-relaxed max-w-[48ch]"
              >
                {p.description}
              </motion.p>

              {p.links && p.links.length > 0 && (
                <div className="md:justify-self-end md:min-w-[280px]">
                  <div className="label mb-3">
                    Na imprensa <span className="text-accent">↴</span>
                  </div>
                  <ul>
                    {p.links.map((l) => (
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
                </div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease }}
              className="relative mt-12 md:mt-16 aspect-[16/9] overflow-hidden bg-card"
            >
              <Image src={p.heroImage ?? p.cover} alt={p.title} fill sizes="100vw" className="object-cover" priority />
            </motion.div>

            {p.gallery && p.gallery.length > 0 && (
              <div className="mt-3 grid md:grid-cols-2 gap-3">
                {p.gallery.map((img) => (
                  <motion.figure
                    key={img.src}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease }}
                  >
                    <div className="relative aspect-[3/2] overflow-hidden bg-card">
                      <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                    </div>
                    {img.caption && <figcaption className="mt-2 text-xs text-muted">{img.caption}</figcaption>}
                  </motion.figure>
                ))}
              </div>
            )}
          </>
        )}
      </section>

      {/* Próximo projeto */}
      <section className="px-4 md:px-6 mt-24">
        <SectionLabel>{showcase ? `Próximo case · ${showcase.title}` : "Próximo projeto"}</SectionLabel>
        <Link
          href={`/projetos/${next.slug}`}
          className="group mt-6 grid md:grid-cols-[1fr_auto] gap-6 items-end"
        >
          <div>
            <span className="text-sm font-semibold">({pad(nextPos + 1)})</span>
            <h2 className="mt-2 font-display uppercase text-[13vw] md:text-[7vw] leading-[1.15] transition-colors group-hover:text-accent">
              {next.title}
            </h2>
          </div>
          <div className="relative w-full md:w-[28vw] aspect-[4/3] overflow-hidden bg-card">
            <Image
              src={next.cover}
              alt={next.title}
              fill
              sizes="(min-width: 768px) 28vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </Link>
        <Link
          href={backHref}
          className="label mt-8 inline-block text-[12px] underline underline-offset-4 decoration-accent decoration-2 hover:text-accent"
        >
          {showcase ? `Ver toda a ${showcase.title}` : "Ver todos os projetos"}
        </Link>
      </section>

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
