import type {IconType} from "react-icons";

export interface IExperience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export interface IProject {
  title: string;
  tagline: string;
  image: string;
  description: string;
  technologies: string[];
  links: IProjectLink[];
  gallery: IProjectImage[];
  level: "flagship" | "complete";
}

export interface IProjectLink {
  type: string;
  url: string;
}

export interface IProjectImage {
  src: string;
  alt: string;
}

export interface IContact {
  address: string;
  phoneNo: string;
  email: string;
}

export interface IFormation {
  year: string;
  school: string;
  description: string;
  grade: string;
}

export interface ITechIcon {
  icon: IconType;
  color: string;
  tooltip?: string;
}