import { BsTools } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { PiShareNetworkDuotone } from "react-icons/pi";
import {
  apps,
  cloud,
  discovery,
  ecom,
  managed,
  network,
  pso,
  shopify,
  webDesign,
  wordpress,
} from "../assets";

export const navLinks = [
  {
    id: "1",
    title: "Acceuil",
    url: "/",
  },
  {
    id: "2",
    title: "A propos de nous",
    url: "/about",
  },
  {
    id: "3",
    title: "Services",
    url: "/services",
  },
  {
    id: "4",
    title: "Contact",
    url: "/contact",
  },
];

export const footerLinks = [
  {
    id: "1",
    title: "Nos Services",
    links: [
      {
        id: "1",
        name: "IT solution",
        url: "#",
      },
      {
        id: "2",
        name: "web development",
        url: "#",
      },
      {
        id: "3",
        name: "services réseautage",
        url: "#",
      },
      {
        id: "4",
        name: "SEO optimisation",
        url: "#",
      },
      {
        id: "5",
        name: "app optimisation",
        url: "#",
      },
    ],
  },
  {
    id: "2",
    title: "Liens Rapides",
    links: [
      {
        id: "1",
        name: "a propos",
        url: "#",
      },
      {
        id: "2",
        name: "étude de cas",
        url: "#",
      },
      {
        id: "3",
        name: "contact-nous",
        url: "#",
      },
      {
        id: "4",
        name: "politique de confidentialité",
        url: "#",
      },
      {
        id: "5",
        name: "termes et conditions",
        url: "#",
      },
    ],
  },
];

export const solutions = [
  {
    id: "1",
    icon: <BsTools className="icon" />,
    title: "It Solution",
    desc: "Libérez la puissance de la technologie avec nos solutions informatiques innovantes.",
  },
  {
    id: "2",
    icon: <FaLaptopCode className="icon" />,
    title: "Web Development",
    desc: "Améliorez votre présence en ligne avec des solutions expertes de développement Web.",
  },
  {
    id: "3",
    icon: <PiShareNetworkDuotone className="icon" />,
    title: "Networking Services",
    desc: "Connecter les entreprises et favoriser la croissance grâce à des services de mise en réseau fiables.",
  },
];

export const websiteSolution = [
  {
    id: "1",
    title: "développement e-commerce",
    desc: "La création d'une boutique en ligne est une étape cruciale pour développer votre activité dans l'univers numérique. Chez DevTechno, nous mettons à votre disposition notre expertise en développement d'e-commerce pour vous aider à construire une plateforme de vente en ligne performante et attrayante. .",
    img: ecom,
  },
  {
    id: "2",
    title: "développement WordPress",
    desc: "Le développement WordPress offre une solution polyvalente et puissante pour la création de sites Web dynamiques et fonctionnels. Chez DevTechno, nous sommes spécialisés dans le développement sur mesure sur la plateforme WordPress, permettant ainsi de répondre à tous vos besoins spécifiques. ",
    img: wordpress,
  },
  {
    id: "3",
    title: "Optimisée la vitesse des pages",
    desc: "L'optimisation de la vitesse de chargement de votre site web est essentielle pour offrir une expérience utilisateur optimale et maximiser votre présence en ligne. Chez Tech Soul, nous sommes des experts en optimisation de la vitesse de page, dédiés à accélérer les performances de votre site web. ",
    img: pso,
  },
  {
    id: "4",
    title: "Web Design",
    desc: "Le web design est bien plus qu'une simple esthétique, c'est l'art de créer des expériences visuelles captivantes et intuitives pour les utilisateurs en ligne. Chez Tech Soul, nous sommes des experts en conception web dévoués à donner vie à votre vision. Nous comprenons l'importance de l'harmonie entre la beauté visuelle et la convivialité fonctionnelle.",
    img: webDesign,
  },
  {
    id: "5",
    title: "Surveillance du réseau",
    desc: "La surveillance de réseau est un élément clé pour maintenir la performance, la sécurité et la fiabilité de votre infrastructure informatique. Chez Tech Soul, nous offrons des services de surveillance de réseau avancés pour garantir un fonctionnement fluide de votre environnement informatique.",
    img: network,
  },
  {
    id: "6",
    title: "développement shopify",
    desc: "Le développement sur Shopify ouvre les portes d'une boutique en ligne professionnelle et réussie. Chez Tech Soul, nous sommes des experts en développement sur la plateforme Shopify, dédiés à vous aider à concrétiser votre vision commerciale en ligne. Nous créons des boutiques en ligne attrayantes, conviviales et hautement fonctionnelles qui maximisent votre potentiel de vente.",
    img: shopify,
  },
];

export const techsoul = [
  {
    id: "7",
    title: "Découverte & Stratégie",
    desc: "La découverte et la stratégie sont les fondements essentiels de tout projet réussi. Chez Tech Soul, nous accordons une grande importance à cette phase cruciale. Notre approche de découverte et de stratégie consiste à comprendre en profondeur votre entreprise, vos objectifs, vos valeurs et votre marché cible.",
    img: discovery,
  },
  {
    id: "8",
    title: "iOS apps (Swift)",
    desc: "Le développement d'applications iOS en utilisant le langage Swift est une solution puissante pour créer des expériences mobiles exceptionnelles. Chez Tech Soul, nous sommes des experts en développement d'applications iOS avec Swift, dévoués à transformer vos idées en réalité sur l'écosystème Apple.",
    img: apps,
  },
  {
    id: "9",
    title: "Service informatique géré",
    desc: "Les services gérés en informatique offrent une solution complète pour répondre aux besoins de votre entreprise en matière de technologie. Chez Tech Soul, nous proposons des services gérés en informatique dédiés à la gestion proactive et à l'optimisation de votre infrastructure informatique.",
    img: managed,
  },
  {
    id: "10",
    title: "UX/UI Design",
    desc: "Le design UX/UI est au cœur de l'expérience utilisateur, créant des interfaces visuellement attrayantes et intuitives pour les utilisateurs. Chez Tech Soul, nous accordons une importance capitale à la conception UX/UI pour offrir des expériences en ligne exceptionnelles.",
    img: webDesign,
  },
  {
    id: "11",
    title: "Android apps (Java)",
    desc: "Le développement d'applications Android en utilisant le langage Java est une approche puissante pour créer des applications mobiles innovantes. Chez Tech Soul, nous sommes des experts en développement d'applications Android avec Java, dédiés à transformer vos idées en réalité sur la plateforme Android.",
    img: apps,
  },
  {
    id: "12",
    title: "Cloud Services",
    desc: "Les services cloud offrent une solution flexible et évolutive pour répondre aux besoins de votre entreprise en matière d'hébergement et de stockage de données. Chez Tech Soul, nous proposons des services cloud complets qui vous permettent de tirer pleinement parti des avantages de l'informatique en nuage. ",
    img: cloud,
  },
];
