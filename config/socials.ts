import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@shihabhq",
    icon: Icons.gitHub,
    link: "https://github.com/shihabhq",
  },
  {
    name: "LinkedIn",
    username: "Shihab Haque",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/shihabhq",
  },
  {
    name: "Twitter",
    username: "@shihabhq",
    icon: Icons.twitter,
    link: "https://twitter.com/shihab_hq",
  },
  {
    name: "Gmail",
    username: "shihabhq@yahoo.com",
    icon: Icons.gmail,
    link: "mailto:shihabhq@yahoo.com",
  },
];
