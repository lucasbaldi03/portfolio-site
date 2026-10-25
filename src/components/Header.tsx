"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { profile } from "@/lib/content";
import { useMode } from "@/lib/mode";
import clsx from "@/lib/clsx";
import LocalTime from "./LocalTime";

const links = [
  { n: "01", label: "Home", href: "/#top" },
  { n: "02", label: "Projetos", href: "/#projetos" },
  { n: "03", label: "Sobre", href: "/#sobre" },
  { n: "04", label: "Experiências", href: "/#experiencias" },
  { n: "05", label: "Contato", href: "#contato" },
];

export function ModeSwitch({ className }: { className?: string }) {
  const { mode, setMode } = useMode();
  return (
    <div className={clsx("flex items-center border border-fg text-[11px] font-semibold uppercase", className)}>
      {(
        [
          ["prof", "Profissional"],
          ["pessoal", "Pessoal"],
        ] as const
      ).map(([key, label]) => (
        <button
          key={key}
          onClick={() => setMode(key)}
          className={clsx(
            "relative px-3 py-1.5 transition-colors",
            mode === key ? "text-accent-ink" : "text-fg hover:text-accent",
          )}
        >
          {mode === key && (
            <motion.span
              layoutId="mode-pill"
              className="absolute inset-0 bg-accent"
              transition={{ type: "spring", stiffness: 420, damping: 36 }}
            />
          )}
          <span className="relative">{label}</span>
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Some quando desce, volta quando sobe
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > 160 && y > prev);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? "-110%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 px-4 md:px-6 py-3 flex items-center justify-between bg-bg/80 backdrop-blur-md"
      >
        <Link href="/#top" className="font-display text-2xl leading-none tracking-tight">
          L<span className="text-accent">.</span>A<span className="text-accent">.</span>B
          <sup className="font-sans text-[9px] align-super ml-0.5">®</sup>
        </Link>

        <ModeSwitch className="hidden sm:flex" />

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="relative w-9 h-6 flex flex-col justify-center gap-[7px]"
        >
          <span
            className={clsx(
              "block h-[2px] w-full bg-fg transition-transform duration-300",
              open && "translate-y-[4.5px] rotate-45",
            )}
          />
          <span
            className={clsx(
              "block h-[2px] w-full bg-fg transition-transform duration-300",
              open && "-translate-y-[4.5px] -rotate-45",
            )}
          />
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-accent text-accent-ink pt-20 px-4 md:px-6 pb-6 flex flex-col overflow-y-auto"
          >
            <ul className="flex-1">
              {links.map((l, i) => (
                <motion.li
                  key={l.n}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.05 }}
                  className="border-b border-accent-ink/20"
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 py-2 md:py-3"
                  >
                    <span className="label w-8">{l.n}</span>
                    <span className="font-display uppercase text-[13vw] md:text-[7vw] leading-[0.9] transition-transform duration-300 group-hover:translate-x-3">
                      {l.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            <ModeSwitch className="sm:hidden self-start mt-6 border-accent-ink" />

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div>
                <div className="label opacity-60 mb-2">Contato</div>
                <a href={`mailto:${profile.email}`} className="block hover:underline">
                  {profile.email}
                </a>
                <a href={`mailto:${profile.emailWork}`} className="block hover:underline">
                  {profile.emailWork}
                </a>
              </div>
              <div>
                <div className="label opacity-60 mb-2">Social</div>
                <a href={profile.igUrl} target="_blank" rel="noopener noreferrer" className="block hover:underline">
                  Instagram
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="block hover:underline">
                  LinkedIn
                </a>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="label opacity-60 mb-2">Base</div>
                <div>De {profile.hometown} pro Brasil</div>
                <div>
                  Agora: <LocalTime />
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
