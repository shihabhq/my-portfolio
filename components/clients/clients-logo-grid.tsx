import Image from "next/image";

import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import { Client } from "@/config/clients";

interface ClientsLogoGridProps {
  clients: Client[];
}

function ClientCard({ client }: { client: Client }) {
  const content = (
    <div className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-md h-full">
      <div className="relative flex h-20 w-full items-center justify-center rounded-lg bg-white p-3">
        <Image
          src={client.logo}
          alt={`${client.name} logo`}
          fill
          sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 15vw"
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
        />
        {client.website && (
          <span className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Icons.externalLink className="h-3 w-3 text-muted-foreground" />
          </span>
        )}
      </div>
      <span className="text-center text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium leading-tight">
        {client.name}
      </span>
    </div>
  );

  if (client.website) {
    return (
      <a
        href={client.website}
        target="_blank"
        rel="noopener noreferrer"
        className="h-full block"
        aria-label={`Visit ${client.name} website`}
      >
        {content}
      </a>
    );
  }

  return <div className="h-full">{content}</div>;
}

export default function ClientsLogoGrid({ clients }: ClientsLogoGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
      {clients.map((client, index) => (
        <AnimatedSection
          key={client.id}
          delay={0.05 * (index + 1)}
          direction="up"
          className="h-full"
        >
          <ClientCard client={client} />
        </AnimatedSection>
      ))}
    </div>
  );
}
