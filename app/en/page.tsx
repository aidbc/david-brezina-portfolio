import type { Metadata } from "next";
import { PortfolioPage } from "../PortfolioPage";

export function generateMetadata(): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://david-brezina-portfolio.netlify.app";
  const image = new URL("/og.png", siteUrl).toString();
  const title = "David Březina — Product Lead | From idea to launch";
  const description = "Product Lead with more than 10 years of experience. New digital products from discovery and MVP definition through delivery to launch.";
  return {
    title,
    description,
    alternates: { canonical: "/en", languages: { "cs-CZ": "/", en: "/en" } },
    openGraph: { title, description, images: [{ url: image, width: 1730, height: 909, alt: "David Březina — Product Lead" }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function EnglishHome() {
  return <PortfolioPage locale="en" />;
}
