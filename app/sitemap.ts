import { MetadataRoute } from "next";

import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";

type SitemapEntry = MetadataRoute.Sitemap[number];

function pagePriority(path: string) {
  if (path === "/") return 1.0;
  if (path.startsWith("/projects") || path.startsWith("/experience"))
    return 0.8;
  if (path === "/contact" || path === "/resume") return 0.7;
  return 0.6;
}

export default function sitemap(): SitemapEntry[] {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  const now = new Date();

  // Static pages from pagesConfig
  const staticPages = Object.keys(pagesConfig).map((key) => {
    const path = key === "home" ? "/" : `/${key}`;
    return {
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: pagePriority(path),
    } as SitemapEntry;
  });

  // Projects (dynamic)
  const projectPages: SitemapEntry[] = Projects.map((p) => ({
    url: `${baseUrl}/projects/${p.id}`,
    lastModified: p.endDate instanceof Date ? p.endDate : now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Experience (dynamic)
  const expPages: SitemapEntry[] = experiences.map((e) => ({
    url: `${baseUrl}/experience/${e.id}`,
    lastModified: e.endDate instanceof Date ? e.endDate : now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Add index and canonical pages if not included
  const indexEntry: SitemapEntry = {
    url: `${baseUrl}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 1.0,
  };

  const routes: SitemapEntry[] = [
    indexEntry,
    ...staticPages.filter((r) => r.url !== indexEntry.url),
    ...projectPages,
    ...expPages,
  ];

  return routes;
}
