"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type Mode = "prof" | "pessoal";

type Ctx = {
  mode: Mode;
  setMode: (m: Mode) => void;
  toggle: () => void;
};

const ModeCtx = createContext<Ctx | null>(null);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("prof");

  // O tema (cores) segue o modo; o provider fica no layout, então o modo
  // continua o mesmo ao navegar entre home e páginas de projeto
  useEffect(() => {
    document.documentElement.dataset.mode = mode;
  }, [mode]);

  const toggle = () => setMode((m) => (m === "prof" ? "pessoal" : "prof"));
  return (
    <ModeCtx.Provider value={{ mode, setMode, toggle }}>
      {children}
    </ModeCtx.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeCtx);
  if (!ctx) throw new Error("useMode must be used inside ModeProvider");
  return ctx;
}
