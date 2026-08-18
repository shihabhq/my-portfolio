import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "corpomerch",
    position: "Full Stack Developer & Growth Lead",
    company: "CorpoMerch",
    location: "Hybrid, Bangladesh",
    startDate: new Date("2026-06-01"),
    endDate: "Present",
    description: [
      "Developed and Setup full stack Retail Website platform from scratch along with my own UI/UX judgement.",
      "Improved SEO performance and integrated Google Analytics and Google Search Console for better tracking and analysis.",
      "Created a fully functional and robust admin panel that controlled the entire client side including, variant based product listing, order processing, and content management.",
      "Managed and optimized the company's social media presence, creating engaging content and driving user engagement through platforms like Facebook, Instagram, and LinkedIn.",
      "Developed and implemented a comprehensive social media marketing strategy using Meta Ads and Google Ads to increase brand visibility and drive traffic.",
    ],
    achievements: [],
    skills: [
      "Next.js",
      "Node.js",
      "Typescript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Google Search Console",
      "Google Analytics",
      "Linux",
      "SEO",
      "Social Media Marketing",
      "Meta Ads",
      "Google Ads",
    ],
    companyUrl: "https://corpomerch.com",
    logo: "/experience/corpo.webp",
  },
  {
    id: "afk",
    position: "Software Developer",
    company: "AFK Tech Limited",
    location: "Remote, Bangladesh",
    startDate: new Date("2025-06-01"),
    endDate: new Date("2026-06-01"),
    description: [
      "Created intuitive and faster SEO friendly websites for in house tech products along with client work that derived full satisfaction.",
      "Setup and Contributed to create in house event management app and website alongside a team of developers and designers",
      "Directed intern to follow best practices and stable flow during app development.",
    ],
    achievements: [],
    skills: ["Typescript", "Next.js", "Node.js", "React Native", "PostgreSQL"],
    companyUrl: "https://www.afktechltd.com/",
    logo: "/experience/afk.webp",
  },
];
