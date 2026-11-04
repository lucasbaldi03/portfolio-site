"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { FlowStep } from "@/lib/content";
import PhoneMockup from "./PhoneMockup";

const STEP_MS = 2800;

// Fluxo do app: as telas passam sozinhas no celular e a lista ao lado marca a etapa.
// Clicar numa etapa pula pra ela e o ciclo segue dali.
export default function FlowPhone({ steps }: { steps: FlowStep[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setI((n) => (n + 1) % steps.length), STEP_MS);
    return () => clearTimeout(t);
  }, [i, steps.length]);

  const cur = steps[i];

  return (
    <div className="grid md:grid-cols-2 gap-12 md:gap-10 items-center">
      <div>
        <div className="label mb-3">
          Como funciona <span className="text-accent">↴</span>
        </div>
        <ol>
          {steps.map((s, n) => (
            <li key={s.src} className="border-t border-line last:border-b">
              <button
                type="button"
                onClick={() => setI(n)}
                className={`relative w-full text-left flex items-baseline gap-4 py-3 transition-colors ${
                  n === i ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                <span className={`w-7 shrink-0 text-sm font-semibold ${n === i ? "text-accent" : ""}`}>{s.step}</span>
                <span className="font-medium">{s.title}</span>
                <span className="hidden sm:inline text-sm text-muted">· {s.label}</span>
                {n === i && (
                  <span
                    key={i}
                    className="absolute left-0 -top-px h-[2px] bg-accent animate-[flow-progress_linear_forwards]"
                    style={{ animationDuration: `${STEP_MS}ms` }}
                  />
                )}
              </button>
            </li>
          ))}
        </ol>
      </div>

      <figure className="flex flex-col items-center">
        <PhoneMockup bar={cur.bar ?? "#fff"} light={!cur.bar}>
          <div className="relative w-full aspect-[388/813] bg-white">
            {steps.map((s, n) => (
              <Image
                key={s.src}
                src={s.src}
                alt={`${s.step} · ${s.title}`}
                fill
                sizes="280px"
                priority={n < 2}
                className={`object-cover object-top transition-opacity duration-500 ${n === i ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
        </PhoneMockup>
        <figcaption className="mt-5 text-xs text-muted flex gap-2 text-center">
          <span className="text-accent">↳</span> Etapa {cur.step} · {cur.label}
        </figcaption>
      </figure>
    </div>
  );
}
