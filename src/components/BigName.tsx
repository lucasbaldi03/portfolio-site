"use client";

import { useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  MotionValue,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import clsx from "@/lib/clsx";

const NAME = "LUCAS.A.BALDI";

// Roboto Flex condensada e pesada no repouso. No hover a altura das letras
// muda (base fixa) e o peso acompanha: letra baixa fica achatada e mais fina.
const WDTH = 30;
const axes = (wght: number) => `"wght" ${wght}, "wdth" ${WDTH}, "opsz" 144`;
const REST_WGHT = 860;

// Nome gigante. Abre parado e inteiro; com o mouse em cima vira uma ladeira
// líquida: as letras sob o cursor afundam, as vizinhas sobem de volta em
// curva, e tudo balança com mola até assentar. Saiu o mouse, volta ao normal.
export default function BigName({
  className,
  delay = 0,
  dotClassName = "text-accent",
}: {
  className?: string;
  delay?: number;
  dotClassName?: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const measure = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<number | null>(null);
  const inView = useInView(wrap, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();

  const pointer = useMotionValue(0.5);
  const strength = useSpring(0, { stiffness: 70, damping: 18 });
  const fitX = useMotionValue(1);

  useLayoutEffect(() => {
    const fit = () => {
      if (!wrap.current || !measure.current) return;
      const w = measure.current.offsetWidth;
      if (w > 0) setSize((100 * wrap.current.clientWidth) / w);
    };
    fit();
    document.fonts?.ready.then(fit);
    const ro = new ResizeObserver(fit);
    if (wrap.current) ro.observe(wrap.current);
    return () => ro.disconnect();
  }, []);

  useAnimationFrame(() => {
    // a soma das larguras muda o tempo todo: ajusta a linha pra caber exata
    if (wrap.current && line.current && line.current.offsetWidth > 0) {
      fitX.set(wrap.current.clientWidth / line.current.offsetWidth);
    }
  });

  const onMove = (e: React.PointerEvent) => {
    const r = wrap.current?.getBoundingClientRect();
    if (!r) return;
    pointer.set((e.clientX - r.left) / r.width);
    strength.set(reduce ? 0.35 : 1);
  };

  const letters = NAME.split("");
  const dotIdx = letters.map((c, i) => (c === "." ? i : -1)).filter((i) => i >= 0);

  return (
    <div
      ref={wrap}
      className={clsx("relative w-full", className)}
      aria-label={NAME}
      onPointerMove={onMove}
      onPointerLeave={() => strength.set(0)}
    >
      {/* medida em 100px no repouso, pra achar o tamanho que enche a linha */}
      <div className="absolute w-0 h-0 overflow-hidden" aria-hidden>
        <div
          ref={measure}
          className="font-flex inline-block whitespace-nowrap"
          style={{ fontSize: 100, fontVariationSettings: axes(REST_WGHT) }}
        >
          {NAME}
        </div>
      </div>

      <motion.div
        ref={line}
        aria-hidden
        className="font-flex inline-flex items-end whitespace-nowrap select-none origin-left"
        style={{ fontSize: size ?? 0, opacity: size ? 1 : 0, scaleX: fitX }}
      >
        {letters.map((c, i) => {
          const isDot = c === ".";
          const order = isDot
            ? letters.length - dotIdx.length + dotIdx.indexOf(i)
            : i - dotIdx.filter((d) => d < i).length;
          return (
            <LiquidLetter
              key={i}
              index={i}
              count={letters.length}
              pointer={pointer}
              strength={strength}
            >
              <span className="inline-block overflow-hidden pb-[0.02em]">
                <motion.span
                  className={clsx("inline-block", isDot && dotClassName)}
                  initial={{ y: "105%" }}
                  animate={inView && size ? { y: "0%" } : undefined}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                    delay: delay + order * 0.055 + (isDot ? 0.15 : 0),
                  }}
                >
                  {c}
                </motion.span>
              </span>
            </LiquidLetter>
          );
        })}
      </motion.div>
    </div>
  );
}

function LiquidLetter({
  children,
  index,
  count,
  pointer,
  strength,
}: {
  children: React.ReactNode;
  index: number;
  count: number;
  pointer: MotionValue<number>;
  strength: MotionValue<number>;
}) {
  const center = (index + 0.5) / count;

  // quanto a letra afunda (0 = altura cheia): vale suave em volta do cursor
  const raw = useTransform(() => {
    const d = pointer.get() - center;
    return strength.get() * Math.exp(-((d / 0.2) ** 2));
  });
  // mola com pouco amortecimento: passa um pouco do ponto e volta, tipo líquido
  const sink = useSpring(raw, { stiffness: 140, damping: 11, mass: 0.9 });

  const scaleY = useTransform(sink, (x) => 1 - 0.68 * x);
  const fontVariationSettings = useTransform(sink, (x) =>
    axes(Math.min(1000, Math.max(100, REST_WGHT - x * 520))),
  );

  return (
    <motion.span
      className="inline-block"
      // origem na linha de base (82,7% da caixa), pra letra afundar sem sair do chão
      style={{ scaleY, fontVariationSettings, transformOrigin: "50% 82.7%" }}
    >
      {children}
    </motion.span>
  );
}
