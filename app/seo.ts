export const SITE_URL = "https://davidbrezina.com";
export const SITE_NAME = "David Březina";

const descriptions = {
  cs: "Product Lead s více než 10 lety zkušeností ve fintechu, wealth managementu a vývoji digitálních produktů od discovery a MVP po spuštění.",
  en: "Product Lead with 10+ years of experience in fintech, wealth management and digital products, from discovery and MVP definition through launch.",
} as const;

export function getProfileJsonLd(locale: "cs" | "en") {
  const pageUrl = locale === "cs" ? SITE_URL : `${SITE_URL}/en`;

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${pageUrl}#profile`,
    url: pageUrl,
    inLanguage: locale === "cs" ? "cs-CZ" : "en",
    mainEntity: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "David Březina",
      url: SITE_URL,
      image: `${SITE_URL}/david-brezina.png`,
      jobTitle: "Product Lead",
      description: descriptions[locale],
      sameAs: ["https://www.linkedin.com/in/davidbrezina/"],
      knowsAbout: [
        "Product discovery",
        "New product development",
        "Product strategy",
        "MVP definition",
        "Product delivery",
        "Fintech",
        "Wealth management",
        "Open banking",
      ],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "University of Hradec Králové" },
        { "@type": "CollegeOrUniversity", name: "Universidad Politécnica de Madrid" },
      ],
    },
  };
}

