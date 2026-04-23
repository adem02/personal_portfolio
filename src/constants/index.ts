import githubLink from "../assets/projects/githubLink.jpg";

import {FaNodeJs} from "react-icons/fa";
import {DiJava} from "react-icons/di";
import {SiTypescript} from "react-icons/si";
import {SiMongodb} from "react-icons/si";
import {BiLogoPostgresql} from "react-icons/bi";
import {FaSymfony} from "react-icons/fa";
import {RiReactjsLine} from "react-icons/ri";
import {SiNestjs} from "react-icons/si";
import {SiSpringboot} from "react-icons/si";
import {IoLogoFirebase} from "react-icons/io5";
import {SiRabbitmq} from "react-icons/si";
import {FaGitAlt} from "react-icons/fa";
import {FaGolang} from "react-icons/fa6";
import {RiTailwindCssFill} from "react-icons/ri";
import {SiMariadbfoundation} from "react-icons/si";

import {IContact, IExperience, IFormation, IProject, ITechIcon} from "./types";

export const HERO_CONTENT = `Je suis développeur avec près de 3 ans d'expérience dans le développement d'applications web et logicielles. 
Ce qui me passionne, c'est la liberté de transformer des idées en solutions concrètes. 
J'aime structurer mes projets de manière réfléchie et efficace, tout en cherchant constamment à m'améliorer et à innover. 
Pour moi, coder, c'est bien plus qu'écrire des lignes de code : c'est contribuer à façonner l'avenir et à avoir un impact sur le monde qui nous entoure.`;

export const ABOUT_TEXT = `Mon parcours académique a débuté par une licence en Mathématiques et Informatique, où j'ai acquis les bases essentielles de l'informatique, de l'algorithmique, de l'algèbre et des mathématiques appliquées.
Cette formation m'a permis de poser des fondations solides pour aborder des problématiques techniques avec rigueur.

Après la licence, j'ai poursuivi avec un bachelor en alternance, où j'ai allié apprentissage théorique et mise en pratique. 
Cette expérience m'a permis de découvrir concrètement le développement logiciel en travaillant avec diverses technologies, notamment en front-end, back-end, et bases de données.

Lors de mon master en alternance, j'ai participé à des projets plus complexes, nécessitant une organisation rigoureuse et une collaboration efficace en équipe. 
J'ai conçu et implémenté des pipelines CI/CD pour automatiser les processus de développement et de déploiement. J'ai également utilisé des outils tels que Jira et Trello pour la gestion de projets, et Scaleway pour des déploiements dans le cloud. Ces projets m'ont permis de travailler sur des solutions robustes et évolutives tout en consolidant mes compétences techniques.

Ces expériences combinées m'ont offert une progression significative, tant sur le plan technique qu'organisationnel, et m'ont familiarisé avec les outils et méthodologies essentiels au développement logiciel moderne.`;

export const EXPERIENCES: IExperience[] = [
  {
    year: "2020 - 2021",
    role: "Développeur Full-stack en alternance",
    company: "Humanity Diaspo",
    description: "Développement d'une application web et mobile avec l'accompagnement de Microsoft et Devoteam : choix de la stack technique, mise en place de l'environnement Agile. Migration d'une API de PHP natif vers Laravel, optimisation de la base de données et implémentation de fonctionnalités clés (paiement, géolocalisation, Facebook Live).",
    technologies: ["React.js", "Node.js", "MongoDB", "Material UI", "Laravel", "PHP", "Bubble.io", "Trello", "GitHub"]
  },
  {
    year: "2022 - 2024",
    role: "Développeur Backend en alternance",
    company: "IAD",
    description: "Contribution au développement d'une application métier pour les professionnels de l'immobilier, avec un focus sur la facturation et les fonctionnalités d'abonnement. Utilisation de PHP, Symfony, PostgreSQL, RabbitMQ, Git/GitHub et Jira pour le développement et la collaboration sur les projets.",
    technologies: ["PHP", "Symfony", "PostgreSQL", "RabbitMQ", "Git", "GitHub", "Jira"]
  },
];

export const PROJECTS: IProject[] = [
  {
    title: "Garbin API",
    image: githubLink,
    description: "Une API RESTful pour un projet permettant aux utilisateurs de gérer et planifier leurs tenues vestimentaires.",
    technologies: [
      "Node.js", "Express", "TSOA", "Mariadb",
      "Typeorm", "Firebase", "Cloudinary",
      "Design Patterns", "Clean Architecture"
    ],
    link: "https://github.com/adem02/mt5-garbin-backend"
  },
  {
    title: "Portfolio",
    image: githubLink,
    description: "Un site portfolio personnel qui me permettant de présenter mes compétences, projets et expériences.",
    technologies: ["React", "Typescript", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/adem02/personal_portfolio"
  },
  {
    title: "Epse",
    image: githubLink,
    description: "Un outil CLI développé en Go pour créer dynamiquement des structures de projet Express.",
    technologies: ["Go", "Cobra", "Viper", "CLI"],
  },
];

export const CONTACT: IContact = {
  address: "Reims, Paris. France",
  phoneNo: "+33 6 14 28 82 85",
  email: "demahmed02@gmail.com",
};

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
    icon: SiSpringboot,
    color: "text-green-500",
    tooltip: "Spring Boot"
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
];
