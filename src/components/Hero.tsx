"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Sparkles,
  Target,
  BarChart,
  Rocket,
  Users,
  Star,
  Zap,
  Award,
  Brain,
} from "lucide-react";
import { useMode } from "@/lib/mode";
import { profile, personal } from "@/lib/content";
import GlassCard from "./ui/GlassCard";

type Stat = { icon: React.ReactNode; value: string; label: string };
type Floating = { icon: React.ReactNode; label: string };

const profStats: Stat[] = [
  { icon: <Zap size={18} />, value: "10+", label: "ANOS DE CARREIRA" },
  { icon: <Users size={18} />, value: "5", label: "EMPRESAS" },
  { icon: <Rocket size={18} />, value: "20+", label: "CASES ENTREGUES" },
  { icon: <Star size={18} />, value: "100%", label: "DEDICAÇÃO" },
];
const pessoalStats: Stat[] = [
  { icon: <Sparkles size={18} />, value: "∞", label: "CURIOSIDADE" },
  { icon: <Star size={18} />, value: "3", label: "HOBBIES ATIVOS" },
  { icon: <Rocket size={18} />, value: "10+", label: "PLANTAS EM CASA" },
  { icon: <Award size={18} />, value: "∞", label: "RECEITAS DECORADAS" },
];

const profFloating: Floating[] = [
  { icon: <Target size={20} />, label: "Direção\nCriativa" },
  { icon: <Zap size={20} />, label: "Estratégia\nde Marca" },
  { icon: <BarChart size={20} />, label: "Mídia &\nPerformance" },
  { icon: <Brain size={20} />, label: "Domínio\nde IAs" },
];
const pessoalFloating: Floating[] = [
  { icon: <Sparkles size={20} />, label: "Curioso\nde nascença" },
  { icon: <Star size={20} />, label: "Cinéfilo\nraiz" },
  { icon: <Rocket size={20} />, label: "Sempre\nem trânsito" },
  { icon: <Brain size={20} />, label: "Nerd\nde tecnologia" },
];

export default function Hero() {
  const { mode } = useMode();
  const isProf = mode === "prof";
  const stats = isProf ? profStats : pessoalStats;
  const floating = isProf ? profFloating : pessoalFloating;

  // Paleta condicional: verde neon no profissional, azul sky no pessoal
  const c = isProf
    ? {
        soft: "#d4ff96",
        base: "#a8ff5c",
        deep: "#6fbf2e",
        glow: "rgba(168,255,92,0.9)",
        glowSoft: "rgba(168,255,92,0.14)",
        shadow: "rgba(168,255,92,0.75)",
        selection: "168,255,92",
      }
    : {
        soft: "#a5f3fc",
        base: "#38bdf8",
        deep: "#0284c7",
        glow: "rgba(56,189,248,0.9)",
        glowSoft: "rgba(56,189,248,0.14)",
        shadow: "rgba(56,189,248,0.7)",
        selection: "56,189,248",
      };

  return (
    <section
      id="top"
      className="relative pt-28 md:pt-32 pb-8 overflow-hidden"
    >
      <div className="absolute inset-0 hero-grid pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-500"
        style={{
          background: `radial-gradient(900px 500px at 85% 15%, ${c.glowSoft}, transparent 55%)`,
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
        {/* LEFT */}
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode + "-tag"}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2.5 text-[11px] md:text-xs tracking-[0.25em] font-medium"
              style={{ color: c.base }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: c.base,
                  boxShadow: `0 0 10px ${c.glow}`,
                }}
              />
              {isProf
                ? "MARKETING COORDINATOR · SENIOR ANALYST"
                : "FORA DO EXPEDIENTE — O OUTRO LADO"}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h1
              key={mode + "-h1"}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 editorial text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[0.95] tracking-tight text-white"
            >
              {isProf ? (
                <>
                  <span className="font-bold">10 anos</span>{" "}
                  <span className="font-serif-italic" style={{ color: c.base }}>
                    conectando
                  </span>{" "}
                  marcas a <br className="hidden md:block" />
                  resultados.
                </>
              ) : (
                <>
                  Fora do{" "}
                  <span className="font-serif-italic" style={{ color: c.base }}>
                    escritório,
                  </span>{" "}
                  <span className="font-bold">só vibe boa.</span>
                </>
              )}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={mode + "-sub"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mt-8 max-w-[520px] text-white/60 text-base md:text-lg leading-relaxed"
            >
              {isProf
                ? "Planejo, dirijo e executo iniciativas de marketing conectando estratégia, criação e resultado — de lançamentos a ativações no cenário gamer."
                : personal.bio}
            </motion.p>
          </AnimatePresence>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={isProf ? "#portfolio" : "#curiosidades"}
              className="group inline-flex items-center gap-3 rounded-md px-6 py-3.5 text-sm md:text-[13px] font-semibold tracking-[0.18em] uppercase text-black hover:brightness-110 transition-all"
              style={{
                background: `linear-gradient(135deg, ${c.soft} 0%, ${c.base} 50%, ${c.deep} 100%)`,
                boxShadow: `0 20px 60px -20px ${c.shadow}, inset 0 1px 0 rgba(255,255,255,0.4)`,
              }}
            >
              {isProf ? "Ver meus projetos" : "Ver curiosidades"}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={isProf ? "#contato" : "#contato"}
              className="group inline-flex items-center gap-3 rounded-md px-6 py-3.5 text-sm md:text-[13px] font-semibold tracking-[0.18em] uppercase text-white/90 border border-white/15 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/25 transition-all"
            >
              {isProf ? "Baixar currículo" : "Falar comigo"}
              <Download size={14} />
            </a>
          </div>
        </div>

        {/* RIGHT — portrait + ring + floating cards */}
        <div className="relative flex justify-center lg:justify-end items-center min-h-[560px] md:min-h-[720px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode + "-portrait"}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[720px] aspect-square"
            >
              {/* Portrait */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <Image
                  src={isProf ? "/lucas-hero.png" : "/lucas-personal.png"}
                  alt="Lucas Baldi"
                  fill
                  priority
                  sizes="(min-width: 1024px) 720px, (min-width: 768px) 620px, 100vw"
                  className="object-cover"
                />
                {/* Soft edge fade to bg */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, transparent 55%, rgba(5,7,10,0.85) 95%)",
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 0%, #05070a 95%)",
                  }}
                />
              </div>

              {/* Floating cards */}
              {floating.map((f, i) => (
                <FloatingCard
                  key={mode + i}
                  index={i}
                  icon={f.icon}
                  label={f.label}
                  accentColor={c.base}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 mt-8 md:mt-4">
        <GlassCard padding="none" className="px-3 py-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {stats.map((s, i) => (
              <motion.div
                key={mode + "-stat-" + i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                className="flex items-center gap-4 px-4 py-3 rounded-xl"
              >
                <div
                  className="w-11 h-11 rounded-lg glass-dark flex items-center justify-center flex-shrink-0"
                  style={{ color: c.base }}
                >
                  {s.icon}
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white leading-none">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[10px] tracking-[0.2em] text-white/50 uppercase">
                    {s.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function FloatingCard({
  index,
  icon,
  label,
  accentColor,
}: {
  index: number;
  icon: React.ReactNode;
  label: string;
  accentColor: string;
}) {
  const positions = [
    "top-[10%] -left-4 md:-left-24",
    "top-[6%] -right-4 md:-right-20",
    "bottom-[18%] -left-4 md:-left-28",
    "bottom-[10%] -right-4 md:-right-24",
  ];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.4 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`absolute ${positions[index]} z-20`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4 + index * 0.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.35,
        }}
      >
        <GlassCard
          padding="none"
          className="pl-4 pr-5 py-3.5 flex items-center gap-3.5 min-w-[190px] group cursor-default"
        >
          <div
            className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0"
            style={{ color: accentColor }}
          >
            {icon}
          </div>
          <div className="text-[13px] leading-[1.2] text-white/90 whitespace-pre-line font-medium">
            {label}
          </div>
          <ArrowUpRight
            size={14}
            className="text-white/40 transition-colors ml-auto flex-shrink-0"
          />
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
