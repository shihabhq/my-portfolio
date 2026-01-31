import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "gadget-city-bd",
    companyName: "Gadget City BD Electronics E-Commerce",
    websiteLink: "https://gadgetcitybd.com",
    type: "Professional",
    category: ["Full Stack", "Backend", "UI/UX"],
    shortDescription:
      "Production-ready Electronics E-Commerce platform with complete admin panel, authentication, checkout system, cart management and in development mobile app.",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "Linux",
      "Typescript",
      "Google Search Console",
      "React Native",
    ],
    startDate: new Date("2024-07-01"),
    endDate: new Date("2026-01-31"),
    companyLogoImg: "/projects/convot/main.webp",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Designed a responsive and visually appealing landing page for the e-commerce platform.",
        imgArr: ["/projects/convot/landing.webp"],
      },
      {
        title: "Key Pages",
        description: "Product page, cart, checkout and authentication page",
        imgArr: [
          "/projects/convot/individual.webp",
          "/projects/convot/cart.webp",
          "/projects/convot/checkout.webp",
          "/projects/convot/auth.webp",
        ],
      },
      {
        title: "Admin",
        description:
          "Complete admin panel for managing products, users, orders and payments.",
        imgArr: ["/projects/convot/individual.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This is an website for a business that only had an outlet in Dhaka, Bangladesh without any online presence. I created its entire e-commerce platform from scratch with Next.js for forntend, Node.js for backend with complete admin panel, Product Catalog, authentication system, checkout system and cart management system.",
        "I used my UI/UX sense to create a well-organized UI. Currently, I am also developing its mobile app using React Native to provide a proper shopping experience across web and mobile platforms.",
      ],
      bullets: [
        "Made the website enough SEO optimized to rank on first page of Google Search. In fact it almost always stays in top 3 results crossing established competitors.",
        "Can easily handle upto thousands of visitors per day and the business aims to reach 100 orders per day.",
        "Setup the Linux server on a VPS to host the entire application with proper security measures.",
      ],
    },
  },
  {
    id: "innoverse",
    companyName: "Innoverse BD - Largest Science Carnival of Bangladesh",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "The web presense of The largest Science Carnival of Bangladesh organized Jointly by ICT Ministry of Bangladesh and Whiteboard Initiatives.",
    websiteLink: "https://innoversebd.net",
    githubLink: "https://github.com/shihabhq/innoverse",
    techStack: [
      "Next.js",
      "Node.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Vercel",
    ],
    startDate: new Date("2025-09-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/portfolio/innoverse.webp",
    pagesInfoArr: [
      {
        title: "Frontend Design",
        description:
          "Clean and modern designed website that showcases the event details, competition details and key info in varous pages. It also handled registration, coupon system and payment system.",
        imgArr: [
          "/projects/portfolio/innoverse.webp",
          "/projects/portfolio/dynamic.webp",
          "/projects/portfolio/registration.webp",
          "/projects/portfolio/award.webp",
        ],
      },
      {
        title: "Full Stack Admin Panel",
        description:
          "Admin panel that managed and verified registrations, managed payment details and coupon system and hold the information of registered startups and projects.",
        imgArr: ["/projects/portfolio/admin.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This is the web presense of the largest science carnival in Bangladesh jointly organized by Whiteboard Initiatives and the Ministry of ICT, Bangladesh Government.",
        "I was the key developer who prepared the entire frontend system and admin panel that forecasted the event details, managed registrations and payment details. I also prepared an unprecedented auction system for math contest using Node.js websockets.",
        "This website was the key part of being the event to be a success.",
      ],
      bullets: [
        "Built the whole online web presence of an event that accommodated 20000+ members.",
        "Developed a registration system for startups, students, and STEM-based projects.",
        "Prepared a full-stack admin panel that managed 2500+ registrations, 200+ team registrations, and 60+ startup registrations.",
        "Implemented a real-time auction system for math contest using Node.js and websockets.",
      ],
    },
  },
  {
    id: "generals-gambit",
    companyName: "General's Gambit - Realtime Futsal Auction App",
    type: "Professional",
    category: ["Web Dev", "Frontend", "Backend"],
    shortDescription:
      "A futsal tournament player auction app where users can bit in real-time to acquire players for their teams.",
    websiteLink: "https://youtu.be/0C4B22pQAiA?si=XBYcXkt8xvYzZNlA",
    techStack: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "WebSockets",
    ],
    startDate: new Date("2022-03-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/gambit/futsal.webp",
    pagesInfoArr: [
      {
        title: "Key Pages in Frontend",
        description:
          "The web app consists of several key pages including male auction, female auction, team list, players list and add player page.",
        imgArr: [
          "/projects/gambit/noor.webp",
          "/projects/gambit/hero.webp",
          "/projects/gambit/add.webp",
          "/projects/gambit/teams.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This was one of my first public projects where I developed a real time auction system using WebSockets in Node.js backend and Next.js in frontend. The app was built for a univeristy futsal tournament where team captains could bid for players for their teams.",
        "The app successfully handleld 100+ auctions with 11 team leaders bidding in real-time.",
      ],
      bullets: [
        "Created image upload system for automatically add players",
        "Enabled real-time auctions that were placed through Socket.io.",
        "Prepared statistics pages of team details and player details",
      ],
    },
  },
  {
    id: "bupcareerclub",
    companyName: "BUP Career Club Website",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX", "Backend"],
    shortDescription:
      "Developed the official website for BUP Career Club. The website that includes club details,members and alumni pages, managed event registrations and has a dedicated job portal.",
    websiteLink: "https://bupcareerclub.com/",
    techStack: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
    ],
    startDate: new Date("2022-03-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/card/hero.webp",
    pagesInfoArr: [
      {
        title: "Key Pages in Frontend",
        description:
          "Website consists of several key pages including club events, landing page, members, alumni, about and dedicated job portal.",
        imgArr: [
          "/projects/card/hero.webp",
          "/projects/card/about.webp",
          "/projects/card/alumni.webp",
          "/projects/card/jobs.webp",
          "/projects/card/affiliation.webp",
          "/projects/card/events.webp",
        ],
      },
      {
        title: "Admin Panel",
        description:
          "A dedicated admin panel to manage members, event registrations and job postings.",
        imgArr: ["/projects/card/admin.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "BUP Career Club is a prominent student organization at Bangladesh University of Professionals (BUP) that focuses on career development and professional growth for students. But it lacked a proper web presence as the previous website was outdated and non-functional.",
        "I built the entire website and admin panel from scratch using the design idea from the designer team. The website is a full stack application built with Next.js, Typescript, Tailwind CSS for frontend and Supabase, Node.js with PostgreSQL for backend.",
      ],
      bullets: [
        "I built a job portal during a career placement event that hired almost 300+ students on campus.",
        "Developed a registration system for a club event that managed to register 200+ registrations. An admin panel systematically handled the regsitration process.",
        "Implemented filtering system in various pages like members, alumni and in admin pages as well for better user experience.",
      ],
    },
  },
  {
    id: "jabo-kothay",
    companyName: "Jabo Kothay Event Management App",
    type: "Professional",
    category: ["Mobile Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Developed key features of an event management app Jabo Kothay that aims to revolutionize the event management industry in Bangladesh.",
    techStack: ["React Native", "Typescript", "Tailwind CSS"],
    startDate: new Date("2025-10-01"),
    endDate: new Date("2026-01-31"),
    companyLogoImg: "/projects/jabo-kothay/initial.webp",
    pagesInfoArr: [
      {
        title: "Key Screens in Frontend",
        description:
          "Semeral Screens including event browsing, onboarding, authentication and profile management.",
        imgArr: [
          "/projects/jabo-kothay/initial.webp",
          "/projects/jabo-kothay/secondary.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The app targets a scattered event management industry in Bangladesh that lacks a proper seamless platform for event inclusion and management. The development is ongoing and yet to be launched in public.",
      ],
      bullets: [],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
