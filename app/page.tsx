import type { Metadata } from "next";
import { PortfolioPage } from "./PortfolioPage";

export function generateMetadata(): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://david-brezina-portfolio.netlify.app";
  const image = new URL("/og.png", siteUrl).toString();
  const title = "David Březina — Product Lead | Od nápadu ke spuštění";
  const description = "Product Lead s více než 10 lety zkušeností. Nové digitální produkty od discovery a definice MVP po delivery a spuštění.";
  return {
    title,
    description,
    alternates: { canonical: "/", languages: { "cs-CZ": "/", en: "/en" } },
    openGraph: { title, description, images: [{ url: image, width: 1730, height: 909, alt: "David Březina — Product Lead" }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function Home() {
  return <PortfolioPage locale="cs" />;
}
