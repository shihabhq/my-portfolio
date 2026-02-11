import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shihab Haque | Full-Stack Web & App Developer",
    short_name: "Shihab Haque",
    description:
      "Shihab Haque - Full-Stack Web & App Developer working at the intersection of AI, data, and scalable software systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "https://ik.imagekit.io/bua2b1x6j/portfolio/logo.webp",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "https://ik.imagekit.io/bua2b1x6j/portfolio/logo.webp",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "ai",
      "software engineering",
      "machine learning",
      "developer",
      "web development",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
