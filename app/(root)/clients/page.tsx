import { Metadata } from "next";
import Script from "next/script";

import PageContainer from "@/components/common/page-container";
import ClientsLogoGrid from "@/components/clients/clients-logo-grid";
import { clients } from "@/config/clients";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.clients.metadata.title,
  description: pagesConfig.clients.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/clients`,
  },
  openGraph: {
    title: pagesConfig.clients.metadata.title,
    description: pagesConfig.clients.metadata.description,
    url: `${siteConfig.url}/clients`,
    type: "website",
  },
};

export default function ClientsPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Organizations Shihab Haque has worked with",
    description: pagesConfig.clients.metadata.description,
    itemListElement: clients
      .filter((c) => c.website)
      .map((client, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Organization",
          name: client.name,
          url: client.website,
          logo: `${siteConfig.url}${client.logo}`,
        },
      })),
  };

  return (
    <>
      <Script
        id="schema-clients"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <PageContainer
        title={pagesConfig.clients.title}
        description={pagesConfig.clients.description}
      >
        <ClientsLogoGrid clients={clients} />
      </PageContainer>
    </>
  );
}
