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
    id: "afk",
    position: "Software Developer",
    company: "AFK Tech Limited",
    location: "Remote, Bangladesh",
    startDate: new Date("2025-06-01"),
    endDate: "Present",
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
  {
    id: "gadgetcity",
    position: "Full Stack Developer",
    company: "Gadget City BD",
    location: "Hybrid, Bangladesh",
    startDate: new Date("2025-08-02"),
    endDate: "Present",
    description: [
      "Developed and Setup full stack Electronics Ecommerce platform from scratch along with my own UI/UX judgement.",
      "Improved SEO so perfect that within 2 days the website ranked on first page and even on top 3.",
      "Created fully functional admin panel for day to day ecommerce management and order processing activities.",
      "Development of mobile app using React Native is in progress.",
    ],
    achievements: [],
    skills: [
      "Next.js",
      "Node.js",
      "Typescript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "React Native",
      "Google Search Console",
      "Linux",
    ],
    companyUrl: "https://gadgetcitybd.com",
    logo: "/experience/gadgetcity.webp",
  },
];
