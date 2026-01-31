import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;

  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Next.js",
    description:
      "Wrote countless server-side rendered apps and static websites using the modern App Router.",
    icon: Icons.nextjs,
  },
  {
    name: "Node.js",
    description:
      "Built scalable backend services on local and VPS environments using event-driven architecture.",
    icon: Icons.nodejs,
  },
  {
    name: "React",
    description:
      "Started with React in 2022 and since then built numerous applications in this ecosystem.",
    icon: Icons.react,
  },

  {
    name: "express.js",
    description:
      "Built web applications and APIs quickly using this fast Node.js framework.",
    icon: Icons.express,
  },
  {
    name: "Typescript",
    description:
      "I use strong type checking in every project to catch errors early and improve code quality.",
    icon: Icons.typescript,
  },
  {
    name: "React Native",
    description:
      "Creating apps (Still learning) but successfully contributing to 2 large-scale projects.",
    icon: Icons.react,
  },
  {
    name: "PostgreSQL",
    description:
      "Most of my projects use this powerful and open-source relational database.",
    icon: Icons.postgresql,
  },
  {
    name: "Prisma",
    description:
      "My initial go-to ORM for database management and interactions is Prisma.",
    icon: Icons.prisma,
  },
  {
    name: "Redux & Zustand",
    description:
      "I comfortably manage state in React applications using these two libraries.",
    icon: Icons.redux,
  },
  {
    name: "HTML 5",
    description:
      "Initial starting point in my development journey to create websites.",
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "CSS stlyling the webpage made me more passionate in development and designs.",
    icon: Icons.css3,
  },
  {
    name: "Tailwind CSS",
    description:
      "My go-to design utility-first CSS framework to build responsive and cool websites.",
    icon: Icons.tailwindcss,
  },
  {
    name: "Javascript",
    description:
      "First programming language I learned that enhanced my understanding and analytical ability.",
    icon: Icons.javascript,
  },
  {
    name: "MongoDB",
    description:
      "I use MongoDB for flexible document-based data storage in my projects.",
    icon: Icons.mongodb,
  },
  {
    name: "Socket.io",
    description:
      "I enabled real-time bidirectional communication between machines using this library.",
    icon: Icons.socketio,
  },
  {
    name: "Supabase",
    description:
      "For implementing BaaS in projects my first target is always Supabase.",
    icon: Icons.supabase,
  },
  {
    name: "Git and GitHub",
    description: "I hosted more than hundred projects on GitHub. I push code almost daily.",
    icon: Icons.git,
  },
  {
    name: "Linux Server",
    description:
      "I have been using linux for more than two years and I am fully comfortable in linux servers.",
    icon: Icons.linux,
  },
];

export const skills = skillsUnsorted.slice();

export const featuredSkills = skills.slice(0, 6);
