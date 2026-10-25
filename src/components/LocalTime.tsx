"use client";

import { useEffect, useState } from "react";

// Hora de Brasília ao vivo
export default function LocalTime() {
  const [now, setNow] = useState<string>("--:--");
  useEffect(() => {
    const fmt = () =>
      setNow(
        new Intl.DateTimeFormat("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "America/Sao_Paulo",
        }).format(new Date()),
      );
    fmt();
    const id = setInterval(fmt, 15000);
    return () => clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{now} BRT</span>;
}
