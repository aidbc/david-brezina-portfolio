import type { Metadata } from "next";
import { headers } from "next/headers";
import { PortfolioPage } from "../PortfolioPage";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;
  const title = "David Březina — Product Lead | From idea to launch";
  const description = "Product Lead with more than 10 years of experience. New digital products from discovery and MVP definition through delivery to launch.";
  return {
    title,
    description,
    alternates: { canonical: "/en/", languages: { "cs-CZ": "/", en: "/en/" } },
    openGraph: { title, description, images: [{ url: image, width: 1730, height: 909, alt: "David Březina — Product Lead" }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function EnglishHome() {
  return <PortfolioPage locale="en" />;
}
