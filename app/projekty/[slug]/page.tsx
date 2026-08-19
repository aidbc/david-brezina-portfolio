import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectPage } from "../../ProjectPage";
import { projects } from "../../content";

export function generateStaticParams() {
  return projects.cs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.cs.find((entry) => entry.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — David Březina`,
    description: project.summary,
    alternates: {
      canonical: `/projekty/${slug}`,
      languages: { "cs-CZ": `/projekty/${slug}`, en: `/en/projects/${slug}` },
    },
    openGraph: { title: `${project.title} — David Březina`, description: project.summary, images: [] },
    twitter: { card: "summary", title: `${project.title} — David Březina`, description: project.summary, images: [] },
  };
}

export default async function CzechProject({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.cs.find((entry) => entry.slug === slug);
  if (!project) notFound();
  return <ProjectPage project={project} locale="cs" />;
}
