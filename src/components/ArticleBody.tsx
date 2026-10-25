"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Article, ArticleChapter, ArticleImage } from "@/lib/content";
import SectionLabel from "./SectionLabel";

const ease = [0.22, 1, 0.36, 1] as const;
const rise = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.8, ease },
};

// Matéria de case: lead, contexto, números, capítulos com imagens e imprensa
export default function ArticleBody({
  article,
  links,
}: {
  article: Article;
  links?: { label: string; url: string }[];
}) {
  return (
    <>
      <div className="mt-8 grid md:grid-cols-12 gap-8">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="md:col-span-8 text-2xl md:text-[2.4vw] leading-[1.2] font-medium tracking-tight"
        >
          {article.lead}
        </motion.p>
      </div>

      <motion.figure
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.45, ease }}
        className="mt-12 md:mt-16"
      >
        <Figure img={article.hero} sizes="100vw" priority />
      </motion.figure>

      {/* contexto + números */}
      <div className="mt-16 md:mt-24 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="label">
            O contexto <span className="text-accent">↴</span>
          </div>
        </div>
        <div className="md:col-span-8 space-y-5 text-lg leading-relaxed lg:pr-[10%]">
          {article.context.map((t, i) => (
            <motion.p key={i} {...rise}>
              {t}
            </motion.p>
          ))}
        </div>
      </div>

      <div className={`mt-14 grid ${article.stats.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"} gap-px bg-line border-y border-line`}>
        {article.stats.map((s) => (
          <motion.div key={s.label} {...rise} className="bg-bg py-8 sm:px-6 first:sm:pl-0">
            <div className="font-display text-7xl md:text-8xl leading-none">
              {s.value}
              <span className="block mt-3 h-1.5 w-14 bg-accent" />
            </div>
            <p className="mt-4 text-sm leading-snug max-w-[28ch]">{s.label}</p>
            {s.source && <p className="mt-1 label text-[10px] text-muted">Fonte: {s.source}</p>}
          </motion.div>
        ))}
      </div>

      {article.chapters.map((c) => (
        <Chapter key={c.title} chapter={c} />
      ))}

      {links && links.length > 0 && (
        <div className="mt-24">
          <SectionLabel>Na imprensa e no Behance</SectionLabel>
          <ul className="mt-6 grid md:grid-cols-2 gap-x-10">
            {links.map((l) => (
              <li key={l.url} className="border-b border-line">
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-6 py-4 text-lg hover:text-accent transition-colors"
                >
                  {l.label} <ArrowUpRight size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

function Chapter({ chapter: c }: { chapter: ArticleChapter }) {
  // retrato/quadrada se agrupa (até 3 lado a lado); horizontal ocupa a largura toda
  const rows: ArticleImage[][] = [];
  let pair: ArticleImage[] = [];
  for (const img of c.images ?? []) {
    if (c.plan) break;
    if (img.h >= img.w * 0.85) {
      pair.push(img);
      if (pair.length === 3) {
        rows.push(pair);
        pair = [];
      }
    } else {
      if (pair.length) rows.push(pair);
      pair = [];
      rows.push([img]);
    }
  }
  if (pair.length) rows.push(pair);

  return (
    <section className="mt-24 md:mt-36">
      <SectionLabel>{c.kicker}</SectionLabel>
      <div className="mt-8 grid md:grid-cols-12 gap-10">
        <motion.h2
          {...rise}
          className="md:col-span-4 font-display uppercase text-[13vw] md:text-[4.6vw] leading-[1.15]"
        >
          {c.title}
        </motion.h2>
        <div className="md:col-span-8 space-y-5 text-lg leading-relaxed lg:pr-[10%]">
          {c.body.map((t, i) => (
            <motion.p key={i} {...rise}>
              {t}
            </motion.p>
          ))}
          {c.bullets && (
            <motion.ul {...rise} className="pt-2">
              {c.bullets.map((b) => (
                <li key={b} className="flex gap-3 py-2.5 border-t border-line last:border-b">
                  <span className="text-accent">↳</span> {b}
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>

      {c.plan ? (
        <div className="mt-12 grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-8">
            {c.plan.map((ch, i) => (
              <motion.div key={ch.channel} {...rise} transition={{ ...rise.transition, delay: i * 0.06 }}>
                <div className="flex items-baseline gap-3 border-b-2 border-fg pb-2">
                  <span className="text-sm font-semibold">({String(i + 1).padStart(2, "0")})</span>
                  <span className="font-display uppercase text-3xl leading-none">{ch.channel}</span>
                </div>
                <ul className="mt-3 space-y-2 text-[15px] leading-snug">
                  {ch.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-[7px] w-1.5 h-1.5 shrink-0 bg-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          {c.images?.[0] && (
            <motion.figure {...rise} className="md:col-span-5">
              <Figure img={c.images[0]} sizes="(min-width: 768px) 40vw, 100vw" />
            </motion.figure>
          )}
        </div>
      ) : (
        <div className="mt-12 space-y-3">
          {c.video && (
            <motion.figure {...rise}>
              <video
                src={c.video.src}
                poster={c.video.poster}
                controls
                playsInline
                preload="none"
                className="w-full aspect-video bg-black"
              />
              {c.video.caption && (
                <figcaption className="mt-2 text-xs text-muted flex flex-wrap gap-x-2">
                  <span className="text-accent">↳</span> {c.video.caption}
                  {c.video.sourceUrl && (
                    <a
                      href={c.video.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-accent"
                    >
                      Ver no Instagram
                    </a>
                  )}
                </figcaption>
              )}
            </motion.figure>
          )}
          {rows.map((row, i) => (
            <div
              key={i}
              className={
                row.length > 1 || row[0].h >= row[0].w * 0.85
                  ? `grid gap-3 ${row.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`
                  : ""
              }
            >
              {row.map((img) => {
                const grouped = row.length > 1 || img.h >= img.w * 0.85;
                return (
                <motion.figure key={img.src} {...rise}>
                  <Figure
                    img={img}
                    sizes={grouped ? "(min-width: 768px) 33vw, 100vw" : "100vw"}
                    fill={grouped}
                  />
                </motion.figure>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function Figure({
  img,
  sizes,
  priority,
  fill,
}: {
  img: ArticleImage;
  sizes: string;
  priority?: boolean;
  fill?: boolean;
}) {
  return (
    <>
      {fill ? (
        // em grupo: mesma altura, corte pelo centro
        <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">
          <Image src={img.src} alt={img.alt} fill sizes={sizes} className="object-cover" />
        </div>
      ) : (
        <Image
          src={img.src}
          alt={img.alt}
          width={img.w}
          height={img.h}
          sizes={sizes}
          priority={priority}
          className="w-full h-auto bg-[#111]"
        />
      )}
      {img.caption && (
        <figcaption className="mt-2 text-xs text-muted flex gap-2">
          <span className="text-accent">↳</span> {img.caption}
        </figcaption>
      )}
    </>
  );
}
