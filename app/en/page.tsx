import type { Metadata } from "next";
import { PortfolioPage } from "../PortfolioPage";
import { getProfileJsonLd, SITE_NAME, SITE_URL } from "../seo";

export function generateMetadata(): Metadata {
  const image = `${SITE_URL}/og-home.png`;
  const title = "David Březina — Product Lead | Fintech & New Product Development";
  const description = "Product Lead with 10+ years of experience in fintech, wealth management and digital products, from discovery and MVP definition through launch.";
  return {
    title,
    description,
    alternates: { canonical: "/en", languages: { "cs-CZ": "/", en: "/en", "x-default": "/" } },
    openGraph: {
      type: "website",
      url: "/en",
      siteName: SITE_NAME,
      locale: "en_GB",
      alternateLocale: ["cs_CZ"],
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: "David Březina — Product Lead, from idea to launch" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function EnglishHome() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getProfileJsonLd("en")) }}
      />
      <PortfolioPage locale="en" />
    </>
  );
}
