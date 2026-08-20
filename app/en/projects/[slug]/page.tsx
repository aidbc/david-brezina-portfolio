import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectPage } from "../../../ProjectPage";
import { projects } from "../../../content";
import { SITE_NAME } from "../../../seo";

export function generateStaticParams() {
  return projects.en.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.en.find((entry) => entry.slug === slug);
  if (!project) return {};
  const title = `${project.title} — David Březina`;
  const canonical = `/en/projects/${slug}`;
  return {
    title,
    description: project.summary,
    alternates: {
      canonical,
      languages: { "cs-CZ": `/projekty/${slug}`, en: canonical, "x-default": `/projekty/${slug}` },
    },
    openGraph: { type: "article", url: canonical, siteName: SITE_NAME, locale: "en_GB", alternateLocale: ["cs_CZ"], title, description: project.summary, images: [] },
    twitter: { card: "summary", title, description: project.summary, images: [] },
  };
}

export default async function EnglishProject({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.en.find((entry) => entry.slug === slug);
  if (!project) notFound();
  return <ProjectPage project={project} locale="en" />;
}
