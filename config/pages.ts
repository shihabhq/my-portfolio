import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Shihab Haque's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills where I am proficient.",
    metadata: {
      title: "Skills",
      description:
        "Shihab Haque's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Shihab Haque's projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Shihab Haque.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Shihab Haque's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Shihab Haque's resume.",
    metadata: {
      title: "Resume",
      description: "Shihab Haque's resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Shihab Haque's professional journey and experience timeline.",
    },
  },
};
