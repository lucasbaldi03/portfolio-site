"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/content";
import GlassCard from "./ui/GlassCard";
import GlassButton from "./ui/GlassButton";

function Linkedin({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.44a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.11 20.45H3.56V9H7.1v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function Instagram({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contato" className="relative py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <GlassCard
          padding="lg"
          strong
          className="relative overflow-hidden !p-6 md:!p-10"
        >
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(168,255,92,0.35) 0%, transparent 60%)",
            }}
          />
          <div className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-accent">
                Vamos conversar
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl editorial tracking-tight leading-[1.05] text-white">
                A ideia é sua,{" "}
                <span className="font-serif-italic text-accent">
                  o plano é meu.
                </span>
              </h2>
              <p className="mt-5 text-white/70 max-w-md">
                Aberto pra novos projetos, colaborações e conversas — de
                estratégia e direção criativa a lançamentos e ativações de
                marca.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`}>
                  <GlassButton variant="primary" size="lg">
                    <Mail size={16} /> Envie um e-mail
                  </GlassButton>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GlassButton variant="outline" size="lg">
                    <Linkedin size={16} /> LinkedIn
                  </GlassButton>
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <ContactRow
                icon={<Mail size={16} />}
                label="E-mail"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactRow
                icon={<Instagram size={16} />}
                label="Instagram"
                value={profile.handleIg}
                href={profile.igUrl}
              />
              <ContactRow
                icon={<Linkedin size={16} />}
                label="LinkedIn"
                value="/in/lucas-araújo-baldi"
                href={profile.linkedin}
              />
            </div>
          </div>
        </GlassCard>

        <div className="mt-10 flex items-center justify-between flex-wrap gap-4 text-xs text-white/40">
          <div>© {new Date().getFullYear()} {profile.name}. Feito com café e Framer.</div>
          <div className="font-mono">v1 · liquid glass</div>
        </div>
      </div>
    </footer>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-dark rounded-xl p-3 md:p-4 flex items-center justify-between gap-3 hover:border-accent/40 transition-colors group"
    >
      <div className="flex items-center gap-3 min-w-0 flex-1">
        <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent flex-shrink-0">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[10px] uppercase tracking-widest text-white/40">
            {label}
          </div>
          <div className="text-xs md:text-sm text-white/90 truncate">
            {value}
          </div>
        </div>
      </div>
      <ArrowUpRight
        size={16}
        className="text-white/40 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0"
      />
    </a>
  );
}
