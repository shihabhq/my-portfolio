import { siteConfig } from "@/config/site";
import { NextResponse } from "next/server";

export function GET() {
  const base = siteConfig.url.replace(/\/$/, "");
  const content = `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\nHost: ${base}\n`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
