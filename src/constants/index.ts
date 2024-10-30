import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import {FaNodeJs} from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import {SiMongodb} from "react-icons/si";
import {BiLogoPostgresql} from "react-icons/bi";
import { FaSymfony } from "react-icons/fa";
import {RiReactjsLine} from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiRabbitmq } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

// export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;
export const HERO_CONTENT = `I am a developer with nearly 3 years of experience in web and software application development. 
What drives me is the ability of programming to turn ideas into reality. Each line of code helps create solutions, tools, or systems that didn’t exist before.
I am particularly drawn to object-oriented programming, algorithms, and clean code. No matter the size of the project, I like to structure everything efficiently and thoughtfully, always striving to improve and innovate.
To me, code is a way to shape the future and transform the world around us. It’s this magic—bringing imagination to life through code—that pushes me to keep going further.
`;

export const ABOUT_TEXT = `
I am a curious and dedicated full stack developer with 3 years of experience gained through an apprenticeship. I work with front-end technologies like HTML/CSS, JavaScript, React, and Tailwind, and back-end tools such as PHP, JavaScript/TypeScript, Node.js/Express, and Java. I'm also experienced with databases like MySQL, PostgreSQL, MariaDB, and MongoDB, and familiar with tools like Git, Firebase, RabbitMQ, and CI/CD.\n
What drew me to development is the freedom to create, and that still drives me today. I thrive in collaborative environments and enjoy tackling complex problems while continuously learning new things.\n
Outside of coding, I stay active by running and playing football. I also love watching movies and getting lost in a good book, which helps me stay balanced and inspired.
`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

export const TECHICONS = [
  {
    icon: FaNodeJs,
    color: "text-green-500"
  },
  {
    icon: SiPhp,
    color: "text-blue-500"
  },
  {
    icon: DiJava,
    color: "text-red-500"
  },
  {
    icon: SiTypescript,
    color: "text-blue-500"
  },
  {
    icon: SiMysql,
    color: "text-blue-500"
  },
  {
    icon: SiMongodb,
    color: "text-green-500"
  },
  {
    icon: BiLogoPostgresql,
    color: "text-blue-500"
  },
  {
    icon: FaSymfony,
    color: "text-black-500"
  },
  {
    icon: RiReactjsLine,
    color: "text-blue-500"
  },
  {
    icon: SiNestjs,
    color: "text-red-500"
  },
  {
    icon: SiSpringboot,
    color: "text-green-500"
  },
  {
    icon: IoLogoFirebase,
    color: "text-yellow-500"
  },
  {
    icon: SiRabbitmq,
    color: "text-red-500"
  },
  {
    icon: FaGitAlt,
    color: "text-red-500"
  }
];