"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { profile } from "@/lib/content";
import RevealText from "./RevealText";
import SectionLabel from "./SectionLabel";

const brands = [
  "Red Bull",
  "Coca-Cola",
  "Boticário (Vult)",
  "Bradesco",
  "Seara",
  "Corteva",
  "Ipiranga",
  "Itaú · Players Bank",
  "BYD",
  "Hospital Evangélico de Sorocaba",
];

const services = [
  "Direção criativa",
  "Direção de arte",
  "Produção com IA",
  "Social media & conteúdo",
  "Growth & performance",
  "Ativações & eventos",
  "UI de web apps",
];

export default function About() {
  return (
    <section id="sobre" className="px-4 md:px-6 pt-24 md:pt-32 scroll-mt-16">
      <SectionLabel>Sobre mim</SectionLabel>

      <RevealText
        className="mt-8 text-[7vw] md:text-[3.6vw] leading-[1.08] font-medium tracking-tight"
        text="Sou o Lucas, analista de marketing sênior e diretor criativo com IA. Há mais de 10 anos conecto marcas a resultados, do cenário gamer à saúde, de Osasco para o Brasil."
      />

      <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-14 md:gap-10">
        <Credential />

        <div className="flex flex-col justify-between gap-12">
          <p className="text-base md:text-lg leading-relaxed max-w-[46ch]">
            Formado em Design e Marketing Digital, pós-graduado em Comunicação e
            Marketing. Gosto de pegar a ideia no começo e levar até a rua:
            roteiro, direção de arte, produção com IA e o evento acontecendo.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <List title="Marcas" items={brands} />
            <List title="O que eu faço" items={services} />
          </div>

          <a
            href="/cv-lucas-baldi.pdf"
            target="_blank"
            className="label self-start inline-flex items-center gap-2 bg-accent text-accent-ink px-4 py-3 hover:bg-fg hover:text-bg transition-colors"
          >
            <Download size={15} /> Baixar currículo
          </a>
        </div>
      </div>
    </section>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="label mb-3">
        {title} <span className="text-accent">↴</span>
      </div>
      <ul className="text-sm uppercase leading-snug space-y-0.5">
        {items.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

// Credencial de evento (backstage/all access). Foto em public/lucas-cracha.jpg.
function Credential() {
  return (
    <motion.div
      initial={{ rotate: -6, y: -40, opacity: 0 }}
      whileInView={{ rotate: -2, y: 0, opacity: 1 }}
      whileHover={{ rotate: 1.5 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ type: "spring", stiffness: 70, damping: 12 }}
      className="relative mx-auto w-[78%] max-w-[360px] origin-top"
    >
      {/* cordão */}
      <div className="mx-auto w-14 h-20 bg-accent flex items-end justify-center">
        <div className="w-6 h-6 -mb-3 rounded-full border-[3px] border-fg/70 bg-bg" />
      </div>
      <div className="relative bg-white text-black shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)] border border-black/10">
        <div className="bg-accent px-5 py-3 flex items-center justify-between">
          <span className="font-display text-3xl leading-none">ALL ACCESS</span>
          <span className="label text-[10px] text-right leading-tight">
            Crew
            <br />
            2016—26
          </span>
        </div>
        <div className="p-5">
          <div className="relative aspect-square overflow-hidden bg-black">
            <Image
              src="/lucas-cracha.jpg"
              alt="Lucas A. Baldi"
              fill
              sizes="360px"
              className="object-cover object-[50%_40%] grayscale contrast-110"
            />
          </div>
          <dl className="mt-4 text-[11px] uppercase space-y-1.5">
            <div className="flex gap-2 border-b border-dashed border-black/30 pb-1">
              <dt className="font-semibold w-16">Nome</dt>
              <dd>{profile.name}</dd>
            </div>
            <div className="flex gap-2 border-b border-dashed border-black/30 pb-1">
              <dt className="font-semibold w-16">Função</dt>
              <dd>Direção criativa & marketing</dd>
            </div>
            <div className="flex gap-2 border-b border-dashed border-black/30 pb-1">
              <dt className="font-semibold w-16">Acesso</dt>
              <dd>Palco · Backstage · Projetos</dd>
            </div>
          </dl>
          <div className="mt-4 flex items-end justify-between">
            <Barcode />
            <span className="font-display text-4xl leading-none">
              L<span className="text-accent">.</span>A<span className="text-accent">.</span>B
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Barcode() {
  const bars = [2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 1, 2];
  return (
    <div className="flex items-stretch h-8 gap-[2px]" aria-hidden>
      {bars.map((w, i) => (
        <span key={i} className="bg-black" style={{ width: w }} />
      ))}
    </div>
  );
}
