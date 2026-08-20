import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectPage } from "../../ProjectPage";
import { projects } from "../../content";
import { SITE_NAME } from "../../seo";

export function generateStaticParams() {
  return projects.cs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.cs.find((entry) => entry.slug === slug);
  if (!project) return {};
  const title = `${project.title} — David Březina`;
  const canonical = `/projekty/${slug}`;
  return {
    title,
    description: project.summary,
    alternates: {
      canonical,
      languages: { "cs-CZ": canonical, en: `/en/projects/${slug}`, "x-default": canonical },
    },
    openGraph: { type: "article", url: canonical, siteName: SITE_NAME, locale: "cs_CZ", alternateLocale: ["en_GB"], title, description: project.summary, images: [] },
    twitter: { card: "summary", title, description: project.summary, images: [] },
  };
}

export default async function CzechProject({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.cs.find((entry) => entry.slug === slug);
  if (!project) notFound();
  return <ProjectPage project={project} locale="cs" />;
}
