"use client";

import Image from "next/image";
import { ArrowUpRight, Music2 } from "lucide-react";
import { personal, profile } from "@/lib/content";
import { useNowPlaying } from "@/lib/useNowPlaying";
import Gallery from "./Gallery";
import RevealText from "./RevealText";
import SectionLabel from "./SectionLabel";

const pad = (n: number) => String(n).padStart(2, "0");

export function Curiosities() {
  return (
    <Gallery id="projetos" label={`Fora do escritório / ${pad(personal.curiosities.length)}`}>
      {personal.curiosities.map((c, i) => {
        const green = i % 2 === 0;
        return (
          <article
            key={c.title}
            className={`shrink-0 snap-start w-[78vw] md:w-[30vw] aspect-[4/5] p-5 md:p-6 flex flex-col justify-between ${
              green ? "bg-accent text-accent-ink" : "bg-[#0b0b0b] text-[#f4f4f2] ring-1 ring-line"
            }`}
          >
            <div className="flex justify-between items-start">
              <span className="text-sm font-semibold">({pad(i + 1)})</span>
              <span className="tag">Pessoal</span>
            </div>
            <div>
              <h3 className="font-display uppercase text-[11vw] md:text-[3.4vw] leading-[1.14] tracking-[0.01em]">
                {c.title}
              </h3>
              <p className="mt-6 text-sm md:text-base leading-[1.7] opacity-80 max-w-[34ch]">
                {c.body}
              </p>
            </div>
          </article>
        );
      })}
    </Gallery>
  );
}

export function PersonalAbout() {
  const { data: np, loading } = useNowPlaying(20000);

  return (
    <section
      id="sobre"
      className="px-4 md:px-6 pt-24 md:pt-20 md:min-h-screen md:flex md:flex-col md:justify-center scroll-mt-0"
    >
      <SectionLabel>Sobre mim, sem crachá</SectionLabel>
      <RevealText
        className="mt-6 text-[6vw] md:text-[1.9vw] leading-[1.3] font-medium tracking-tight max-w-[62ch]"
        text={personal.bio}
      />

      <div className="mt-10 grid md:grid-cols-12 gap-6 md:gap-8 items-stretch">
        <div className="relative md:col-span-3 aspect-[4/5] max-h-[46vh] overflow-hidden">
          <Image
            src="/lucas-personal.png"
            alt="Colagem pessoal do Lucas"
            fill
            sizes="(min-width: 768px) 25vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="md:col-span-4 flex flex-col justify-between gap-8">
          <div>
            <div className="label mb-3">
              Fé & estudo <span className="text-accent">↴</span>
            </div>
            <p className="leading-relaxed max-w-[44ch]">
              Assumidamente umbandista. Numa jornada com ayahuasca e trabalho
              interior. Estudo cultura e cosmovisão dos povos originários, do
              grafismo à espiritualidade. Fica no fundo de tudo que eu crio.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Umbanda", "Ayahuasca", "Cultura indígena", "Ancestralidade"].map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <blockquote className="font-display uppercase text-[8vw] md:text-[2.4vw] leading-[1.14]">
            {personal.favoriteQuote}
          </blockquote>
        </div>

        <div className="md:col-span-5">
          {/* Spotify ao vivo */}
          <a
            href={np?.url || profile.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="group h-full min-h-[300px] flex flex-col justify-between gap-6 bg-accent text-accent-ink p-5 md:p-6 hover:bg-fg hover:text-bg transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="label text-[11px] flex items-center gap-2">
                {np?.isPlaying && (
                  <span className="relative flex w-2.5 h-2.5">
                    <span className="absolute inset-0 rounded-full bg-current opacity-60 animate-ping" />
                    <span className="relative w-2.5 h-2.5 rounded-full bg-current" />
                  </span>
                )}
                {np?.isPlaying ? "Ouvindo agora" : np ? "Última tocada" : personal.nowPlaying.label}
              </div>
              <span className="label text-[11px] flex items-center gap-1">
                Spotify <ArrowUpRight size={14} />
              </span>
            </div>

            <div className="flex items-end gap-5">
              <div className="relative w-32 h-32 md:w-[11vw] md:h-[11vw] shrink-0 bg-accent-ink text-accent flex items-center justify-center overflow-hidden">
                {np?.albumArt ? (
                  <Image src={np.albumArt} alt={np.album} fill sizes="200px" className="object-cover" />
                ) : (
                  <Music2 size={40} />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-display uppercase text-3xl md:text-[2.6vw] leading-[1.15] line-clamp-3">
                  {np ? np.title : loading ? "carregando..." : personal.nowPlaying.value}
                </div>
                {np && <div className="mt-2 font-medium line-clamp-1">{np.artist}</div>}
                {np?.album && <div className="text-sm opacity-70 line-clamp-1">{np.album}</div>}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
