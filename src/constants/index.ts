import {FaNodeJs} from "react-icons/fa";
import {DiJava} from "react-icons/di";
import {SiTypescript} from "react-icons/si";
import {SiMongodb} from "react-icons/si";
import {BiLogoPostgresql} from "react-icons/bi";
import {FaSymfony} from "react-icons/fa";
import {RiReactjsLine} from "react-icons/ri";
import {SiNestjs, SiNextdotjs} from "react-icons/si";
import {IoLogoFirebase} from "react-icons/io5";

import {SiRabbitmq} from "react-icons/si";
import {FaGitAlt, FaDocker} from "react-icons/fa";
import {SiVercel, SiSupabase, SiGooglecloud} from "react-icons/si";
import {FaGolang} from "react-icons/fa6";
import {RiTailwindCssFill} from "react-icons/ri";
import {SiMariadbfoundation} from "react-icons/si";

import {FiMail, FiMapPin, FiPhone} from "react-icons/fi";
import type {IconType} from "react-icons";

import {IContact, IExperience, IFormation, ITechIcon} from "../types";

export const HERO_CONTENT = `Je suis développeur avec plus de 3 ans d'expérience dans le développement d'applications web et logicielles. 
Ce qui me passionne, c'est la liberté de transformer des idées en solutions concrètes. 
J'aime structurer mes projets de manière réfléchie et efficace, tout en cherchant constamment à m'améliorer et à innover. 
Pour moi, coder, c'est bien plus qu'écrire des lignes de code : c'est contribuer à façonner l'avenir et à avoir un impact sur le monde qui nous entoure.`;

export const ABOUT_TEXT = `Ce qui me fait avancer, c'est l'impact. Je préfère construire des produits qu'on utilise vraiment plutôt que des démonstrations techniques. Voir une fonctionnalité simplifier un quotidien, fluidifier un process, faire gagner du temps à une équipe : c'est là que je prends du plaisir.

Rigoureux par nature, pragmatique par expérience. J'aime les bonnes pratiques, l'architecture clean, le code testé et maintenable. Mais j'ai appris à doser: la solution la plus simple qui résout le problème vaut mieux que la plus élégante qui le contourne. Livrer compte autant que bien faire.

Au-delà du code, je suis curieux de tout ce qui touche à la tech, supporter de foot et amateur de cinéma. Les bonnes histoires, peu importe le médium.`;

export const EXPERIENCES: IExperience[] = [
  {
    year: "Janvier 2021 - Octobre 2021",
    role: "Développeur Full-stack en alternance",
    company: "Humanity Diaspo",
    description: "Développement d'une application web et mobile avec l'accompagnement de Microsoft et Devoteam : choix de la stack technique, mise en place de l'environnement Agile. Migration d'une API de PHP natif vers Laravel, optimisation de la base de données et implémentation de fonctionnalités clés (paiement, géolocalisation, Facebook Live).",
    technologies: ["React.js", "Node.js", "MongoDB", "Material UI", "Laravel", "PHP", "Bubble.io", "Trello", "GitHub"]
  },
  {
    year: "Septembre 2022 - Octobre 2024",
    role: "Développeur Backend en alternance",
    company: "IAD",
    description: "Contribution au développement d'une application métier pour les professionnels de l'immobilier, avec un focus sur la facturation et les fonctionnalités d'abonnement. Utilisation de PHP, Symfony, PostgreSQL, RabbitMQ, Git/GitHub et Jira pour le développement et la collaboration sur les projets.",
    technologies: ["PHP", "Symfony", "PostgreSQL", "RabbitMQ", "Git", "GitHub", "Jira"]
  },
  {
    year: "Juillet 2025 - Aujourd'hui",
    role: "Développeur Fullstack Freelance",
    company: "Freelance",
    description: "Maintenance de projets backend en NestJS et Express, conception d'architectures backend et d'APIs REST, optimisation des performances d'applications web et développement fullstack avec Angular, React et Next.js.",
    technologies: ["NestJS", "Express.js", "TypeScript", "Angular", "React", "Next.js", "Firebase", "Docker", "Postgres"]
  },
];

export const CONTACT: IContact = {
  address: "Reims, Paris. France",
  phoneNo: "+33 6 14 28 82 85",
  email: "demahmed02@gmail.com",
};

export interface IContactChannel {
  Icon: IconType;
  label: string;
  value: string;
  href?: string;
}

export const CONTACT_CHANNELS: IContactChannel[] = [
  {
    Icon: FiMail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    Icon: FiPhone,
    label: "Téléphone",
    value: CONTACT.phoneNo,
    href: `tel:${CONTACT.phoneNo.replace(/\s/g, "")}`,
  },
  {
    Icon: FiMapPin,
    label: "Localisation",
    value: CONTACT.address,
  },
];

export const FORMATIONS: IFormation[] = [
  {
    year: "2014 - 2018",
    school: "Université gustave Eiffel - Champs-sur-Marne",
    description: `Formation universitaire alliant mathématiques et informatique, avec une spécialisation en algorithmique, programmation et bases de données. 
    Elle m’a permis d’acquérir des bases solides en développement, résolution de problèmes et gestion des données.`,
    grade: "Licence - Mathématiques et Informatique"
  },
  {
    year: "2020 - 2021",
    school: "Etna - Paris",
    description: `Aprofondissement des systèmes d'information et de la gestion de projets technologiques, 
    avec un focus sur le développement, l’architecture SI et la coordination entre les différentes étapes des projets informatiques.`,
    grade: "Bachelor - Concepteur de projets SI"
  },
  {
    year: "2022 - 2024",
    school: "Hetic - Montreuil",
    description: `Formation spécialisée en leadership technologique et transformation digitale, avec un accent sur la gestion de projets, 
    l'architecture technique et la coordination des équipes dans des environnements innovants.`,
    grade: "Master - CTO & Tech lead"
  }
]

export const TECHICONS: ITechIcon[] = [
  {
    icon: FaNodeJs,
    color: "text-green-500",
    tooltip: "Node.js"
  },
  {
    icon: SiTypescript,
    color: "text-blue-500",
    tooltip: "Typescript"
  },
  {
    icon: DiJava,
    color: "text-red-500",
    tooltip: "Java"
  },
  {
    icon: FaGolang,
    color: "text-blue-500",
    tooltip: "Golang"
  },
  {
    icon: SiMariadbfoundation,
    color: "text-blue-600",
    tooltip: "MariaDB"
  },
  {
    icon: BiLogoPostgresql,
    color: "text-blue-500",
    tooltip: "PostgreSQL"
  },
  {
    icon: SiMongodb,
    color: "text-green-500",
    tooltip: "MongoDB"
  },
  {
    icon: RiReactjsLine,
    color: "text-blue-500",
    tooltip: "React.js"
  },
  {
    icon: SiNextdotjs,
    color: "text-neutral-100",
    tooltip: "Next.js"
  },
  {
    icon: RiTailwindCssFill,
    color: "text-blue-500",
    tooltip: "Tailwind CSS"
  },
  {
    icon: SiNestjs,
    color: "text-red-500",
    tooltip: "Nest.js"
  },
  {
    icon: FaSymfony,
    color: "text-black-500",
    tooltip: "Symfony"
  },
  {
    icon: IoLogoFirebase,
    color: "text-yellow-500",
    tooltip: "Firebase"
  },
  {
    icon: SiRabbitmq,
    color: "text-red-500",
    tooltip: "RabbitMQ"
  },
  {
    icon: FaGitAlt,
    color: "text-red-500",
    tooltip: "Git"
  },
  {
    icon: FaDocker,
    color: "text-sky-400",
    tooltip: "Docker"
  },
  {
    icon: SiVercel,
    color: "text-neutral-100",
    tooltip: "Vercel"
  },
  {
    icon: SiSupabase,
    color: "text-emerald-500",
    tooltip: "Supabase"
  },
  {
    icon: SiGooglecloud,
    color: "text-blue-400",
    tooltip: "Google Cloud"
  },
];

export * from "./portfolio.constants";
