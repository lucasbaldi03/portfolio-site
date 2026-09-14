"use client";

import { useEffect, useState } from "react";
import type { NowPlaying } from "./spotify";

export function useNowPlaying(intervalMs = 20000) {
  const [data, setData] = useState<NowPlaying | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchOnce() {
      try {
        const res = await fetch("/api/spotify/now-playing", {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("spotify fetch failed");
        const json = (await res.json()) as NowPlaying | null;
        if (!cancelled) setData(json);
      } catch {
        if (!cancelled) setData(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchOnce();
    const id = setInterval(fetchOnce, intervalMs);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [intervalMs]);

  return { data, loading };
}
