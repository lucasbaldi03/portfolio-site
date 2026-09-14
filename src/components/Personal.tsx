"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Gamepad2,
  Film,
  Feather,
  Video,
  Layers,
  Sprout,
  ChefHat,
  Music2,
  ArrowUpRight,
} from "lucide-react";
import { personal, profile } from "@/lib/content";
import { useNowPlaying } from "@/lib/useNowPlaying";
import GlassCard from "./ui/GlassCard";

const iconMap = {
  GraduationCap,
  Gamepad2,
  Film,
  Feather,
  Video,
  Layers,
  Sprout,
  ChefHat,
} as const;

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  navy: {
    bg: "rgba(30, 58, 138, 0.18)",
    border: "rgba(30, 58, 138, 0.55)",
    text: "#93b4ff",
  },
  cobalt: {
    bg: "rgba(37, 99, 235, 0.14)",
    border: "rgba(37, 99, 235, 0.5)",
    text: "#7ba7ff",
  },
  sky: {
    bg: "rgba(56, 189, 248, 0.12)",
    border: "rgba(56, 189, 248, 0.5)",
    text: "#7dd3fc",
  },
  ice: {
    bg: "rgba(103, 232, 249, 0.10)",
    border: "rgba(103, 232, 249, 0.5)",
    text: "#a5f3fc",
  },
};

export default function Personal() {
  const { data: nowPlaying, loading: npLoading } = useNowPlaying(20000);

  return (
    <section
      id="curiosidades"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Grafismo tribal em azul, bem sutil */}
      <div className="absolute inset-0 tribal-pattern opacity-40 pointer-events-none" />
      <div
        className="absolute inset-x-0 top-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #05070a 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(0deg, #05070a 0%, transparent 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/80">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "#38bdf8",
                boxShadow: "0 0 10px rgba(56,189,248,0.9)",
              }}
            />
            Fora do escritório
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl editorial tracking-tight leading-[1] text-white">
            Um resumo do{" "}
            <span className="font-serif-italic tribal-gradient">Lucas</span>{" "}
            fora do trabalho.
          </h2>
          <p className="mt-5 text-white/70 max-w-xl leading-relaxed">
            {personal.bio}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {personal.curiosities.map((c, i) => {
            const Icon = iconMap[c.icon as keyof typeof iconMap];
            const colors = colorMap[c.color ?? "sky"];
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              >
                <GlassCard
                  padding="lg"
                  className="h-full flex flex-col min-h-[220px] group relative overflow-hidden transition-colors"
                >
                  <div
                    className="w-11 h-11 rounded-lg border flex items-center justify-center flex-shrink-0"
                    style={{
                      background: colors.bg,
                      borderColor: colors.border,
                    }}
                  >
                    {Icon && <Icon size={20} className="text-white" />}
                  </div>
                  <h3 className="mt-4 text-lg text-white font-semibold">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    {c.body}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Bloco de destaque espiritual */}
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          <GlassCard
            padding="lg"
            strong
            className="md:col-span-2 relative overflow-hidden"
          >
            <div
              className="absolute -top-24 -right-16 w-72 h-72 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(56,189,248,0.30) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(37,99,235,0.24) 0%, transparent 70%)",
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-white/80">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "#67e8f9",
                    boxShadow: "0 0 10px rgba(103,232,249,0.8)",
                  }}
                />
                Fé & Estudo
              </div>
              <h3 className="mt-4 text-2xl md:text-3xl text-white editorial tracking-tight leading-tight">
                Umbanda, ayahuasca e cultura indígena —{" "}
                <span className="font-serif-italic tribal-gradient">
                  raiz e presença.
                </span>
              </h3>
              <p className="mt-4 text-white/70 leading-relaxed max-w-xl">
                Assumidamente umbandista. Numa jornada com ayahuasca e trabalho
                interior. Estudo cultura e cosmovisão dos povos originários — do
                grafismo à espiritualidade. Fica no fundo de tudo que eu crio.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  { label: "Umbanda", color: "navy" },
                  { label: "Ayahuasca", color: "sky" },
                  { label: "Cultura Indígena", color: "cobalt" },
                  { label: "Ancestralidade", color: "ice" },
                ].map((t) => {
                  const c = colorMap[t.color];
                  return (
                    <span
                      key={t.label}
                      className="text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full border"
                      style={{
                        color: c.text,
                        borderColor: c.border,
                        background: c.bg,
                      }}
                    >
                      {t.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </GlassCard>

          <GlassCard padding="lg" className="relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="text-[10px] uppercase tracking-widest text-white/60 flex items-center gap-2">
                {nowPlaying?.isPlaying ? (
                  <>
                    <span className="relative flex h-2 w-2">
                      <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                        style={{ background: "#38bdf8" }}
                      />
                      <span
                        className="relative inline-flex rounded-full h-2 w-2"
                        style={{ background: "#38bdf8" }}
                      />
                    </span>
                    Ouvindo agora
                  </>
                ) : nowPlaying ? (
                  "Última tocada"
                ) : (
                  personal.nowPlaying.label
                )}
              </div>
            </div>
            <a
              href={nowPlaying?.url || "#"}
              target={nowPlaying ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-5 group"
              onClick={(e) => {
                if (!nowPlaying) e.preventDefault();
              }}
            >
              <div
                className="w-24 h-24 md:w-32 md:h-32 rounded-xl border flex items-center justify-center flex-shrink-0 overflow-hidden relative"
                style={{
                  background: colorMap.sky.bg,
                  borderColor: colorMap.sky.border,
                }}
              >
                {nowPlaying?.albumArt ? (
                  <Image
                    src={nowPlaying.albumArt}
                    alt={nowPlaying.album}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                ) : (
                  <Music2 size={36} className="text-white" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                {nowPlaying ? (
                  <>
                    <div className="text-white text-lg md:text-xl font-semibold leading-tight group-hover:text-sky-300 transition-colors line-clamp-2">
                      {nowPlaying.title}
                    </div>
                    <div className="text-white/60 text-sm mt-1 line-clamp-1">
                      {nowPlaying.artist}
                    </div>
                    {nowPlaying.album && (
                      <div className="text-white/40 text-xs mt-1 line-clamp-1">
                        {nowPlaying.album}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-white/70 text-sm leading-snug">
                    {npLoading
                      ? "carregando..."
                      : personal.nowPlaying.value}
                  </div>
                )}
              </div>
            </a>
            <a
              href={profile.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 glass-dark rounded-xl p-4 flex items-center justify-between gap-3 hover:border-[#1DB954]/40 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"
                  style={{ color: "#1DB954" }}
                >
                  <SpotifyIcon size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">
                    Spotify
                  </div>
                  <div className="text-sm text-white/90">/lucas.baldi</div>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-white/40 group-hover:text-[#1DB954] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0"
              />
            </a>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

function SpotifyIcon({
  size = 18,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}
