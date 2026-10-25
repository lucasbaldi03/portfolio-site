"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { galleryItems } from "@/lib/content";
import Gallery from "./Gallery";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Projects() {
  return (
    <Gallery id="projetos" label={`Projetos / ${pad(galleryItems.length)}`}>
      {galleryItems.map((item, i) => {
        const card =
          item.kind === "project"
            ? {
                slug: item.project.slug,
                title: item.project.title,
                cover: item.project.cover,
                category: item.project.category,
                year: item.project.year,
              }
            : {
                slug: item.showcase.slug,
                title: item.showcase.title,
                cover: item.showcase.cover,
                category: item.showcase.category,
                year: item.showcase.period,
              };
        return (
          <ProjectCard
            key={card.slug}
            {...card}
            index={i}
            className="w-[80vw] sm:w-[60vw] md:w-[34vw] lg:w-[28vw]"
            sizes="(min-width: 1024px) 28vw, (min-width: 768px) 34vw, 80vw"
            titleClass="text-[9vw] md:text-[2.6vw] lg:text-[2.2vw]"
            priority={i < 2}
          />
        );
      })}
    </Gallery>
  );
}

export function ProjectCard({
  slug,
  title,
  cover,
  category,
  year,
  index,
  className,
  sizes,
  titleClass,
  priority,
  compact,
}: {
  slug: string;
  title: string;
  cover: string;
  category: string;
  year: string;
  index: number;
  className: string;
  sizes: string;
  titleClass: string;
  priority?: boolean;
  // card pequeno: respiro menor e só o ano no topo
  compact?: boolean;
}) {
  const inset = compact ? "inset-x-3" : "inset-x-4";
  return (
    <Link
      href={`/projetos/${slug}`}
      className={`group relative shrink-0 snap-start aspect-[4/5] overflow-hidden bg-card text-white ${className}`}
    >
      <Image
        src={cover}
        alt={title}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/30" />

      <div className={`absolute ${compact ? "top-3" : "top-4"} ${inset} flex items-start justify-between`}>
        <span className={`${compact ? "text-xs" : "text-sm"} font-semibold`}>({pad(index + 1)})</span>
        <div className="flex gap-1.5">
          {!compact && <span className="tag bg-black/20 backdrop-blur-sm">{category}</span>}
          <span className="tag bg-black/20 backdrop-blur-sm">{year}</span>
        </div>
      </div>

      <div className={`absolute ${compact ? "bottom-3" : "bottom-4"} ${inset} flex items-end justify-between gap-4`}>
        <h3 className={`font-display uppercase leading-[1.15] max-w-[85%] ${titleClass}`}>
          {title}
        </h3>
        <span className={`shrink-0 ${compact ? "hidden" : "flex"} w-11 h-11 rounded-full bg-accent text-accent-ink items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300`}>
          <ArrowUpRight size={20} />
        </span>
      </div>
      <span className="sr-only">Ver projeto</span>
    </Link>
  );
}
