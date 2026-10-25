"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/content";
import BigName from "./BigName";
import LocalTime from "./LocalTime";

// pessoal sai pelo WhatsApp; agência pelo email da BePlus
const contacts = [
  {
    kind: "Pessoal · freela",
    note: "Projetos diretos comigo, consultoria e conversa.",
    label: profile.phone,
    href: profile.whatsapp,
    whatsapp: true,
  },
  {
    kind: "Agência · BePlus",
    note: "Cocriação com a agência: campanha, IA, ativação e produção.",
    label: profile.emailWork,
    href: `mailto:${profile.emailWork}`,
    whatsapp: false,
  },
];

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.43 9.43 0 0 1-4.81-1.32l-.35-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.46-9.44a9.4 9.4 0 0 1 6.68 2.77 9.38 9.38 0 0 1 2.77 6.68c0 5.21-4.24 9.44-9.46 9.44zm8.05-17.5A11.32 11.32 0 0 0 12.04.67C5.77.67.66 5.77.66 12.04c0 2 .52 3.96 1.52 5.69L.57 23.33l5.73-1.5a11.36 11.36 0 0 0 5.73 1.46h.01c6.27 0 11.38-5.1 11.38-11.37 0-3.04-1.18-5.9-3.33-8.04z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      id="contato"
      className="mt-28 md:mt-40 bg-accent text-accent-ink px-4 md:px-6 pt-16 md:pt-24 pb-5 scroll-mt-0"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="label flex items-center gap-2">
          <span className="text-base leading-none">↳</span> Tem um projeto em mente?
        </div>
        <p className="text-base md:text-lg leading-snug max-w-[30ch]">
          Marketing, design e estratégia com IA. Do roteiro à ativação, bora
          tirar a ideia do papel.
        </p>
      </div>

      <a
        href={`mailto:${profile.email}`}
        className="group mt-8 md:mt-4 inline-flex items-center gap-4 md:gap-8"
      >
        <span className="font-display uppercase whitespace-nowrap text-[18vw] md:text-[13vw] leading-[0.85]">
          Let&apos;s talk
        </span>
        <ArrowUpRight
          strokeWidth={1.5}
          className="w-[12vw] h-[12vw] md:w-[7vw] md:h-[7vw] transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
        />
      </a>

      {/* Dois caminhos: comigo ou com a agência */}
      <div className="mt-10 grid md:grid-cols-2 gap-3">
        {contacts.map((e) => (
          <a
            key={e.href}
            href={e.href}
            {...(e.whatsapp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group border border-accent-ink p-5 md:p-6 flex items-end justify-between gap-4 hover:bg-accent-ink hover:text-accent transition-colors"
          >
            <div className="min-w-0">
              <div className="label text-[11px]">{e.kind}</div>
              <div className="mt-1 text-sm opacity-70">{e.note}</div>
              <div className="mt-4 text-[15px] sm:text-lg md:text-2xl font-medium break-words flex items-center gap-2.5">
                {e.whatsapp && <WhatsAppIcon className="w-[1em] h-[1em] shrink-0" />}
                {e.label}
              </div>
            </div>
            <ArrowUpRight size={24} className="shrink-0" />
          </a>
        ))}
      </div>

      <div className="mt-16 pt-4 border-t border-accent-ink/40 grid grid-cols-2 md:grid-cols-4 gap-8 text-[15px] md:text-base">
        <Col title="Páginas">
          <Link href="/#top">Home</Link>
          <Link href="/#projetos">Projetos</Link>
          <Link href="/#sobre">Sobre</Link>
          <Link href="/#experiencias">Experiências</Link>
        </Col>
        <Col title="Social">
          <a href={profile.igUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.spotify} target="_blank" rel="noopener noreferrer">Spotify</a>
        </Col>
        <Col title="Contato">
          <a href={`mailto:${profile.email}`} className="break-all">{profile.email}</a>
          <a href={`mailto:${profile.emailWork}`} className="break-all">{profile.emailWork}</a>
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
            <WhatsAppIcon className="w-4 h-4 shrink-0" /> {profile.phone}
          </a>
        </Col>
        <Col title="Base">
          <span>De {profile.hometown}, SP</span>
          <span>Atendo o Brasil todo</span>
          <span>
            Agora <LocalTime />
          </span>
        </Col>
      </div>

      <BigName className="mt-16 md:mt-24" dotClassName="text-bg" />

      <div className="mt-4 pt-3 border-t border-accent-ink/40 flex justify-between label text-[11px]">
        <span>© {new Date().getFullYear()} Lucas A. Baldi</span>
        <a href="#top" className="hover:underline">
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 [&_a:hover]:underline">
      <div className="label text-[11px] opacity-60 mb-1">{title}</div>
      {children}
    </div>
  );
}
