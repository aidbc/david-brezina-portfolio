import type { Metadata } from "next";
import { PortfolioPage } from "./PortfolioPage";
import { getProfileJsonLd, SITE_NAME, SITE_URL } from "./seo";

export function generateMetadata(): Metadata {
  const image = `${SITE_URL}/og-home.png`;
  const title = "David Březina — Product Lead | Fintech a nové digitální produkty";
  const description = "Product Lead s více než 10 lety zkušeností ve fintechu, wealth managementu a vývoji digitálních produktů od discovery a MVP po spuštění.";
  return {
    title,
    description,
    alternates: { canonical: "/", languages: { "cs-CZ": "/", en: "/en", "x-default": "/" } },
    openGraph: {
      type: "website",
      url: "/",
      siteName: SITE_NAME,
      locale: "cs_CZ",
      alternateLocale: ["en_GB"],
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: "David Březina — Product Lead, od nápadu ke spuštění" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getProfileJsonLd("cs")) }}
      />
      <PortfolioPage locale="cs" />
    </>
  );
}
