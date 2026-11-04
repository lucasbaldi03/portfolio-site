"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Kit } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;
const spring = { stiffness: 110, damping: 18, mass: 0.6 };
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

// Press kit em 3D: a cena gira seguindo o mouse e com o arraste; o clique abre a
// caixa e a carta e o controle saem em camadas de profundidade diferentes
export default function KitStage({ kit }: { kit: Kit }) {
  const [open, setOpen] = useState(false);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const drag = useMotionValue(0);
  const ry = useSpring(useTransform(() => px.get() * 26 + drag.get()), spring);
  const rx = useSpring(useTransform(py, (y) => -y * 16), spring);
  // brilho holográfico da carta corre junto com o mouse
  const shineX = useTransform(px, (x) => `${50 + x * 120}%`);
  const shineY = useTransform(py, (y) => `${50 + y * 120}%`);
  const shine = useMotionTemplate`radial-gradient(circle at ${shineX} ${shineY}, rgba(255,236,190,0.45), transparent 45%)`;

  const press = useRef<{ x: number; base: number; moved: boolean } | null>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
    const p = press.current;
    if (p) {
      const dx = e.clientX - p.x;
      if (Math.abs(dx) > 6) p.moved = true;
      drag.set(clamp(p.base + dx * 0.35, -60, 60));
    }
  };
  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    press.current = { x: e.clientX, base: drag.get(), moved: false };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onUp = () => {
    const p = press.current;
    press.current = null;
    drag.set(0);
    if (p && !p.moved) setOpen((o) => !o);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  const t = { duration: 0.9, ease };

  return (
    <div>
      <div
        className="relative overflow-hidden h-[460px] md:h-[min(600px,72vh)] select-none touch-pan-y cursor-grab active:cursor-grabbing [perspective:1400px]"
        onPointerMove={onMove}
        onPointerDown={onDown}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onPointerLeave={onLeave}
        role="button"
        tabIndex={0}
        aria-label={open ? "Fechar a caixa do press kit" : "Abrir a caixa do press kit"}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((o) => !o);
          }
        }}
      >
        <motion.div className="absolute inset-0 [transform-style:preserve-3d]" style={{ rotateX: rx, rotateY: ry }}>
          {/* sombra no chão */}
          <motion.div
            className="absolute left-1/2 top-[88%] h-[8%] rounded-[50%] bg-black/25 blur-2xl"
            style={{ x: "-50%", z: -120 }}
            animate={{ width: open ? "62%" : "40%" }}
            transition={t}
          />

          {/* caixa fechada */}
          <motion.div
            className="absolute left-1/2 top-1/2 w-[78%] md:w-[40%]"
            style={{ x: "-50%", y: "-50%" }}
            animate={open ? { opacity: 0, scale: 0.9, z: -80 } : { opacity: 1, scale: 1, z: 0 }}
            transition={t}
          >
            <div className="animate-[kit-float_6s_ease-in-out_infinite]">
              <Image src={kit.closed} alt="Caixa do press kit Red Bull Icons fechada" width={1400} height={1218} sizes="(min-width: 768px) 40vw, 78vw" className="w-full h-auto drop-shadow-2xl" priority />
            </div>
          </motion.div>

          {/* caixa aberta */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-[84%]"
            style={{ x: "-50%", y: "-50%" }}
            initial={false}
            animate={open ? { opacity: 1, scale: 1, z: 0 } : { opacity: 0, scale: 0.92, z: -60 }}
            transition={t}
          >
            <Image src={kit.open} alt="Caixa do press kit aberta, com controle, lata e carta na gaveta" width={939} height={1381} sizes="420px" className="h-full w-auto drop-shadow-2xl" />
            <Tag show={open} className="left-1/2 -top-2 -translate-x-1/2">A caixa</Tag>
          </motion.div>

          {/* carta */}
          <motion.div
            className="absolute h-[54%] md:h-[60%]"
            style={{ x: "-50%", y: "-50%" }}
            initial={false}
            animate={
              open
                ? { left: "21%", top: "52%", opacity: 1, scale: 1, z: 130, rotateY: 22, rotate: -7 }
                : { left: "50%", top: "55%", opacity: 0, scale: 0.4, z: -40, rotateY: 0, rotate: 0 }
            }
            transition={{ ...t, delay: open ? 0.15 : 0 }}
          >
            <div className="relative h-full animate-[kit-float_5s_ease-in-out_infinite_0.6s]">
              <Image src={kit.card} alt="Carta Red Bull Icons de um creator" width={1025} height={1307} sizes="360px" className="h-full w-auto drop-shadow-2xl" />
              <motion.div className="pointer-events-none absolute inset-[4%] rounded-[8%] mix-blend-overlay" style={{ background: shine }} />
            </div>
            <Tag show={open} className="left-1/2 -bottom-8 -translate-x-1/2">A carta</Tag>
          </motion.div>

          {/* controle */}
          <motion.div
            className="absolute w-[44%] md:w-[24%]"
            style={{ x: "-50%", y: "-50%" }}
            initial={false}
            animate={
              open
                ? { left: "79%", top: "58%", opacity: 1, scale: 1, z: 170, rotateY: -20, rotate: 9 }
                : { left: "50%", top: "45%", opacity: 0, scale: 0.4, z: -40, rotateY: 0, rotate: 0 }
            }
            transition={{ ...t, delay: open ? 0.25 : 0 }}
          >
            <div className="animate-[kit-float_5.5s_ease-in-out_infinite_1.2s]">
              <Image src={kit.controller} alt="Controle de PS5 personalizado Red Bull Icons" width={1400} height={959} sizes="(min-width: 768px) 24vw, 44vw" className="w-full h-auto drop-shadow-2xl" />
            </div>
            <Tag show={open} className="left-1/2 -bottom-6 -translate-x-1/2">O controle</Tag>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="tag bg-accent text-accent-ink"
        >
          {open ? "Fechar a caixa" : "Abrir a caixa"}
        </button>
        <span>
          <span className="text-accent">↳</span> Passe o mouse ou arraste pra girar · clique na caixa pra abrir
        </span>
      </div>
    </div>
  );
}

function Tag({ show, className, children }: { show: boolean; className: string; children: string }) {
  return (
    <motion.span
      className={`label absolute whitespace-nowrap text-[11px] bg-bg/90 px-2 py-1 ${className}`}
      initial={false}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 0.4, delay: show ? 0.7 : 0 }}
    >
      {children}
    </motion.span>
  );
}
