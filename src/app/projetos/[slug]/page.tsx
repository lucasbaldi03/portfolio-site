import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, showcases } from "@/lib/content";
import ProjectView from "@/components/ProjectView";
import ShowcaseView from "@/components/ShowcaseView";

export function generateStaticParams() {
  return [...projects, ...showcases].map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projetos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = showcases.find((x) => x.slug === slug);
  if (s) return { title: `${s.title} — lucas.a.baldi`, description: s.intro[0] };
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.title} — lucas.a.baldi`,
    description: p.description,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projetos/[slug]">) {
  const { slug } = await params;
  const s = showcases.find((x) => x.slug === slug);
  if (s) return <ShowcaseView showcase={s} />;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index < 0) notFound();
  return <ProjectView index={index} />;
}
