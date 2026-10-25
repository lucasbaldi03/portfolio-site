"use client";

import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import { Curiosities, PersonalAbout } from "@/components/Personal";
import Footer from "@/components/Footer";
import { useMode } from "@/lib/mode";

export default function Home() {
  const { mode } = useMode();

  return (
    <main className="relative min-h-screen">
      <Header />
      <Hero />

      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {mode === "prof" ? (
            <>
              <Projects />
              <About />
              <Experiences />
            </>
          ) : (
            <>
              <Curiosities />
              <PersonalAbout />
            </>
          )}
        </motion.div>
      </AnimatePresence>

      <Footer />
    </main>
  );
}
