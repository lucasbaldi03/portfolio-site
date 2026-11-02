import type { ReactNode } from "react";

// Mockup de celular desenhado em CSS. Com src, o vídeo do app roda na tela em loop
// e sem som; sem src, a tela mostra o que vier em children. bar = cor da barra de status
export default function PhoneMockup({
  src,
  poster,
  bar = "#000",
  light = false,
  children,
}: {
  src?: string;
  poster?: string;
  bar?: string;
  light?: boolean;
  children?: ReactNode;
}) {
  const ink = light ? "bg-black/80" : "bg-white/80";
  return (
    <div className="relative w-[min(78vw,320px)] md:w-[340px]">
      {/* botões laterais */}
      <span className="absolute -left-[3px] top-[18%] h-10 w-[3px] rounded-l bg-[#2a2a2a]" />
      <span className="absolute -left-[3px] top-[28%] h-16 w-[3px] rounded-l bg-[#2a2a2a]" />
      <span className="absolute -right-[3px] top-[24%] h-20 w-[3px] rounded-r bg-[#2a2a2a]" />
      <div className="rounded-[3rem] bg-[#1c1c1c] p-[10px] ring-1 ring-black/10 shadow-[0_50px_90px_-30px_rgba(0,0,0,0.55)]">
        <div className="relative overflow-hidden rounded-[2.4rem] bg-black">
          {/* barra de status */}
          <div
            className={`relative z-10 flex h-9 items-center justify-between px-7 text-[11px] font-semibold transition-colors duration-500 ${
              light ? "text-black" : "text-white"
            }`}
            style={{ backgroundColor: bar }}
          >
            <span>13:13</span>
            <span className="absolute left-1/2 top-2 h-[22px] w-[84px] -translate-x-1/2 rounded-full bg-black" />
            <span className="flex items-center gap-1">
              <span className={`h-2 w-3 rounded-[2px] ${ink}`} />
              <span className={`h-2.5 w-5 rounded-[3px] border p-[1px] ${light ? "border-black/70" : "border-white/70"}`}>
                <span className={`block h-full w-4/5 rounded-[1px] ${ink}`} />
              </span>
            </span>
          </div>
          {src ? (
            <video
              src={src}
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="block w-full aspect-[4/7] object-cover"
            />
          ) : (
            children
          )}
          {/* barra de gesto */}
          <div
            className="flex h-6 items-center justify-center transition-colors duration-500"
            style={{ backgroundColor: light ? "#fff" : "#000" }}
          >
            <span className={`h-1 w-24 rounded-full ${light ? "bg-black/80" : "bg-white/70"}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
