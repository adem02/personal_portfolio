export interface IExperience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export interface IProject {
  title: string;
  image: string;
  description: string;
  link?: string;
  technologies: string[];
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
  icon: any;
  color: string;
  tooltip?: string;
}