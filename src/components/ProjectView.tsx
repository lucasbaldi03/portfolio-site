"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { groupProjects, projects, showcases } from "@/lib/content";
import ArticleBody from "./ArticleBody";
import PhoneMockup from "./PhoneMockup";
import FlowPhone from "./FlowPhone";
import KitStage from "./KitStage";
import ToolChips from "./ToolChips";
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

        {p.kit ? (
          // press kit: contexto e o que eu fiz no topo, a caixa em 3D, os itens e o vídeo
          <>
            <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-12 md:gap-10">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-lg md:text-xl leading-relaxed max-w-[52ch]"
              >
                {p.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="md:justify-self-end w-full md:max-w-[480px]"
              >
                <Role role={p.role} tools={p.tools} />
              </motion.div>
            </div>

            <div className="mt-16 md:mt-20">
              <SectionLabel>O press kit</SectionLabel>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease }}
                className="mt-4"
              >
                <KitStage kit={p.kit} />
              </motion.div>
              <div className="mt-12 grid md:grid-cols-3 gap-8 md:gap-10">
                {p.kit.details.map((d, i) => (
                  <motion.div
                    key={d.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: i * 0.08, ease }}
                  >
                    <div className="flex items-baseline gap-3 border-b-2 border-fg pb-2">
                      <span className="text-sm font-semibold">({pad(i + 1)})</span>
                      <span className="font-display uppercase text-3xl leading-none">{d.title}</span>
                    </div>
                    <p className="mt-3 leading-relaxed">{d.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {p.youtube && (
              <div className="mt-20 md:mt-28">
                <SectionLabel>Na rede</SectionLabel>
                <div className="mt-5 grid md:grid-cols-12 gap-3 items-start">
                  <figure className="md:col-span-8">
                    <div className="relative aspect-video bg-black">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${p.youtube.id}`}
                        title={p.youtube.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <figcaption className="mt-2 text-xs text-muted flex gap-2">
                      <span className="text-accent">↳</span> {p.youtube.caption}
                    </figcaption>
                  </figure>
                  {p.youtube.photo && (
                    <figure className="md:col-span-4">
                      <Image
                        src={p.youtube.photo.src}
                        alt={p.youtube.photo.alt}
                        width={p.youtube.photo.w}
                        height={p.youtube.photo.h}
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="w-full h-auto bg-card"
                      />
                      {p.youtube.photo.caption && (
                        <figcaption className="mt-2 text-xs text-muted flex gap-2">
                          <span className="text-accent">↳</span> {p.youtube.photo.caption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </div>
              </div>
            )}
          </>
        ) : p.flow ? (
          // app em etapas: texto no topo, as telas passando no celular e os blocos de imagens
          <>
            <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-12 md:gap-10">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-lg md:text-xl leading-relaxed max-w-[52ch]"
              >
                {p.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="md:justify-self-end w-full md:max-w-[480px]"
              >
                <Role role={p.role} tools={p.tools} />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease }}
              className="mt-14 md:mt-20"
            >
              <FlowPhone steps={p.flow} />
            </motion.div>
            {/* cenários, molduras e resultado lado a lado, quebrando linha quando não cabe */}
            <div className="mt-20 md:mt-28 flex flex-wrap gap-x-10 gap-y-14">
            {p.sets?.map((set) => (
              <div key={set.label}>
                <SectionLabel>{set.label}</SectionLabel>
                <div className="mt-5 flex flex-wrap gap-3 max-w-[calc(100vw-32px)]">
                  {set.images.map((img) => (
                    <motion.figure
                      key={img.src}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.8, ease }}
                      className="w-[calc(50vw-22px)] md:w-[190px]"
                    >
                      <div className="relative aspect-[9/16] overflow-hidden bg-card">
                        <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 190px, 50vw" className="object-cover" />
                      </div>
                      {img.caption && (
                        <figcaption className="mt-2 text-xs text-muted flex gap-2">
                          <span className="text-accent">↳</span> {img.caption}
                        </figcaption>
                      )}
                    </motion.figure>
                  ))}
                </div>
              </div>
            ))}
            </div>
          </>
        ) : p.phone || p.film ? (
          // tela simples: texto, o que eu fiz e ferramentas à esquerda; celular à direita
          // (app) ou o filme na largura toda logo abaixo (vídeo horizontal)
          <>
            <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-12 md:gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <p className="text-lg md:text-xl leading-relaxed max-w-[48ch]">{p.description}</p>
                {p.phone && <Role role={p.role} tools={p.tools} className="mt-10 max-w-[480px]" />}
              </motion.div>
              {p.phone ? (
                <motion.figure
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.45, ease }}
                  className="flex flex-col items-center"
                >
                  <PhoneMockup src={p.phone.src} poster={p.phone.poster} />
                  {p.phone.caption && (
                    <figcaption className="mt-5 text-xs text-muted flex gap-2 text-center">
                      <span className="text-accent">↳</span> {p.phone.caption}
                    </figcaption>
                  )}
                </motion.figure>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="md:justify-self-end w-full md:max-w-[480px]"
                >
                  <Role role={p.role} tools={p.tools} />
                </motion.div>
              )}
            </div>

            {p.film && (
              <motion.figure
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.55, ease }}
                className="mt-14 md:mt-20"
              >
                <video
                  src={p.film.src}
                  poster={p.film.poster}
                  controls
                  playsInline
                  preload="none"
                  className="w-full aspect-video bg-black"
                />
                {p.film.caption && (
                  <figcaption className="mt-2 text-xs text-muted flex gap-2">
                    <span className="text-accent">↳</span> {p.film.caption}
                  </figcaption>
                )}
              </motion.figure>
            )}
          </>
        ) : p.article ? (
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

      {/* Próximo projeto (some quando a vitrine só tem este case) */}
      <section className="px-4 md:px-6 mt-24">
        {next.slug !== p.slug && (
        <>
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
        </>
        )}
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

// o que eu fiz + ferramentas, usado nas telas simples dos cases
function Role({ role, tools, className }: { role?: string[]; tools?: string[]; className?: string }) {
  if (!role?.length && !tools?.length) return null;
  return (
    <div className={className}>
      {role && role.length > 0 && (
        <>
          <div className="label mb-3">
            O que eu fiz <span className="text-accent">↴</span>
          </div>
          <ul>
            {role.map((r) => (
              <li key={r} className="flex gap-3 py-3 border-t border-line last:border-b">
                <span className="text-accent">↳</span> {r}
              </li>
            ))}
          </ul>
        </>
      )}
      {tools && tools.length > 0 && <ToolChips tools={tools} className={role?.length ? "mt-8" : ""} />}
    </div>
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
