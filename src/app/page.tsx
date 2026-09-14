"use client";

import { AnimatePresence, motion } from "framer-motion";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Portfolio from "@/components/Portfolio";
import Personal from "@/components/Personal";
import Footer from "@/components/Footer";
import { useMode } from "@/lib/mode";

export default function Home() {
  const { mode } = useMode();

  return (
    <main className="relative min-h-screen">
      <Nav />
      <Hero />

      <AnimatePresence mode="wait">
        {mode === "prof" ? (
          <motion.div
            key="prof"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Timeline />
            <Portfolio />
          </motion.div>
        ) : (
          <motion.div
            key="pessoal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Personal />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
