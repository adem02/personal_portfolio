import epseProjectGenerationScreenshot from "../assets/projects/epse-screenshot-project-generation.png";
import epseAddRouteDemo from "../assets/projects/epse-add-route-demo.gif";
import vipClothesHeroWeb from "../assets/projects/vip-clothes-homage-hero-section-web.png";
import vipClothesCategorySectionMobile from "../assets/projects/vip-clothes-homage-category-top-section-mobile.png";
import vipClothesProductDetailsMobile from "../assets/projects/vip-clothes-product-details-mobile.png";
import vipClothesSearchMobile from "../assets/projects/vip-clothes-search-page-mobile.png";
import vipClothesImportProductsDemo from "../assets/projects/vip-clothes-import-products-demo.gif";
import vipClothesAdminLoginMobile from "../assets/projects/vip-clothes-admin-login-form-page-mobile.png";
import vipClothesAdminImportMobile from "../assets/projects/vip-clothes-admin-import-page-mobile.png";
import garbinApiCover from "../assets/projects/garbin-api-cover.svg";
import epseInterfaceTemplatesPage from "../assets/projects/epse-interface-screeshot-templates-page.png";
import epseInterfaceProjectDetailsPage from "../assets/projects/epse-interface-screeshot-project-details-page.png";
import epseInterfaceGenerateCommandPage from "../assets/projects/epse-interface-screeshot-cb-page-generate-cmd.png";
import epseInterfaceAddRouteCommandPage from "../assets/projects/epse-interface-screeshot-cb-page-add-route-cmd.png";
import epseInterfaceDocsPage from "../assets/projects/epse-interface-screeshot-doc-page.png";
import epseInterfaceAddRouteCommandDemo from "../assets/projects/epse-interface-construct-add-route-command-demo.gif";
import shortlinkLandingForm from "../assets/projects/url-shortner-app-langing-page-shorten-form.png";
import shortlinkLandingCards from "../assets/projects/url-shortner-app-landing-page-cards.png";
import shortlinkStatsTraffic from "../assets/projects/url-shortner-app-stats-page-traffic-overview.png";
import shortlinkStatsDevices from "../assets/projects/url-shortner-app-stats-page-devices.png";
import shortlinkApiDocs from "../assets/projects/url-shortner-api-docs.png";

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
    title: "URL Shortner",
    tagline: "Raccourcisseur d'URL full-stack avec analytics, cache Redis et suivi asynchrone des clics.",
    image: shortlinkLandingForm,
    description: `Application full-stack de raccourcissement d'URL pensée pour les développeurs.
Collez une URL longue, obtenez un lien court en quelques millisecondes, et suivez chaque clic
avec des analytics détaillées — pays, appareils, navigateurs et trafic dans le temps.
Conçue avec une architecture Redis-first pour des redirections en moins de 20ms et une file
asynchrone de clics pour ne jamais bloquer l'expérience utilisateur.`,
    technologies: [
      "TypeScript", "Node.js", "Express", "PostgreSQL", "Redis",
      "React", "Vite", "Tailwind CSS", "Recharts", "TypeORM",
      "Docker", "Railway", "Vercel", "Supabase", "Upstash"
    ],
    links: [
      {type: "demo", url: "https://url-shortner-app.vercel.app"},
      {type: "api docs", url: "https://url-shortner-api-production-d05d.up.railway.app/api/docs"},
      {type: "github frontend", url: "https://github.com/adem02/url-shortner-app"},
      {type: "github backend", url: "https://github.com/adem02/url-shortner-api"}
    ],
    gallery: [
      {src: shortlinkLandingForm, alt: "URL Shortner — page d'accueil, formulaire de raccourcissement"},
      {src: shortlinkLandingCards, alt: "URL Shortner — page d'accueil, cartes de fonctionnalités"},
      {src: shortlinkStatsTraffic, alt: "URL Shortner — analytics, vue d'ensemble du trafic"},
      {src: shortlinkStatsDevices, alt: "URL Shortner — analytics, répartition par appareils"},
      {src: shortlinkApiDocs, alt: "URL Shortner — documentation de l'API"}
    ],
    level: "flagship"
  },
  {
    title: "EPSE CLI",
    tagline: "CLI de génération de projets Express/TypeScript, orienté productivité et bonnes pratiques.",
    image: epseProjectGenerationScreenshot,
    description: "Outil CLI en Go conçu pour accélérer le démarrage de projets backend Node.js/Express/TypeScript. Il génère une structure en Lite ou Clean Architecture, et permet d'ajouter des routes, services, repositories, middlewares et un système d'auth JWT complet — chacun via une commande dédiée.",
    technologies: ["Go", "Cobra", "embed.FS", "Templates", "TypeScript"],
    links: [
      {type: "github", url: "https://github.com/adem02/epse"},
      {type: "docs", url: "https://github.com/adem02/epse#readme"}
    ],
    gallery: [
      {src: epseAddRouteDemo, alt: "EPSE CLI add route gif demo"},
      {src: epseProjectGenerationScreenshot, alt: "EPSE CLI project generation screenshot"}
    ],
    level: "flagship"
  },
  {
    title: "VIP Clothes",
    tagline: "Application vitrine mode, catalogue et gestion de stock.",
    image: vipClothesHeroWeb,
    description: "Une application de présentation de catalogue vêtements pensée pour un contexte où la connexion est limitée et les appareils variés. L'enjeu était de proposer une expérience fluide et rapide indépendamment des conditions d'utilisation, avec une interface d'administration réservée à la gestion du catalogue.",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Zustand", "Firebase", "Cloudinary", "Algolia", "Vercel"],
    links: [
      {type: "demo staging", url: "https://vip-clothes-j2hm.vercel.app"}
    ],
    gallery: [
      {src: vipClothesImportProductsDemo, alt: "VIP Clothes import products gif demo"},
      {src: vipClothesHeroWeb, alt: "VIP Clothes hero section web screenshot"},
      {src: vipClothesCategorySectionMobile, alt: "VIP Clothes category section mobile screenshot"},
      {src: vipClothesProductDetailsMobile, alt: "VIP Clothes product details mobile screenshot"},
      {src: vipClothesSearchMobile, alt: "VIP Clothes search page mobile screenshot"},
      {src: vipClothesAdminLoginMobile, alt: "VIP Clothes admin login mobile screenshot"},
      {src: vipClothesAdminImportMobile, alt: "VIP Clothes admin import page mobile screenshot"}
    ],
    level: "flagship"
  },
  {
    title: "Garbin API",
    tagline: "API REST conçue dans le cadre de la soutenance de master.",
    image: garbinApiCover,
    description: "Projet académique où j'ai pris en charge la conception et le développement de l'API. Le dépôt reprend le code source depuis le repo d'origine pour mettre en avant les choix d'architecture et les bonnes pratiques appliquées.",
    technologies: [
      "Node.js", "Express", "TSOA", "TypeORM", "MariaDB"
    ],
    links: [{type: "github", url: "https://github.com/adem02/mt5-garbin-backend"}],
    gallery: [{src: garbinApiCover, alt: "Garbin API placeholder"}],
    level: "complete"
  },
  {
    title: "EPSE Interface",
    tagline: "Interface web pour construire et configurer ses commandes EPSE, prêtes à coller dans le terminal.",
    image: epseInterfaceTemplatesPage,
    description: "Un complément visuel à la CLI EPSE pour choisir sa stack, parcourir les templates et construire ses commandes via l'interface — il n'y a plus qu'à les exécuter dans le terminal.",
    technologies: ["Vite/React", "TypeScript", "Tailwind CSS", "Firebase"],
    links: [
      {type: "github", url: "https://github.com/adem02/epse-interface"},
      {type: "demo", url: "https://epse-50c1c.web.app"}
    ],
    gallery: [
      {src: epseInterfaceAddRouteCommandDemo, alt: "EPSE Interface add route gif demo"},
      {src: epseInterfaceTemplatesPage, alt: "EPSE Interface templates page screenshot"},
      {src: epseInterfaceProjectDetailsPage, alt: "EPSE Interface project details page screenshot"},
      {src: epseInterfaceGenerateCommandPage, alt: "EPSE Interface generate command page screenshot"},
      {src: epseInterfaceAddRouteCommandPage, alt: "EPSE Interface add route command page screenshot"},
      {src: epseInterfaceDocsPage, alt: "EPSE Interface docs page screenshot"}
    ],
    level: "complete"
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
