import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export interface INavLink {
  id: string;
  label: string;
  num: string;
}

export interface ISocialLink {
  Icon: IconType;
  link: string;
  label: string;
}

export interface IContactChannel {
  Icon: IconType;
  label: string;
  value: string;
  href?: string;
}

export interface IAboutStat {
  value: string;
  label: string;
}

export const NAV_LINKS: INavLink[] = [
  { id: "about", label: "À propos", num: "02" },
  { id: "experience", label: "Expérience", num: "03" },
  { id: "projects", label: "Projets", num: "04" },
  { id: "formation", label: "Formation", num: "05" },
  { id: "technologies", label: "Stack", num: "06" },
  { id: "contact", label: "Contact", num: "07" },
];

export const SOCIAL_LINKS: ISocialLink[] = [
  { Icon: FaLinkedin, link: "https://linkedin.com/in/ahmed-dem", label: "LinkedIn" },
  { Icon: FaGithub, link: "https://github.com/adem02", label: "GitHub" },
];

export const MARQUEE_TECHS: string[] = [
  "TypeScript",
  "Node.js",
  "NestJS",
  "React",
  "Next.js",
  "PostgreSQL",
  "Docker",
  "Go",
  "Tailwind",
];

export const ABOUT_STATS: IAboutStat[] = [
  { value: "3+", label: "ans d'XP" },
  { value: "10+", label: "projets" },
  { value: "10+", label: "stacks" },
];

